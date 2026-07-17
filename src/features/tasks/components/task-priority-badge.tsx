import { Badge } from "@/components/ui/badge";

import type { DailyTask } from "@/features/tasks/types/task";

const labels: Record<DailyTask["priority"], string> = {
  high: "Haute",
  medium: "Moyenne",
  low: "Basse",
};

const variants: Record<DailyTask["priority"], "default" | "secondary" | "outline"> =
  {
    high: "default",
    medium: "secondary",
    low: "outline",
  };

export function TaskPriorityBadge({
  priority,
}: {
  priority: DailyTask["priority"];
}) {
  return <Badge variant={variants[priority]}>{labels[priority]}</Badge>;
}
