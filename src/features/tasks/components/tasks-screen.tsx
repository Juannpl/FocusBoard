import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress, ProgressLabel } from "@/components/ui/progress";

import {
  dailyTasks,
  getCompletedTaskCount,
  getPriorityTasks,
  getSecondaryTasks,
  getTaskCompletionPercent,
} from "@/features/tasks/data/daily-tasks";

import { DailyTaskList } from "./daily-task-list";

export function TasksScreen() {
  const priorityTasks = getPriorityTasks();
  const secondaryTasks = getSecondaryTasks();
  const completedTasks = getCompletedTaskCount();
  const completionPercent = getTaskCompletionPercent();

  return (
    <div className="grid gap-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Taches</h1>
        <p className="text-muted-foreground">
          Premier module local pour les taches quotidiennes.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Total du jour</CardTitle>
          </CardHeader>
          <CardContent className="text-3xl font-semibold">
            {dailyTasks.length}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Priorites</CardTitle>
          </CardHeader>
          <CardContent className="text-3xl font-semibold">
            {priorityTasks.length}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Terminees</CardTitle>
          </CardHeader>
          <CardContent className="text-3xl font-semibold">
            {completedTasks}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Progression du jour</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Progress value={completionPercent}>
            <ProgressLabel>Execution quotidienne</ProgressLabel>
          </Progress>
          <p className="text-sm text-muted-foreground">{completionPercent}% completees</p>
        </CardContent>
      </Card>

      <div className="grid gap-6 xl:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Top priorites</CardTitle>
          </CardHeader>
          <CardContent>
            <DailyTaskList tasks={priorityTasks} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Taches secondaires</CardTitle>
          </CardHeader>
          <CardContent>
            <DailyTaskList tasks={secondaryTasks} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
