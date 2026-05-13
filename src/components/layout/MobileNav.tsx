"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Play, BookOpen, BarChart2 } from "lucide-react"
import { cn } from "@/lib/utils"

const NAV_ITEMS = [
  { label: "Today",    href: "/today",    Icon: Home      },
  { label: "Sessions", href: "/sessions", Icon: Play      },
  { label: "Journal",  href: "/journal",  Icon: BookOpen  },
  { label: "Insights", href: "/insights", Icon: BarChart2 },
]

export function MobileNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-canvas/95 backdrop-blur-md border-t border-ink/[0.06] pb-[env(safe-area-inset-bottom)]">
      <div className="flex items-center justify-around h-14">
        {NAV_ITEMS.map(({ label, href, Icon }) => {
          const active = pathname === href || (pathname === "/" && href === "/today")
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex flex-col items-center gap-0.5 px-4 py-1 transition-colors",
                active ? "text-accent" : "text-ink-3"
              )}
            >
              <Icon size={20} strokeWidth={active ? 2 : 1.5} />
              <span className="text-[10px] font-medium tracking-wide">{label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
