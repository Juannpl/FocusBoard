import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function PlanningOverviewCard({
  focusBlocks,
  totalHours,
  totalSlots,
}: {
  focusBlocks: number;
  totalHours: number;
  totalSlots: number;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Vue rapide</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4 sm:grid-cols-3">
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">Creneaux</p>
          <p className="text-3xl font-semibold">{totalSlots}</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">Heures planifiees</p>
          <p className="text-3xl font-semibold">{totalHours}h</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">Blocs focus</p>
          <p className="text-3xl font-semibold">{focusBlocks}</p>
        </div>
      </CardContent>
    </Card>
  );
}
