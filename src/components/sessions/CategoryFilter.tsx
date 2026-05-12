"use client"

import { categoryLabels } from "@/lib/mock-data"
import type { SessionCategory } from "@/lib/mock-data"

type FilterKey = SessionCategory | "all"

const FILTERS: FilterKey[] = ["all", "meditation", "breathwork", "sleep", "focus"]

interface CategoryFilterProps {
  active: FilterKey
  onChange: (key: FilterKey) => void
  counts: Record<FilterKey, number>
}

export function CategoryFilter({ active, onChange, counts }: CategoryFilterProps) {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      {FILTERS.map((key) => {
        const isActive = active === key
        return (
          <button
            key={key}
            onClick={() => onChange(key)}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-pill text-[12px] font-medium transition-colors"
            style={{
              background: isActive ? "#E8763A" : "#FFFFFF",
              color: isActive ? "#FFFFFF" : "#5C574E",
              border: isActive ? "none" : "1px solid rgba(26,24,20,0.10)",
            }}
          >
            {categoryLabels[key]}
            <span
              className="font-mono text-[10px]"
              style={{ opacity: isActive ? 0.8 : 0.5 }}
            >
              {counts[key]}
            </span>
          </button>
        )
      })}
    </div>
  )
}
