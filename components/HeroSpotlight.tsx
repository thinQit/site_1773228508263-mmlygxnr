'use client'

import { SparklesEffect } from '@/components/ui/backgrounds/sparkles'
import { Button } from '@/components/ui/button'

interface HeroSpotlightProps {
  title?: string
  subtitle?: string
}

export default function HeroSpotlight({
  title = 'Gentle Dentistry, Elevated Comfort',
  subtitle = 'Discover advanced cosmetic, family, and restorative dentistry in Austin with a calm, spa-inspired experience.',
}: Partial<HeroSpotlightProps>) {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 text-white">
      <SparklesEffect className="absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-4 text-center md:px-6">
        <h1 className="font-[Nunito] text-4xl font-extrabold md:text-6xl">{title}</h1>
        <p className="mx-auto mt-5 max-w-2xl text-slate-200">{subtitle}</p>
        <Button className="mt-8 rounded-lg bg-[#48CAE4] text-slate-950 hover:bg-[#35b7d1]">Book a Visit</Button>
      </div>
    </section>
  )
}
