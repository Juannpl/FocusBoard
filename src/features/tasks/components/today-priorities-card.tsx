import Link from "next/link";

import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import { getPriorityTasks } from "@/features/tasks/data/daily-tasks";

import { DailyTaskList } from "./daily-task-list";

export function TodayPrioritiesCard() {
  const priorityTasks = getPriorityTasks();

  return (
    <Card className="max-w-3xl">
      <CardHeader>
        <CardTitle>Bonjour Juan-Pablo</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-medium">Priorites du jour</h2>
            <p className="text-sm text-muted-foreground">
              Trois taches locales pour cadrer la journee.
            </p>
          </div>

          <DailyTaskList tasks={priorityTasks} />
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button className="w-full sm:w-auto">Demarrer une session</Button>
          <Link
            href="/tasks"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "w-full sm:w-auto"
            )}
          >
            Voir toutes les taches
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
