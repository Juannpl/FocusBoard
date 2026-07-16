import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function DashboardArchitectureNote() {
  return (
    <Card className="border-dashed">
      <CardHeader>
        <CardTitle>Regle de rangement</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 text-sm text-muted-foreground">
        <p>
          Si un composant parle de taches, de sessions de focus ou de
          planning, il vit dans la feature concernee.
        </p>
        <p>
          Seuls les composants generiques et le shell d&apos;application
          restent hors des features.
        </p>
      </CardContent>
    </Card>
  );
}
