import type { ReactNode } from "react";
import { redirect } from "next/navigation";

import { AppShell } from "@/components/layout/app-shell";
import { signOutAction } from "@/features/auth/actions/sign-out";
import { TaskBoardProvider } from "@/features/tasks/providers/task-board-provider";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export default async function AppLayout({ children }: { children: ReactNode }) {
  const supabase = await createSupabaseServerClient();
  let userEmail: string | null = null;

  if (supabase) {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      redirect("/login");
    }

    userEmail = user.email ?? null;
  }

  return (
    <TaskBoardProvider>
      <AppShell userEmail={userEmail} onSignOut={signOutAction}>
        {children}
      </AppShell>
    </TaskBoardProvider>
  );
}
