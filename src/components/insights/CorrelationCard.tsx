"use client"

import { Lightbulb } from "lucide-react"
import type { CorrelationInsight, SessionCategory } from "@/lib/mock-data"

const CATEGORY_COLORS: Record<SessionCategory | "sleep", string> = {
  meditation: "#4A6B5D",
  breathwork: "#E8763A",
  sleep:      "#7A6E92",
  focus:      "#B89968",
}

interface CorrelationCardProps {
  item: CorrelationInsight
}

export function CorrelationCard({ item }: CorrelationCardProps) {
  const color = CATEGORY_COLORS[item.category]

  return (
    <div className="bg-card rounded-card border border-ink/[0.06] p-5">
      <div className="flex items-start gap-3">
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5"
          style={{ background: color + "18" }}
        >
          <Lightbulb size={13} style={{ color }} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[14px] text-ink leading-snug font-medium">{item.insight}</p>
          <p className="text-[12px] text-ink-3 mt-1">{item.detail}</p>

          <div className="mt-3 flex items-center gap-2">
            <div className="flex-1 h-1 bg-subtle rounded-pill overflow-hidden">
              <div
                className="h-full rounded-pill"
                style={{ width: `${item.confidence}%`, background: color }}
              />
            </div>
            <span className="font-mono text-[11px] text-ink-3 shrink-0">
              {item.confidence}% confidence
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
