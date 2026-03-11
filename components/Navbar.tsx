'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface NavItem {
  label: string
  href: string
}

interface NavbarProps {
  clinicName?: string
  phone?: string
  links?: NavItem[]
}

export default function Navbar({
  clinicName = 'Luminous Dental Austin',
  phone = '(512) 555-0142',
  links = [
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Insurance', href: '/insurance' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'Contact', href: '/contact' },
  ],
}: Partial<NavbarProps>) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="font-[Nunito] text-lg font-extrabold text-[#0077B6]">
          {clinicName}
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-700 transition-colors hover:text-[#0077B6]">
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a href={"tel:" + phone.replace(/\D/g, '')} className="flex items-center gap-2 text-sm font-semibold text-slate-700">
            <Phone className="h-4 w-4 text-[#0077B6]" />
            {phone}
          </a>
          <Button className="rounded-lg bg-[#0077B6] text-white hover:bg-[#00649a]">Book Visit</Button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border md:hidden"
          aria-label="Toggle mobile menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div className={cn('border-t bg-white px-4 pb-4 pt-3 md:hidden', open ? 'block' : 'hidden')}>
        <div className="flex flex-col gap-3">
          {links.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-md px-2 py-2 text-sm font-medium hover:bg-slate-100">
              {item.label}
            </Link>
          ))}
          <a href={"tel:" + phone.replace(/\D/g, '')} className="mt-1 flex items-center gap-2 text-sm font-semibold text-[#0077B6]">
            <Phone className="h-4 w-4" />
            {phone}
          </a>
          <Button className="mt-1 w-full rounded-lg bg-[#0077B6] text-white hover:bg-[#00649a]">Book Appointment</Button>
        </div>
      </div>
    </header>
  )
}
