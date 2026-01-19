'use client'

import { useTheme } from 'next-themes'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import { Sun, Moon, Monitor } from 'lucide-react'

export function ThemeSwitcher() {
  const t = useTranslations('theme')
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="w-8 h-8" />
  }

  const themes = [
    { key: 'light', icon: Sun, label: t('light') },
    { key: 'dark', icon: Moon, label: t('dark') },
    { key: 'system', icon: Monitor, label: t('system') },
  ]

  return (
    <div className="flex items-center gap-1 p-1 rounded-lg bg-platinum-100 dark:bg-platinum-800">
      {themes.map(({ key, icon: Icon, label }) => (
        <button
          key={key}
          onClick={() => setTheme(key)}
          className={`
            p-2 rounded-md transition-all duration-200
            ${theme === key 
              ? 'bg-white dark:bg-platinum-700 shadow-sm' 
              : 'hover:bg-platinum-200 dark:hover:bg-platinum-700'
            }
          `}
          aria-label={label}
          title={label}
        >
          <Icon className="w-4 h-4 text-platinum-600 dark:text-platinum-300" />
        </button>
      ))}
    </div>
  )
}
