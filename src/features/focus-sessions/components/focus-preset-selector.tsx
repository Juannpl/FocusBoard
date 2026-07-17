"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { FocusPreset } from "@/features/focus-sessions/types/focus-session";

const presets: FocusPreset[] = [25, 45, 60];

export function FocusPresetSelector({
  currentPreset,
  onSelect,
}: {
  currentPreset: FocusPreset;
  onSelect: (preset: FocusPreset) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {presets.map((preset) => (
        <Button
          key={preset}
          variant={preset === currentPreset ? "default" : "outline"}
          className={cn("min-w-16")}
          onClick={() => onSelect(preset)}
        >
          {preset} min
        </Button>
      ))}
    </div>
  );
}
