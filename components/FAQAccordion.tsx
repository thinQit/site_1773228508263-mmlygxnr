'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

export default function FAQAccordion() {
  const faqs = [
    { q: 'Do you offer pain-free dentistry?', a: 'Yes. We use gentle numbing techniques, modern technology, and comfort options to minimize discomfort.' },
    { q: 'Do you accept dental insurance?', a: 'We work with many PPO plans and help you understand coverage before treatment begins.' },
    { q: 'Can I book a same-week appointment?', a: 'In many cases, yes. Call us for urgent needs and we will do our best to accommodate you quickly.' },
  ]
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="bg-[#F0F4F8] py-20 md:py-24">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <h2 className="text-center font-[Nunito] text-3xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
        <div className="mt-8 space-y-3">
          {faqs.map((item, i) => (
            <div key={item.q} className="rounded-xl border bg-white">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full px-5 py-4 text-left font-semibold">
                {item.q}
              </button>
              <div className={cn('px-5 text-sm text-slate-600 transition-all', open === i ? 'max-h-40 pb-4' : 'max-h-0 overflow-hidden')}>
                {item.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
