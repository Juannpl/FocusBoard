import { Separator } from "@/components/ui/separator";

import type { DailyTask } from "@/features/tasks/types/task";

import { TaskListItem } from "./task-list-item";

export function DailyTaskList({ tasks }: { tasks: DailyTask[] }) {
  return (
    <div className="space-y-4">
      {tasks.map((task, index) => (
        <div key={task.id} className="space-y-4">
          <TaskListItem task={task} />
          {index < tasks.length - 1 ? <Separator /> : null}
        </div>
      ))}
    </div>
  );
}
