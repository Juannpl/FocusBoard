export type PlanningBlockCategory =
  | "planning"
  | "focus"
  | "admin"
  | "personal";

export type PlanningBlock = {
  id: string;
  start: string;
  end: string;
  title: string;
  category: PlanningBlockCategory;
  energy: "high" | "medium" | "low";
};
