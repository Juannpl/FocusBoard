import { startTransition } from "react";

import { Checkbox } from "@/components/ui/checkbox";

import type { DailyTask } from "@/features/tasks/types/task";

import { TaskPriorityBadge } from "./task-priority-badge";

export function TaskListItem({
  task,
  onToggle,
}: {
  task: DailyTask;
  onToggle?: (taskId: string) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-3">
      <label className="flex items-center gap-3">
        <Checkbox
          checked={task.done}
          aria-label={task.title}
          onCheckedChange={() => {
            if (!onToggle) {
              return;
            }

            startTransition(() => onToggle(task.id));
          }}
        />
        <span className={task.done ? "text-muted-foreground line-through" : ""}>
          {task.title}
        </span>
      </label>
      <TaskPriorityBadge priority={task.priority} />
    </div>
  );
}
