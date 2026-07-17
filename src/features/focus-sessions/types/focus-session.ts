export type FocusPreset = 25 | 45 | 60;

export type FocusSessionSummary = {
  label: string;
  duration: string;
  status: "Ready" | "Running" | "Paused";
};
