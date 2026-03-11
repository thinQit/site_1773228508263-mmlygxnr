export const dynamic = 'force-dynamic';

import HeroSpotlight from "@/components/HeroSpotlight"
import FeaturesGrid from "@/components/FeaturesGrid"
import CTABanner from "@/components/CTABanner"
import ScrollReveal from "@/components/ScrollReveal"

export default function ServicesPage() {
  return (
    <main>
      <div className="animate-fade-in-up">
        <HeroSpotlight />
      </div>

      <ScrollReveal>
        <div className="animate-fade-in-up py-20 md:py-28 bg-background">
          <FeaturesGrid
            badge="Comfort-first"
            headline="Comfort-first care—built into every visit"
            subheadline="We’ve designed the experience for anxious patients and busy schedules."
            features={[
              { icon: "ShieldCheck", title: "Gentle numbing", description: "Topical anesthetic and slow, careful delivery for a smoother experience." },
              { icon: "Scan", title: "Digital scanning", description: "Comfortable scans for many cases—less goop, more precision." },
              { icon: "ClipboardList", title: "Clear treatment plans", description: "We show options, timelines, and estimated costs before you decide." },
              { icon: "Waves", title: "Calming environment", description: "Soft lighting, clean design, and spa-like touches to reduce stress." },
            ]}
          />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="animate-fade-in-up py-20 md:py-28 bg-muted">
          <CTABanner />
        </div>
      </ScrollReveal>
    </main>
  )
}
