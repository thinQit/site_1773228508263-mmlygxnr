"use client";

import { Button } from '@/components/ui/button'

interface CTABannerProps {
  text?: string
}

export default function CTABanner({
  text = 'New patient special: Exam + X-rays + Cleaning from $149',
}: Partial<CTABannerProps>) {
  return (
    <section className="bg-[#0077B6] py-6 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
        <p className="text-center font-medium md:text-left">{text}</p>
        <Button className="bg-white text-[#0077B6] hover:bg-slate-100">Claim Offer</Button>
      </div>
    </section>
  )
}
