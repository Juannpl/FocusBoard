import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { todayPlan } from "@/features/daily-planning/data/today-plan";

import { PlanningBoard } from "./planning-board";

export function TodayPlanCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Planning du jour</CardTitle>
      </CardHeader>
      <CardContent>
        <PlanningBoard blocks={todayPlan} />
      </CardContent>
    </Card>
  );
}
