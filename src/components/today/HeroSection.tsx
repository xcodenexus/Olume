"use client"

import {
  Moon,
  Target,
  Zap,
  BedDouble,
  Eye,
  Activity,
  ChevronDown,
  type LucideIcon,
} from "lucide-react"
import { stateHistory, todayState, stateColors } from "@/lib/mock-data"
import type { StateKey } from "@/lib/mock-data"
import { OrbCanvas } from "./OrbCanvas"

const STATE_ICONS: Array<{ key: StateKey; label: string; Icon: LucideIcon }> = [
  { key: "calm",    label: "Calm",    Icon: Moon },
  { key: "focus",   label: "Focus",   Icon: Target },
  { key: "energy",  label: "Energy",  Icon: Zap },
  { key: "rest",    label: "Rest",    Icon: BedDouble },
  { key: "clarity", label: "Clarity", Icon: Eye },
  { key: "stress",  label: "Stress",  Icon: Activity },
]

export function HeroSection() {
  const todayDot = stateHistory[stateHistory.length - 1]

  return (
    <div className="flex gap-4 h-full">
      {/* State icon rail */}
      <div className="flex flex-col justify-center gap-4 py-4 pr-1">
        {STATE_ICONS.map(({ key, label, Icon }) => {
          const isActive = todayDot.state === key
          return (
            <button key={key} title={label} className="flex flex-col items-center gap-1">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: isActive ? `${stateColors[key]}1A` : "transparent" }}
              >
                <Icon
                  size={14}
                  style={{ color: isActive ? stateColors[key] : "#9B948A" }}
                />
              </div>
              <span
                className="text-[9px] uppercase tracking-widest"
                style={{ color: isActive ? stateColors[key] : "#9B948A" }}
              >
                {label}
              </span>
            </button>
          )
        })}
      </div>

      {/* Orb + state info */}
      <div className="flex flex-col items-center justify-center flex-1 gap-5">
        <OrbCanvas state={todayDot.state} />

        <div className="text-center">
          <button className="inline-flex items-center gap-1.5 text-[13px] text-ink-2 hover:text-ink transition-colors">
            <span className="text-ink-3">Today&apos;s state</span>
            <span className="font-medium text-ink">{todayState}</span>
            <ChevronDown size={13} className="text-ink-3" />
          </button>
        </div>

        {/* 7-day state dots */}
        <div className="flex items-center gap-2">
          {stateHistory.map((entry, i) => {
            const isToday = i === stateHistory.length - 1
            return (
              <div
                key={i}
                title={`${entry.day} — ${entry.state}`}
                className="rounded-full"
                style={{
                  width: isToday ? 10 : 7,
                  height: isToday ? 10 : 7,
                  background: stateColors[entry.state],
                  opacity: isToday ? 1 : 0.4,
                  outline: isToday ? `2px solid ${stateColors[entry.state]}40` : "none",
                  outlineOffset: 2,
                }}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
