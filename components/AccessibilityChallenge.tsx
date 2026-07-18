'use client'

import React, { useMemo, useRef, useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

/* --- WCAG contrast helpers --- */
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

/* --- Challenge data (structure lives here; visible copy lives in translations) --- */
const LINK_CORRECT_INDEX = 0
const CHIP_CORRECT_INDICES = [0, 1] // Descriptive text + Icon
const TONE_TEXT = '#FFFFFF'
const AA_NORMAL = 4.5
const TONE_SCALE = [
  { step: 100, hex: '#EAF7DD' },
  { step: 200, hex: '#D3EFBB' },
  { step: 300, hex: '#B8E58F' },
  { step: 400, hex: '#9BD962' },
  { step: 500, hex: '#7FC93B' },
  { step: 600, hex: '#67B32C' },
  { step: 700, hex: '#549626' },
  { step: 800, hex: '#437A20' },
  { step: 900, hex: '#33601A' },
  { step: 1000, hex: '#264A13' },
]

const TOTAL_STEPS = 3

export function AccessibilityChallenge() {
  const { t } = useLanguage()
  const c = t.projects.challenge

  const [step, setStep] = useState(0) // 0..2 challenges, 3 = result
  const [opt, setOpt] = useState<number | null>(null)
  const [chips, setChips] = useState<number[]>([])
  const [tone, setTone] = useState(6) // starts on a failing tone, like the reference
  const [checked, setChecked] = useState<[boolean, boolean, boolean]>([false, false, false])

  const trackRef = useRef<HTMLDivElement>(null)
  const draggingRef = useRef(false)

  const toneRatio = useMemo(() => contrastRatio(TONE_SCALE[tone].hex, TONE_TEXT), [tone])
  const tonePasses = toneRatio >= AA_NORMAL

  const isCorrect = (s: number): boolean => {
    if (s === 0) return opt === LINK_CORRECT_INDEX
    if (s === 1) return chips.length === 2 && CHIP_CORRECT_INDICES.every((i) => chips.includes(i))
    return tonePasses
  }

  const hasAnswer = (s: number): boolean => {
    if (s === 0) return opt !== null
    if (s === 1) return chips.length === 2
    return true
  }

  const score = [0, 1, 2].filter(isCorrect).length

  const markChecked = () => {
    setChecked((prev) => {
      const next = [...prev] as [boolean, boolean, boolean]
      next[step] = true
      return next
    })
  }

  const goNext = () => setStep((s) => Math.min(TOTAL_STEPS, s + 1))
  const goPrev = () => setStep((s) => Math.max(0, s - 1))

  const restart = () => {
    setStep(0)
    setOpt(null)
    setChips([])
    setTone(6)
    setChecked([false, false, false])
  }

  const toggleChip = (i: number) => {
    if (checked[1]) return
    setChips((prev) => {
      if (prev.includes(i)) return prev.filter((x) => x !== i)
      if (prev.length >= 2) return prev // cap at two selections (two blanks)
      return [...prev, i]
    })
  }

  /* --- slider (challenge 3) interactions --- */
  const setToneFromClientX = (clientX: number) => {
    const el = trackRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const ratio = (clientX - rect.left) / rect.width
    const idx = Math.min(TONE_SCALE.length - 1, Math.max(0, Math.floor(ratio * TONE_SCALE.length)))
    setTone(idx)
  }
  const onTrackPointerDown = (e: React.PointerEvent) => {
    if (checked[2]) return
    draggingRef.current = true
    ;(e.target as HTMLElement).setPointerCapture?.(e.pointerId)
    setToneFromClientX(e.clientX)
  }
  const onTrackPointerMove = (e: React.PointerEvent) => {
    if (!draggingRef.current || checked[2]) return
    setToneFromClientX(e.clientX)
  }
  const onTrackPointerUp = () => {
    draggingRef.current = false
  }
  const onSliderKeyDown = (e: React.KeyboardEvent) => {
    if (checked[2]) return
    let next = tone
    if (e.key === 'ArrowRight' || e.key === 'ArrowUp') next = Math.min(TONE_SCALE.length - 1, tone + 1)
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') next = Math.max(0, tone - 1)
    else if (e.key === 'Home') next = 0
    else if (e.key === 'End') next = TONE_SCALE.length - 1
    else return
    e.preventDefault()
    setTone(next)
  }

  const eyebrow = [c.linkPurpose.eyebrow, c.beyondColor.eyebrow, c.contrast.eyebrow][step] ?? ''

  return (
    <div className="card p-6 md:p-8 mt-6" style={{ backgroundColor: 'rgb(var(--surface))' }}>
      {/* Progress */}
      {step < TOTAL_STEPS && (
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: 'rgb(var(--secondary))' }}>
              {eyebrow}
            </span>
            <span className="text-xs font-medium tabular-nums" style={{ color: 'rgb(var(--muted))' }}>
              {c.progress.replace('{n}', String(step + 1)).replace('{total}', String(TOTAL_STEPS))}
            </span>
          </div>
          <div
            className="h-1.5 rounded-full overflow-hidden"
            style={{ backgroundColor: 'rgb(var(--border))' }}
            role="progressbar"
            aria-valuemin={1}
            aria-valuemax={TOTAL_STEPS}
            aria-valuenow={step + 1}
          >
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{ width: `${((step + 1) / TOTAL_STEPS) * 100}%`, backgroundColor: 'rgb(var(--accent))' }}
            />
          </div>
        </div>
      )}

      {/* Challenge 1 — link purpose */}
      {step === 0 && (
        <fieldset>
          <legend className="text-lg font-bold mb-5" style={{ color: 'rgb(var(--text))' }}>
            {c.linkPurpose.question}
          </legend>
          <div className="space-y-3" role="radiogroup" aria-label={c.linkPurpose.eyebrow}>
            {c.linkPurpose.options.map((o, i) => {
              const selected = opt === i
              const revealCorrect = checked[0] && i === LINK_CORRECT_INDEX
              const revealWrong = checked[0] && selected && i !== LINK_CORRECT_INDEX
              return (
                <button
                  key={i}
                  type="button"
                  role="radio"
                  aria-checked={selected}
                  disabled={checked[0]}
                  onClick={() => setOpt(i)}
                  className="w-full text-left rounded-xl border-2 p-4 flex items-start gap-3 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-default"
                  style={{
                    borderColor: revealCorrect
                      ? 'rgb(var(--secondary))'
                      : revealWrong
                      ? 'rgb(220 38 38)'
                      : selected
                      ? 'rgb(var(--accent))'
                      : 'rgb(var(--border))',
                    backgroundColor: revealCorrect
                      ? 'rgb(var(--secondary) / 0.08)'
                      : revealWrong
                      ? 'rgb(220 38 38 / 0.06)'
                      : selected
                      ? 'rgb(var(--accent) / 0.06)'
                      : 'transparent',
                  }}
                >
                  <span
                    className="w-5 h-5 rounded-full border-2 flex-shrink-0 mt-1 flex items-center justify-center"
                    style={{ borderColor: selected ? 'rgb(var(--accent))' : 'rgb(var(--border))' }}
                    aria-hidden="true"
                  >
                    {selected && <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: 'rgb(var(--accent))' }} />}
                  </span>
                  <span className="text-base leading-relaxed break-words min-w-0" style={{ color: 'rgb(var(--text))' }}>
                    {o.before}
                    <span className="font-semibold underline" style={{ color: 'rgb(var(--accent))' }}>
                      {o.linkText}
                    </span>
                    {o.after}
                  </span>
                </button>
              )
            })}
          </div>
        </fieldset>
      )}

      {/* Challenge 2 — beyond color */}
      {step === 1 && (
        <div>
          <h3 className="text-lg font-bold mb-2" style={{ color: 'rgb(var(--text))' }}>
            {c.beyondColor.question}
          </h3>
          <p className="text-sm mb-5" style={{ color: 'rgb(var(--muted))' }}>
            {c.beyondColor.hint}
          </p>
          <div className="flex flex-wrap gap-3" role="group" aria-label={c.beyondColor.eyebrow}>
            {c.beyondColor.chips.map((label, i) => {
              const selected = chips.includes(i)
              const isValid = CHIP_CORRECT_INDICES.includes(i)
              const revealCorrect = checked[1] && selected && isValid
              const revealWrong = checked[1] && selected && !isValid
              const revealMissed = checked[1] && !selected && isValid
              return (
                <button
                  key={i}
                  type="button"
                  aria-pressed={selected}
                  disabled={checked[1]}
                  onClick={() => toggleChip(i)}
                  className="px-4 py-2.5 rounded-full text-sm font-semibold border-2 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-default"
                  style={{
                    borderColor: revealCorrect
                      ? 'rgb(var(--secondary))'
                      : revealWrong
                      ? 'rgb(220 38 38)'
                      : revealMissed
                      ? 'rgb(var(--secondary) / 0.5)'
                      : selected
                      ? 'rgb(var(--accent))'
                      : 'rgb(var(--border))',
                    backgroundColor: revealCorrect
                      ? 'rgb(var(--secondary) / 0.12)'
                      : selected
                      ? 'rgb(var(--accent) / 0.1)'
                      : 'rgb(var(--surface))',
                    color: selected || revealMissed ? 'rgb(var(--text))' : 'rgb(var(--muted))',
                  }}
                >
                  {(revealCorrect || revealMissed) && (
                    <span className="material-symbols-outlined text-base align-middle mr-1" aria-hidden="true">check</span>
                  )}
                  {revealWrong && (
                    <span className="material-symbols-outlined text-base align-middle mr-1" aria-hidden="true">close</span>
                  )}
                  {label}
                </button>
              )
            })}
          </div>
        </div>
      )}

      {/* Challenge 3 — contrast tone */}
      {step === 2 && (
        <div>
          <h3 className="text-lg font-bold mb-2" style={{ color: 'rgb(var(--text))' }}>
            {c.contrast.question}
          </h3>
          <p className="text-sm mb-5" style={{ color: 'rgb(var(--muted))' }}>
            {c.contrast.hint}
          </p>

          <div className="flex flex-wrap items-baseline gap-2 mb-4">
            <span className="text-sm font-semibold" style={{ color: 'rgb(var(--muted))' }}>
              {c.contrast.ratioLabel}:
            </span>
            <span className="text-2xl font-bold tabular-nums" style={{ color: 'rgb(var(--text))' }}>
              {toneRatio.toFixed(2)}:1
            </span>
            <span
              className="text-xs font-semibold px-2.5 py-1 rounded-full"
              style={{
                backgroundColor: tonePasses ? 'rgb(var(--secondary) / 0.12)' : 'rgb(220 38 38 / 0.08)',
                color: tonePasses ? 'rgb(var(--secondary))' : 'rgb(220 38 38)',
              }}
            >
              {tonePasses ? c.contrast.passLabel : c.contrast.failLabel}
            </span>
          </div>

          {/* Slider */}
          <div
            ref={trackRef}
            role="slider"
            tabIndex={checked[2] ? -1 : 0}
            aria-label={c.contrast.eyebrow}
            aria-valuemin={TONE_SCALE[0].step}
            aria-valuemax={TONE_SCALE[TONE_SCALE.length - 1].step}
            aria-valuenow={TONE_SCALE[tone].step}
            aria-valuetext={`${TONE_SCALE[tone].step} · ${toneRatio.toFixed(2)}:1`}
            onKeyDown={onSliderKeyDown}
            onPointerDown={onTrackPointerDown}
            onPointerMove={onTrackPointerMove}
            onPointerUp={onTrackPointerUp}
            className="relative flex rounded-xl overflow-hidden h-24 select-none touch-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            style={{ border: '1px solid rgb(var(--border))' }}
          >
            {TONE_SCALE.map((s, i) => (
              <div key={s.step} className="flex-1 h-full" style={{ backgroundColor: s.hex }} aria-hidden="true" />
            ))}
            {/* White handle */}
            <span
              className="absolute top-1/2 w-9 h-9 rounded-full bg-white shadow-md pointer-events-none transition-[left] duration-150"
              style={{
                left: `${((tone + 0.5) / TONE_SCALE.length) * 100}%`,
                transform: 'translate(-50%, -50%)',
                border: '2px solid rgb(15 23 42 / 0.12)',
              }}
              aria-hidden="true"
            />
          </div>
          {/* Scale labels */}
          <div className="flex mt-2" aria-hidden="true">
            {TONE_SCALE.map((s) => (
              <span key={s.step} className="flex-1 text-center text-[11px] tabular-nums" style={{ color: 'rgb(var(--muted))' }}>
                {s.step}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Feedback */}
      {step < TOTAL_STEPS && checked[step] && (
        <div
          className="mt-6 rounded-xl border p-4 flex items-start gap-3"
          role="status"
          aria-live="polite"
          style={{
            backgroundColor: isCorrect(step) ? 'rgb(var(--secondary) / 0.08)' : 'rgb(220 38 38 / 0.06)',
            borderColor: isCorrect(step) ? 'rgb(var(--secondary) / 0.3)' : 'rgb(220 38 38 / 0.3)',
          }}
        >
          <span
            className="material-symbols-outlined text-xl flex-shrink-0"
            style={{ color: isCorrect(step) ? 'rgb(var(--secondary))' : 'rgb(220 38 38)' }}
            aria-hidden="true"
          >
            {isCorrect(step) ? 'check_circle' : 'info'}
          </span>
          <div>
            <p className="font-semibold mb-1" style={{ color: 'rgb(var(--text))' }}>
              {isCorrect(step) ? c.correct : c.incorrect}
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'rgb(var(--muted))' }}>
              {[c.linkPurpose.explanation, c.beyondColor.explanation, c.contrast.explanation][step]}
            </p>
          </div>
        </div>
      )}

      {/* Result */}
      {step === TOTAL_STEPS && (
        <div className="text-center py-4" role="status" aria-live="polite">
          <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: 'rgb(var(--secondary))' }}>
            {c.result.eyebrow}
          </span>
          <h3 className="text-2xl font-bold mt-2 mb-6" style={{ color: 'rgb(var(--text))' }}>
            {c.result.title}
          </h3>
          <div
            className="w-28 h-28 mx-auto rounded-full flex flex-col items-center justify-center mb-6"
            style={{ backgroundColor: 'rgb(var(--accent) / 0.1)' }}
          >
            <span className="text-4xl font-extrabold tabular-nums" style={{ color: 'rgb(var(--accent))' }}>
              {score}/{TOTAL_STEPS}
            </span>
            <span className="text-xs mt-1" style={{ color: 'rgb(var(--muted))' }}>
              {c.result.scoreSuffix}
            </span>
          </div>
          <p className="text-lg font-semibold mb-3" style={{ color: 'rgb(var(--text))' }}>
            {score === TOTAL_STEPS ? c.result.high : score >= 2 ? c.result.mid : c.result.low}
          </p>
          <p className="text-base leading-relaxed max-w-xl mx-auto" style={{ color: 'rgb(var(--muted))' }}>
            {c.result.cta}
          </p>
        </div>
      )}

      {/* Controls */}
      <div className="flex items-center justify-between mt-8">
        <button
          type="button"
          onClick={goPrev}
          disabled={step === 0 || step === TOTAL_STEPS}
          className="btn-secondary text-sm disabled:opacity-0 disabled:pointer-events-none"
        >
          {c.prevButton}
        </button>

        {step === TOTAL_STEPS ? (
          <button type="button" onClick={restart} className="btn-primary text-sm flex items-center gap-2">
            <span className="material-symbols-outlined text-lg" aria-hidden="true">restart_alt</span>
            {c.restartButton}
          </button>
        ) : !checked[step] ? (
          <button
            type="button"
            onClick={markChecked}
            disabled={!hasAnswer(step)}
            className="btn-primary text-sm"
          >
            {c.checkButton}
          </button>
        ) : (
          <button type="button" onClick={goNext} className="btn-primary text-sm flex items-center gap-2">
            {c.nextButton}
            <span className="material-symbols-outlined text-lg" aria-hidden="true">arrow_forward</span>
          </button>
        )}
      </div>
    </div>
  )
}
