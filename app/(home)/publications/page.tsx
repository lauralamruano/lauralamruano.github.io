'use client'

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Reveal } from "@/components/Reveal";
import { LINKEDIN_POSTS } from "@/data/publications";
import { toLinkedInEmbedSrc } from "@/lib/linkedin";

const PROFILE_URL = "https://www.linkedin.com/in/laura-lam-30a445406/";

// Turn the raw links into embed sources once, dropping anything unparseable.
const EMBEDS = LINKEDIN_POSTS
  .map((ref) => ({ ref, src: toLinkedInEmbedSrc(ref) }))
  .filter((e) => e.src !== "");

const LinkedInIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const PublicationsPage = () => {
  const { t } = useLanguage();
  const p = t.publications;

  return (
    <main className="lg:ml-72 flex-1 relative">
      <section className="px-6 md:px-12 lg:px-24 py-24">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <header className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h1 className="text-5xl font-extrabold mb-4" style={{ color: 'rgb(var(--text))' }}>
                {p.title}
              </h1>
              <p className="text-lg max-w-2xl leading-relaxed" style={{ color: 'rgb(var(--muted))' }}>
                {p.subtitle}
              </p>
            </div>
            <a
              href={PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm inline-flex items-center gap-2 self-start whitespace-nowrap"
            >
              <LinkedInIcon className="w-4 h-4" />
              {p.viewOnLinkedin}
            </a>
          </header>

          {/* Embedded LinkedIn posts */}
          {EMBEDS.length === 0 ? (
            <p className="text-base" style={{ color: 'rgb(var(--muted))' }}>
              {p.empty}
            </p>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
              {EMBEDS.map((post, i) => (
                <Reveal key={post.src} delay={(i % 2) * 100}>
                  <div
                    className="card p-2 overflow-hidden"
                    style={{ backgroundColor: 'rgb(var(--surface))' }}
                  >
                    <iframe
                      src={post.src}
                      title={`LinkedIn post ${i + 1}`}
                      className="w-full rounded-lg"
                      style={{ height: 560, border: 'none' }}
                      loading="lazy"
                      allowFullScreen
                    />
                    <noscript>
                      <a href={post.ref} target="_blank" rel="noopener noreferrer">
                        {p.viewOnLinkedin}
                      </a>
                    </noscript>
                  </div>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default PublicationsPage;
