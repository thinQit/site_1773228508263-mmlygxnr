"use client";

import Link from 'next/link'
import { Phone, MapPin, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface FooterProps {
  clinicName?: string
  phone?: string
  address?: string
}

export default function Footer({
  clinicName = 'Luminous Dental Austin',
  phone = '(512) 555-0142',
  address = '4201 Bee Caves Rd, Austin, TX 78746',
}: Partial<FooterProps>) {
  return (
    <footer className="border-t bg-[#F0F4F8]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-4 md:px-6">
        <div className="md:col-span-2">
          <h3 className="font-[Nunito] text-xl font-extrabold text-[#0077B6]">{clinicName}</h3>
          <p className="mt-3 max-w-md text-sm text-slate-600">
            Modern dental care in Austin with a spa-like atmosphere, gentle techniques, and personalized treatment for families and busy professionals.
          </p>
          <div className="mt-4 space-y-2 text-sm text-slate-700">
            <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-[#0077B6]" /> {phone}</p>
            <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[#0077B6]" /> {address}</p>
            <p className="flex items-center gap-2"><Clock className="h-4 w-4 text-[#0077B6]" /> Mon–Fri 8am–6pm, Sat 9am–2pm</p>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-slate-900">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li><Link href="/services" className="hover:text-[#0077B6]">Services</Link></li>
            <li><Link href="/pricing" className="hover:text-[#0077B6]">Pricing</Link></li>
            <li><Link href="/insurance" className="hover:text-[#0077B6]">Insurance</Link></li>
            <li><Link href="/faq" className="hover:text-[#0077B6]">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-slate-900">Ready to Smile?</h4>
          <p className="mt-3 text-sm text-slate-600">Schedule your pain-free consultation today.</p>
          <Button className="mt-4 rounded-lg bg-[#0077B6] text-white hover:bg-[#00649a]">Book Appointment</Button>
        </div>
      </div>
    </footer>
  )
}
