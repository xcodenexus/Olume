import { cn } from "@/lib/utils"

interface CardProps {
  className?: string
  children: React.ReactNode
}

export function Card({ className, children }: CardProps) {
  return (
    <div
      className={cn(
        "bg-card rounded-card border border-ink/[0.06] p-5 flex flex-col",
        className
      )}
    >
      {children}
    </div>
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
