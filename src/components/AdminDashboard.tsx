"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

// Google Apps Script web app URL (Aspizo-Admin/Code.gs deployment).
const METRICS_URL =
  "https://script.google.com/macros/s/AKfycbz1Oq5zq09HyCTubxpWiEmcJ0Qv0NjTPoj-CGSz7nWNOl-iYIYcl44E5XbxCD0gxlE6/exec";

type Machine = {
  machine_id: string;
  hostname: string;
  first_seen: string;
  last_seen: string;
  version: string;
  os: string;
  cpu: string;
  ram_gb: number | string;
  gpu: string;
  accel: string;
  launches: number;
  runs: number;
  runs_ok: number;
  runs_failed: number;
  videos: number;
  vehicles: number;
  minutes_processed: number;
  last_error: string;
};

type Day = { day: string; launches: number; runs: number; failed: number; active: number };
type Event = { time: string; machine_id: string; hostname: string; version: string; event: string; data: string };
type Stats = { ok: boolean; error?: string; generated: string; machines: Machine[]; days: Day[]; recent: Event[] };

const DAY = 24 * 60 * 60 * 1000;
const num = (v: unknown) => Number(v) || 0;
const fmtDate = (s: string) => (s ? new Date(s).toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" }) : "–");

export default function AdminDashboard() {
  const [url, setUrl] = useState(METRICS_URL);
  const [password, setPassword] = useState("");
  const [stats, setStats] = useState<Stats | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const load = useCallback(async (endpoint: string, key: string) => {
    if (!endpoint || !key) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${endpoint}?key=${encodeURIComponent(key)}&t=${Date.now()}`);
      const data: Stats = await res.json();
      if (!data.ok) throw new Error(data.error === "unauthorized" ? "Galat password" : data.error || "Error");
      setStats(data);
      sessionStorage.setItem("aspizo-admin", JSON.stringify({ url: endpoint, key }));
    } catch (err) {
      setStats(null);
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    try {
      const saved = JSON.parse(sessionStorage.getItem("aspizo-admin") || "null");
      if (saved?.key) {
        const endpoint = METRICS_URL || saved.url || "";
        setUrl(endpoint);
        setPassword(saved.key);
        load(endpoint, saved.key);
      }
    } catch {
      /* ignore */
    }
  }, [load]);

  const summary = useMemo(() => {
    if (!stats) return null;
    const now = Date.now();
    const ms = stats.machines;
    const seenWithin = (d: number) => ms.filter((m) => m.last_seen && now - new Date(m.last_seen).getTime() < d).length;
    const versions: Record<string, number> = {};
    ms.forEach((m) => (versions[m.version || "?"] = (versions[m.version || "?"] || 0) + 1));
    return {
      installs: ms.length,
      today: seenWithin(DAY),
      week: seenWithin(7 * DAY),
      month: seenWithin(30 * DAY),
      launches: ms.reduce((a, m) => a + num(m.launches), 0),
      runs: ms.reduce((a, m) => a + num(m.runs), 0),
      ok: ms.reduce((a, m) => a + num(m.runs_ok), 0),
      failed: ms.reduce((a, m) => a + num(m.runs_failed), 0),
      videos: ms.reduce((a, m) => a + num(m.videos), 0),
      vehicles: ms.reduce((a, m) => a + num(m.vehicles), 0),
      hours: ms.reduce((a, m) => a + num(m.minutes_processed), 0) / 60,
      gpu: ms.filter((m) => m.accel === "cuda").length,
      versions: Object.entries(versions).sort((a, b) => b[1] - a[1]),
    };
  }, [stats]);

  if (!stats || !summary) {
    return (
      <div className="mx-auto max-w-md px-4 py-24">
        <h1 className="mb-6 text-2xl font-bold text-foreground">Admin</h1>
        <form
          className="space-y-3"
          onSubmit={(e) => {
            e.preventDefault();
            load(url.trim(), password);
          }}
        >
          {!METRICS_URL && (
            <input
              className="w-full border border-border bg-surface px-3 py-2 text-foreground"
              placeholder="Apps Script web app URL"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          )}
          <input
            type="password"
            className="w-full border border-border bg-surface px-3 py-2 text-foreground"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" disabled={loading} className="w-full bg-accent px-4 py-2 font-semibold text-white disabled:opacity-60">
            {loading ? "Loading…" : "Open"}
          </button>
          {error && <p className="text-sm text-red-500">{error}</p>}
        </form>
      </div>
    );
  }

  const maxDay = Math.max(1, ...stats.days.map((d) => d.runs + d.launches));
  const cards: [string, string | number][] = [
    ["Installed computers", summary.installs],
    ["Active today", summary.today],
    ["Active 7 days", summary.week],
    ["Active 30 days", summary.month],
    ["App launches", summary.launches],
    ["Runs (ok / failed)", `${summary.ok} / ${summary.failed}`],
    ["Videos processed", summary.videos],
    ["Vehicles counted", summary.vehicles.toLocaleString("en-IN")],
    ["Processing hours", summary.hours.toFixed(1)],
    ["GPU computers", summary.gpu],
  ];

  return (
    <div className="mx-auto max-w-7xl space-y-10 px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-3xl font-bold text-foreground">Aspizo Traffic Analyzer — Metrics</h1>
        <div className="flex items-center gap-3 text-sm text-muted">
          Updated {fmtDate(stats.generated)}
          <button onClick={() => load(url, password)} className="border border-border px-3 py-1 text-foreground">
            {loading ? "…" : "Refresh"}
          </button>
          <button
            onClick={() => {
              sessionStorage.removeItem("aspizo-admin");
              setStats(null);
              setPassword("");
            }}
            className="border border-border px-3 py-1 text-foreground"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {cards.map(([label, value]) => (
          <div key={label} className="border border-border bg-surface-raised p-4">
            <p className="text-xs font-medium uppercase text-muted">{label}</p>
            <p className="mt-1 text-2xl font-bold text-foreground">{value}</p>
          </div>
        ))}
      </div>

      <section className="grid gap-6 lg:grid-cols-3">
        <div className="border border-border bg-surface-raised p-5 lg:col-span-2">
          <h2 className="mb-4 font-semibold text-foreground">Last 30 days</h2>
          <div className="space-y-1 text-xs">
            {stats.days.map((d) => (
              <div key={d.day} className="flex items-center gap-3">
                <span className="w-20 shrink-0 text-muted">{d.day.slice(5)}</span>
                <div className="flex h-4 flex-1 overflow-hidden bg-surface">
                  <div className="bg-accent" style={{ width: `${(d.runs / maxDay) * 100}%` }} />
                  <div className="bg-accent/30" style={{ width: `${(d.launches / maxDay) * 100}%` }} />
                </div>
                <span className="w-48 shrink-0 text-right text-muted">
                  {d.active} PCs · {d.launches} launches · {d.runs} runs{d.failed ? ` · ${d.failed} failed` : ""}
                </span>
              </div>
            ))}
            {!stats.days.length && <p className="text-muted">Abhi koi data nahi.</p>}
          </div>
        </div>
        <div className="border border-border bg-surface-raised p-5">
          <h2 className="mb-4 font-semibold text-foreground">Versions</h2>
          <ul className="space-y-2 text-sm">
            {summary.versions.map(([v, n]) => (
              <li key={v} className="flex justify-between">
                <span className="text-foreground">{v}</span>
                <span className="text-muted">{n} PCs</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border border-border bg-surface-raised">
        <h2 className="border-b border-border p-5 font-semibold text-foreground">Computers ({stats.machines.length})</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-surface text-xs uppercase text-muted">
              <tr>
                {["Computer", "Version", "Hardware", "Mode", "First seen", "Last seen", "Launches", "Runs ok/fail", "Videos", "Vehicles", "Minutes", "Last error"].map((h) => (
                  <th key={h} className="whitespace-nowrap px-3 py-2">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[...stats.machines]
                .sort((a, b) => new Date(b.last_seen).getTime() - new Date(a.last_seen).getTime())
                .map((m) => (
                  <tr key={m.machine_id} className="border-t border-border align-top">
                    <td className="px-3 py-2 font-medium text-foreground" title={m.machine_id}>{m.hostname || m.machine_id.slice(0, 8)}</td>
                    <td className="px-3 py-2">{m.version}</td>
                    <td className="px-3 py-2 text-xs text-muted">
                      {m.cpu}
                      <br />
                      {m.ram_gb} GB RAM · {m.gpu}
                    </td>
                    <td className="px-3 py-2">{m.accel === "cuda" ? "GPU" : m.accel === "openvino" ? "OpenVINO" : "CPU"}</td>
                    <td className="whitespace-nowrap px-3 py-2 text-xs">{fmtDate(m.first_seen)}</td>
                    <td className="whitespace-nowrap px-3 py-2 text-xs">{fmtDate(m.last_seen)}</td>
                    <td className="px-3 py-2">{num(m.launches)}</td>
                    <td className="px-3 py-2">{num(m.runs_ok)} / {num(m.runs_failed)}</td>
                    <td className="px-3 py-2">{num(m.videos)}</td>
                    <td className="px-3 py-2">{num(m.vehicles)}</td>
                    <td className="px-3 py-2">{num(m.minutes_processed)}</td>
                    <td className="max-w-xs px-3 py-2 text-xs text-red-500">{m.last_error}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="border border-border bg-surface-raised">
        <h2 className="border-b border-border p-5 font-semibold text-foreground">Recent activity</h2>
        <div className="max-h-[480px] overflow-y-auto">
          <table className="w-full text-left text-xs">
            <tbody>
              {stats.recent.map((ev, i) => (
                <tr key={i} className="border-t border-border">
                  <td className="whitespace-nowrap px-3 py-1.5 text-muted">{fmtDate(ev.time)}</td>
                  <td className="px-3 py-1.5 text-foreground">{ev.hostname || ev.machine_id.slice(0, 8)}</td>
                  <td className="px-3 py-1.5">{ev.version}</td>
                  <td className="px-3 py-1.5 font-semibold">{ev.event}</td>
                  <td className="px-3 py-1.5 text-muted">{ev.data !== "{}" ? ev.data : ""}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
