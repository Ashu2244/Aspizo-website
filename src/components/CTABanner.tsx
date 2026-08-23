import Link from "next/link";
import { Download, ArrowRight, Mail } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="border-t border-border bg-surface py-16">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">
          Ready to modernize your highway operations?
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-muted">
          Request a Highway Incident Management demo, Aspizo Vision survey
          walkthrough, or download Traffic Analyzer for Windows.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 font-semibold text-background transition-colors hover:bg-accent-hover"
          >
            <Mail className="h-4 w-4" />
            Contact Aspizo
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/download"
            className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 font-semibold text-foreground transition-colors hover:bg-surface-raised"
          >
            <Download className="h-5 w-5" />
            Download Traffic Analyzer
          </Link>
        </div>
      </div>
    </section>
  );
}
