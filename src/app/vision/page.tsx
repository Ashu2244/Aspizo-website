import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import FeatureIcon from "@/components/FeatureIcon";
import FAQAccordion from "@/components/FAQAccordion";
import CTABanner from "@/components/CTABanner";
import {
  visionHowItWorks,
  visionBenefits,
  visionDefects,
  visionFaqs,
} from "@/lib/data";

export default function VisionPage() {
  return (
    <>
      <section className="relative min-h-[85vh] overflow-hidden">
        <Image
          src="/hero-road-vision.png"
          alt="Highway dashcam defect survey with Aspizo Vision Excel report"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />

        <div className="relative mx-auto flex min-h-[85vh] max-w-7xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Aspizo Vision · AI Road Defect Survey Reports
          </p>
          <h1 className="mb-5 max-w-3xl text-4xl font-bold leading-[1.1] text-foreground sm:text-5xl lg:text-6xl">
            Dashcam surveys → NHAI-ready defect reports
          </h1>
          <p className="mb-10 max-w-xl text-lg text-muted sm:text-xl">
            Detect pavement and roadside defects from survey drives, map them to
            corridor chainage, and deliver an audit-ready Excel pack.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3.5 text-base font-semibold text-background transition-colors hover:bg-accent-hover"
            >
              Request a demo
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/traffic-analyzer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-surface/60 px-6 py-3.5 text-base font-semibold text-foreground backdrop-blur-sm transition-colors hover:bg-surface"
            >
              Looking for vehicle counts?
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface py-6">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-x-8 gap-y-3 px-4 text-sm font-medium text-foreground">
          {[
            "NHAI-style Excel",
            "Chainage km+mmm",
            "Annotated photos",
            "Video links",
          ].map((item) => (
            <span key={item} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-accent" />
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              Why teams use Aspizo Vision
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {visionBenefits.map((b) => (
              <div key={b.title} className="border border-border bg-surface-raised p-6">
                <FeatureIcon name={b.icon} />
                <h3 className="mt-4 mb-2 text-lg font-semibold text-foreground">
                  {b.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">How it works</h2>
            <p className="text-muted">Three steps from dashcam to NHAI Excel</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {visionHowItWorks.map((step) => (
              <div key={step.step} className="text-center">
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
          <div className="mt-12 border border-border bg-surface-raised px-6 py-5 text-center">
            <code className="text-sm text-muted">
              [Dashcam + KML] → [Aspizo Vision] → Defect Detect + Chainage →
              [NHAI Excel + Photos]
            </code>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              Defect coverage
            </h2>
            <p className="text-muted">
              Multi-model detection across pavement and roadside categories
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {visionDefects.map((d) => (
              <div
                key={d}
                className="flex items-center gap-2 border border-border bg-surface-raised px-4 py-3 text-sm text-muted"
              >
                <Check className="h-4 w-4 shrink-0 text-accent" />
                {d}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-3xl font-bold text-foreground">
            FAQ
          </h2>
          <FAQAccordion items={visionFaqs} />
          <p className="mt-8 text-center text-sm text-muted">
            Need vehicle counting from DVR?{" "}
            <Link href="/traffic-analyzer" className="text-accent hover:underline">
              See Aspizo Traffic Analyzer
            </Link>
          </p>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
