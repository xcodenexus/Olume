"use client"

import { motion } from "framer-motion"
import { TrendingUp, TrendingDown, ArrowUp } from "lucide-react"
import { Header } from "@/components/layout/Header"
import { TrendChart } from "@/components/insights/TrendChart"
import { CorrelationCard } from "@/components/insights/CorrelationCard"
import {
  monthlyMoodData,
  monthlySessionData,
  monthlySleepData,
  correlationInsights,
  weeklyReview,
} from "@/lib/mock-data"
import { cardItemVariants, cardGridVariants } from "@/components/ui/Card"

const EASE_CALM: [number, number, number, number] = [0.22, 1, 0.36, 1]

export default function InsightsPage() {
  const { weekLabel, sessionsCompleted, sessionGoal, moodDelta, sleepDelta, topState, note } = weeklyReview

  return (
    <div className="min-h-screen bg-canvas">
      <Header />

      <main className="max-w-screen-xl mx-auto px-4 sm:px-6 pt-8 pb-24 md:pb-12">
        {/* Page header */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: EASE_CALM }}
        >
          <h1 className="font-display text-[42px] leading-none text-ink">Insights</h1>
          <p className="text-[13px] text-ink-3 mt-1">Patterns that emerge over time.</p>
        </motion.div>

        <div className="grid grid-cols-12 gap-6">
          {/* Weekly review card */}
          <motion.div
            className="col-span-12 lg:col-span-4"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05, ease: EASE_CALM }}
          >
            <div className="bg-card rounded-card border border-ink/[0.06] p-6 h-full flex flex-col gap-5">
              <div>
                <p className="text-[11px] uppercase tracking-widest text-ink-3 font-medium">
                  Weekly review
                </p>
                <p className="text-[13px] text-ink-2 mt-0.5">{weekLabel}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-[11px] text-ink-3 uppercase tracking-widest">Sessions</p>
                  <p className="font-mono text-[28px] text-ink leading-none mt-1">
                    {sessionsCompleted}
                    <span className="text-[14px] text-ink-3">/{sessionGoal}</span>
                  </p>
                </div>
                <div>
                  <p className="text-[11px] text-ink-3 uppercase tracking-widest">Top state</p>
                  <p className="font-display text-[22px] text-ink leading-none mt-1">{topState}</p>
                </div>
                <div>
                  <p className="text-[11px] text-ink-3 uppercase tracking-widest">Mood</p>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="font-mono text-[22px] text-ink leading-none">
                      {moodDelta > 0 ? "+" : ""}{moodDelta.toFixed(1)}
                    </span>
                    {moodDelta > 0
                      ? <TrendingUp size={13} className="text-success" />
                      : <TrendingDown size={13} className="text-danger" />}
                  </div>
                </div>
                <div>
                  <p className="text-[11px] text-ink-3 uppercase tracking-widest">Sleep</p>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="font-mono text-[22px] text-ink leading-none">
                      {sleepDelta > 0 ? "+" : ""}{sleepDelta.toFixed(1)}h
                    </span>
                    <ArrowUp
                      size={13}
                      className={sleepDelta > 0 ? "text-success" : "text-danger rotate-180"}
                    />
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-ink/[0.05] mt-auto">
                <p className="text-[13px] text-ink-2 leading-relaxed">{note}</p>
              </div>
            </div>
          </motion.div>

          {/* Trend charts */}
          <motion.div
            className="col-span-12 lg:col-span-8 flex flex-col gap-4"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1, ease: EASE_CALM }}
          >
            <div className="bg-card rounded-card border border-ink/[0.06] p-5">
              <TrendChart
                data={monthlyMoodData}
                color="#E8763A"
                label="Mood trend — 5 weeks"
                domain={[5, 10]}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card rounded-card border border-ink/[0.06] p-5">
                <TrendChart
                  data={monthlySessionData}
                  color="#4A6B5D"
                  label="Weekly session minutes"
                  unit=" min"
                />
              </div>
              <div className="bg-card rounded-card border border-ink/[0.06] p-5">
                <TrendChart
                  data={monthlySleepData}
                  color="#7A6E92"
                  label="Sleep hours"
                  unit="h"
                  domain={[5.5, 9]}
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Correlations */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2, ease: EASE_CALM }}
        >
          <h2 className="font-display text-[22px] text-ink mb-4">What the data shows</h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            variants={cardGridVariants}
            initial="hidden"
            animate="visible"
          >
            {correlationInsights.map((item) => (
              <motion.div key={item.id} variants={cardItemVariants}>
                <CorrelationCard item={item} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </main>
    </div>
  )
}
