"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress, ProgressLabel } from "@/components/ui/progress";
import { useTaskBoard } from "@/features/tasks/providers/task-board-provider";

import { DailyTaskList } from "./daily-task-list";

export function TasksScreen() {
  const {
    tasks,
    completedCount,
    completionPercent,
    priorityTasks,
    secondaryTasks,
    toggleTask,
    resetTasks,
    clearCompleted,
  } = useTaskBoard();
  const [showCompleted, setShowCompleted] = useState(true);

  const displayedPriorityTasks = showCompleted
    ? priorityTasks
    : priorityTasks.filter((task) => !task.done);
  const displayedSecondaryTasks = showCompleted
    ? secondaryTasks
    : secondaryTasks.filter((task) => !task.done);

  return (
    <div className="grid gap-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Taches</h1>
        <p className="text-muted-foreground">
          Premier module local pour les taches quotidiennes.
        </p>
        <p className="text-sm text-muted-foreground">
          Les interactions sont sauvegardees dans ce navigateur.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Total du jour</CardTitle>
          </CardHeader>
          <CardContent className="text-3xl font-semibold">
            {tasks.length}
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
            {completedCount}
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

      <div className="flex flex-wrap gap-3">
        <Button
          variant="outline"
          onClick={() => setShowCompleted((current) => !current)}
        >
          {showCompleted ? "Masquer les terminees" : "Afficher tout"}
        </Button>
        <Button variant="outline" onClick={clearCompleted}>
          Reouvrir les terminees
        </Button>
        <Button onClick={resetTasks}>Reinitialiser la journee</Button>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Top priorites</CardTitle>
          </CardHeader>
          <CardContent>
            <DailyTaskList
              tasks={displayedPriorityTasks}
              onToggle={toggleTask}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Taches secondaires</CardTitle>
          </CardHeader>
          <CardContent>
            <DailyTaskList
              tasks={displayedSecondaryTasks}
              onToggle={toggleTask}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
