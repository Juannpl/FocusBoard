import { FocusSessionTipsCard } from "@/features/focus-sessions/components/focus-session-tips-card";
import { FocusTimerCard } from "@/features/focus-sessions/components/focus-timer-card";

export function FocusSessionsScreen() {
  return (
    <div className="grid gap-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Session focus</h1>
        <p className="text-muted-foreground">
          Premier minuteur local pour cadrer les sessions de concentration.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)]">
        <FocusTimerCard />
        <FocusSessionTipsCard />
      </div>
    </div>
  );
}
