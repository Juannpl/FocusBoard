import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

export function DashboardScreen() {
  const priorities = [
    "Tache principale",
    "Tache secondaire",
    "Aller a la salle",
  ];

  return (
    <div className="grid gap-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">FocusBoard</h1>
        <p className="text-muted-foreground">Ton centre de controle personnel.</p>
      </div>

      <Card className="max-w-3xl">
        <CardHeader>
          <CardTitle>Bonjour Juan-Pablo</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div>
              <h2 className="text-lg font-medium">Priorites du jour</h2>
              <p className="text-sm text-muted-foreground">
                Premier sprint local avec donnees fictives.
              </p>
            </div>

            <div className="space-y-3">
              {priorities.map((task) => (
                <label key={task} className="flex items-center gap-3">
                  <Checkbox aria-label={task} />
                  <span>{task}</span>
                </label>
              ))}
            </div>
          </div>

          <Button className="w-full sm:w-auto">Demarrer une session</Button>
        </CardContent>
      </Card>
    </div>
  );
}
