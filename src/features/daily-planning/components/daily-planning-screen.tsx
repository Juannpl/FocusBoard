import {
  getFocusBlocks,
  getTotalPlannedHours,
  todayPlan,
} from "@/features/daily-planning/data/today-plan";

import { PlanningOverviewCard } from "./planning-overview-card";
import { TodayPlanCard } from "./today-plan-card";

export function DailyPlanningScreen() {
  const focusBlocks = getFocusBlocks();
  const totalHours = getTotalPlannedHours();

  return (
    <div className="grid gap-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Planning</h1>
        <p className="text-muted-foreground">
          Premier board local pour organiser la journee par creneaux.
        </p>
      </div>

      <PlanningOverviewCard
        focusBlocks={focusBlocks.length}
        totalHours={totalHours}
        totalSlots={todayPlan.length}
      />

      <TodayPlanCard />
    </div>
  );
}
