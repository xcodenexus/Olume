"use client"

import type { StateKey } from "@/lib/mock-data"

const STATE_ORB_COLORS: Record<StateKey, { highlight: string; main: string; shadow: string; glow: string }> = {
  calm:    { highlight: "#A8E4C4", main: "#5BAD8A", shadow: "#2A6A50", glow: "#8FDFC0" },
  focus:   { highlight: "#F5B07A", main: "#E8763A", shadow: "#9A3A10", glow: "#F5A870" },
  energy:  { highlight: "#F2D898", main: "#D4A84A", shadow: "#806218", glow: "#F0D088" },
  rest:    { highlight: "#C8BCE8", main: "#8E80AA", shadow: "#483070", glow: "#C0B4E0" },
  clarity: { highlight: "#A8BCD8", main: "#6880A0", shadow: "#304258", glow: "#9AB0CC" },
  stress:  { highlight: "#EE9888", main: "#CC5040", shadow: "#7A1A10", glow: "#EE8878" },
}

interface OrbCanvasProps {
  state: StateKey
}

export function OrbCanvas({ state }: OrbCanvasProps) {
  const c = STATE_ORB_COLORS[state]

  return (
    <div className="relative w-[280px] h-[280px] flex items-center justify-center">
      {/* Outer ambient glow */}
      <div
        className="absolute inset-[-20px] rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${c.glow}28 0%, transparent 70%)`,
          animation: "orb-glow 4s cubic-bezier(0.22,1,0.36,1) infinite",
        }}
      />

      {/* Sphere */}
      <div
        className="relative w-[240px] h-[240px] rounded-full"
        style={{
          background: `radial-gradient(ellipse at 38% 32%, ${c.highlight} 0%, ${c.main} 48%, ${c.shadow} 100%)`,
          boxShadow: `0 8px 40px ${c.main}50, 0 0 80px ${c.glow}30, inset 0 -8px 24px ${c.shadow}40`,
          animation: "orb-breathe 4s cubic-bezier(0.22,1,0.36,1) infinite",
        }}
      >
        {/* Specular highlight */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: "radial-gradient(ellipse at 36% 30%, rgba(255,255,255,0.52) 0%, rgba(255,255,255,0.08) 38%, transparent 60%)",
          }}
        />
        {/* Rim light (bottom-right edge glow) */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: `radial-gradient(ellipse at 72% 78%, ${c.glow}50 0%, transparent 45%)`,
          }}
        />
      </div>
    </div>
  )
}
