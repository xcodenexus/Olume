"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import { User, Smartphone, Bell, ChevronRight, Check } from "lucide-react"
import { Header } from "@/components/layout/Header"

const EASE_CALM: [number, number, number, number] = [0.22, 1, 0.36, 1]

type TabKey = "account" | "devices" | "notifications"

const TABS: Array<{ key: TabKey; label: string; Icon: typeof User }> = [
  { key: "account",       label: "Account",      Icon: User       },
  { key: "devices",       label: "Devices",      Icon: Smartphone },
  { key: "notifications", label: "Notifications", Icon: Bell       },
]

function SettingRow({ label, value, chevron = false }: { label: string; value?: string; chevron?: boolean }) {
  return (
    <div className="flex items-center justify-between py-3.5 border-b border-ink/[0.05] last:border-0">
      <span className="text-[14px] text-ink">{label}</span>
      <div className="flex items-center gap-2 text-ink-3">
        {value && <span className="text-[13px]">{value}</span>}
        {chevron && <ChevronRight size={14} />}
      </div>
    </div>
  )
}

function ToggleRow({ label, description, enabled }: { label: string; description: string; enabled: boolean }) {
  const [on, setOn] = useState(enabled)
  return (
    <div className="flex items-start justify-between py-3.5 border-b border-ink/[0.05] last:border-0 gap-4">
      <div>
        <p className="text-[14px] text-ink">{label}</p>
        <p className="text-[12px] text-ink-3 mt-0.5">{description}</p>
      </div>
      <button
        onClick={() => setOn(!on)}
        className="relative shrink-0 mt-0.5 rounded-pill transition-colors"
        style={{ background: on ? "#E8763A" : "#EDE9E2", height: 22, width: 40 }}
        role="switch"
        aria-checked={on}
      >
        <span
          className="absolute top-0.5 w-[18px] h-[18px] rounded-full bg-white shadow transition-all"
          style={{ left: on ? 20 : 2 }}
        />
      </button>
    </div>
  )
}

function AccountTab() {
  return (
    <div className="flex flex-col gap-6">
      <div className="bg-card rounded-card border border-ink/[0.06] p-5">
        <p className="text-[11px] uppercase tracking-widest text-ink-3 font-medium mb-1">Profile</p>
        <SettingRow label="Name" value="Alex" chevron />
        <SettingRow label="Email" value="alex@example.com" chevron />
        <SettingRow label="Subscription" value="Olume Pro" chevron />
        <SettingRow label="Member since" value="January 2026" />
      </div>
      <div className="bg-card rounded-card border border-ink/[0.06] p-5">
        <p className="text-[11px] uppercase tracking-widest text-ink-3 font-medium mb-1">Security</p>
        <SettingRow label="Change password" chevron />
        <SettingRow label="Two-factor authentication" value="Off" chevron />
        <SettingRow label="Active sessions" value="1 device" chevron />
      </div>
      <div className="bg-card rounded-card border border-ink/[0.06] p-5">
        <p className="text-[11px] uppercase tracking-widest text-ink-3 font-medium mb-1">Data</p>
        <SettingRow label="Export my data" chevron />
        <SettingRow label="Delete account" chevron />
      </div>
    </div>
  )
}

function DevicesTab() {
  const devices = [
    { name: "Oura Ring Gen 3", status: "Not connected", connected: false },
    { name: "Whoop 4.0",       status: "Not connected", connected: false },
    { name: "Apple Health",    status: "Connected",     connected: true  },
    { name: "Garmin",          status: "Not connected", connected: false },
  ]
  return (
    <div className="flex flex-col gap-4">
      <p className="text-[13px] text-ink-3">
        Connect wearables and health platforms to automatically sync sleep, HRV, and activity data.
      </p>
      {devices.map((device) => (
        <div
          key={device.name}
          className="bg-card rounded-card border border-ink/[0.06] p-5 flex items-center justify-between"
        >
          <div>
            <p className="text-[14px] text-ink font-medium">{device.name}</p>
            <p
              className="text-[12px] mt-0.5"
              style={{ color: device.connected ? "#4A6B5D" : "#9B948A" }}
            >
              {device.status}
            </p>
          </div>
          {device.connected ? (
            <div className="flex items-center gap-1.5 text-[12px]" style={{ color: "#4A6B5D" }}>
              <Check size={13} />
              Connected
            </div>
          ) : (
            <button className="px-3 py-1.5 rounded-pill bg-subtle text-ink-2 text-[12px] font-medium hover:bg-accent-soft transition-colors">
              Connect
            </button>
          )}
        </div>
      ))}
    </div>
  )
}

function NotificationsTab() {
  return (
    <div className="flex flex-col gap-6">
      <div className="bg-card rounded-card border border-ink/[0.06] p-5">
        <p className="text-[11px] uppercase tracking-widest text-ink-3 font-medium mb-1">Reminders</p>
        <ToggleRow label="Morning check-in" description="Daily at 8:00 AM" enabled={true} />
        <ToggleRow label="Session reminder" description="Nudge when you haven't practiced by 6 PM" enabled={true} />
        <ToggleRow label="Weekly review" description="Every Sunday at 9:00 AM" enabled={false} />
      </div>
      <div className="bg-card rounded-card border border-ink/[0.06] p-5">
        <p className="text-[11px] uppercase tracking-widest text-ink-3 font-medium mb-1">Insights</p>
        <ToggleRow label="New insight available" description="When a new pattern is detected" enabled={true} />
        <ToggleRow label="Streak alerts" description="When you're on a 3+ day streak" enabled={false} />
      </div>
      <div className="bg-card rounded-card border border-ink/[0.06] p-5">
        <p className="text-[11px] uppercase tracking-widest text-ink-3 font-medium mb-1">Product</p>
        <ToggleRow label="Product updates" description="New features and improvements" enabled={false} />
      </div>
    </div>
  )
}

const TAB_CONTENT: Record<TabKey, React.ReactNode> = {
  account:       <AccountTab />,
  devices:       <DevicesTab />,
  notifications: <NotificationsTab />,
}

export default function SettingsPage() {
  const searchParams = useSearchParams()
  const [tab, setTab] = useState<TabKey>("account")

  useEffect(() => {
    const t = searchParams.get("tab")
    if (t === "notifications" || t === "devices" || t === "account") {
      setTab(t)
    }
  }, [searchParams])

  return (
    <div className="min-h-screen bg-canvas">
      <Header />

      <main className="max-w-screen-md mx-auto px-6 pt-8 pb-12">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: EASE_CALM }}
        >
          <h1 className="font-display text-[42px] leading-none text-ink">Settings</h1>
        </motion.div>

        <motion.div
          className="flex items-center gap-1 mb-6 bg-subtle p-1 rounded-pill w-fit"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.08, ease: EASE_CALM }}
        >
          {TABS.map(({ key, label, Icon }) => {
            const isActive = tab === key
            return (
              <button
                key={key}
                onClick={() => setTab(key)}
                className="flex items-center gap-1.5 px-4 py-1.5 rounded-pill text-[13px] font-medium transition-all"
                style={{
                  background: isActive ? "#FFFFFF" : "transparent",
                  color: isActive ? "#1A1814" : "#9B948A",
                  boxShadow: isActive ? "0 1px 4px rgba(26,24,20,0.08)" : "none",
                }}
              >
                <Icon size={12} />
                {label}
              </button>
            )
          })}
        </motion.div>

        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: EASE_CALM }}
        >
          {TAB_CONTENT[tab]}
        </motion.div>
      </main>
    </div>
  )
}
