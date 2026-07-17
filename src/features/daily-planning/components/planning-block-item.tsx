import { Card, CardContent } from "@/components/ui/card";

import type { PlanningBlock } from "@/features/daily-planning/types/planning-block";

import { PlanningCategoryBadge } from "./planning-category-badge";

export function PlanningBlockItem({ block }: { block: PlanningBlock }) {
  return (
    <Card>
      <CardContent className="flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p className="text-sm font-medium text-muted-foreground">
            {block.start} - {block.end}
          </p>
          <h3 className="text-base font-medium">{block.title}</h3>
        </div>

        <div className="flex items-center gap-3">
          <PlanningCategoryBadge category={block.category} />
          <span className="text-sm text-muted-foreground">
            Energie {block.energy}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
