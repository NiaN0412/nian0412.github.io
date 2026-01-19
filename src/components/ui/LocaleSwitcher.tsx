'use client'

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import { locales, type Locale } from '@/i18n/config'
import { Globe } from 'lucide-react'

const localeNames: Record<Locale, string> = {
  'zh-TW': '中文',
  en: 'EN',
  ja: '日本語',
}

export function LocaleSwitcher() {
  const locale = useLocale() as Locale
  const pathname = usePathname()
  const router = useRouter()

  const handleChange = (newLocale: Locale) => {
    // 移除當前語言前綴，加上新語言前綴
    const segments = pathname.split('/')
    segments[1] = newLocale
    router.push(segments.join('/'))
  }

  return (
    <div className="relative group">
      <button
        className="flex items-center gap-2 px-3 py-2 rounded-lg
                   text-platinum-600 dark:text-platinum-300
                   hover:bg-platinum-100 dark:hover:bg-platinum-800
                   transition-colors duration-200"
        aria-label="Switch language"
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm">{localeNames[locale]}</span>
      </button>
      
      <div className="absolute right-0 top-full mt-1 py-1 
                      bg-white dark:bg-platinum-800 
                      rounded-lg shadow-lg border border-platinum-200 dark:border-platinum-700
                      opacity-0 invisible group-hover:opacity-100 group-hover:visible
                      transition-all duration-200 min-w-[100px] z-50">
        {locales.map((l) => (
          <button
            key={l}
            onClick={() => handleChange(l)}
            className={`
              w-full px-4 py-2 text-left text-sm
              hover:bg-platinum-100 dark:hover:bg-platinum-700
              transition-colors duration-200
              ${l === locale 
                ? 'text-platinum-900 dark:text-white font-medium' 
                : 'text-platinum-600 dark:text-platinum-400'
              }
            `}
          >
            {localeNames[l]}
          </button>
        ))}
      </div>
    </div>
  )
}
