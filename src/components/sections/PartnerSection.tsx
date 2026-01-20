'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Heart, Calendar, Sparkles, Coffee, MapPin, Music } from 'lucide-react'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const partnerData = {
  startDate: '2025-12-15', // 開始日期
  avatar1: '/qnnn412.png',
  avatar2: '/kindle.png',
}

export function PartnerSection() {
  const t = useTranslations('partner')
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)

  const milestones = [
    { date: '2025-09-27', title: t('milestones_list.m1'), icon: <Sparkles className="w-4 h-4" /> },
    { date: '2025-12-31', title: t('milestones_list.m2'), icon: <Calendar className="w-4 h-4" /> },
  ]

  const interests = [
    t('interests_list.i1'),
    t('interests_list.i2'),
    t('interests_list.i3'),
    t('interests_list.i4'),
  ]

  useEffect(() => {
    const start = new Date(partnerData.startDate)
    const today = new Date()
    const diffTime = Math.abs(today.getTime() - start.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    setDays(diffDays)
    setHours(diffDays * 24)
  }, [])

  return (
    <section id="partner" className="section bg-platinum-50/50 dark:bg-platinum-950/50">
      <div className="section-inner max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mb-24 flex flex-col items-center"
        >
          {/* 背景水印 */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[10rem] md:text-[14rem] font-serif font-black text-platinum-200/10 dark:text-white/5 select-none pointer-events-none -z-10 leading-none">
            & 
          </div>

          <div className="text-center z-10 w-full max-w-4xl">
            <h2 className="text-sm uppercase tracking-[0.5em] text-gold-500 font-medium mb-6">
              {t('title')}
            </h2>
            
            <div className="relative mb-8">
              <h3 className="text-3xl md:text-5xl font-serif font-light text-platinum-800 dark:text-platinum-100">
                {t('subtitle')}
              </h3>
              <div className="mt-6 flex justify-center gap-1">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-1 h-1 rounded-full bg-gold-400/50" />
                ))}
              </div>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="relative p-1">
                {/* 裝飾性角落 */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-gold-300/30" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-gold-300/30" />
                
                <div className="px-8 py-10 md:px-16 md:py-12 bg-white/40 dark:bg-platinum-900/40 backdrop-blur-sm rounded-sm shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] dark:shadow-none border border-platinum-100 dark:border-platinum-800/50">
                  <div className="text-platinum-600 dark:text-platinum-300 whitespace-pre-line text-sm md:text-base leading-relaxed tracking-widest font-light text-center">
                    {t('description', { days, hours, person2: t('person2') })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* 左側：人物與天數 */}
          <div className="md:col-span-5 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="card overflow-hidden p-8 border-gold-200/20 dark:border-gold-700/10"
            >
              <div className="flex justify-between items-center mb-8 relative">
                <div className="text-center group">
                  <div className="w-20 h-20 rounded-full bg-platinum-200 dark:bg-platinum-800 flex items-center justify-center mb-3 ring-2 ring-gold-200/50 dark:ring-gold-700/30 group-hover:ring-gold-500 transition-all overflow-hidden relative">
                    <Image
                      src={partnerData.avatar1}
                      alt={t('person1')}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-sm font-medium text-platinum-700 dark:text-platinum-200">{t('person1')}</p>
                </div>

                <div className="flex flex-col items-center">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Heart className="w-6 h-6 text-gold-400 fill-current opacity-30" />
                  </motion.div>
                  <div className="h-px w-20 bg-gradient-to-r from-transparent via-gold-200 to-transparent my-2" />
                </div>

                <div className="text-center group">
                  <div className="w-20 h-20 rounded-full bg-platinum-200 dark:bg-platinum-800 flex items-center justify-center mb-3 ring-2 ring-gold-200/50 dark:ring-gold-700/30 group-hover:ring-gold-500 transition-all overflow-hidden relative">
                    <Image
                      src={partnerData.avatar2}
                      alt={t('person2')}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-sm font-medium text-platinum-700 dark:text-platinum-200">{t('person2')}</p>
                </div>
              </div>

              <div className="text-center pt-4 border-t border-platinum-100 dark:border-platinum-800/50">
                <p className="text-xs uppercase tracking-widest text-platinum-400 mb-1">{t('daysTogether')}</p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl font-light text-gold-600 dark:text-gold-400">{days}</span>
                  <span className="text-sm text-platinum-500">{t('days')}</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="p-6 card border-transparent bg-platinum-100/30 dark:bg-platinum-800/20 italic text-center"
            >
              <p className="text-platinum-600 dark:text-platinum-400">
                "{t('quote')}"
              </p>
            </motion.div>
          </div>

          {/* 右側：里程碑與興趣 */}
          <div className="md:col-span-7 space-y-8">
            {/* 里程碑 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-sm uppercase tracking-widest text-gold-600 dark:text-gold-400 font-medium flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {t('milestones')}
              </h3>
              <div className="space-y-3">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-platinum-200/50 dark:border-platinum-800/50 shadow-sm">
                    <div className="w-10 h-10 rounded-lg bg-gold-50 dark:bg-gold-900/20 flex items-center justify-center text-gold-500">
                      {milestone.icon}
                    </div>
                    <div>
                      <p className="text-xs text-platinum-400">{milestone.date}</p>
                      <p className="text-sm text-platinum-700 dark:text-platinum-200">{milestone.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 共同興趣 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <h3 className="text-sm uppercase tracking-widest text-gold-600 dark:text-gold-400 font-medium flex items-center gap-2">
                <Coffee className="w-4 h-4" />
                {t('interests')}
              </h3>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-4 py-2 rounded-full text-sm bg-platinum-100 dark:bg-platinum-800/50 text-platinum-600 dark:text-platinum-300 border border-platinum-200/50 dark:border-platinum-700/30 hover:border-gold-300/50 transition-colors"
                  >
                    #{interest}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* 一些額外的小元素 */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-platinum-100 dark:border-platinum-800/30 flex items-center gap-3">
                <MapPin className="w-4 h-4 text-platinum-400" />
                <span className="text-xs text-platinum-500">{t('visited_cities', { count: 2 })}</span>
              </div>
              <div className="p-4 rounded-xl border border-platinum-100 dark:border-platinum-800/30 flex items-center gap-3">
                <Music className="w-4 h-4 text-platinum-400" />
                <span className="text-xs text-platinum-500">{t('shared_songs', { count: 12 })}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
