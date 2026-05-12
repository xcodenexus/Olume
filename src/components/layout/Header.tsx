"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Search, Bell } from "lucide-react"
import { cn } from "@/lib/utils"

const NAV_ITEMS = [
  { label: "Today", href: "/today" },
  { label: "Sessions", href: "/sessions" },
  { label: "Journal", href: "/journal" },
  { label: "Insights", href: "/insights" },
]

export function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-canvas/90 backdrop-blur-md border-b border-ink/[0.06]">
      <div className="max-w-screen-xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
        {/* Logo */}
        <Link
          href="/today"
          className="font-display italic text-[22px] text-ink tracking-tight shrink-0"
        >
          Olume
        </Link>

        {/* Pill nav */}
        <nav className="flex items-center gap-1 bg-subtle rounded-pill p-1">
          {NAV_ITEMS.map((item) => {
            const active =
              pathname === item.href ||
              (pathname === "/" && item.href === "/today")
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-1.5 rounded-pill text-[13px] font-medium transition-colors",
                  active
                    ? "bg-accent text-white"
                    : "text-ink-2 hover:text-ink"
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            aria-label="Search"
            className="w-8 h-8 flex items-center justify-center rounded-full text-ink-3 hover:text-ink hover:bg-subtle transition-colors"
          >
            <Search size={16} />
          </button>
          <button
            aria-label="Notifications"
            className="w-8 h-8 flex items-center justify-center rounded-full text-ink-3 hover:text-ink hover:bg-subtle transition-colors"
          >
            <Bell size={16} />
          </button>
          <button
            aria-label="Account"
            className="w-8 h-8 rounded-full bg-ink/10 flex items-center justify-center text-[12px] font-medium text-ink"
          >
            A
          </button>
        </div>
      </div>
    </header>
  )
}
