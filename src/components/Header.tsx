"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Mail } from "lucide-react";
import { navLinks } from "@/lib/data";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-md border border-accent/40 bg-surface-raised text-sm font-bold text-accent">
            A
          </div>
          <div className="leading-tight">
            <span className="block text-sm font-bold tracking-wide text-foreground sm:text-base">
              Aspizo
            </span>
            <span className="hidden text-[11px] uppercase tracking-[0.12em] text-muted sm:block">
              IT Solutions
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? "bg-surface-raised text-accent"
                  : "text-muted hover:bg-surface hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-background transition-colors hover:bg-accent-hover sm:inline-flex"
          >
            <Mail className="h-4 w-4" />
            Contact
          </Link>

          <button
            type="button"
            className="rounded-md p-2 text-muted hover:bg-surface lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="border-t border-border bg-surface px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`rounded-md px-3 py-2.5 text-sm font-medium ${
                  isActive(link.href)
                    ? "bg-surface-raised text-accent"
                    : "text-muted hover:bg-surface-raised"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-background"
            >
              <Mail className="h-4 w-4" />
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
