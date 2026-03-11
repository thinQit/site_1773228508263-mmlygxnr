"use client";

import { MapPin, Car, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function LocationDetails() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-5xl rounded-xl border bg-white p-8 shadow-sm">
        <h2 className="font-[Nunito] text-3xl font-extrabold">Location & Hours</h2>
        <div className="mt-6 space-y-3 text-slate-700">
          <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[#0077B6]" /> 4201 Bee Caves Rd, Austin, TX 78746</p>
          <p className="flex items-center gap-2"><Car className="h-4 w-4 text-[#0077B6]" /> Free on-site parking available</p>
          <p className="flex items-center gap-2"><Clock className="h-4 w-4 text-[#0077B6]" /> Mon–Fri 8am–6pm, Sat 9am–2pm</p>
        </div>
        <Button className="mt-6 bg-[#0077B6] text-white hover:bg-[#00649a]">Get Directions</Button>
      </div>
    </section>
  )
}
