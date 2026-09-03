import Link from "next/link";
import { Download, CheckCircle2, FileArchive, Monitor } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import {
  product,
  systemRequirements,
  downloadIncludes,
  installSteps,
  faqs,
} from "@/lib/data";

export default function DownloadPage() {
  return (
    <>
      <section className="border-b border-border bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Aspizo Traffic Analyzer
          </p>
          <h1 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl">
            Download
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted">
            Get Aspizo Traffic Analyzer for Windows — fully offline traffic
            survey automation.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 overflow-hidden border border-border bg-surface-raised">
            <div className="border-b border-border bg-surface px-8 py-6">
              <div className="flex items-center gap-3">
                <Monitor className="h-8 w-8 text-accent" />
                <div>
                  <h2 className="text-2xl font-bold text-foreground">
                    Aspizo Traffic Analyzer {product.version}
                  </h2>
                  <p className="text-muted">Windows Desktop Application</p>
                </div>
              </div>
            </div>
            <div className="p-8">
              <div className="mb-6 grid gap-4 sm:grid-cols-2">
                {[
                  ["Released", product.releaseDate],
                  ["File Size", product.fileSize],
                  ["Platform", "Windows 10/11 (64-bit)"],
                  ["File", product.fileName],
                ].map(([label, value]) => (
                  <div key={label} className="border border-border bg-surface p-4">
                    <p className="text-xs font-medium uppercase text-muted">
                      {label}
                    </p>
                    <p className="font-semibold text-foreground">{value}</p>
                  </div>
                ))}
              </div>

              <a
                href={product.downloadUrl}
                className="mb-4 flex w-full items-center justify-center gap-3 rounded-md bg-accent px-8 py-4 text-lg font-bold text-background transition-colors hover:bg-accent-hover"
              >
                <Download className="h-6 w-6" />
                Download for Windows
              </a>
              <p className="text-center text-xs text-muted">
                SHA256: {product.sha256}
              </p>
              <p className="mt-4 text-center text-sm text-muted">
                Requires Windows. Mac/Linux coming soon.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-foreground">
              <FileArchive className="h-5 w-5 text-accent" />
              What&apos;s included
            </h3>
            <ul className="grid gap-3 sm:grid-cols-2">
              {downloadIncludes.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 border border-border bg-surface-raised px-4 py-3 text-sm text-muted"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-success" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-12">
            <h3 className="mb-4 text-xl font-bold text-foreground">
              Quick Install Steps
            </h3>
            <ol className="space-y-4">
              {installSteps.map((step, i) => (
                <li
                  key={step}
                  className="flex items-start gap-4 border border-border bg-surface-raised p-4"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent/50 text-sm font-bold text-accent">
                    {i + 1}
                  </span>
                  <span className="pt-1 text-sm text-muted">{step}</span>
                </li>
              ))}
            </ol>
            <p className="mt-4 text-sm text-muted">
              First launch takes ~1–2 min (UI compile). Engine:{" "}
              <code className="rounded bg-surface px-1.5 py-0.5 text-accent">
                http://127.0.0.1:{product.enginePort}
              </code>{" "}
              · UI:{" "}
              <code className="rounded bg-surface px-1.5 py-0.5 text-accent">
                http://localhost:{product.uiPort}
              </code>
            </p>
          </div>

          <div className="mb-12 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-xl font-bold text-foreground">
                Minimum Requirements
              </h3>
              <ul className="space-y-2">
                {systemRequirements.minimum.map((req) => (
                  <li
                    key={req}
                    className="flex items-start gap-2 text-sm text-muted"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-bold text-foreground">
                Recommended
              </h3>
              <ul className="space-y-2">
                {systemRequirements.recommended.map((req) => (
                  <li
                    key={req}
                    className="flex items-start gap-2 text-sm text-muted"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-4 border border-border bg-surface p-4 text-sm text-muted">
            <strong className="text-foreground">User Guide:</strong>{" "}
            <Link href="/docs" className="text-accent hover:underline">
              View documentation
            </Link>{" "}
            · PDF guide placeholder (upload when ready)
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-3xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>
    </>
  );
}
