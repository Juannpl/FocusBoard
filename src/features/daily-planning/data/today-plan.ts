import type { PlanningBlock } from "@/features/daily-planning/types/planning-block";

export const todayPlan: PlanningBlock[] = [
  {
    id: "block-1",
    start: "08:30",
    end: "09:00",
    title: "Revue des priorites",
    category: "planning",
    energy: "medium",
  },
  {
    id: "block-2",
    start: "09:00",
    end: "10:30",
    title: "Session focus produit",
    category: "focus",
    energy: "high",
  },
  {
    id: "block-3",
    start: "11:00",
    end: "11:45",
    title: "Traitement administratif",
    category: "admin",
    energy: "low",
  },
  {
    id: "block-4",
    start: "14:00",
    end: "15:30",
    title: "Implementation daily tasks",
    category: "focus",
    energy: "high",
  },
  {
    id: "block-5",
    start: "18:30",
    end: "19:30",
    title: "Salle de sport",
    category: "personal",
    energy: "medium",
  },
];

export function getFocusBlocks() {
  return todayPlan.filter((block) => block.category === "focus");
}

export function getTotalPlannedHours() {
  const totalMinutes = todayPlan.reduce((sum, block) => {
    const [startHour, startMinute] = block.start.split(":").map(Number);
    const [endHour, endMinute] = block.end.split(":").map(Number);

    return (
      sum + (endHour * 60 + endMinute - (startHour * 60 + startMinute))
    );
  }, 0);

  return Math.round((totalMinutes / 60) * 10) / 10;
}
