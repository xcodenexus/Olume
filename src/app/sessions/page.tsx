"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Header } from "@/components/layout/Header"
import { CategoryFilter } from "@/components/sessions/CategoryFilter"
import { SessionCard } from "@/components/sessions/SessionCard"
import { sessionLibrary, weeklySessionMinutes } from "@/lib/mock-data"
import type { SessionCategory } from "@/lib/mock-data"
import { cardGridVariants, cardItemVariants } from "@/components/ui/Card"

type FilterKey = SessionCategory | "all"

const EASE_CALM: [number, number, number, number] = [0.22, 1, 0.36, 1]

const COUNTS: Record<FilterKey, number> = {
  all:        sessionLibrary.length,
  meditation: sessionLibrary.filter((s) => s.category === "meditation").length,
  breathwork: sessionLibrary.filter((s) => s.category === "breathwork").length,
  sleep:      sessionLibrary.filter((s) => s.category === "sleep").length,
  focus:      sessionLibrary.filter((s) => s.category === "focus").length,
}

export default function SessionsPage() {
  const [filter, setFilter] = useState<FilterKey>("all")

  const visible = filter === "all"
    ? sessionLibrary
    : sessionLibrary.filter((s) => s.category === filter)

  return (
    <div className="min-h-screen bg-canvas">
      <Header />

      <main className="max-w-screen-xl mx-auto px-6 pt-8 pb-12">
        {/* Page header */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: EASE_CALM }}
        >
          <div>
            <h1 className="font-display text-[42px] leading-none text-ink">Sessions</h1>
            <p className="text-[13px] text-ink-3 mt-1">
              Guided practices for clarity, calm, and focus.
            </p>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="font-mono text-[32px] text-ink leading-none">{weeklySessionMinutes}</span>
            <span className="text-[13px] text-ink-3">min this week</span>
          </div>
        </motion.div>

        {/* Filter pills */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1, ease: EASE_CALM }}
        >
          <CategoryFilter active={filter} onChange={setFilter} counts={COUNTS} />
        </motion.div>

        {/* Session grid */}
        <motion.div
          key={filter}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          variants={cardGridVariants}
          initial="hidden"
          animate="visible"
        >
          {visible.map((session) => (
            <motion.div key={session.id} variants={cardItemVariants}>
              <SessionCard session={session} />
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  )
}
