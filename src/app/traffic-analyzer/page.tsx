import Image from "next/image";
import Link from "next/link";
import {
  Download,
  ArrowRight,
  CheckCircle2,
  MapPin,
} from "lucide-react";
import FeatureIcon from "@/components/FeatureIcon";
import VehicleClassTable from "@/components/VehicleClassTable";
import CTABanner from "@/components/CTABanner";
import {
  stats,
  benefits,
  howItWorks,
  features,
  company,
} from "@/lib/data";

export default function TrafficAnalyzerPage() {
  return (
    <>
      <section className="relative min-h-[92vh] overflow-hidden">
        <Image
          src="/hero-highway-analyzer.png"
          alt="Dual-direction highway with CCTV cameras and Aspizo Traffic Analyzer generating survey reports"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />

        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
          <p className="animate-fade-up mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Aspizo Traffic Analyzer · Product
          </p>
          <h1 className="animate-fade-up-delay mb-5 max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Automated Traffic Surveys from DVR Video
          </h1>
          <p className="animate-fade-up-delay-2 mb-10 max-w-xl text-lg text-muted sm:text-xl">
            Dual-lane highway cameras feed Aspizo Traffic Analyzer — AI counts
            vehicles and exports Aspizo-ready CSV reports.
          </p>
          <div className="animate-fade-up-delay-2 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/download"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3.5 text-base font-semibold text-background transition-colors hover:bg-accent-hover"
            >
              <Download className="h-5 w-5" />
              Download for Windows
            </Link>
            <Link
              href="/features"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-surface/60 px-6 py-3.5 text-base font-semibold text-foreground backdrop-blur-sm transition-colors hover:border-muted hover:bg-surface"
            >
              See Features
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface py-5">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 sm:px-6 lg:px-8">
          {stats.map((stat) => (
            <div
              key={stat}
              className="flex items-center gap-2 text-sm font-medium text-foreground"
            >
              <CheckCircle2 className="h-4 w-4 text-accent" />
              {stat}
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              Why survey teams choose Traffic Analyzer
            </h2>
            <p className="mx-auto max-w-2xl text-muted">
              Replace hours of manual video review with automated detection and
              Aspizo-compatible export.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="border border-border bg-surface-raised p-6"
              >
                <FeatureIcon name={benefit.icon} />
                <h3 className="mt-4 mb-2 text-lg font-semibold text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              How it works
            </h2>
            <p className="text-muted">
              Camera → Detect → Report — three steps from DVR to CSV
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {howItWorks.map((step) => (
              <div key={step.step} className="relative text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-accent/50 bg-surface-raised text-lg font-bold text-accent">
                  {step.step}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              Built for field survey teams
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="border border-border bg-surface-raised p-5"
              >
                <FeatureIcon name={feature.icon} />
                <h3 className="mt-3 mb-1.5 font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted">{feature.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/features"
              className="inline-flex items-center gap-2 font-semibold text-accent hover:underline"
            >
              View all features
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              14 IRC Vehicle Classes
            </h2>
          </div>
          <VehicleClassTable />
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid overflow-hidden border border-border lg:grid-cols-2">
            <div className="bg-surface-raised p-8 sm:p-12">
              <div className="mb-4 flex items-center gap-2 text-accent">
                <MapPin className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-wider">
                  Real Use Case
                </span>
              </div>
              <h2 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">
                {company.useCase}
              </h2>
              <p className="mb-6 leading-relaxed text-muted">
                Built from real highway ATCC surveys across India. Operators
                load Uni+ DVR footage from corridor cameras on both directions,
                run Auto Detect, and export CSV reports matching Aspizo formats.
              </p>
              <Link
                href="/docs"
                className="inline-flex items-center gap-2 font-semibold text-accent hover:underline"
              >
                Read documentation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="relative min-h-[280px]">
              <Image
                src="/hero-highway-analyzer.png"
                alt="Highway corridor with dual-direction traffic and survey cameras"
                fill
                className="object-cover object-[70%_center]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
          <p className="mt-8 text-center text-sm text-muted">
            Looking for road defect reports instead?{" "}
            <Link href="/vision" className="text-accent hover:underline">
              See Aspizo Vision
            </Link>
          </p>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
