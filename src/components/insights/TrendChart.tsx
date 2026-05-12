"use client"

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts"

interface DataPoint {
  week: string
  value: number
}

interface TrendChartProps {
  data: DataPoint[]
  color: string
  label: string
  unit?: string
  domain?: [number, number]
}

export function TrendChart({ data, color, label, unit = "", domain }: TrendChartProps) {
  return (
    <div>
      <p className="text-[11px] uppercase tracking-widest text-ink-3 font-medium mb-3">
        {label}
      </p>
      <ResponsiveContainer width="100%" height={100}>
        <AreaChart data={data} margin={{ top: 4, right: 0, left: -28, bottom: 0 }}>
          <defs>
            <linearGradient id={`grad-${label}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity={0.18} />
              <stop offset="100%" stopColor={color} stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="week"
            tick={{ fontSize: 10, fill: "#9B948A" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            domain={domain}
            tick={{ fontSize: 10, fill: "#9B948A" }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            contentStyle={{
              background: "#FFFFFF",
              border: "1px solid rgba(26,24,20,0.08)",
              borderRadius: 10,
              fontSize: 12,
              color: "#1A1814",
            }}
            formatter={(val) =>
              val != null ? [`${Number(val).toFixed(1)}${unit}`, label] : []
            }
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke={color}
            strokeWidth={1.8}
            fill={`url(#grad-${label})`}
            dot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
