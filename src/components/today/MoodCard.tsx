"use client"

import {
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceDot,
} from "recharts"
import { Card, CardLabel, CardMetric, CardSubtext } from "@/components/ui/Card"
import { moodData, moodAverage } from "@/lib/mock-data"

const peakDay = moodData.reduce((a, b) => (a.value > b.value ? a : b))

export function MoodCard() {
  return (
    <Card className="gap-1">
      <CardLabel>Mood Average</CardLabel>
      <CardMetric>
        {moodAverage.toFixed(1)}
        <span className="text-[14px] text-ink-3 font-sans ml-1">/ 10</span>
      </CardMetric>
      <CardSubtext>7-day average</CardSubtext>
      <div className="mt-4 h-[80px] -mx-1">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={moodData} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="moodGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#E8763A" stopOpacity={0.18} />
                <stop offset="100%" stopColor="#E8763A" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="day"
              tick={{ fontSize: 10, fill: "#9B948A", fontFamily: "var(--font-geist-mono)" }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                background: "#fff",
                border: "1px solid rgba(26,24,20,0.08)",
                borderRadius: 10,
                fontSize: 12,
                fontFamily: "var(--font-geist-mono)",
              }}
              formatter={(val) => val != null ? [`${Number(val).toFixed(1)}`, "Mood"] : []}
              labelStyle={{ color: "#9B948A", fontSize: 11 }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#E8763A"
              strokeWidth={1.5}
              fill="url(#moodGrad)"
              dot={false}
              activeDot={{ r: 3, fill: "#E8763A", strokeWidth: 0 }}
            />
            <ReferenceDot
              x={peakDay.day}
              y={peakDay.value}
              r={4}
              fill="#E8763A"
              stroke="#fff"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}
