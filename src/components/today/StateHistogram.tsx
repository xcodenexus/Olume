import { histogramData } from "@/lib/mock-data"

export function StateHistogram() {
  return (
    <div className="border-t border-ink/[0.06] pt-4 mt-2">
      <p className="text-[11px] uppercase tracking-widest text-ink-3 font-medium mb-3">
        State distribution — today
      </p>
      <div className="flex items-end gap-3">
        {histogramData.map((item) => (
          <div key={item.label} className="flex-1 flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-ink-2 font-sans">{item.label}</span>
              <span className="text-[11px] font-mono text-ink-3">{item.percentage}%</span>
            </div>
            <div className="h-1.5 w-full bg-subtle rounded-full overflow-hidden">
              <div
                className="h-full bg-ink/20 rounded-full"
                style={{ width: `${item.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
