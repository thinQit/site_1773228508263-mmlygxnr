"use client";

import { Card } from '@/components/ui/card'

export default function TestimonialsGrid() {
  const testimonials = [
    { name: 'Sarah M.', tag: 'Cosmetic Dentistry', quote: 'Absolutely the most comfortable dental visit I have ever had.' },
    { name: 'James R.', tag: 'Implants', quote: 'The team explained every step and made me feel calm and confident.' },
    { name: 'Priya K.', tag: 'Family Care', quote: 'Our whole family comes here now. Friendly, modern, and gentle.' },
  ]

  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-3 md:px-6">
        {testimonials.map((t) => (
          <Card key={t.name} className="rounded-xl border bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-[#0077B6]">{t.tag}</p>
            <p className="mt-3 text-slate-700">“{t.quote}”</p>
            <p className="mt-4 text-sm font-medium text-slate-500">{t.name}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}
