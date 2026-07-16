import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function WeeklyFocusCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Focus hebdomadaire</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Ce bloc vient de <code>src/features/focus-sessions</code> car il
          parle du rythme de concentration, pas du dashboard lui-meme.
        </p>
      </CardContent>
    </Card>
  );
}
