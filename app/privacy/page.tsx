export const dynamic = 'force-dynamic';

import HeroBeams from "@/components/HeroBeams"
import CTASparkles from "@/components/CTASparkles"
import ScrollReveal from "@/components/ScrollReveal"
import { Card } from "@/components/ui/card"

export default function PrivacyPage() {
  return (
    <main>
      <div className="animate-fade-in-up">
        <HeroBeams />
      </div>

      <ScrollReveal>
        <section className="animate-fade-in-up py-20 md:py-28 bg-background">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <Card className="card-hover p-8 rounded-xl border-border bg-card space-y-6">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">Privacy Policy</h1>
              <p className="text-muted-foreground">Last updated: 2026-03-01</p>
              <p className="text-foreground">This website is for informational purposes and appointment requests.</p>
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-2">Information we collect</h2>
                <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                  <li>Contact details you submit (name, phone, email).</li>
                  <li>Appointment request details (preferred time, reason for visit).</li>
                  <li>Basic analytics to improve the site experience.</li>
                </ul>
              </div>
            </Card>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <div className="animate-fade-in-up py-20 md:py-28 bg-muted">
          <CTASparkles
            title="Questions about privacy?"
            subtitle="Contact Austin Smile Studio and our team will help."
            ctaLabel="Contact Us"
            ctaHref="/contact"
            secondaryCtaLabel="Call (512) 555-0199"
            secondaryCtaHref="tel:+15125550199"
          />
        </div>
      </ScrollReveal>
    </main>
  )
}
