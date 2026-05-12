import { Card, CardLabel, CardMetric, CardSubtext } from "@/components/ui/Card"
import { focusMinutes, focusTarget } from "@/lib/mock-data"

export function FocusCard() {
  const pct = Math.round((focusMinutes / focusTarget) * 100)

  return (
    <Card className="gap-1">
      <CardLabel>Focus &amp; Clarity</CardLabel>
      <CardMetric>
        {focusMinutes}
        <span className="text-[14px] text-ink-3 font-sans ml-1">min</span>
      </CardMetric>
      <CardSubtext>focused today</CardSubtext>
      <div className="mt-4 space-y-1.5">
        <div className="h-2 w-full bg-subtle rounded-full overflow-hidden">
          <div
            className="h-full bg-accent rounded-full transition-all"
            style={{ width: `${pct}%` }}
          />
        </div>
        <p className="text-[11px] font-mono text-ink-3">
          {pct}% of {focusTarget} min goal
        </p>
      </div>
    </Card>
  )
}
