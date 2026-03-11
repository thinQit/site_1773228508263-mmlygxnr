"use client";

import { CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function CTASplit() {
  const benefits = ['Pain-free techniques', 'Same-week appointments', 'Flexible financing', 'Spa-like comfort amenities']
  return (
    <section className="bg-[#F0F4F8] py-20 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-2 md:px-6">
        <div>
          <h2 className="font-[Nunito] text-3xl font-extrabold text-slate-900 md:text-4xl">Ready for Stress-Free Dental Care?</h2>
          <p className="mt-4 text-slate-600">Book your visit in minutes and experience modern dentistry designed around comfort.</p>
          <div className="mt-6 space-y-3">
            {benefits.map((item) => (
              <p key={item} className="flex items-center gap-2 text-slate-700"><CheckCircle2 className="h-5 w-5 text-[#0077B6]" /> {item}</p>
            ))}
          </div>
        </div>
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h3 className="font-semibold text-slate-900">Get started today</h3>
          <p className="mt-2 text-sm text-slate-600">Speak with our care team and find the right treatment path.</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button className="bg-[#0077B6] text-white hover:bg-[#00649a]">Book Appointment</Button>
            <Button variant="outline">Call (512) 555-0142</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
