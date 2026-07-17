import type { PlanningBlock } from "@/features/daily-planning/types/planning-block";

import { PlanningBlockItem } from "./planning-block-item";

export function PlanningBoard({ blocks }: { blocks: PlanningBlock[] }) {
  return (
    <div className="space-y-4">
      {blocks.map((block) => (
        <PlanningBlockItem key={block.id} block={block} />
      ))}
    </div>
  );
}
