export const dynamic = 'force-dynamic';

import HeroWaves from "@/components/HeroWaves"
import ServicesGrid from "@/components/ServicesGrid"
import CTASplit from "@/components/CTASplit"
import TeamProfiles from "@/components/TeamProfiles"
import InsuranceSection from "@/components/InsuranceSection"
import FAQAccordion from "@/components/FAQAccordion"
import ContactSection from "@/components/ContactSection"
import ScrollReveal from "@/components/ScrollReveal"

export default function HomePage() {
  return (
    <main>
      <div className="animate-fade-in-up">
        <HeroWaves
          title="Pain-free dentistry in Austin—cosmetic, braces, implants, and family care."
          subtitle="Experience a spa-like clinic with gentle numbing, calming amenities, and a team that explains every step. Same-week consultations available."
          ctaLabel="Book an Appointment"
          ctaHref="/contact#request"
          secondaryCtaLabel="View Services"
          secondaryCtaHref="/services"
        />
      </div>

      <ScrollReveal>
        <div className="animate-fade-in-up py-20 md:py-28 bg-background">
          <ServicesGrid />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="animate-fade-in-up py-20 md:py-28 bg-muted">
          <CTASplit />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="animate-fade-in-up py-20 md:py-28 bg-background" id="team">
          <TeamProfiles />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="animate-fade-in-up py-20 md:py-28 bg-muted">
          <InsuranceSection />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="animate-fade-in-up py-20 md:py-28 bg-background" id="faq">
          <FAQAccordion />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="animate-fade-in-up py-20 md:py-28 bg-muted">
          <ContactSection />
        </div>
      </ScrollReveal>
    </main>
  )
}
