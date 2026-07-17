import type { ReactNode } from "react";

import { AppShell } from "@/components/layout/app-shell";
import { TaskBoardProvider } from "@/features/tasks/providers/task-board-provider";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <TaskBoardProvider>
      <AppShell>{children}</AppShell>
    </TaskBoardProvider>
  );
}
