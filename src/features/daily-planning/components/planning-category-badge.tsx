import { Badge } from "@/components/ui/badge";

import type { PlanningBlock } from "@/features/daily-planning/types/planning-block";

const labels: Record<PlanningBlock["category"], string> = {
  planning: "Planning",
  focus: "Focus",
  admin: "Admin",
  personal: "Perso",
};

const variants: Record<
  PlanningBlock["category"],
  "default" | "secondary" | "outline"
> = {
  planning: "secondary",
  focus: "default",
  admin: "outline",
  personal: "secondary",
};

export function PlanningCategoryBadge({
  category,
}: {
  category: PlanningBlock["category"];
}) {
  return <Badge variant={variants[category]}>{labels[category]}</Badge>;
}
