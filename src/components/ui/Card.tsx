"use client"

import { motion, type Transition, type Variants } from "framer-motion"
import { cn } from "@/lib/utils"

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

const CARD_HOVER = {
  y: -2,
  boxShadow: "0 8px 30px rgba(26, 24, 20, 0.07)",
}

const CARD_TRANSITION: Transition = {
  duration: 0.22,
  ease: EASE,
}

interface CardProps {
  className?: string
  children: React.ReactNode
}

export function Card({ className, children }: CardProps) {
  return (
    <motion.div
      className={cn(
        "bg-card rounded-card border border-ink/[0.06] p-3 sm:p-5 flex flex-col",
        className
      )}
      whileHover={CARD_HOVER}
      transition={CARD_TRANSITION}
    >
      {children}
    </motion.div>
  )
}

interface CardLabelProps {
  children: React.ReactNode
  className?: string
}

export function CardLabel({ children, className }: CardLabelProps) {
  return (
    <p className={cn("text-[11px] uppercase tracking-widest text-ink-3 font-medium", className)}>
      {children}
    </p>
  )
}

interface CardMetricProps {
  children: React.ReactNode
  className?: string
}

export function CardMetric({ children, className }: CardMetricProps) {
  return (
    <p className={cn("font-mono text-[28px] font-normal text-ink leading-none mt-1", className)}>
      {children}
    </p>
  )
}

interface CardSubtextProps {
  children: React.ReactNode
  className?: string
}

export function CardSubtext({ children, className }: CardSubtextProps) {
  return (
    <p className={cn("text-[12px] text-ink-3 mt-0.5", className)}>
      {children}
    </p>
  )
}

export const cardGridVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
    },
  },
}

export const cardItemVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: EASE,
    },
  },
}
