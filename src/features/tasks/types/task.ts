export type TaskPriority = "high" | "medium" | "low";

export type DailyTask = {
  id: string;
  title: string;
  priority: TaskPriority;
  done: boolean;
  category: "priority" | "secondary";
};
