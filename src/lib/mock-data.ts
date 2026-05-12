export const moodData = [
  { day: "Mon", value: 6.8 },
  { day: "Tue", value: 7.5 },
  { day: "Wed", value: 6.2 },
  { day: "Thu", value: 8.1 },
  { day: "Fri", value: 7.8 },
  { day: "Sat", value: 8.4 },
  { day: "Sun", value: 7.2 },
]

export const moodAverage = 7.4

export const sessionsData = [
  { day: "Mon", minutes: 20 },
  { day: "Tue", minutes: 0 },
  { day: "Wed", minutes: 15 },
  { day: "Thu", minutes: 25 },
  { day: "Fri", minutes: 30 },
  { day: "Sat", minutes: 22 },
  { day: "Sun", minutes: 30 },
]

export const weeklySessionMinutes = 142

export const breathCoherence = 78
export const breathBpm = 48

export const focusMinutes = 23
export const focusTarget = 60

export const sleepHours = 7.4
export const sleepQuality = "Restorative"

export const sleepWaveData = [
  { t: 0, depth: 75 },
  { t: 1, depth: 40 },
  { t: 2, depth: 12 },
  { t: 3, depth: 60 },
  { t: 4, depth: 8 },
  { t: 5, depth: 50 },
  { t: 6, depth: 25 },
  { t: 7, depth: 65 },
  { t: 8, depth: 88 },
]

export type StateKey = "calm" | "focus" | "energy" | "rest" | "clarity" | "stress"

export const stateHistory: Array<{ day: string; state: StateKey }> = [
  { day: "Mon", state: "focus" },
  { day: "Tue", state: "calm" },
  { day: "Wed", state: "stress" },
  { day: "Thu", state: "focus" },
  { day: "Fri", state: "energy" },
  { day: "Sat", state: "calm" },
  { day: "Sun", state: "calm" },
]

export const todayState = "Centered"

export const histogramData = [
  { label: "Centered", percentage: 59 },
  { label: "Focused", percentage: 48 },
  { label: "Calm", percentage: 37 },
]

export const stateColors: Record<StateKey, string> = {
  calm: "#4A6B5D",
  focus: "#E8763A",
  energy: "#B89968",
  rest: "#7A6E92",
  clarity: "#1A1814",
  stress: "#A8443A",
}
