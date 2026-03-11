'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface PricingTier {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  highlighted?: boolean;
}

interface PricingTableProps {
  headline: string;
  subheadline?: string;
  tiers: PricingTier[];
}

export default function PricingTable({
  headline = 'Transparent care plans for every household',
  subheadline = 'Choose a plan that fits your health needs with predictable monthly pricing and priority access.',
  tiers = [
    {
      name: 'Essential',
      price: '$29',
      period: 'month',
      description: 'Great for preventive care basics.',
      features: ['Annual wellness exam', '2 virtual visits per month', 'Discounted labs', 'Secure patient messaging'],
      ctaLabel: 'Choose Essential',
      ctaHref: '#contact',
      highlighted: false,
    },
    {
      name: 'Complete',
      price: '$59',
      period: 'month',
      description: 'Most popular for families and ongoing support.',
      features: ['Unlimited virtual visits', '4 in-clinic visits per month', 'Chronic care management', 'Priority appointment scheduling'],
      ctaLabel: 'Choose Complete',
      ctaHref: '#contact',
      highlighted: true,
    },
    {
      name: 'Premier',
      price: '$99',
      period: 'month',
      description: 'Comprehensive care with concierge access.',
      features: ['Same-day guaranteed access', 'Care navigator support', 'Specialist referral coordination', 'Extended consultation times'],
      ctaLabel: 'Choose Premier',
      ctaHref: '#contact',
      highlighted: false,
    },
  ],
}: Partial<PricingTableProps>) {
  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4 animate-fade-in-up">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {tiers.map(function (tier, i) {
            return (
              <Card key={i} className={'card-hover relative flex flex-col rounded-xl border border-border bg-card shadow-sm transition-all ' + (tier.highlighted ? 'ring-2 ring-ring scale-105' : '')}>
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge>Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{tier.name}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                    {tier.period && <span className="text-muted-foreground">/{tier.period}</span>}
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {tier.features.map(function (feature, j) {
                      return (
                        <li key={j} className="flex items-start gap-2 text-sm">
                          <span className="mt-0.5 text-primary">&#10003;</span>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      );
                    })}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full transition-all duration-200 hover:scale-105" variant={tier.highlighted ? 'default' : 'outline'} asChild>
                    <a href={tier.ctaHref}>{tier.ctaLabel}</a>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
