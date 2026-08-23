import Link from "next/link";
import { ArrowRight, Target, Cpu, Cloud } from "lucide-react";
import FeatureIcon from "@/components/FeatureIcon";
import CTABanner from "@/components/CTABanner";
import { company, products, fieldServices } from "@/lib/data";

const roadmap = [
  {
    title: "Electron Packaging",
    description:
      "Single-click Traffic Analyzer installer with desktop shortcut and auto-start engine.",
    icon: Cpu,
  },
  {
    title: "Multi-Site Dashboard",
    description:
      "Central view of survey progress across multiple highway corridors and teams.",
    icon: Target,
  },
  {
    title: "Client Self-Serve Portal",
    description:
      "Aspizo Vision portal for clients to upload dashcam surveys and track NHAI report delivery.",
    icon: Cloud,
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-border bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Aspizo IT Solutions
          </p>
          <h1 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl">
            About {company.name}
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted">
            {company.experienceYears} years in the field. AI software built from
            real highway survey, camera, and security work.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-2xl font-bold text-foreground">Our Story</h2>
          <p className="mb-6 leading-relaxed text-muted">
            {company.name} is not only a software company — we are a field team
            that has spent{" "}
            <strong className="text-foreground">
              more than {company.experienceYears} years
            </strong>{" "}
            on highways across India doing on-site surveys, installing cameras,
            and deploying security systems. That ground experience is why our AI
            products work in real conditions, not just in demos.
          </p>
          <p className="mb-6 leading-relaxed text-muted">
            Today we combine field delivery with software — from{" "}
            <strong className="text-foreground">
              Highway Incident Management
            </strong>{" "}
            (300-camera AID over existing IP feeds) to{" "}
            <strong className="text-foreground">Aspizo Vision</strong> (dashcam
            road defect reports) and{" "}
            <strong className="text-foreground">Aspizo Traffic Analyzer</strong>{" "}
            (automated vehicle counts from DVR video).
          </p>
          <p className="mb-6 leading-relaxed text-muted">
            We deliver projects across India. One example from our field work:{" "}
            <strong className="text-foreground">{company.useCase}</strong> —
            where our teams went on-site, installed equipment, collected
            footage, and processed survey data end-to-end.
          </p>

          <h2 className="mb-4 text-2xl font-bold text-foreground">
            Our Mission
          </h2>
          <p className="mb-10 leading-relaxed text-muted">
            To modernize Indian highway operations nationwide — from field
            survey and camera deployment to AI-powered reporting and live
            incident response. Reports that meet IRC, NHAI, and state PWD
            practice, delivered by people who have done the work on the ground.
          </p>

          <h2 className="mb-6 text-2xl font-bold text-foreground">
            Field services
          </h2>
          <div className="mb-12 grid gap-4 sm:grid-cols-2">
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

          <h2 className="mb-6 text-2xl font-bold text-foreground">Products</h2>
          <div className="mb-4 grid gap-4 lg:grid-cols-3">
            {products.map((p) => (
              <Link
                key={p.id}
                href={p.href}
                className="border border-border bg-surface-raised p-5 transition-colors hover:border-accent/40"
              >
                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-accent">
                  {p.subtitle}
                </p>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {p.name}
                </h3>
                <p className="mb-3 text-sm text-muted">{p.tagline}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent">
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center text-3xl font-bold text-foreground">
            Product Roadmap
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {roadmap.map((item) => (
              <div
                key={item.title}
                className="border border-border bg-surface-raised p-6"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-md border border-border bg-surface">
                  <item.icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-2 text-3xl font-bold text-accent">
            {company.experienceYears}
          </p>
          <p className="mb-6 text-muted">
            Years of field experience · {company.location} coverage · Highway
            surveys, cameras, and security nationwide
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-semibold text-accent hover:underline"
          >
            Contact us for field or software projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
