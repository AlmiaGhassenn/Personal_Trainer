'use client'

import { useLanguage } from './LanguageProvider'

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="fixed right-4 top-4 z-50 rounded-full border border-white/10 bg-black/40 p-1 backdrop-blur-md md:right-6 md:top-6">
      <div className="flex items-center gap-1">
        <button
          type="button"
          onClick={() => setLanguage('fr')}
          className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition-colors ${
            language === 'fr' ? 'bg-primary text-black' : 'text-stone-200 hover:bg-white/8'
          }`}
        >
          FR
        </button>
        <button
          type="button"
          onClick={() => setLanguage('en')}
          className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition-colors ${
            language === 'en' ? 'bg-primary text-black' : 'text-stone-200 hover:bg-white/8'
          }`}
        >
          EN
        </button>
      </div>
    </div>
  )
}
