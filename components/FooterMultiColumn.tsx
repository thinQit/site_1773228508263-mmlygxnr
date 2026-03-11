"use client";

import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

interface FooterMultiColumnProps {
  brand: string;
  description: string;
  columns: FooterColumn[];
  copyright?: string;
}

export default function FooterMultiColumn({
  brand = 'CareWave Health',
  description = 'Compassionate, modern healthcare for individuals and families with same-day access, preventive care, and long-term wellness support.',
  columns = [
    {
      title: 'Quick Links',
      links: [
        { label: 'Services', href: '#services' },
        { label: 'Doctors', href: '#doctors' },
        { label: 'Insurance', href: '#insurance' },
        { label: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Contact',
      links: [
        { label: '(555) 014-2233', href: 'tel:+15550142233' },
        { label: 'hello@carewavehealth.com', href: 'mailto:hello@carewavehealth.com' },
        { label: '245 Wellness Ave, Suite 200', href: '#contact' },
        { label: 'Mon–Sat: 8:00 AM–7:00 PM', href: '#contact' },
      ],
    },
    {
      title: 'Follow Us',
      links: [
        { label: 'Facebook', href: 'https://facebook.com' },
        { label: 'Instagram', href: 'https://instagram.com' },
        { label: 'LinkedIn', href: 'https://linkedin.com' },
        { label: 'YouTube', href: 'https://youtube.com' },
      ],
    },
  ],
  copyright,
}: Partial<FooterMultiColumnProps>) {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto max-w-7xl px-4 py-12 md:py-16 animate-fade-in-up">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold">{brand}</h3>
            <p className="mt-3 text-sm text-background/70">{description}</p>
          </div>
          {columns.map(function (col) {
            return (
              <div key={col.title}>
                <h4 className="text-sm font-semibold uppercase tracking-wider">{col.title}</h4>
                <ul className="mt-4 space-y-3">
                  {col.links.map(function (link) {
                    return (
                      <li key={link.href + link.label}>
                        <Link href={link.href} className="text-sm text-background/70 transition-colors hover:text-background">
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <Separator className="my-8 bg-background/20" />
        <p className="text-center text-sm text-background/50">
          {copyright || '© ' + new Date().getFullYear() + ' ' + brand + '. All rights reserved.'}
        </p>
      </div>
    </footer>
  );
}
