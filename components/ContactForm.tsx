'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [service, setService] = useState('General Checkup')
  const [time, setTime] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const valid = name.trim().length > 1 && email.includes('@') && time.trim().length > 0

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        if (valid) setSubmitted(true)
      }}
      className="space-y-4 rounded-xl border bg-white p-6"
    >
      <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" />
      <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
      <select value={service} onChange={(e) => setService(e.target.value)} className="h-10 w-full rounded-md border px-3 text-sm">
        <option>General Checkup</option>
        <option>Cosmetic Dentistry</option>
        <option>Orthodontics</option>
        <option>Dental Implants</option>
      </select>
      <Input value={time} onChange={(e) => setTime(e.target.value)} placeholder="Preferred Time (e.g. Weekday mornings)" />
      <Button type="submit" className="w-full bg-[#0077B6] text-white hover:bg-[#00649a]" disabled={!valid}>
        Send Request
      </Button>
      {submitted && <p className="text-sm text-emerald-600">Thanks! Our team will contact you shortly.</p>}
    </form>
  )
}
