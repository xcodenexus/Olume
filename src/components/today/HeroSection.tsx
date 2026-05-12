"use client"

import type { ElementType } from "react"
import {
  Moon,
  Target,
  Zap,
  BedDouble,
  Eye,
  Activity,
  ChevronDown,
} from "lucide-react"
import { stateHistory, todayState, stateColors } from "@/lib/mock-data"
import type { StateKey } from "@/lib/mock-data"

const STATE_ICONS: Array<{ key: StateKey; label: string; Icon: ElementType }> = [
  { key: "calm", label: "Calm", Icon: Moon },
  { key: "focus", label: "Focus", Icon: Target },
  { key: "energy", label: "Energy", Icon: Zap },
  { key: "rest", label: "Rest", Icon: BedDouble },
  { key: "clarity", label: "Clarity", Icon: Eye },
  { key: "stress", label: "Stress", Icon: Activity },
]

function OrbVisual() {
  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: 300, height: 300 }}
    >
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(232,118,58,0.14) 0%, transparent 72%)",
          animation: "orb-glow 4s cubic-bezier(0.22,1,0.36,1) infinite",
        }}
      />
      <svg
        viewBox="0 0 300 300"
        className="absolute inset-0 w-full h-full"
        style={{ animation: "orb-breathe 4s cubic-bezier(0.22,1,0.36,1) infinite" }}
      >
        <defs>
          <radialGradient id="orbCore" cx="38%" cy="32%" r="68%">
            <stop offset="0%" stopColor="#F5A06A" stopOpacity="1" />
            <stop offset="28%" stopColor="#E8763A" stopOpacity="0.92" />
            <stop offset="55%" stopColor="#9B6040" stopOpacity="0.65" />
            <stop offset="78%" stopColor="#4A6B5D" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#1A1814" stopOpacity="0.06" />
          </radialGradient>
          <radialGradient id="orbHighlight" cx="30%" cy="25%" r="40%">
            <stop offset="0%" stopColor="#FDE3CC" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#FDE3CC" stopOpacity="0" />
          </radialGradient>
          <filter id="orbNoise" x="-12%" y="-12%" width="124%" height="124%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.018"
              numOctaves="4"
              seed="3"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="10"
              xChannelSelector="R"
              yChannelSelector="G"
              result="displaced"
            />
            <feGaussianBlur in="displaced" stdDeviation="2.5" />
          </filter>
        </defs>
        <circle cx="150" cy="150" r="122" fill="url(#orbCore)" filter="url(#orbNoise)" />
        <circle cx="150" cy="150" r="122" fill="url(#orbHighlight)" />
      </svg>
    </div>
  )
}

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
        <OrbVisual />
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
