"use client";

import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Activity, HeartPulse, ShieldCheck, Stethoscope, Syringe, Clock3, Scan } from 'lucide-react';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeaturesGridProps {
  badge?: string;
  headline: string;
  subheadline?: string;
  features: Feature[];
}

const iconMap: Record<string, React.ElementType> = { Scan, 
  Activity,
  HeartPulse,
  ShieldCheck,
  Stethoscope,
  Syringe,
  Clock3,
};

export default function FeaturesGrid({
  badge = 'Our Services',
  headline = 'Complete care for every stage of life',
  subheadline = 'From preventive checkups to chronic condition support, our team delivers personalized care plans designed around your health goals.',
  features = [
    { icon: 'Stethoscope', title: 'Primary Care', description: 'Routine exams, annual physicals, and ongoing care coordination for adults and seniors.' },
    { icon: 'HeartPulse', title: 'Cardiometabolic Health', description: 'Blood pressure, cholesterol, and diabetes management with regular monitoring.' },
    { icon: 'Syringe', title: 'Vaccinations & Prevention', description: 'Recommended immunizations and preventive screenings to protect long-term wellness.' },
    { icon: 'Activity', title: 'Lab & Diagnostics', description: 'On-site bloodwork and quick diagnostic pathways for faster treatment decisions.' },
    { icon: 'ShieldCheck', title: 'Chronic Care Programs', description: 'Structured care plans for asthma, thyroid, hypertension, and other chronic conditions.' },
    { icon: 'Clock3', title: 'Same-Day Appointments', description: 'Urgent visits available with extended weekday and weekend clinic hours.' },
  ],
}: Partial<FeaturesGridProps>) {
  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4 animate-fade-in-up">
        <div className="mx-auto max-w-2xl text-center">
          {badge && <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">{badge}</span>}
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map(function (feature, index) {
            const Icon = iconMap[feature.icon] || Activity;
            return (
              <Card key={index} className="card-hover rounded-xl border border-border bg-card shadow-sm transition-all">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {React.createElement(Icon, { className: 'h-6 w-6' })}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                  <p className="mt-2 text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
