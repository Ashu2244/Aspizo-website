import FAQAccordion from "@/components/FAQAccordion";
import { docsSections, faqs } from "@/lib/data";

export default function DocsPage() {
  return (
    <>
      <section className="border-b border-border bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Aspizo Traffic Analyzer
          </p>
          <h1 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl">
            Documentation
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted">
            Installation, survey setup, auto-detect settings, and
            troubleshooting guide.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {docsSections.map((section, index) => (
              <article
                key={section.title}
                id={section.title.toLowerCase().replace(/\s+/g, "-")}
                className="border border-border bg-surface-raised p-6"
              >
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-accent/50 text-sm font-bold text-accent">
                    {index + 1}
                  </span>
                  <h2 className="text-xl font-bold text-foreground">
                    {section.title}
                  </h2>
                </div>
                <p className="leading-relaxed text-muted">{section.content}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-3xl font-bold text-foreground">
            FAQ
          </h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>
    </>
  );
}
