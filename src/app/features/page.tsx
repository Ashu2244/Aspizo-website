import Link from "next/link";
import {
  Scan,
  FileSpreadsheet,
  Monitor,
  Brain,
  ArrowRight,
  X,
  Check,
} from "lucide-react";
import ScreenshotPlaceholder from "@/components/ScreenshotPlaceholder";
import FeatureIcon from "@/components/FeatureIcon";
import CTABanner from "@/components/CTABanner";
import { features } from "@/lib/data";

const detailedFeatures = [
  {
    title: "Auto Detection & Counting",
    icon: Scan,
    items: [
      "YOLO-based vehicle detection + tracking",
      "Centroid / foot-point line-cross counting (no duplicate counts)",
      "Dual-lane (left/right) or single-lane mode",
      "Auto count line placement + manual draw on video",
      "Flip direction / invert lanes",
    ],
  },
  {
    title: "Aspizo Survey Output",
    icon: FileSpreadsheet,
    items: [
      "14 IRC vehicle classes (full Aspizo taxonomy)",
      "Auto-filled: Date, Time, Lane, Direction, Class, Speed, Axles, Spacing",
      "Export to CSV/Excel compatible with Aspizo workflow",
      "Stop mid-run and still save partial CSV",
    ],
  },
  {
    title: "Live ATCC Preview",
    icon: Monitor,
    items: [
      "MJPEG live stream during processing",
      "Red count line overlay + vehicle boxes + live COUNT",
      "Speed modes: Fast / Balanced / Accurate",
      "Survey clock display: DVR start + elapsed + buffer",
    ],
  },
  {
    title: "AI Learning (Advanced)",
    icon: Brain,
    items: [
      "Review queue for misclassified crops",
      "Train custom Aspizo classifier from labeled images",
      "CSV-assisted label extraction from existing reports",
      "GPU training support (Colab notebook included)",
    ],
  },
];

export default function FeaturesPage() {
  return (
    <>
      <section className="border-b border-border bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Aspizo Traffic Analyzer
          </p>
          <h1 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl">
            Features
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted">
            Everything you need to automate traffic count and classification
            from DVR highway videos.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground">
            Manual vs Automated Survey
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="border border-red-900/50 bg-red-950/30 p-6">
              <div className="mb-4 flex items-center gap-2 text-red-400">
                <X className="h-5 w-5" />
                <h3 className="text-lg font-semibold">Manual Survey</h3>
              </div>
              <ul className="space-y-3 text-sm text-muted">
                <li>Watch hours of DVR footage frame by frame</li>
                <li>Click each vehicle manually in Aspizo</li>
                <li>High operator fatigue and inconsistent counts</li>
                <li>Days of data entry per survey corridor</li>
                <li>Difficult to validate or replay counts</li>
              </ul>
            </div>
            <div className="border border-emerald-900/50 bg-emerald-950/30 p-6">
              <div className="mb-4 flex items-center gap-2 text-emerald-400">
                <Check className="h-5 w-5" />
                <h3 className="text-lg font-semibold">With Aspizo Analyzer</h3>
              </div>
              <ul className="space-y-3 text-sm text-muted">
                <li>Load video folder and run Auto Detect</li>
                <li>AI tracks and classifies every vehicle automatically</li>
                <li>Live ATCC preview with count line overlay</li>
                <li>Export ready-to-use Aspizo CSV in minutes</li>
                <li>Stop anytime — partial counts preserved</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {detailedFeatures.map((section, index) => (
              <div
                key={section.title}
                className={`grid items-center gap-8 lg:grid-cols-2 ${
                  index % 2 === 1 ? "lg:[direction:rtl]" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md border border-border bg-surface-raised text-accent">
                    <section.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-foreground">
                    {section.title}
                  </h3>
                  <ul className="space-y-2">
                    {section.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-muted"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                  <ScreenshotPlaceholder
                    label={`${section.title} screenshot`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center text-3xl font-bold text-foreground">
            All Features at a Glance
          </h2>
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
              href="/download"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 font-semibold text-background transition-colors hover:bg-accent-hover"
            >
              Download for Windows
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
