"use client";
import React from "react";
import { WavyBackground } from "@/components/ui/backgrounds/wavy-background";
import { TextGenerateEffect } from "@/components/ui/text/text-generate-effect";
import { Button } from "@/components/ui/button";

interface HeroWavesProps {
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  waveColors?: string[];
}

export default function HeroWaves({
  title = "Compassionate care, whenever you need it",
  subtitle = "CareWave Health combines modern medicine with a human touch—same-day visits, trusted doctors, and preventive care for your whole family.",
  ctaLabel = "Book an Appointment",
  ctaHref = "#contact",
  secondaryCtaLabel = "Explore Services",
  secondaryCtaHref = "#services",
  waveColors,
}: HeroWavesProps) {
  return (
    <WavyBackground
      colors={waveColors || ["#10b981", "#14b8a6", "#34d399", "#5eead4", "#6ee7b7"]}
      backgroundFill="black"
      waveOpacity={0.5}
      speed="slow"
      containerClassName="relative min-h-screen"
    >
      <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center animate-fade-in-up">
        <TextGenerateEffect words={title} className="text-4xl font-bold text-white md:text-6xl lg:text-7xl" />
        {subtitle && <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80 md:text-xl">{subtitle}</p>}
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <Button size="lg" className="px-8 py-6 text-lg bg-background text-foreground hover:bg-background/90 transition-all duration-200 hover:scale-105" asChild>
            <a href={ctaHref}>{ctaLabel}</a>
          </Button>
          {secondaryCtaLabel && secondaryCtaHref && (
            <Button variant="outline" size="lg" className="px-8 py-6 text-lg border-background/30 text-background hover:bg-background/10 transition-all duration-200 hover:scale-105" asChild>
              <a href={secondaryCtaHref}>{secondaryCtaLabel}</a>
            </Button>
          )}
        </div>
      </div>
    </WavyBackground>
  );
}
