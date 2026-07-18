'use client'

import React, { useMemo, useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

type Swatch = { key: string; hex: string }

const BACKGROUNDS: Swatch[] = [
  { key: 'celeste', hex: '#0EA5E9' },
  { key: 'esmeralda', hex: '#10B981' },
  { key: 'blanco', hex: '#FFFFFF' },
]

const TEXTS: Swatch[] = [
  { key: 'white', hex: '#FFFFFF' },
  { key: 'black', hex: '#0F172A' },
  { key: 'muted', hex: '#64748B' },
  { key: 'accent', hex: '#0369A1' },
  { key: 'secondary', hex: '#047857' },
  { key: 'lightGray', hex: '#CBD5E1' },
]

function hexToRgb(hex: string): [number, number, number] {
  const n = parseInt(hex.replace('#', ''), 16)
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255]
}

function channelLuminance(c: number): number {
  const s = c / 255
  return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4)
}

function relativeLuminance([r, g, b]: [number, number, number]): number {
  return 0.2126 * channelLuminance(r) + 0.7152 * channelLuminance(g) + 0.0722 * channelLuminance(b)
}

function contrastRatio(hexA: string, hexB: string): number {
  const la = relativeLuminance(hexToRgb(hexA))
  const lb = relativeLuminance(hexToRgb(hexB))
  const lighter = Math.max(la, lb)
  const darker = Math.min(la, lb)
  return (lighter + 0.05) / (darker + 0.05)
}

function FeedbackBadge({ pass, label }: { pass: boolean; label: string }) {
  return (
    <div
      className="flex items-center gap-2 px-3 py-2 rounded-lg border transition-colors"
      style={{
        backgroundColor: pass ? 'rgb(var(--secondary) / 0.1)' : 'rgb(220 38 38 / 0.08)',
        borderColor: pass ? 'rgb(var(--secondary) / 0.3)' : 'rgb(220 38 38 / 0.3)',
      }}
    >
      <span
        className="material-symbols-outlined text-lg"
        style={{ color: pass ? 'rgb(var(--secondary))' : 'rgb(220 38 38)' }}
        aria-hidden="true"
      >
        {pass ? 'check_circle' : 'cancel'}
      </span>
      <span className="text-sm font-medium" style={{ color: 'rgb(var(--text))' }}>
        {label}
      </span>
    </div>
  )
}

export function ContrastChecker() {
  const { t } = useLanguage()
  const c = t.experience.contrastChecker
  const [bg, setBg] = useState<Swatch>(BACKGROUNDS[0])
  const [txt, setTxt] = useState<Swatch>(TEXTS[0])

  const ratio = useMemo(() => contrastRatio(bg.hex, txt.hex), [bg, txt])
  const passAALarge = ratio >= 3
  const passAA = ratio >= 4.5
  const passAAA = ratio >= 7

  const colorLabel = (key: string) => c.colors[key as keyof typeof c.colors]

  return (
    <div className="card p-6 md:p-8 mt-6" style={{ backgroundColor: 'rgb(var(--surface))' }}>
      <div className="flex items-center gap-3 mb-2">
        <span className="material-symbols-outlined text-primary text-2xl" aria-hidden="true">
          contrast
        </span>
        <h3 className="text-lg font-bold" style={{ color: 'rgb(var(--text))' }}>
          {c.title}
        </h3>
      </div>
      <p className="text-sm mb-6 leading-relaxed" style={{ color: 'rgb(var(--muted))' }}>
        {c.subtitle}
      </p>

      <div className="mb-6">
        <span
          className="block text-xs font-semibold uppercase tracking-wide mb-3"
          style={{ color: 'rgb(var(--muted))' }}
        >
          {c.backgroundLabel}
        </span>
        <div className="flex gap-3" role="group" aria-label={c.backgroundLabel}>
          {BACKGROUNDS.map((b) => (
            <button
              key={b.key}
              type="button"
              onClick={() => setBg(b)}
              aria-pressed={bg.key === b.key}
              aria-label={colorLabel(b.key)}
              title={colorLabel(b.key)}
              className="w-10 h-10 rounded-full border-2 transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              style={{
                backgroundColor: b.hex,
                borderColor: bg.key === b.key ? 'rgb(var(--text))' : 'rgb(var(--border))',
                transform: bg.key === b.key ? 'scale(1.15)' : 'scale(1)',
              }}
            />
          ))}
        </div>
      </div>

      <div className="mb-6">
        <span
          className="block text-xs font-semibold uppercase tracking-wide mb-3"
          style={{ color: 'rgb(var(--muted))' }}
        >
          {c.textLabel}
        </span>
        <div className="flex flex-wrap gap-3" role="group" aria-label={c.textLabel}>
          {TEXTS.map((tx) => (
            <button
              key={tx.key}
              type="button"
              onClick={() => setTxt(tx)}
              aria-pressed={txt.key === tx.key}
              aria-label={colorLabel(tx.key)}
              title={colorLabel(tx.key)}
              className="w-10 h-10 rounded-full border-2 transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              style={{
                backgroundColor: tx.hex,
                borderColor: txt.key === tx.key ? 'rgb(var(--text))' : 'rgb(var(--border))',
                transform: txt.key === tx.key ? 'scale(1.15)' : 'scale(1)',
              }}
            />
          ))}
        </div>
      </div>

      <div
        className="rounded-xl p-8 mb-6 flex items-center justify-center text-center border border-theme transition-colors duration-300"
        style={{ backgroundColor: bg.hex }}
      >
        <p className="text-xl font-semibold transition-colors duration-300" style={{ color: txt.hex }}>
          {c.sampleText}
        </p>
      </div>

      <div className="flex flex-wrap items-baseline gap-2 mb-4">
        <span className="text-2xl font-bold tabular-nums" style={{ color: 'rgb(var(--text))' }}>
          {ratio.toFixed(2)}:1
        </span>
        <span className="text-sm" style={{ color: 'rgb(var(--muted))' }}>
          {c.ratioLabel}
        </span>
      </div>

      <div className="grid sm:grid-cols-3 gap-3">
        <FeedbackBadge pass={passAALarge} label={c.aaLarge} />
        <FeedbackBadge pass={passAA} label={c.aaNormal} />
        <FeedbackBadge pass={passAAA} label={c.aaa} />
      </div>

      <p className="text-sm mt-6 leading-relaxed" style={{ color: 'rgb(var(--muted))' }}>
        {passAA ? c.okNote : c.bugNote}
      </p>
    </div>
  )
}
