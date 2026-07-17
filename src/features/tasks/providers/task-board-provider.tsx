"use client";

import {
  createContext,
  useEffect,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { dailyTasks as initialTasks } from "@/features/tasks/data/daily-tasks";
import type { DailyTask } from "@/features/tasks/types/task";
import { readLocalStorage, writeLocalStorage } from "@/lib/local-storage";

const TASKS_STORAGE_KEY = "focusboard:daily-tasks";

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
  const [tasks, setTasks] = useState(() =>
    readLocalStorage(
      TASKS_STORAGE_KEY,
      initialTasks,
      parseStoredTasks
    )
  );

  useEffect(() => {
    writeLocalStorage(TASKS_STORAGE_KEY, tasks);
  }, [tasks]);

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

function parseStoredTasks(value: unknown) {
  if (!Array.isArray(value)) {
    return null;
  }

  const storedDoneById = new Map<string, boolean>();

  for (const item of value) {
    if (
      typeof item !== "object" ||
      item === null ||
      !("id" in item) ||
      !("done" in item) ||
      typeof item.id !== "string" ||
      typeof item.done !== "boolean"
    ) {
      return null;
    }

    storedDoneById.set(item.id, item.done);
  }

  return initialTasks.map((task) => ({
    ...task,
    done: storedDoneById.get(task.id) ?? task.done,
  }));
}
