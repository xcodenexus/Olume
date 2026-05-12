import { Header } from "@/components/layout/Header"
import { PageTitle } from "@/components/today/PageTitle"
import { HeroSection } from "@/components/today/HeroSection"
import { MoodCard } from "@/components/today/MoodCard"
import { SessionsCard } from "@/components/today/SessionsCard"
import { BreathCard } from "@/components/today/BreathCard"
import { FocusCard } from "@/components/today/FocusCard"
import { SleepCard } from "@/components/today/SleepCard"
import { StateHistogram } from "@/components/today/StateHistogram"

export default function TodayPage() {
  return (
    <div className="min-h-screen bg-canvas">
      <Header />

      <main className="max-w-screen-xl mx-auto px-6 pt-8 pb-12">
        {/* Page title zone */}
        <PageTitle />

        {/* Hero + cards layout */}
        <div className="grid grid-cols-12 gap-6">
          {/* Hero zone — left 5/12 */}
          <div className="col-span-12 lg:col-span-5">
            <div className="bg-card rounded-card border border-ink/[0.06] p-5 h-full">
              <HeroSection />
            </div>
          </div>

          {/* Cards zone — right 7/12 */}
          <div className="col-span-12 lg:col-span-7 flex flex-col gap-4">
            {/* Row 1 */}
            <div className="grid grid-cols-2 gap-4">
              <MoodCard />
              <SessionsCard />
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-3 gap-4">
              <BreathCard />
              <FocusCard />
              <SleepCard />
            </div>
          </div>
        </div>

        {/* Footer histogram */}
        <StateHistogram />
      </main>
    </div>
  )
}
