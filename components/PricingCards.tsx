"use client";

import { Card } from '@/components/ui/card'

export default function PricingCards() {
  const specials = [
    { name: 'New Patient Visit', price: '$149' },
    { name: 'Zoom Whitening', price: '$399' },
    { name: 'Invisalign Consult', price: 'Free' },
  ]

  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {specials.map((s) => (
            <Card key={s.name} className="rounded-xl border bg-white p-6 shadow-sm">
              <h3 className="font-[Nunito] text-xl font-bold">{s.name}</h3>
              <p className="mt-2 text-2xl font-extrabold text-[#0077B6]">{s.price}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
