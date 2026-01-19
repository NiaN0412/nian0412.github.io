'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

interface FriendSite {
  name: string
  url: string
  description: string
}

// 友站資料
const friendSites: FriendSite[] = [
  {
    name: 'kindle1126',
    url: 'https://kindle1126.xyz/',
    description: '一個對演算法最優解有著莫名執著的 17 歲少年。從機器人競賽到各種腦洞大開的小專案，他編織出的數位世界總是充滿活力。',
  },
  {
    name: 'twcat0503',
    url: 'https://twcat0503.org/',
    description: '我最可靠的競賽隊友，來自永春數位實驗班的高手。他擅長將發想與創意結合，把那些改變生活的點子具現化。',
  },
  {
    name: '南宮柳信',
    url: 'https://nangong5421.com/',
    description: '技術深度驚人的「電神」，將開發視為一種修行的藝術。他的數位園林不僅有精準的邏輯，更有著追求極致的克制美學。',
  },
]

export function FriendsSection() {
  const t = useTranslations('friends')

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
