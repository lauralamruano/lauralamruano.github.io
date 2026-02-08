'use client'

import React from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

export function LanguageSelector() {
  const { language, setLanguage, t, isLanguageLoading } = useLanguage()

  // Handle language change with proper focus management
  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLanguage = event.target.value as 'en' | 'es' | 'it'
    setLanguage(newLanguage)
    
    // Maintain focus on the selector after language change
    event.target.focus()
  }

  // Language options with full names for screen readers
  const languageOptions = [
    { value: 'en' as const, code: 'EN', fullName: 'English' },
    { value: 'es' as const, code: 'ES', fullName: 'Español' },
    { value: 'it' as const, code: 'IT', fullName: 'Italiano' },
  ]

  if (isLanguageLoading) {
    // Show loading state to prevent layout shift
    return (
      <div className="w-16 h-10 rounded-lg border border-theme animate-pulse" />
    )
  }

  return (
    <select
      value={language}
      onChange={handleLanguageChange}
      className="icon-btn px-3 py-2 rounded-lg border border-theme bg-surface text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors hover:border-primary/40"
      aria-label={t.languageSelector.label}
      // Ensure proper announcement by screen readers
      aria-live="polite"
      // Maintain focus visibility
      style={{ 
        color: 'rgb(var(--text))',
        backgroundColor: 'rgb(var(--surface))',
        borderColor: 'rgb(var(--border))',
        minWidth: '4rem' // Prevent layout shift
      }}
    >
      {languageOptions.map((option) => (
        <option 
          key={option.value} 
          value={option.value}
          // Full language names for screen readers while showing short codes visually
          aria-label={option.fullName}
        >
          {option.code}
        </option>
      ))}
    </select>
  )
}
