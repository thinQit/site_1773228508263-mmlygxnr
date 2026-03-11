'use client'

import { WavyBackground } from '@/components/ui/backgrounds/wavy-background'

interface HeroGradientBlobProps {
  title?: string
  subtitle?: string
}

export default function HeroGradientBlob({
  title = 'Transparent Pricing for Every Smile',
  subtitle = 'No surprises—clear rates for preventive, cosmetic, and orthodontic care with flexible monthly options.',
}: Partial<HeroGradientBlobProps>) {
  return (
    <WavyBackground className="py-24">
      <div className="mx-auto max-w-4xl px-4 text-center text-white md:px-6">
        <h1 className="font-[Nunito] text-4xl font-extrabold md:text-6xl">{title}</h1>
        <p className="mt-4 text-lg text-slate-100">{subtitle}</p>
      </div>
    </WavyBackground>
  )
}
