import { ArrowRight } from "lucide-react"

interface PageTitleProps {
  name?: string
}

export function PageTitle({ name = "John" }: PageTitleProps) {
  const now = new Date()
  const hour = now.getHours()
  const greeting =
    hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening"

  const dateStr = now.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
  })

  return (
    <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
      <div>
        <h1 className="font-display text-[42px] leading-[1.05] tracking-[-0.01em] text-ink">
          {greeting}, {name}.
        </h1>
        <p className="mt-1">
          <span className="font-mono text-[14px] text-ink-3">{dateStr}</span>
        </p>
      </div>

      <div className="flex items-center gap-2 pt-1 shrink-0">
        <div className="flex items-center gap-0.5 bg-subtle rounded-pill p-0.5">
          {["24H", "7D", "30D"].map((range, i) => (
            <button
              key={range}
              className={`px-3 py-1 rounded-pill text-[11px] font-medium font-mono transition-colors ${
                i === 0 ? "bg-card text-ink shadow-sm" : "text-ink-3 hover:text-ink"
              }`}
            >
              {range}
            </button>
          ))}
        </div>

        <button className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-pill text-[13px] font-medium hover:bg-accent/90 transition-colors">
          Begin session
          <ArrowRight size={13} />
        </button>
      </div>
    </div>
  )
}
