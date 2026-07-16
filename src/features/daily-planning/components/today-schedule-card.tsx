import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function TodayScheduleCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Planning du jour</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Une seule source de verite pour la planification quotidienne,
          centralisee dans la feature planning.
        </p>
      </CardContent>
    </Card>
  );
}
