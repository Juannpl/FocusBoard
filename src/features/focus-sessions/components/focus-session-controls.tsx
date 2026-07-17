"use client";

import { PauseIcon, PlayIcon, RotateCcwIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export function FocusSessionControls({
  isRunning,
  onPause,
  onReset,
  onStart,
}: {
  isRunning: boolean;
  onPause: () => void;
  onReset: () => void;
  onStart: () => void;
}) {
  return (
    <div className="flex flex-wrap gap-3">
      {isRunning ? (
        <Button onClick={onPause}>
          <PauseIcon />
          Pause
        </Button>
      ) : (
        <Button onClick={onStart}>
          <PlayIcon />
          Lancer
        </Button>
      )}

      <Button variant="outline" onClick={onReset}>
        <RotateCcwIcon />
        Reinitialiser
      </Button>
    </div>
  );
}
