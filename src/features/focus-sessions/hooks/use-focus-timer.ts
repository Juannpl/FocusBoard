"use client";

import { useEffect, useState } from "react";

import type { FocusPreset } from "@/features/focus-sessions/types/focus-session";
import { readLocalStorage, writeLocalStorage } from "@/lib/local-storage";

const FOCUS_TIMER_STORAGE_KEY = "focusboard:focus-timer";

type UseFocusTimerResult = {
  preset: FocusPreset;
  remainingSeconds: number;
  isRunning: boolean;
  completedSessions: number;
  start: () => void;
  pause: () => void;
  reset: () => void;
  setPreset: (nextPreset: FocusPreset) => void;
};

type FocusTimerState = {
  preset: FocusPreset;
  remainingSeconds: number;
  isRunning: boolean;
  completedSessions: number;
};

export function useFocusTimer(initialPreset: FocusPreset = 25): UseFocusTimerResult {
  const [timerState, setTimerState] = useState<FocusTimerState>(() =>
    readLocalStorage(
      FOCUS_TIMER_STORAGE_KEY,
      {
        preset: initialPreset,
        remainingSeconds: initialPreset * 60,
        completedSessions: 0,
        isRunning: false,
      },
      parseStoredFocusTimer
    )
  );

  const { preset, remainingSeconds, isRunning, completedSessions } = timerState;

  useEffect(() => {
    if (!isRunning) {
      return;
    }

    const interval = window.setInterval(() => {
      setTimerState((currentState) => {
        if (currentState.remainingSeconds <= 1) {
          window.clearInterval(interval);
          return {
            ...currentState,
            remainingSeconds: 0,
            isRunning: false,
            completedSessions: currentState.completedSessions + 1,
          };
        }

        return {
          ...currentState,
          remainingSeconds: currentState.remainingSeconds - 1,
        };
      });
    }, 1000);

    return () => window.clearInterval(interval);
  }, [isRunning]);

  useEffect(() => {
    writeLocalStorage(FOCUS_TIMER_STORAGE_KEY, {
      preset,
      remainingSeconds,
      completedSessions,
      isRunning: false,
    });
  }, [completedSessions, preset, remainingSeconds]);

  function start() {
    setTimerState((currentState) => ({
      ...currentState,
      isRunning: true,
    }));
  }

  function pause() {
    setTimerState((currentState) => ({
      ...currentState,
      isRunning: false,
    }));
  }

  function reset() {
    setTimerState((currentState) => ({
      ...currentState,
      isRunning: false,
      remainingSeconds: currentState.preset * 60,
    }));
  }

  function setPreset(nextPreset: FocusPreset) {
    setTimerState((currentState) => ({
      ...currentState,
      preset: nextPreset,
      isRunning: false,
      remainingSeconds: nextPreset * 60,
    }));
  }

  return {
    preset,
    remainingSeconds,
    isRunning,
    completedSessions,
    start,
    pause,
    reset,
    setPreset,
  };
}

function parseStoredFocusTimer(value: unknown) {
  if (
    typeof value !== "object" ||
    value === null ||
    !("preset" in value) ||
    !("remainingSeconds" in value) ||
    !("completedSessions" in value)
  ) {
    return null;
  }

  const { preset, remainingSeconds, completedSessions } = value;

  if (
    (preset !== 25 && preset !== 45 && preset !== 60) ||
    typeof remainingSeconds !== "number" ||
    typeof completedSessions !== "number"
  ) {
    return null;
  }

  return {
    preset: preset as FocusPreset,
    remainingSeconds,
    completedSessions,
    isRunning: false,
  };
}
