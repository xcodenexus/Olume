"use client"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts"
import { Card, CardLabel, CardMetric, CardSubtext } from "@/components/ui/Card"
import { sessionsData, weeklySessionMinutes } from "@/lib/mock-data"

export function SessionsCard() {
  return (
    <Card className="gap-1">
      <CardLabel>Weekly Sessions</CardLabel>
      <CardMetric>
        {weeklySessionMinutes}
        <span className="text-[14px] text-ink-3 font-sans ml-1">min</span>
      </CardMetric>
      <CardSubtext>Ahead of last week</CardSubtext>
      <div className="mt-4 h-[80px] -mx-1">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={sessionsData}
            margin={{ top: 0, right: 4, left: 4, bottom: 0 }}
            barSize={10}
          >
            <YAxis hide width={0} />
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
              formatter={(val) => val != null ? [`${val} min`, "Session"] : []}
              labelStyle={{ color: "#9B948A", fontSize: 11 }}
              cursor={{ fill: "rgba(26,24,20,0.03)" }}
            />
            <Bar dataKey="minutes" radius={[3, 3, 0, 0]}>
              {sessionsData.map((entry, i) => (
                <Cell key={i} fill={entry.minutes > 0 ? "#E8763A" : "#EDE9E2"} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}
