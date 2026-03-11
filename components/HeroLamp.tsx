'use client'

interface HeroLampProps {
  title?: string
  subtitle?: string
}

export default function HeroLamp({
  title = 'Built Around Trust, Comfort, and Clinical Excellence',
  subtitle = 'Our Austin team blends modern technology with compassionate care to make every visit relaxed and pain-free.',
}: Partial<HeroLampProps>) {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-24 text-white">
      <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[#48CAE4]/30 blur-3xl" />
      <div className="relative mx-auto max-w-5xl px-4 text-center md:px-6">
        <h1 className="font-[Nunito] text-4xl font-extrabold md:text-6xl">{title}</h1>
        <p className="mx-auto mt-5 max-w-3xl text-slate-200">{subtitle}</p>
      </div>
    </section>
  )
}
