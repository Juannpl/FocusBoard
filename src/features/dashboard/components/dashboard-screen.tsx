import { TodayPrioritiesCard } from "@/features/tasks/components/today-priorities-card";

export function DashboardScreen() {
  return (
    <div className="grid gap-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">FocusBoard</h1>
        <p className="text-muted-foreground">Ton centre de controle personnel.</p>
      </div>

      <TodayPrioritiesCard />
    </div>
  );
}
