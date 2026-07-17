import type { DailyTask } from "@/features/tasks/types/task";

export const dailyTasks: DailyTask[] = [
  {
    id: "task-main",
    title: "Finaliser le shell applicatif",
    priority: "high",
    done: false,
    category: "priority",
  },
  {
    id: "task-secondary",
    title: "Structurer la feature tasks",
    priority: "medium",
    done: false,
    category: "priority",
  },
  {
    id: "task-gym",
    title: "Aller a la salle",
    priority: "medium",
    done: false,
    category: "priority",
  },
  {
    id: "task-refine",
    title: "Ajuster le responsive mobile",
    priority: "low",
    done: true,
    category: "secondary",
  },
  {
    id: "task-copy",
    title: "Nettoyer les libelles de navigation",
    priority: "low",
    done: false,
    category: "secondary",
  },
];

export function getPriorityTasks() {
  return dailyTasks.filter((task) => task.category === "priority");
}

export function getSecondaryTasks() {
  return dailyTasks.filter((task) => task.category === "secondary");
}

export function getCompletedTaskCount() {
  return dailyTasks.filter((task) => task.done).length;
}

export function getTaskCompletionPercent() {
  return Math.round((getCompletedTaskCount() / dailyTasks.length) * 100);
}
