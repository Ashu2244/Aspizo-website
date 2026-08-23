import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Server } from "lucide-react";
import FeatureIcon from "@/components/FeatureIcon";
import FAQAccordion from "@/components/FAQAccordion";
import CTABanner from "@/components/CTABanner";
import {
  incidentHowItWorks,
  incidentBenefits,
  incidentTmcFeatures,
  incidentTechStack,
  incidentFaqs,
} from "@/lib/data";

export default function HighwayIncidentManagementPage() {
  return (
    <>
      <section className="relative min-h-[92vh] overflow-hidden">
        <Image
          src="/hero-highway-incident.png"
          alt="Highway Incident Management — AI control room monitoring 300 km corridor with automatic incident detection"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/88 to-background/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/55" />

        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Highway Incident Management · AID & Camera Management
          </p>
          <h1 className="mb-5 max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            300 cameras. Zero manual watching. Instant incident alerts.
          </h1>
          <p className="mb-10 max-w-xl text-lg text-muted sm:text-xl">
            Centralized AI-powered automatic incident detection over your
            existing IP cameras — 24/7 vehicle tracking, smart ROI masking, and
            TMC control room with chainage alerts.
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
              href="/about"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-surface/60 px-6 py-3.5 text-base font-semibold text-foreground backdrop-blur-sm transition-colors hover:bg-surface"
            >
              Technical overview
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface py-6">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-x-8 gap-y-3 px-4 text-sm font-medium text-foreground">
          {[
            "300 RTSP/ONVIF feeds",
            "YOLO + ByteTrack",
            "WebRTC <300ms",
            "TMC dashboard",
            "No new cameras",
          ].map((item) => (
            <span key={item} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-accent" />
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* Problem */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-foreground">
                The problem
              </h2>
              <p className="mb-4 leading-relaxed text-muted">
                A 300 km highway stretch with 300 existing IP cameras — one per
                km. Operators cannot manually watch 300 screens around the
                clock. Missed incidents mean delayed response, longer
                congestion, and safety risk.
              </p>
              <p className="leading-relaxed text-muted">
                Highway Incident Management runs{" "}
                <strong className="text-foreground">100% automated</strong> in
                the background — no new field cameras, no operator fatigue.
                Software-only deployment in your central control room.
              </p>
            </div>
            <div className="border border-border bg-surface-raised p-8">
              <div className="mb-6 grid grid-cols-3 gap-4 text-center">
                {[
                  { value: "300", label: "IP cameras" },
                  { value: "300", label: "km corridor" },
                  { value: "24/7", label: "automated AID" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-2xl font-bold text-accent">{s.value}</p>
                    <p className="text-xs text-muted">{s.label}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-2 text-sm text-muted">
                <p className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Green — Normal
                </p>
                <p className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-red-500" />
                  Red — Active incident
                </p>
                <p className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-zinc-500" />
                  Grey — Offline camera
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-y border-border bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              End-to-end pipeline
            </h2>
            <p className="text-muted">
              From RTSP ingestion to TMC alert — fully automated
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {incidentHowItWorks.map((step) => (
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
            <code className="text-xs text-muted sm:text-sm">
              [300 RTSP feeds] → [DeepStream + YOLO + ByteTrack] → Incident
              Logic + ROI Mask → [Redis Alert] → [TMC Dashboard + Evidence]
            </code>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              Why highway operators choose it
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {incidentBenefits.map((b) => (
              <div
                key={b.title}
                className="border border-border bg-surface-raised p-6"
              >
                <FeatureIcon name={b.icon} />
                <h3 className="mt-4 mb-2 text-lg font-semibold text-foreground">
                  {b.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TMC Features */}
      <section className="border-y border-border bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              TMC control room features
            </h2>
            <p className="text-muted">
              Built for traffic management centres — instant response, full
              situational awareness
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {incidentTmcFeatures.map((f) => (
              <div
                key={f.title}
                className="border border-border bg-surface-raised p-5"
              >
                <FeatureIcon name={f.icon} />
                <h3 className="mt-3 mb-1.5 font-semibold text-foreground">
                  {f.title}
                </h3>
                <p className="text-sm text-muted">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual strip mock */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-2xl font-bold text-foreground">
            300 km linear status map
          </h2>
          <div className="overflow-hidden border border-border bg-surface-raised p-6">
            <div className="mb-4 flex justify-between text-xs text-muted">
              <span>KM 0</span>
              <span className="font-semibold text-red-400">
                ● INCIDENT KM 142.4
              </span>
              <span>KM 300</span>
            </div>
            <div className="flex h-4 overflow-hidden rounded-sm">
              {Array.from({ length: 60 }).map((_, i) => {
                const km = i * 5;
                let color = "bg-emerald-600";
                if (km >= 140 && km <= 145) color = "bg-red-500 animate-pulse";
                else if (km === 220 || km === 285) color = "bg-zinc-600";
                return (
                  <div
                    key={i}
                    className={`flex-1 ${color} border-r border-background/20`}
                    title={`KM ${km}`}
                  />
                );
              })}
            </div>
            <p className="mt-4 text-center text-sm text-muted">
              Entire corridor at a glance — drill into any red segment for live
              feed, evidence, and PTZ control
            </p>
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="border-y border-border bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-center justify-center gap-2">
            <Server className="h-6 w-6 text-accent" />
            <h2 className="text-2xl font-bold text-foreground">
              Technical stack & deployment
            </h2>
          </div>
          <div className="space-y-4">
            {incidentTechStack.map((row) => (
              <div
                key={row.layer}
                className="grid gap-2 border border-border bg-surface-raised p-4 sm:grid-cols-[140px_1fr]"
              >
                <span className="text-sm font-semibold text-accent">
                  {row.layer}
                </span>
                <span className="text-sm text-muted">{row.tech}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-muted">
            On-premises GPU workstation in central control room — Dual NVIDIA
            RTX 4090 or L4 class hardware
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-3xl font-bold text-foreground">
            FAQ
          </h2>
          <FAQAccordion items={incidentFaqs} />
        </div>
      </section>

      <CTABanner />
    </>
  );
}
