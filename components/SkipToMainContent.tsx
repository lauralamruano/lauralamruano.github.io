'use client'

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export function SkipToMainContent() {
  const { t } = useLanguage();
  
  return (
    <a href="#main-content" className="skip-to-main">
      {t.accessibility.skipToMain}
    </a>
  );
}
