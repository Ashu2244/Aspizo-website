"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { company } from "@/lib/data";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <section className="border-b border-border bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Aspizo IT Solutions
          </p>
          <h1 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl">
            Contact
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted">
            Request a demo for Highway Incident Management or Aspizo Vision, or
            get support for Traffic Analyzer.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <h2 className="mb-6 text-2xl font-bold text-foreground">
                Get in touch
              </h2>
              <div className="space-y-6">
                {[
                  { icon: Mail, label: "Email", value: company.email, href: `mailto:${company.email}` },
                  { icon: Phone, label: "Phone", value: company.phone },
                  { icon: MapPin, label: "Coverage", value: company.location },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-surface-raised">
                      <item.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm text-muted hover:text-accent"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-muted">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3">
              {submitted ? (
                <div className="border border-emerald-900/50 bg-emerald-950/30 p-8 text-center">
                  <h3 className="mb-2 text-xl font-bold text-emerald-400">
                    Message sent!
                  </h3>
                  <p className="text-muted">
                    Thank you for contacting {company.name}. We&apos;ll get back
                    to you soon.
                  </p>
                  <p className="mt-4 text-sm text-muted/70">
                    Note: Connect this form to Formspree, Resend, or your API
                    backend for production use.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="border border-border bg-surface-raised p-6 sm:p-8"
                >
                  <div className="grid gap-6 sm:grid-cols-2">
                    {[
                      { id: "name", label: "Name *", type: "text", required: true },
                      { id: "company", label: "Company", type: "text" },
                      { id: "email", label: "Email *", type: "email", required: true },
                      { id: "phone", label: "Phone", type: "tel" },
                    ].map((field) => (
                      <div key={field.id}>
                        <label
                          htmlFor={field.id}
                          className="mb-1.5 block text-sm font-medium text-foreground"
                        >
                          {field.label}
                        </label>
                        <input
                          id={field.id}
                          name={field.id}
                          type={field.type}
                          required={field.required}
                          className="w-full rounded-md border border-border bg-surface px-4 py-2.5 text-sm text-foreground outline-none placeholder:text-muted focus:border-accent focus:ring-1 focus:ring-accent"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <label
                      htmlFor="inquiry"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      Inquiry Type
                    </label>
                    <select
                      id="inquiry"
                      name="inquiry"
                      className="w-full rounded-md border border-border bg-surface px-4 py-2.5 text-sm text-foreground outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                    >
                      <option value="field-survey">Field Survey / On-site</option>
                      <option value="camera-install">Camera Installation</option>
                      <option value="security">Highway Security</option>
                      <option value="incident-mgmt">Highway Incident Management</option>
                      <option value="vision">Aspizo Vision</option>
                      <option value="traffic">Traffic Analyzer</option>
                      <option value="enterprise">Enterprise License</option>
                      <option value="support">Technical Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="mt-6">
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full rounded-md border border-border bg-surface px-4 py-2.5 text-sm text-foreground outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                    />
                  </div>
                  <button
                    type="submit"
                    className="mt-6 inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 font-semibold text-background transition-colors hover:bg-accent-hover"
                  >
                    <Send className="h-4 w-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
