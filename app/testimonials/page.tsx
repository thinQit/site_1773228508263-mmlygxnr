export const dynamic = 'force-dynamic';

import HeroStarfield from "@/components/HeroStarfield"
import TestimonialsGrid from "@/components/TestimonialsGrid"
import CTABanner from "@/components/CTABanner"
import ScrollReveal from "@/components/ScrollReveal"

export default function TestimonialsPage() {
  return (
    <main>
      <div className="animate-fade-in-up">
        <HeroStarfield />
      </div>

      <ScrollReveal>
        <div className="animate-fade-in-up py-20 md:py-28 bg-background">
          <TestimonialsGrid />
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
