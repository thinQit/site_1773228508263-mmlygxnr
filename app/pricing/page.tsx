export const dynamic = 'force-dynamic';

import HeroGradientBlob from "@/components/HeroGradientBlob"
import PricingCards from "@/components/PricingCards"
import InsuranceSection from "@/components/InsuranceSection"
import CTABanner from "@/components/CTABanner"
import ScrollReveal from "@/components/ScrollReveal"

export default function PricingPage() {
  return (
    <main>
      <div className="animate-fade-in-up">
        <HeroGradientBlob />
      </div>

      <ScrollReveal>
        <div className="animate-fade-in-up py-20 md:py-28 bg-background">
          <PricingCards />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="animate-fade-in-up py-20 md:py-28 bg-muted" id="insurance">
          <InsuranceSection />
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
