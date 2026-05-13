"use client"

import { motion } from "framer-motion"
import { PenLine, Quote } from "lucide-react"
import { Header } from "@/components/layout/Header"
import { JournalEntryCard } from "@/components/journal/JournalEntryCard"
import { journalEntries, journalPrompt } from "@/lib/mock-data"
import { cardGridVariants, cardItemVariants } from "@/components/ui/Card"

const EASE_CALM: [number, number, number, number] = [0.22, 1, 0.36, 1]

export default function JournalPage() {
  return (
    <div className="min-h-screen bg-canvas">
      <Header />

      <main className="max-w-screen-lg mx-auto px-4 sm:px-6 pt-8 pb-24 md:pb-12">
        {/* Page header */}
        <motion.div
          className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-8"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: EASE_CALM }}
        >
          <div>
            <h1 className="font-display text-[42px] leading-none text-ink">Journal</h1>
            <p className="text-[13px] text-ink-3 mt-1">
              {journalEntries.length} entries this month.
            </p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 rounded-pill bg-accent text-white text-[13px] font-medium hover:opacity-90 transition-opacity">
            <PenLine size={13} />
            New entry
          </button>
        </motion.div>

        {/* Daily prompt */}
        <motion.div
          className="bg-card rounded-card border border-ink/[0.06] p-6 mb-8"
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.08, ease: EASE_CALM }}
        >
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-accent-soft flex items-center justify-center shrink-0 mt-0.5">
              <Quote size={13} className="text-accent" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-widest text-ink-3 font-medium mb-2">
                Today&apos;s prompt
              </p>
              <p className="font-display text-[20px] text-ink leading-snug italic">
                &ldquo;{journalPrompt}&rdquo;
              </p>
              <button className="mt-4 text-[12px] text-accent font-medium hover:opacity-80 transition-opacity">
                Write about this →
              </button>
            </div>
          </div>
        </motion.div>

        {/* Entry list */}
        <motion.div
          className="flex flex-col gap-3"
          variants={cardGridVariants}
          initial="hidden"
          animate="visible"
        >
          {journalEntries.map((entry) => (
            <motion.div key={entry.id} variants={cardItemVariants}>
              <JournalEntryCard entry={entry} />
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  )
}
