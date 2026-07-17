"use client";

import { useEffect, useState } from "react";

import type { FocusPreset } from "@/features/focus-sessions/types/focus-session";

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

export function useFocusTimer(initialPreset: FocusPreset = 25): UseFocusTimerResult {
  const [preset, setPresetState] = useState<FocusPreset>(initialPreset);
  const [remainingSeconds, setRemainingSeconds] = useState(initialPreset * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [completedSessions, setCompletedSessions] = useState(0);

  useEffect(() => {
    if (!isRunning) {
      return;
    }

    const interval = window.setInterval(() => {
      setRemainingSeconds((current) => {
        if (current <= 1) {
          window.clearInterval(interval);
          setIsRunning(false);
          setCompletedSessions((count) => count + 1);
          return 0;
        }

        return current - 1;
      });
    }, 1000);

    return () => window.clearInterval(interval);
  }, [isRunning]);

  function start() {
    setIsRunning(true);
  }

  function pause() {
    setIsRunning(false);
  }

  function reset() {
    setIsRunning(false);
    setRemainingSeconds(preset * 60);
  }

  function setPreset(nextPreset: FocusPreset) {
    setPresetState(nextPreset);
    setIsRunning(false);
    setRemainingSeconds(nextPreset * 60);
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
