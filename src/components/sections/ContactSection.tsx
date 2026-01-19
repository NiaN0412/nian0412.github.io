'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Mail, Github, Instagram } from 'lucide-react'

interface SocialLink {
  name: string
  url: string
  icon: React.ComponentType<{ className?: string }>
}

const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/NiaN0412/',
    icon: Github,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/q_nnn412/',
    icon: Instagram,
  },
  {
    name: 'Email',
    url: 'mailto:h0980199619@gmail.com',
    icon: Mail,
  },
]

export function ContactSection() {
  const t = useTranslations('contact')

  return (
    <section id="contact" className="section bg-frost-50/80 dark:bg-platinum-900/50 backdrop-blur-sm">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="section-title text-center">{t('title')}</h2>
          <p className="section-subtitle text-center">{t('subtitle')}</p>
          <p className="section-description text-center mb-12">
            {t('description')}
          </p>
        </motion.div>

        {/* 社群連結 - 不強迫行動 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-md mx-auto"
        >
          <p className="text-center text-platinum-500 dark:text-platinum-400 mb-6">
            {t('elsewhere')}
          </p>

          <div className="flex justify-center gap-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="p-4 rounded-xl bg-white dark:bg-platinum-800 
                           border border-platinum-100 dark:border-platinum-700
                           text-platinum-500 dark:text-platinum-400
                           hover:text-platinum-700 dark:hover:text-platinum-200
                           hover:border-platinum-200 dark:hover:border-platinum-600
                           hover:shadow-sm transition-all duration-200"
                aria-label={link.name}
              >
                <link.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* 社群導向結尾 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-platinum-400 dark:text-platinum-500">
            你也可以在{' '}
            <a
              href="https://www.sakura-cloud.tw/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-subtle"
            >
              Sakura-Cloud
            </a>
            {' '}繼續看到我
          </p>
        </motion.div>
      </div>
    </section>
  )
}
