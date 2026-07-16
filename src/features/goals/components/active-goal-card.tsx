import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ActiveGoalCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Objectif actif</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Les objectifs restent une feature distincte, meme si la route dediee
          n&apos;existe pas encore.
        </p>
      </CardContent>
    </Card>
  );
}
