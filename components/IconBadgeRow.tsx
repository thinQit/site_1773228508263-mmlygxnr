"use client";

import { ShieldCheck, HeartPulse, Sparkles } from 'lucide-react'

export default function IconBadgeRow() {
  const items = [
    { label: 'Pain-Free Focus', icon: HeartPulse },
    { label: 'Trusted Austin Team', icon: ShieldCheck },
    { label: 'Spa-Like Experience', icon: Sparkles },
  ]
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {items.map((item) => (
        <div key={item.label} className="flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-sm text-slate-700 shadow-sm">
          <item.icon className="h-4 w-4 text-[#0077B6]" />
          {item.label}
        </div>
      ))}
    </div>
  )
}
