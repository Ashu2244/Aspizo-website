import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import FeatureIcon from "@/components/FeatureIcon";
import CTABanner from "@/components/CTABanner";
import { company, products, fieldServices } from "@/lib/data";

const compareRows = [
  {
    job: "Input",
    incident: "300 live RTSP/ONVIF feeds",
    vision: "Dashcam survey videos + KML",
    traffic: "DVR / CCTV highway videos",
  },
  {
    job: "Detects",
    incident: "Stoppages, accidents, abnormal events",
    vision: "Road & roadside defects",
    traffic: "Vehicles (14 IRC classes)",
  },
  {
    job: "Output",
    incident: "TMC alerts + evidence + incident log",
    vision: "NHAI-style Excel + photos",
    traffic: "Aspizo-compatible CSV",
  },
  {
    job: "Best for",
    incident: "Live highway surveillance / TMC",
    vision: "Pavement / asset condition",
    traffic: "ATCC / traffic counts",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[88vh] overflow-hidden">
        <Image
          src="/hero-highway-incident.png"
          alt="Aspizo IT Solutions — AI for Indian highways"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/88 to-background/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/55" />

        <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
          <p className="animate-fade-up mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            {company.name}
          </p>
          <h1 className="animate-fade-up-delay mb-5 max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            AI for Indian highways
          </h1>
          <p className="animate-fade-up-delay-2 mb-10 max-w-xl text-lg text-muted sm:text-xl">
            AI for Indian highways nationwide. Incident response, road defects,
            traffic counts, field surveys, and camera installation — built for
            NHAI, TMC, PWD, and survey contractors across India.
          </p>
          <div className="animate-fade-up-delay-2 flex flex-wrap gap-3">
            {products.map((p) => (
              <Link
                key={p.id}
                href={p.href}
                className={
                  p.id === "highway-incident-management"
                    ? "inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-background transition-colors hover:bg-accent-hover"
                    : "inline-flex items-center gap-2 rounded-md border border-border bg-surface/60 px-5 py-3 text-sm font-semibold text-foreground backdrop-blur-sm transition-colors hover:bg-surface"
                }
              >
                {p.name.replace("Aspizo ", "").replace("Highway ", "")}
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              Our products
            </h2>
            <p className="mx-auto max-w-2xl text-muted">
              Three AI systems for every stage of highway operations — live
              surveillance, pavement surveys, and traffic counts.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {products.map((p) => (
              <Link
                key={p.id}
                href={p.href}
                className="group overflow-hidden border border-border bg-surface-raised transition-colors hover:border-accent/40"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-raised via-surface-raised/30 to-transparent" />
                </div>
                <div className="p-6">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                    {p.subtitle}
                  </p>
                  <h3 className="mb-3 text-xl font-bold text-foreground">
                    {p.name}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-muted">
                    {p.description}
                  </p>
                  <div className="mb-5 flex flex-wrap gap-1.5">
                    {p.highlights.map((h) => (
                      <span
                        key={h}
                        className="border border-border bg-surface px-2 py-0.5 text-[11px] text-muted"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
                    {p.cta}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col items-center text-center lg:flex-row lg:items-end lg:justify-between lg:text-left">
            <div className="max-w-2xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Field + Software
              </p>
              <h2 className="mb-4 text-3xl font-bold text-foreground">
                We work on the highway, not just behind a desk
              </h2>
              <p className="text-muted">
                {company.experienceNote} Aspizo delivers both AI software and
                on-ground teams for surveys, camera installation, and security.
              </p>
            </div>
            <div className="mt-6 shrink-0 border border-accent/30 bg-surface-raised px-8 py-5 text-center lg:mt-0">
              <p className="text-4xl font-bold text-accent">
                {company.experienceYears}
              </p>
              <p className="text-sm font-medium text-muted">Years experience</p>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {fieldServices.map((s) => (
              <div
                key={s.title}
                className="border border-border bg-surface-raised p-5"
              >
                <FeatureIcon name={s.icon} />
                <h3 className="mt-3 mb-2 font-semibold text-foreground">
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted">
            Field survey · Camera install · Security · AI software — one team,
            pan-India
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-surface py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center text-2xl font-bold text-foreground">
            Which product do you need?
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-3 py-3 font-semibold text-muted">Job</th>
                  <th className="px-3 py-3 font-semibold text-foreground">
                    Incident Mgmt
                  </th>
                  <th className="px-3 py-3 font-semibold text-foreground">
                    Aspizo Vision
                  </th>
                  <th className="px-3 py-3 font-semibold text-foreground">
                    Traffic Analyzer
                  </th>
                </tr>
              </thead>
              <tbody className="text-muted">
                {compareRows.map((row) => (
                  <tr key={row.job} className="border-b border-border/60">
                    <td className="px-3 py-3 font-medium text-foreground">
                      {row.job}
                    </td>
                    <td className="px-3 py-3">{row.incident}</td>
                    <td className="px-3 py-3">{row.vision}</td>
                    <td className="px-3 py-3">{row.traffic}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="mb-4 text-2xl font-bold text-foreground">
            Built for Indian highway teams
          </h2>
          <p className="mb-8 text-muted">
            Operating pan-India. From 300-camera TMC deployments to corridor
            surveys, camera installation, and ATCC counts.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 font-semibold text-foreground transition-colors hover:bg-surface"
          >
            <Mail className="h-4 w-4 text-accent" />
            Talk to Aspizo
          </Link>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
