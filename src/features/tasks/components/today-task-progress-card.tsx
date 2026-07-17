import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress, ProgressLabel } from "@/components/ui/progress";

export function TodayTaskProgressCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Progression des taches</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Progress value={68}>
          <ProgressLabel>Execution hebdomadaire</ProgressLabel>
        </Progress>
        <p className="text-sm text-muted-foreground">68% completees</p>
        <p className="text-sm text-muted-foreground">
          Ce bloc reste dans la feature tasks car il decrit directement l&apos;etat
          des taches.
        </p>
      </CardContent>
    </Card>
  );
}
