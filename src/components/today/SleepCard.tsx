"use client"

import { LineChart, Line, ResponsiveContainer, Tooltip } from "recharts"
import { Card, CardLabel, CardMetric, CardSubtext } from "@/components/ui/Card"
import { sleepWaveData, sleepHours, sleepQuality } from "@/lib/mock-data"

export function SleepCard() {
  const hh = Math.floor(sleepHours)
  const mm = Math.round((sleepHours - hh) * 60)

  return (
    <Card className="gap-1">
      <CardLabel>Sleep Quality</CardLabel>
      <CardMetric>
        {hh}h{" "}
        <span className="text-[18px]">{String(mm).padStart(2, "0")}m</span>
      </CardMetric>
      <CardSubtext>{sleepQuality}</CardSubtext>
      <div className="mt-4 h-[60px] -mx-1">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={sleepWaveData}
            margin={{ top: 4, right: 4, left: 4, bottom: 4 }}
          >
            <Tooltip
              contentStyle={{ display: "none" }}
              wrapperStyle={{ display: "none" }}
            />
            <Line
              type="monotone"
              dataKey="depth"
              stroke="#1A1814"
              strokeWidth={1.5}
              dot={false}
              activeDot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}
