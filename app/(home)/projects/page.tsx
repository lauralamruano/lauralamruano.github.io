'use client'

import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Reveal } from "@/components/Reveal";
import { AccessibilityChallenge } from "@/components/AccessibilityChallenge";

type Filter = 'product' | 'accessibility' | 'frontend';

// Stylised mock-browser preview used for the featured project cards.
const BrowserMock = ({ accent }: { accent: string }) => (
  <div
    className="rounded-xl overflow-hidden border border-theme"
    style={{ background: `linear-gradient(135deg, rgb(var(--${accent}) / 0.9), rgb(var(--${accent}) / 0.55))` }}
    aria-hidden="true"
  >
    <div className="flex items-center gap-1.5 px-3 py-2 bg-black/20">
      <span className="w-2.5 h-2.5 rounded-full bg-white/70" />
      <span className="w-2.5 h-2.5 rounded-full bg-white/50" />
      <span className="w-2.5 h-2.5 rounded-full bg-white/30" />
    </div>
    <div className="p-4 space-y-2">
      <div className="h-2.5 rounded bg-white/80 w-1/3" />
      <div className="grid grid-cols-3 gap-2 mt-3">
        <div className="h-12 rounded bg-white/70" />
        <div className="h-12 rounded bg-white/50" />
        <div className="h-12 rounded bg-white/40" />
      </div>
      <div className="h-2 rounded bg-white/60 w-2/3 mt-3" />
      <div className="h-2 rounded bg-white/40 w-1/2" />
    </div>
  </div>
);

