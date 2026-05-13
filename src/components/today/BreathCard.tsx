import { Card, CardLabel, CardSubtext } from "@/components/ui/Card"
import { breathCoherence, breathBpm } from "@/lib/mock-data"

const RADIUS = 70
const STROKE = 10
const CX = 100
const CY = 95

function describeArc(cx: number, cy: number, r: number) {
  const startX = cx - r
  const startY = cy
  const endX = cx + r
  const endY = cy
  return `M ${startX} ${startY} A ${r} ${r} 0 0 1 ${endX} ${endY}`
}

export function BreathCard() {
  const arcLength = Math.PI * RADIUS
  const filled = (breathCoherence / 100) * arcLength

  return (
    <Card className="items-center gap-1">
      <CardLabel>Breath Coherence</CardLabel>
      <div className="mt-3 w-full max-w-[200px] mx-auto">
        <svg viewBox="0 0 200 120" className="w-full h-auto overflow-visible">
          <path
            d={describeArc(CX, CY, RADIUS)}
            fill="none"
            stroke="#EDE9E2"
            strokeWidth={STROKE}
            strokeLinecap="round"
          />
          <path
            d={describeArc(CX, CY, RADIUS)}
            fill="none"
            stroke="#E8763A"
            strokeWidth={STROKE}
            strokeLinecap="round"
            strokeDasharray={`${filled} ${arcLength}`}
          />
          <text
            x={CX}
            y={CY - 12}
            textAnchor="middle"
            fontSize="28"
            fontFamily="var(--font-geist-mono)"
            fill="#1A1814"
          >
            {breathCoherence}
          </text>
          <text
            x={CX}
            y={CY + 6}
            textAnchor="middle"
            fontSize="11"
            fontFamily="var(--font-geist-sans)"
            fill="#9B948A"
          >
            coherence
          </text>
          <text
            x={CX}
            y={CY + 22}
            textAnchor="middle"
            fontSize="11"
            fontFamily="var(--font-geist-mono)"
            fill="#5C574E"
          >
            {breathBpm} bpm
          </text>
        </svg>
      </div>
      <CardSubtext className="text-center">Today&apos;s session</CardSubtext>
    </Card>
  )
}
