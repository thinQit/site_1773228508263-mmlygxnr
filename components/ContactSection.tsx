"use client";

import { MapPin, Phone } from 'lucide-react'
import { Card } from '@/components/ui/card'

export default function ContactSection() {
  return (
    <section className="bg-[#F0F4F8] py-20 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-2 md:px-6">
        <Card className="rounded-xl border bg-white p-6">
          <h3 className="font-[Nunito] text-2xl font-bold">Visit Our Austin Clinic</h3>
          <p className="mt-4 flex items-center gap-2 text-slate-700"><MapPin className="h-4 w-4 text-[#0077B6]" />4201 Bee Caves Rd, Austin, TX</p>
          <p className="mt-2 flex items-center gap-2 text-slate-700"><Phone className="h-4 w-4 text-[#0077B6]" />(512) 555-0142</p>
        </Card>
        <Card className="rounded-xl border bg-white p-6">
          <h3 className="font-[Nunito] text-2xl font-bold">Request an Appointment</h3>
          <p className="mt-3 text-slate-600">Share your preferred service and time, and we’ll follow up quickly.</p>
        </Card>
      </div>
    </section>
  )
}
