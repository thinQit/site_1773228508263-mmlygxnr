export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora"
import CTASparkles from "@/components/CTASparkles"
import ScrollReveal from "@/components/ScrollReveal"
import { Card } from "@/components/ui/card"

export default function AccessibilityPage() {
  return (
    <main>
      <div className="animate-fade-in-up">
        <HeroAurora />
      </div>

      <ScrollReveal>
        <section className="animate-fade-in-up py-20 md:py-28 bg-background">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <Card className="card-hover p-8 rounded-xl border-border bg-card space-y-6">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">Accessibility Statement</h1>
              <p className="text-muted-foreground">Last updated: 2026-03-01</p>
              <p className="text-foreground">We’re committed to making our website usable for everyone, including people with disabilities.</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Readable typography and sufficient color contrast.</li>
                <li>Keyboard navigability for interactive elements.</li>
                <li>Descriptive labels for forms and buttons.</li>
              </ul>
            </Card>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <div className="animate-fade-in-up py-20 md:py-28 bg-muted">
          <CTASparkles
            title="Need accessibility assistance?"
            subtitle="Call or email us and we’ll respond within 2 business days."
            ctaLabel="Call (512) 555-0199"
            ctaHref="tel:+15125550199"
            secondaryCtaLabel="Email Us"
            secondaryCtaHref="mailto:hello@austinsmilestudio.com"
          />
        </div>
      </ScrollReveal>
    </main>
  )
}
