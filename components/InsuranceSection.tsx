"use client";

import { Card } from '@/components/ui/card'

export default function InsuranceSection() {
  const plans = ['Delta Dental', 'Cigna Dental', 'Aetna', 'MetLife', 'Guardian', 'UnitedHealthcare']
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Card className="rounded-xl border bg-white p-8 shadow-sm">
          <h2 className="font-[Nunito] text-3xl font-extrabold text-slate-900">Insurance & Financing</h2>
          <p className="mt-3 text-slate-600">We accept most major PPO plans and provide transparent estimates before treatment.</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan) => (
              <div key={plan} className="rounded-lg border bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">{plan}</div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  )
}
