"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/layout/Header"
import { PageTitle } from "@/components/today/PageTitle"
import { HeroSection } from "@/components/today/HeroSection"
import { MoodCard } from "@/components/today/MoodCard"
import { SessionsCard } from "@/components/today/SessionsCard"
import { BreathCard } from "@/components/today/BreathCard"
import { FocusCard } from "@/components/today/FocusCard"
import { SleepCard } from "@/components/today/SleepCard"
import { StateHistogram } from "@/components/today/StateHistogram"
import { cardGridVariants, cardItemVariants } from "@/components/ui/Card"

const EASE_CALM: [number, number, number, number] = [0.22, 1, 0.36, 1]

export default function TodayPage() {
  return (
    <div className="min-h-screen bg-canvas">
      <Header />

      <main className="max-w-screen-xl mx-auto px-6 pt-8 pb-12">
        {/* Page title zone */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: EASE_CALM }}
        >
          <PageTitle />
        </motion.div>

        {/* Hero + cards layout */}
        <motion.div
          className="grid grid-cols-12 gap-6"
          variants={cardGridVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Hero zone — left 5/12 */}
          <motion.div
            className="col-span-12 lg:col-span-5"
            variants={cardItemVariants}
          >
            <div className="bg-card rounded-card border border-ink/[0.06] p-5 h-full">
              <HeroSection />
            </div>
          </motion.div>

          {/* Cards zone — right 7/12 */}
          <div className="col-span-12 lg:col-span-7 flex flex-col gap-4">
            {/* Row 1 */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div variants={cardItemVariants}>
                <MoodCard />
              </motion.div>
              <motion.div variants={cardItemVariants}>
                <SessionsCard />
              </motion.div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-3 gap-4">
              <motion.div variants={cardItemVariants}>
                <BreathCard />
              </motion.div>
              <motion.div variants={cardItemVariants}>
                <FocusCard />
              </motion.div>
              <motion.div variants={cardItemVariants}>
                <SleepCard />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Footer histogram */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4, ease: EASE_CALM }}
        >
          <StateHistogram />
        </motion.div>
      </main>
    </div>
  )
}
