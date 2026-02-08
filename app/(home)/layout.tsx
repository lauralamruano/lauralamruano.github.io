import React, { Suspense } from 'react';
import AppBar from '@/components/appbar';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { ThemeToggle } from '@/components/ThemeToggle';
import { LanguageSelector } from '@/components/LanguageSelector';
import { SkipToMainContent } from '@/components/SkipToMainContent';

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen relative" style={{ backgroundColor: 'rgb(var(--bg))', color: 'rgb(var(--text))' }}>
          {/* Skip to main content for accessibility */}
          <SkipToMainContent />
          
          {/* Theme Toggle + Language Selector - Top Right Corner */}
          <div className="fixed top-6 right-6 z-50 lg:top-8 lg:right-8 flex items-center gap-2">
            <LanguageSelector />
            <ThemeToggle />
          </div>
        
        {/* Background gradient shapes */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="gradient-shape bg-primary w-96 h-96 top-[-10%] left-[-5%] rounded-full"></div>
          <div className="gradient-shape bg-primary w-[500px] h-[500px] bottom-[-10%] right-[-5%] rounded-full"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row min-h-screen">
          <AppBar />
          <main id="main-content" className="lg:ml-72 flex-1 relative">
            <Suspense fallback={
              <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
              </div>
            }>
              {children}
            </Suspense>
          </main>
        </div>
      </div>
    </LanguageProvider>
    </ThemeProvider>
  )
}

export default HomeLayout