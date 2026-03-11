export const dynamic = 'force-dynamic';

import HeroLamp from "@/components/HeroLamp"
import TeamProfiles from "@/components/TeamProfiles"
import CTABanner from "@/components/CTABanner"
import ScrollReveal from "@/components/ScrollReveal"
import { Card } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <main>
      <div className="animate-fade-in-up">
        <HeroLamp />
      </div>

      <ScrollReveal>
        <section className="animate-fade-in-up py-20 md:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8">
            <Card className="card-hover p-8 rounded-xl border-border bg-card">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our approach: calm, clear, and conservative</h2>
              <p className="text-muted-foreground text-base md:text-lg">
                We start with prevention and education, then build a plan around your goals—whether that’s a healthier bite,
                a brighter smile, or replacing missing teeth.
              </p>
            </Card>
            <Card className="card-hover p-8 rounded-xl border-border bg-card">
              <ul className="space-y-3 text-foreground">
                <li>• We explain findings with photos and digital imaging when helpful.</li>
                <li>• We offer comfort options for anxious patients, including nitrous.</li>
                <li>• We coordinate treatment in phases to fit schedules and budgets.</li>
                <li>• Warm neck pillows, aromatherapy options, and headphones available.</li>
              </ul>
            </Card>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <div className="animate-fade-in-up py-20 md:py-28 bg-muted" id="team">
          <TeamProfiles />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="animate-fade-in-up py-20 md:py-28 bg-background">
          <CTABanner />
        </div>
      </ScrollReveal>
    </main>
  )
}
