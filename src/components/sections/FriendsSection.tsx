'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

interface FriendSite {
  name: string
  url: string
  description: string
}

export function FriendsSection() {
  const t = useTranslations('friends')

  const friendSites: FriendSite[] = [
    {
      name: t('site_names.kindle1126'),
      url: 'https://kindle1126.xyz/',
      description: t('sites.kindle1126'),
    },
    {
      name: t('site_names.twcat0503'),
      url: 'https://twcat0503.org/',
      description: t('sites.twcat0503'),
    },
    {
      name: t('site_names.nangong'),
      url: 'https://nangong5421.com/',
      description: t('sites.nangong'),
    },
  ]

  return (
    <section id="friends" className="section bg-frost-50/80 dark:bg-platinum-900/50 backdrop-blur-sm">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">{t('title')}</h2>
          <p className="section-subtitle">{t('subtitle')}</p>
          <p className="section-description mb-12">{t('description')}</p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {friendSites.map((site, index) => (
            <motion.a
              key={site.name}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card group flex items-start justify-between gap-4"
            >
              <div>
                <h3 className="text-lg font-normal text-platinum-800 dark:text-platinum-100 group-hover:text-platinum-600 dark:group-hover:text-platinum-300 transition-colors mb-2">
                  {site.name}
                </h3>
                <p className="text-sm text-platinum-500 dark:text-platinum-400">
                  {site.description}
                </p>
              </div>
              <ExternalLink className="w-4 h-4 text-platinum-300 dark:text-platinum-600 group-hover:text-platinum-500 dark:group-hover:text-platinum-400 transition-colors flex-shrink-0 mt-1" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
