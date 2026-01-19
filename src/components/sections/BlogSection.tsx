'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Calendar, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { posts } from '@/lib/blog'

export function BlogSection() {
  const t = useTranslations('blog')
  const params = useParams()
  const locale = params.locale as string

  return (
    <section id="blog" className="section bg-frost-50/80 dark:bg-platinum-900/50 backdrop-blur-sm">
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

        <div className="space-y-6">
          {posts.map((post, index) => (
            <Link 
              key={post.id}
              href={`/${locale}/blog/${post.id}`}
              className="block"
            >
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card group cursor-pointer"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg md:text-xl font-normal text-platinum-800 dark:text-platinum-100 group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">
                        {post.title}
                      </h3>
                      {post.status === 'draft' && (
                        <span className="text-xs px-2 py-0.5 rounded bg-platinum-200 dark:bg-platinum-700 text-platinum-500 dark:text-platinum-400">
                          進行中
                        </span>
                      )}
                    </div>
                    
                    <p className="text-platinum-500 dark:text-platinum-400 text-sm md:text-base mb-3 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-4 text-sm text-platinum-400 dark:text-platinum-500">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                      <div className="flex gap-2">
                        {post.tags.map((tag) => (
                          <span key={tag} className="text-platinum-500 dark:text-platinum-400">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-2 rounded-full border border-platinum-200 dark:border-platinum-700 group-hover:border-gold-400/50 dark:group-hover:border-gold-400/50 transition-colors">
                    <ArrowUpRight className="w-5 h-5 text-platinum-400 dark:text-platinum-500 group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
