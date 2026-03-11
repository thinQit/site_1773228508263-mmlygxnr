'use client'

interface HeroStarfieldProps {
  title?: string
  subtitle?: string
}

export default function HeroStarfield({
  title = 'What Austin Patients Say',
  subtitle = 'From first checkups to complete smile transformations, our patients consistently rate us for comfort and care.',
}: Partial<HeroStarfieldProps>) {
  return (
    <section className="bg-gradient-to-b from-slate-950 to-slate-900 py-24 text-white">
      <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
        <h1 className="font-[Nunito] text-4xl font-extrabold md:text-6xl">{title}</h1>
        <p className="mt-5 text-slate-300">{subtitle}</p>
      </div>
    </section>
  )
}
