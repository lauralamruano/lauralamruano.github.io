'use client'

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { Language, translations, Translations } from '@/lib/i18n/translations'

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: Translations
  isLanguageLoading: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Language persistence via localStorage with English as default
const LANGUAGE_STORAGE_KEY = 'language'
const DEFAULT_LANGUAGE: Language = 'en'

const getStoredLanguage = (): Language => {
  if (typeof window === 'undefined') return DEFAULT_LANGUAGE
  
  try {
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY)
    if (stored && ['en', 'es', 'it'].includes(stored)) {
      return stored as Language
    }
  } catch (error) {
    console.warn('Failed to read language from localStorage:', error)
  }
  
  return DEFAULT_LANGUAGE
}

const storeLanguage = (language: Language): void => {
  if (typeof window === 'undefined') return
  
  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
  } catch (error) {
    console.warn('Failed to store language in localStorage:', error)
  }
}

// Update HTML lang attribute for accessibility and SEO
const updateHtmlLangAttribute = (language: Language): void => {
  if (typeof document === 'undefined') return
  
  try {
    document.documentElement.lang = language
  } catch (error) {
    console.warn('Failed to update HTML lang attribute:', error)
  }
}

interface LanguageProviderProps {
  children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>(DEFAULT_LANGUAGE)
  const [isLanguageLoading, setIsLanguageLoading] = useState(true)

  // Initialize language from localStorage on mount
  useEffect(() => {
    const storedLanguage = getStoredLanguage()
    setLanguageState(storedLanguage)
    updateHtmlLangAttribute(storedLanguage)
    setIsLanguageLoading(false)
  }, [])

  // Handle language changes with persistence and HTML attribute update
  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage)
    storeLanguage(newLanguage)
    updateHtmlLangAttribute(newLanguage)
  }

  // Get translations for current language
  const t = translations[language]

  const value: LanguageContextType = {
    language,
    setLanguage,
    t,
    isLanguageLoading,
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

// Export for testing purposes
export { LANGUAGE_STORAGE_KEY, DEFAULT_LANGUAGE }
