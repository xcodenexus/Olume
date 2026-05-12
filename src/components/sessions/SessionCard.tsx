"use client"

import { Play, Heart, Clock } from "lucide-react"
import { Card } from "@/components/ui/Card"
import type { SessionItem, SessionCategory } from "@/lib/mock-data"

const CATEGORY_COLORS: Record<SessionCategory, string> = {
  meditation: "#4A6B5D",
  breathwork: "#E8763A",
  sleep:      "#7A6E92",
  focus:      "#B89968",
}

const CATEGORY_BG: Record<SessionCategory, string> = {
  meditation: "#4A6B5D1A",
  breathwork: "#E8763A1A",
  sleep:      "#7A6E921A",
  focus:      "#B899681A",
}

interface SessionCardProps {
  session: SessionItem
}

export function SessionCard({ session }: SessionCardProps) {
  const color = CATEGORY_COLORS[session.category]
  const bg = CATEGORY_BG[session.category]

  return (
    <Card className="gap-3 justify-between h-full">
      <div className="flex items-start justify-between gap-2">
        <span
          className="text-[10px] uppercase tracking-widest font-medium px-2 py-0.5 rounded-pill"
          style={{ color, background: bg }}
        >
          {session.category}
        </span>
        <button
          className="text-ink-3 hover:text-accent transition-colors"
          aria-label={session.isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart
            size={14}
            fill={session.isFavorite ? "currentColor" : "none"}
            style={{ color: session.isFavorite ? "#E8763A" : undefined }}
          />
        </button>
      </div>

      <div className="flex-1">
        <p className="font-display text-[18px] leading-snug text-ink">{session.title}</p>
        <p className="text-[12px] text-ink-3 mt-1.5 leading-relaxed line-clamp-2">
          {session.description}
        </p>
      </div>

      <div className="flex items-center justify-between mt-1">
        <div className="flex items-center gap-1 text-ink-3">
          <Clock size={11} />
          <span className="font-mono text-[11px]">{session.duration} min</span>
          {session.completedCount > 0 && (
            <span className="text-[11px] ml-2">· {session.completedCount}× done</span>
          )}
        </div>
        <button
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-pill text-[12px] font-medium transition-colors"
          style={{ background: color + "18", color }}
        >
          <Play size={10} fill="currentColor" />
          Begin
        </button>
      </div>
    </Card>
  )
}
