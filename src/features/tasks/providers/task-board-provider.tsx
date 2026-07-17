"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { dailyTasks as initialTasks } from "@/features/tasks/data/daily-tasks";
import type { DailyTask } from "@/features/tasks/types/task";

type TaskBoardContextValue = {
  tasks: DailyTask[];
  completedCount: number;
  completionPercent: number;
  priorityTasks: DailyTask[];
  secondaryTasks: DailyTask[];
  toggleTask: (taskId: string) => void;
  resetTasks: () => void;
  clearCompleted: () => void;
};

const TaskBoardContext = createContext<TaskBoardContextValue | null>(null);

export function TaskBoardProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useState(initialTasks);

  const value = useMemo(() => {
    const completedCount = tasks.filter((task) => task.done).length;
    const priorityTasks = tasks.filter((task) => task.category === "priority");
    const secondaryTasks = tasks.filter(
      (task) => task.category === "secondary"
    );
    const completionPercent = Math.round((completedCount / tasks.length) * 100);

    return {
      tasks,
      completedCount,
      completionPercent,
      priorityTasks,
      secondaryTasks,
      toggleTask(taskId: string) {
        setTasks((currentTasks) =>
          currentTasks.map((task) =>
            task.id === taskId ? { ...task, done: !task.done } : task
          )
        );
      },
      resetTasks() {
        setTasks(initialTasks);
      },
      clearCompleted() {
        setTasks((currentTasks) =>
          currentTasks.map((task) =>
            task.done ? { ...task, done: false } : task
          )
        );
      },
    };
  }, [tasks]);

  return (
    <TaskBoardContext.Provider value={value}>
      {children}
    </TaskBoardContext.Provider>
  );
}

export function useTaskBoard() {
  const context = useContext(TaskBoardContext);

  if (!context) {
    throw new Error("useTaskBoard must be used within a TaskBoardProvider");
  }

  return context;
}