const ProjectsPage = () => {
  const { t } = useLanguage();
  const p = t.projects;
  const [filter, setFilter] = useState<Filter | null>(null);

  // A null filter shows everything; clicking an active pill clears it.
  const toggle = (f: Filter) => setFilter((cur) => (cur === f ? null : f));
  const visible = (tag: Filter) => filter === null || filter === tag;

  const filters: Filter[] = ['product', 'accessibility', 'frontend'];

  return (
    <main className="lg:ml-72 flex-1 relative">
      <section className="px-6 md:px-12 lg:px-24 py-24">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <header className="mb-12">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <h1 className="text-5xl font-extrabold" style={{ color: 'rgb(var(--text))' }}>
                {p.title}
              </h1>

              {/* Filter pills */}
              <div
                className="inline-flex items-center gap-1 p-1 rounded-full border border-theme self-start lg:self-auto"
                style={{ backgroundColor: 'rgb(var(--surface))' }}
                role="group"
                aria-label={p.title}
              >
                {filters.map((f) => {
                  const active = filter === f;
                  return (
                    <button
                      key={f}
                      type="button"
                      onClick={() => toggle(f)}
                      aria-pressed={active}
                      className="px-4 py-2 rounded-full text-sm font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                      style={{
                        backgroundColor: active ? 'rgb(var(--accent) / 0.12)' : 'transparent',
                        color: active ? 'rgb(var(--accent))' : 'rgb(var(--muted))',
                      }}
                    >
                      {p.filters[f]}
                    </button>
                  );
                })}
              </div>
            </div>
            <p className="text-lg max-w-2xl leading-relaxed mt-6" style={{ color: 'rgb(var(--muted))' }}>
              {p.subtitle}
            </p>
          </header>

          {/* Featured projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {visible('accessibility') && (
              <Reveal>
                <article className="card p-5 h-full flex flex-col" style={{ backgroundColor: 'rgb(var(--surface))' }}>
                  <BrowserMock accent="accent" />
                  <h2 className="text-2xl font-bold mt-6 mb-2" style={{ color: 'rgb(var(--text))' }}>
                    {p.featured.a11yAudit.title}
                  </h2>
                  <p className="text-base leading-relaxed mb-5" style={{ color: 'rgb(var(--muted))' }}>
                    {p.featured.a11yAudit.description}
                  </p>
                  <a href="#live-demo" className="btn-secondary text-sm mt-auto self-start">
                    {p.featured.a11yAudit.cta}
                  </a>
                </article>
              </Reveal>
            )}
            {visible('product') && (
              <Reveal delay={100}>
                <article className="card p-5 h-full flex flex-col" style={{ backgroundColor: 'rgb(var(--surface))' }}>
                  <BrowserMock accent="secondary" />
                  <h2 className="text-2xl font-bold mt-6 mb-2" style={{ color: 'rgb(var(--text))' }}>
                    {p.featured.ecommerce.title}
                  </h2>
                  <p className="text-base leading-relaxed mb-5" style={{ color: 'rgb(var(--muted))' }}>
                    {p.featured.ecommerce.description}
                  </p>
                  <button type="button" className="btn-secondary text-sm mt-auto self-start">
                    {p.featured.ecommerce.cta}
                  </button>
                </article>
              </Reveal>
            )}
          </div>

          {/* Live demo — embedded WCAG Contrast Checker (the A11y Audit interactive demo) */}
          {visible('accessibility') && (
            <Reveal>
              <section id="live-demo" className="mb-16 scroll-mt-24" aria-labelledby="live-demo-heading">
                <div className="flex items-center gap-3 mb-1">
                  <span
                    className="text-xs font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full"
                    style={{ backgroundColor: 'rgb(var(--secondary) / 0.12)', color: 'rgb(var(--secondary))' }}
                  >
                    {p.liveDemo.badge}
                  </span>
                  <h2 id="live-demo-heading" className="text-2xl font-bold" style={{ color: 'rgb(var(--text))' }}>
                    {p.liveDemo.title}
                  </h2>
                </div>
                <p className="text-base leading-relaxed max-w-2xl" style={{ color: 'rgb(var(--muted))' }}>
                  {p.liveDemo.description}
                </p>
                <AccessibilityChallenge />
              </section>
            </Reveal>
          )}

          {/* Secondary grid: small project cards + GitHub repos */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6 auto-rows-min">
              {visible('frontend') && (
                <Reveal>
                  <article className="card p-6 h-full" style={{ backgroundColor: 'rgb(var(--surface))' }}>
                    <h3 className="font-bold text-lg mb-3" style={{ color: 'rgb(var(--text))' }}>
                      {p.cards.designSystem.title}
                    </h3>
                    <p className="text-sm" style={{ color: 'rgb(var(--muted))' }}>
                      {p.techLabel}: {p.cards.designSystem.tech}
                    </p>
                    <p className="text-sm" style={{ color: 'rgb(var(--muted))' }}>
                      {p.resultsLabel}: {p.cards.designSystem.results}
                    </p>
                  </article>
                </Reveal>
              )}
              {visible('accessibility') && (
                <Reveal delay={100}>
                  <article className="card p-6 h-full" style={{ backgroundColor: 'rgb(var(--surface))' }}>
                    <h3 className="font-bold text-lg mb-3" style={{ color: 'rgb(var(--text))' }}>
                      {p.cards.jobPortal.title}
                    </h3>
                    <p className="text-sm" style={{ color: 'rgb(var(--muted))' }}>
                      {p.techLabel}: {p.cards.jobPortal.tech}
                    </p>
                    <p className="text-sm" style={{ color: 'rgb(var(--muted))' }}>
                      {p.resultsLabel}: {p.cards.jobPortal.results}
                    </p>
                  </article>
                </Reveal>
              )}
              {visible('product') && (
                <Reveal delay={150}>
                  <article className="card p-6 h-full sm:col-span-2" style={{ backgroundColor: 'rgb(var(--surface))' }}>
                    <h3 className="font-bold text-lg mb-3" style={{ color: 'rgb(var(--text))' }}>
                      {p.cards.dataDashboard.title}
                    </h3>
                    <p className="text-sm" style={{ color: 'rgb(var(--muted))' }}>
                      {p.techLabel}: {p.cards.dataDashboard.tech}
                    </p>
                    <p className="text-sm" style={{ color: 'rgb(var(--muted))' }}>
                      {p.resultsLabel}: {p.cards.dataDashboard.results}
                    </p>
                  </article>
                </Reveal>
              )}
            </div>

            {/* GitHub Repos card (dark) */}
            <Reveal delay={100}>
              <aside
                className="rounded-xl p-6 h-full flex flex-col text-slate-100"
                style={{ backgroundColor: '#0f172a', border: '1px solid rgb(30 41 59)' }}
              >
                <span className="material-symbols-outlined text-2xl mb-3" style={{ color: '#34d399' }} aria-hidden="true">
                  terminal
                </span>
                <h3 className="font-bold text-xl mb-5" style={{ color: '#34d399' }}>
                  {p.github.title}
                </h3>
                <ul className="space-y-4 mb-6 flex-1">
                  {p.github.repos.map((repo) => (
                    <li key={repo.name} className="text-sm leading-relaxed">
                      <span className="font-semibold" style={{ color: '#34d399' }}>{repo.name}</span>
                      <span className="text-slate-400"> ({repo.meta}) - {repo.description}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://github.com/lauralamruano"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center rounded-lg py-2.5 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                  style={{ backgroundColor: 'rgb(30 41 59)', color: '#f1f5f9' }}
                >
                  {p.github.viewProfile}
                </a>
              </aside>
            </Reveal>
          </div>

          {/* Optimization Flows */}
          <Reveal>
            <section aria-labelledby="opt-heading">
              <h2 id="opt-heading" className="text-3xl font-bold mb-8" style={{ color: 'rgb(var(--text))' }}>
                {p.optimization.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {p.optimization.flows.map((flow) => (
                  <article key={flow.title} className="card p-6" style={{ backgroundColor: 'rgb(var(--surface))' }}>
                    <h3 className="font-bold text-lg mb-3" style={{ color: 'rgb(var(--text))' }}>
                      {flow.title}
                    </h3>
                    <p className="text-sm mb-1 flex items-center gap-1" style={{ color: 'rgb(var(--muted))' }}>
                      {p.optimization.beforeLabel}: {flow.before}
                      <span className="material-symbols-outlined text-base" aria-hidden="true">arrow_forward</span>
                    </p>
                    <p className="text-sm" style={{ color: 'rgb(var(--muted))' }}>
                      {p.optimization.afterLabel}: {flow.after}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          </Reveal>
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;
