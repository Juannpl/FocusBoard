import Link from "next/link";
import type { ReactNode } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { isSupabaseConfigured } from "@/lib/supabase/env";

type AuthFormShellProps = {
  alternateHref: string;
  alternateLabel: string;
  alternateText: string;
  description: string;
  error?: string;
  message?: string;
  title: string;
  children: ReactNode;
};

export function AuthFormShell({
  alternateHref,
  alternateLabel,
  alternateText,
  description,
  error,
  message,
  title,
  children,
}: AuthFormShellProps) {
  const configured = isSupabaseConfigured();

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-md items-center px-6 py-10">
      <Card className="w-full">
        <CardHeader className="space-y-3">
          <CardTitle className="text-2xl">{title}</CardTitle>
          <p className="text-sm text-muted-foreground">{description}</p>
          {error || message ? (
            <div
              className={
                error
                  ? "rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive"
                  : "rounded-lg border border-border/70 bg-muted px-4 py-3 text-sm text-muted-foreground"
              }
            >
              {error ?? message}
            </div>
          ) : null}
          {!configured ? (
            <div className="rounded-lg border border-border/70 bg-muted px-4 py-3 text-sm text-muted-foreground">
              Configure d&apos;abord `NEXT_PUBLIC_SUPABASE_URL` et
              `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` dans `.env.local`.
            </div>
          ) : null}
        </CardHeader>
        <CardContent className="space-y-6">
          {children}
          <p className="text-sm text-muted-foreground">
            {alternateText}{" "}
            <Link href={alternateHref} className="text-foreground underline">
              {alternateLabel}
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
