'use client'

import { useTranslations } from 'next-intl'
import { Github, Instagram, Mail } from 'lucide-react'
import { siteConfig } from '@/config/site'

export function Footer() {
  const t = useTranslations('footer')
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-12 px-6 overflow-hidden">
      {/* 頂部裝飾線 - 漸層淡入淡出 */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-platinum-200 dark:via-platinum-700 to-transparent" />
      
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          {/* 左側：品牌資訊 */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-light tracking-widest text-platinum-800 dark:text-platinum-100 mb-2">
              {siteConfig.name}
            </h3>
            <p className="text-sm text-platinum-400 dark:text-platinum-500 italic">
              {t('quote')}
            </p>
          </div>

          {/* 右側：快速社交連結 */}
          <div className="flex gap-6">
            <a 
              href={siteConfig.social.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-platinum-400 hover:text-gold-500 transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href={siteConfig.social.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-platinum-400 hover:text-gold-500 transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href={siteConfig.social.email} 
              className="text-platinum-400 hover:text-gold-500 transition-colors duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* 底部：法律與社群資訊 */}
        <div className="pt-8 border-t border-platinum-100/50 dark:border-platinum-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="text-xs text-platinum-400 dark:text-platinum-600 font-mono tracking-tighter">
              © 2026 q_nnn412. All rights reserved.
            </p>
            <p className="text-[10px] text-platinum-300 dark:text-platinum-700 tracking-wider">
              Website design by <a href="https://sakura-cloud.tw" target="_blank" rel="noopener noreferrer" className="hover:text-gold-500 transition-colors underline underline-offset-4 decoration-platinum-200 dark:decoration-platinum-800">Sakura-Cloud Creative Studio</a>
            </p>
          </div>
          
          <div className="flex items-center gap-4 text-xs">
            <span className="text-platinum-300 dark:text-platinum-700 uppercase tracking-widest text-[10px] hidden sm:block">Experience The Flow</span>
            <a
              href="https://sakura-cloud.tw"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full border border-platinum-200 dark:border-platinum-800 text-platinum-500 hover:text-gold-500 hover:border-gold-500/50 transition-all duration-300"
            >
              {t('join_us')}
            </a>
          </div>
        </div>
      </div>

      {/* 裝飾性背景水印 */}
      <div className="absolute -bottom-4 right-0 opacity-[0.02] dark:opacity-[0.01] pointer-events-none select-none -z-10">
        <div className="text-9xl font-black italic tracking-tighter uppercase transform translate-y-10">
          Traces
        </div>
      </div>
    </footer>
  )
}
