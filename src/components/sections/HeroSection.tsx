'use client'

import { useTranslations } from 'next-intl'
import { ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'

export function HeroSection() {
  const t = useTranslations('hero')
  const tCommon = useTranslations('common')

  return (
    <section id="home" className="section relative">
      <div className="section-inner text-center">
        {/* 金色裝飾線 */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8 }}
          className="gold-line w-24 mx-auto mb-8"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-wider mb-6">
            <span className="text-platinum-800 dark:text-platinum-100">{t('greeting').split(' ')[0]} </span>
            <span className="bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 dark:from-gold-400 dark:via-gold-300 dark:to-gold-400 bg-clip-text text-transparent">
              {t('greeting').split(' ').slice(1).join(' ')}
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-xl md:text-2xl text-platinum-500 dark:text-platinum-400 font-light mb-8">
            {t('tagline')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-lg text-platinum-600 dark:text-platinum-300 max-w-xl mx-auto leading-relaxed">
            {t('description')}
          </p>
        </motion.div>

        {/* 關鍵字標籤 - 定位用，不炫技 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mt-12"
        >
          {['AI', 'DLLM', 'Read', 'Writing', 'Kindle'].map((tag, index) => (
            <span 
              key={tag} 
              className="tag"
              style={{ animationDelay: `${0.7 + index * 0.1}s` }}
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>

      {/* 往下探索提示 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#blog"
          className="flex flex-col items-center gap-2 text-platinum-400 hover:text-platinum-600 dark:hover:text-platinum-300 transition-colors"
        >
          <span className="text-sm">{tCommon('scrollDown')}</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </motion.div>
    </section>
  )
}
