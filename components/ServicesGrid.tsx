'use client'

import { Sparkles, Smile, ShieldCheck, Baby, Scan, Wand2 } from 'lucide-react'
import { Card } from '@/components/ui/card'

export default function ServicesGrid() {
  const services = [
    { title: 'Cosmetic Dentistry', price: 'From $299', icon: Sparkles },
    { title: 'Orthodontics', price: 'From $189/mo', icon: Smile },
    { title: 'Dental Implants', price: 'From $2,499', icon: ShieldCheck },
    { title: 'Family Dentistry', price: 'From $99', icon: Baby },
    { title: '3D Digital Scans', price: 'Included in consult', icon: Scan },
    { title: 'Teeth Whitening', price: 'From $199', icon: Wand2 },
  ]

  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="rounded-xl border bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg">
              <service.icon className="h-10 w-10 text-[#0077B6]" />
              <h3 className="mt-4 font-[Nunito] text-xl font-bold">{service.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{service.price}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
