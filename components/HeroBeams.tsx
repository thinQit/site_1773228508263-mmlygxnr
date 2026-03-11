'use client'

interface HeroBeamsProps {
  title?: string
  subtitle?: string
}

export default function HeroBeams({
  title = 'Your Privacy and Rights Matter',
  subtitle = 'Read our legal policies, terms, and patient commitments for transparent, ethical dental care.',
}: Partial<HeroBeamsProps>) {
  return (
    <section className="relative bg-slate-100 py-20">
      <div className="mx-auto max-w-5xl px-4 text-center md:px-6">
        <h1 className="font-[Nunito] text-4xl font-extrabold text-slate-900 md:text-5xl">{title}</h1>
        <p className="mx-auto mt-4 max-w-3xl text-slate-600">{subtitle}</p>
      </div>
    </section>
  )
}
