"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { useFocusTimer } from "@/features/focus-sessions/hooks/use-focus-timer";
import { formatDuration } from "@/features/focus-sessions/utils/format-duration";

import { FocusPresetSelector } from "./focus-preset-selector";
import { FocusSessionControls } from "./focus-session-controls";

export function FocusTimerCard() {
  const {
    preset,
    remainingSeconds,
    isRunning,
    completedSessions,
    start,
    pause,
    reset,
    setPreset,
  } = useFocusTimer();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Minuteur focus</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">Duree de session</p>
          <FocusPresetSelector currentPreset={preset} onSelect={setPreset} />
        </div>

        <div className="space-y-2">
          <p className="text-6xl font-semibold tracking-tight">
            {formatDuration(remainingSeconds)}
          </p>
          <p className="text-sm text-muted-foreground">
            {isRunning ? "Session en cours" : "Pret a demarrer"}
          </p>
          <p className="text-sm text-muted-foreground">
            L&apos;etat du minuteur est sauvegarde localement.
          </p>
        </div>

        <FocusSessionControls
          isRunning={isRunning}
          onPause={pause}
          onReset={reset}
          onStart={start}
        />

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-border/70 p-4">
            <p className="text-sm text-muted-foreground">Session choisie</p>
            <p className="text-2xl font-semibold">{preset} min</p>
          </div>
          <div className="rounded-lg border border-border/70 p-4">
            <p className="text-sm text-muted-foreground">Sessions terminees</p>
            <p className="text-2xl font-semibold">{completedSessions}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
