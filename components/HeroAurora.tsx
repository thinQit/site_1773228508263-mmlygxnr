'use client'

import { AuroraBackground } from '@/components/ui/backgrounds/aurora-background'

interface HeroAuroraProps {
  title?: string
  subtitle?: string
}

export default function HeroAurora({
  title = 'Accessible Care for Every Patient',
  subtitle = 'We are committed to inclusive communication, comfortable facilities, and digital accessibility across our website and clinic.',
}: Partial<HeroAuroraProps>) {
  return (
    <AuroraBackground className="py-24">
      <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
        <h1 className="font-[Nunito] text-4xl font-extrabold text-slate-900 md:text-6xl">{title}</h1>
        <p className="mt-5 text-slate-700">{subtitle}</p>
      </div>
    </AuroraBackground>
  )
}
