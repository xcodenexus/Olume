"use client"

import { motion } from "framer-motion"
import type { JournalEntry } from "@/lib/mock-data"

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

const moodColor = (mood: number) => {
  if (mood >= 8) return "#4A6B5D"
  if (mood >= 6.5) return "#E8763A"
  return "#A8443A"
}

interface JournalEntryCardProps {
  entry: JournalEntry
}

export function JournalEntryCard({ entry }: JournalEntryCardProps) {
  const color = moodColor(entry.mood)

  return (
    <motion.div
      className="bg-card rounded-card border border-ink/[0.06] p-5 cursor-pointer"
      whileHover={{ y: -2, boxShadow: "0 8px 30px rgba(26,24,20,0.07)" }}
      transition={{ duration: 0.22, ease: EASE }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11px] uppercase tracking-widest text-ink-3 font-medium">
              {entry.dateLabel}
            </span>
            {entry.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] px-1.5 py-0.5 rounded bg-subtle text-ink-3"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-[14px] text-ink-2 leading-relaxed line-clamp-2">
            {entry.preview}
          </p>
        </div>
        <div className="flex flex-col items-end gap-1 shrink-0">
          <span className="font-mono text-[18px] font-normal leading-none" style={{ color }}>
            {entry.mood.toFixed(1)}
          </span>
          <span className="text-[10px] text-ink-3">mood</span>
        </div>
      </div>
      <div className="flex items-center gap-3 mt-3 pt-3 border-t border-ink/[0.05]">
        <span className="text-[11px] text-ink-3 font-mono">{entry.wordCount} words</span>
        <span className="text-[11px] text-ink-3">{entry.date}</span>
      </div>
    </motion.div>
  )
}
