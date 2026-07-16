import type { ReactNode } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

const navigation = [
  { href: "/dashboard", label: "Aujourd'hui" },
  { href: "/planning", label: "Planning" },
  { href: "/focus", label: "Focus" },
  { href: "/tasks", label: "Taches" },
];

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <aside className="fixed inset-y-0 left-0 hidden w-64 border-r border-border/60 bg-card lg:block">
        <div className="flex h-full flex-col p-6">
          <div className="mb-8">
            <Link
              href="/dashboard"
              className="text-xl font-semibold tracking-tight"
            >
              FocusBoard
            </Link>
          </div>
          <nav className="flex flex-col gap-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </aside>

      <div className="border-b border-border/60 px-6 py-4 lg:hidden">
        <Link href="/dashboard" className="text-lg font-semibold tracking-tight">
          FocusBoard
        </Link>
        <nav className="mt-4 flex flex-wrap gap-2">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md border border-border px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="lg:pl-64">
        <header className="flex h-16 items-center border-b border-border/60 px-6">
          <p className="text-sm text-muted-foreground">
            Construis ta journee, une session a la fois.
          </p>
        </header>

        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
