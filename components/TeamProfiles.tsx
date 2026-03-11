"use client";

import Image from 'next/image'
import { Card } from '@/components/ui/card'

export default function TeamProfiles() {
  const team = [
    { name: 'Dr. Maya Patel, DDS', role: 'Cosmetic & Restorative Dentistry', image: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577351/site-images/team-people/12903244.jpg' },
    { name: 'Dr. Lucas Reed, DMD', role: 'Orthodontics & Invisalign', image: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577327/site-images/team-people/12899112.jpg' },
    { name: 'Elena Morris, RDH', role: 'Hygiene & Preventive Care', image: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577363/site-images/team-people/12903169.jpg' },
  ]

  return (
    <section className="bg-[#F0F4F8] py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {team.map((member) => (
            <Card key={member.name} className="overflow-hidden rounded-xl border bg-white shadow-sm">
              <Image src={member.image} alt={member.name} width={1200} height={800} unoptimized className="h-64 w-full object-cover" />
              <div className="p-5">
                <h3 className="font-[Nunito] text-xl font-bold">{member.name}</h3>
                <p className="mt-2 text-sm text-slate-600">{member.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
