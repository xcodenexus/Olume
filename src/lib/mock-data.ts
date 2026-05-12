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

// ─── Sessions ────────────────────────────────────────────────────────────────

export type SessionCategory = "meditation" | "breathwork" | "sleep" | "focus"

export interface SessionItem {
  id: string
  title: string
  category: SessionCategory
  duration: number
  description: string
  isFavorite: boolean
  completedCount: number
}

export const sessionLibrary: SessionItem[] = [
  { id: "s1", title: "Morning Clarity",       category: "meditation", duration: 10, description: "Start your day grounded. A gentle body scan followed by open awareness practice.", isFavorite: true,  completedCount: 14 },
  { id: "s2", title: "4-7-8 Breath",          category: "breathwork", duration: 5,  description: "Ancient technique for rapid calm. Inhale 4, hold 7, exhale 8.", isFavorite: false, completedCount: 9  },
  { id: "s3", title: "Sleep Descent",          category: "sleep",      duration: 20, description: "Progressive relaxation from crown to toes. Designed to be the last thing you do.", isFavorite: true,  completedCount: 22 },
  { id: "s4", title: "Deep Focus Block",       category: "focus",      duration: 25, description: "Theta-state induction for sustained concentration. No music, no narration — pure signal.", isFavorite: false, completedCount: 7  },
  { id: "s5", title: "Box Breath",             category: "breathwork", duration: 8,  description: "Equal-ratio breathing used by Navy SEALs and surgeons. Four counts on every side.", isFavorite: true,  completedCount: 31 },
  { id: "s6", title: "Evening Wind-Down",      category: "meditation", duration: 15, description: "Release the residue of the day. Light visualization, soft noting practice.", isFavorite: false, completedCount: 18 },
  { id: "s7", title: "Nap Protocol",           category: "sleep",      duration: 20, description: "A precisely timed 20-minute rest that won't leave you groggy.", isFavorite: false, completedCount: 5  },
  { id: "s8", title: "Breath of Fire",         category: "breathwork", duration: 10, description: "Rapid diaphragmatic breathing to elevate alertness and clear mental fog.", isFavorite: false, completedCount: 3  },
  { id: "s9", title: "Open Awareness",         category: "meditation", duration: 20, description: "Sit with whatever arises. No agenda. The most advanced practice is the most simple.", isFavorite: true,  completedCount: 11 },
  { id: "s10", title: "Pre-Work Reset",        category: "focus",      duration: 5,  description: "A five-minute clearing ritual before deep work. Sets the context switch.", isFavorite: false, completedCount: 19 },
  { id: "s11", title: "Body Scan",             category: "meditation", duration: 12, description: "Systematic attention through the body. Builds interoceptive awareness over time.", isFavorite: false, completedCount: 8  },
  { id: "s12", title: "Coherence Breath",      category: "breathwork", duration: 10, description: "5.5-second inhale, 5.5-second exhale. The resonant frequency of the heart.", isFavorite: true,  completedCount: 26 },
]

export const categoryLabels: Record<SessionCategory | "all", string> = {
  all: "All",
  meditation: "Meditation",
  breathwork: "Breathwork",
  sleep: "Sleep",
  focus: "Focus",
}

// ─── Journal ─────────────────────────────────────────────────────────────────

export const journalPrompt = "What's one thing that's been taking up more mental space than it deserves?"

export interface JournalEntry {
  id: string
  date: string
  dateLabel: string
  preview: string
  mood: number
  wordCount: number
  tags: string[]
}

export const journalEntries: JournalEntry[] = [
  { id: "j1", date: "2026-05-12", dateLabel: "Today",     preview: "Woke up with that low-grade hum of unease I've been carrying all week. Sat with it during morning practice instead of trying to dissolve it...", mood: 7.2, wordCount: 312, tags: ["anxiety", "morning"] },
  { id: "j2", date: "2026-05-11", dateLabel: "Yesterday", preview: "The meeting went better than I feared. Most of what I was worried about was a story I'd been telling myself since Tuesday...", mood: 7.8, wordCount: 204, tags: ["work", "perspective"] },
  { id: "j3", date: "2026-05-10", dateLabel: "Sat",       preview: "Spent an hour in the garden. No phone. Realized I haven't done that in months. The quality of silence was different — full rather than empty...", mood: 8.4, wordCount: 178, tags: ["nature", "presence"] },
  { id: "j4", date: "2026-05-09", dateLabel: "Fri",       preview: "Rough day. Didn't meditate and felt it by 3pm. The correlation is undeniable at this point. Need to protect the morning slot more aggressively...", mood: 5.9, wordCount: 267, tags: ["intention", "habit"] },
  { id: "j5", date: "2026-05-08", dateLabel: "Thu",       preview: "Gratitude practice: the specific smell of coffee at 6am. The fact that my body woke up and did its thing without me asking it to...", mood: 8.1, wordCount: 143, tags: ["gratitude"] },
  { id: "j6", date: "2026-05-07", dateLabel: "Wed",       preview: "Talked to my sister for the first time in three weeks. Said some things I've been circling for months. Lighter afterwards...", mood: 7.5, wordCount: 391, tags: ["relationships", "honesty"] },
]

// ─── Insights ────────────────────────────────────────────────────────────────

export const monthlyMoodData = [
  { week: "Apr 14", value: 6.4 },
  { week: "Apr 21", value: 6.9 },
  { week: "Apr 28", value: 7.2 },
  { week: "May 5",  value: 7.8 },
  { week: "May 12", value: 7.4 },
]

export const monthlySessionData = [
  { week: "Apr 14", value: 80  },
  { week: "Apr 21", value: 105 },
  { week: "Apr 28", value: 95  },
  { week: "May 5",  value: 130 },
  { week: "May 12", value: 142 },
]

export const monthlySleepData = [
  { week: "Apr 14", value: 6.8 },
  { week: "Apr 21", value: 7.1 },
  { week: "Apr 28", value: 7.0 },
  { week: "May 5",  value: 7.6 },
  { week: "May 12", value: 7.4 },
]

export interface CorrelationInsight {
  id: string
  insight: string
  detail: string
  confidence: number
  category: SessionCategory | "sleep"
}

export const correlationInsights: CorrelationInsight[] = [
  { id: "c1", insight: "You sleep 47 min longer on days you meditate before noon.", detail: "Based on 18 sessions over 4 weeks.", confidence: 87, category: "sleep"      },
  { id: "c2", insight: "Your mood score peaks two days after a breathwork session.", detail: "Consistent across 6 of the last 7 weeks.", confidence: 79, category: "breathwork" },
  { id: "c3", insight: "Focus sessions under 10 min don't show measurable impact.", detail: "Deep work blocks start paying off at the 20-min mark.", confidence: 72, category: "focus"      },
  { id: "c4", insight: "Stress state correlates with fewer than 5 hours of sleep.", detail: "You hit stress state 83% of days following a short night.", confidence: 91, category: "sleep"      },
]

export const weeklyReview = {
  weekLabel: "May 6 – May 12",
  sessionsCompleted: 5,
  sessionGoal: 6,
  moodDelta: +0.6,
  sleepDelta: +0.3,
  topState: "Calm",
  note: "Your most consistent week in a month. Mood trending up. Sleep improved after you added the wind-down session.",
}
