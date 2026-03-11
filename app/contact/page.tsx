export const dynamic = 'force-dynamic';

import HeroWaves from "@/components/HeroWaves"
import ContactForm from "@/components/ContactForm"
import LocationDetails from "@/components/LocationDetails"
import ScrollReveal from "@/components/ScrollReveal"

export default function ContactPage() {
  return (
    <main>
      <div className="animate-fade-in-up">
        <HeroWaves
          title="Request your appointment"
          subtitle="Tell us what you need and when you prefer to come in. We’ll confirm quickly by phone or text."
          ctaLabel="Call (512) 555-0199"
          ctaHref="tel:+15125550199"
          secondaryCtaLabel="Get Directions"
          secondaryCtaHref="https://maps.google.com/?q=2100+S+Lamar+Blvd+Suite+120+Austin+TX+78704"
        />
      </div>

      <ScrollReveal>
        <div className="animate-fade-in-up py-20 md:py-28 bg-background" id="request">
          <ContactForm />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="animate-fade-in-up py-20 md:py-28 bg-muted">
          <LocationDetails />
        </div>
      </ScrollReveal>
    </main>
  )
}
