import Link from "next/link";
import { company, navLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-md border border-accent/40 bg-surface-raised text-sm font-bold text-accent">
                A
              </div>
              <span className="text-lg font-bold text-foreground">
                {company.name}
              </span>
            </div>
            <p className="mb-4 max-w-md text-sm text-muted">{company.tagline}</p>
            <p className="mb-2 text-sm text-muted/80">
            Field surveys · Camera install · Security · Pan-India
            </p>
            <p className="text-sm text-muted/80">
              {company.location} · {company.email}
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted">
              Pages
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted">
              Legal
            </h3>
            <ul className="space-y-2 text-sm text-muted">
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
              <li className="pt-2 text-xs leading-relaxed text-muted/70">
                Survey accuracy depends on video quality, camera angle, and
                operator setup. Validate sample counts against manual checks.
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-sm text-muted/60">
          © 2025 {company.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
