import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const tips = [
  "Choisis une seule tache avant de lancer le minuteur.",
  "Coupe les notifications pendant la session.",
  "Prends une pause courte a la fin du cycle.",
];

export function FocusSessionTipsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Rituel de session</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3 text-sm text-muted-foreground">
          {tips.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
