"use client";

interface SectionHeaderProps {
  title?: string
  subtitle?: string
  centered?: boolean
}

export default function SectionHeader({
  title = 'Section Title',
  subtitle = 'Section subtitle goes here.',
  centered = true,
}: Partial<SectionHeaderProps>) {
  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <h2 className="font-[Nunito] text-3xl font-extrabold text-slate-900 md:text-4xl">{title}</h2>
      <p className="mt-3 text-slate-600">{subtitle}</p>
    </div>
  )
}
