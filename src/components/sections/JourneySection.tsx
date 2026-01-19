'use client'

import { useTranslations } from 'next-intl'
import { motion, useScroll, useSpring } from 'framer-motion'
import { Sparkles, Compass, Rocket, Circle } from 'lucide-react'
import { useRef } from 'react'

export function JourneySection() {
  const t = useTranslations('journey')
  const containerRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 70%", "end center"]
  })

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const journeyStages = [
    {
      id: 'silent',
      icon: <Compass className="w-5 h-5" />,
      period: t('stages.silent.period'),
      title: t('stages.silent.title'),
      content: t('stages.silent.content'),
    },
    {
      id: 'turning',
      icon: <Sparkles className="w-5 h-5" />,
      period: t('stages.turning.period'),
      title: t('stages.turning.title'),
      content: t('stages.turning.content'),
    },
    {
      id: 'expansion',
      icon: <Rocket className="w-5 h-5" />,
      period: t('stages.expansion.period'),
      title: t('stages.expansion.title'),
      content: t('stages.expansion.content'),
    },
  ]

  return (
    <section id="journey" className="section relative overflow-hidden py-32" ref={containerRef}>
      {/* 裝飾性背景元素 */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-20 left-10 text-[10rem] font-black text-platinum-200/10 dark:text-white/[0.02] select-none rotate-90">
          PATH
        </div>
        <div className="absolute bottom-20 right-10 text-[10rem] font-black text-platinum-200/10 dark:text-white/[0.02] select-none">
          TRACES
        </div>
      </div>

      <div className="section-inner max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24 text-center md:text-left"
        >
          <h2 className="section-title inline-block relative">
            {t('title')}
            <motion.div 
              className="absolute -bottom-2 left-0 h-1 bg-gold-400"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </h2>
          <p className="section-subtitle mt-4">{t('subtitle')}</p>
          <p className="section-description max-w-2xl text-platinum-500">{t('description')}</p>
        </motion.div>

        <div className="relative" ref={timelineRef}>
          {/* 進度垂直線 */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-platinum-100 dark:bg-platinum-800 -translate-x-1/2" />
          <motion.div 
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gold-400 -translate-x-1/2 origin-top z-10"
            style={{ scaleY }}
          />

          <div className="space-y-24">
            {journeyStages.map((stage, index) => (
              <div 
                key={stage.id}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* 中央節點 */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 -translate-x-1/2 bg-platinum-50 dark:bg-platinum-950 border-2 border-platinum-200 dark:border-platinum-800 rounded-full flex items-center justify-center z-20 group">
                   <motion.div 
                     className="w-2 h-2 bg-platinum-300 dark:bg-platinum-600 rounded-full"
                     whileInView={{ 
                       scale: [1, 1.5, 1],
                       backgroundColor: ["#d1d5db", "#fbbf24", "#fbbf24"]
                     }}
                     viewport={{ once: false, margin: "-100px" }}
                     transition={{ duration: 0.5 }}
                   />
                </div>

                {/* 內容區 */}
                <motion.div 
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pl-16' : 'md:pr-16 md:text-right'
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <div className="flex flex-col gap-2">
                    <span className="text-sm font-mono text-gold-600 dark:text-gold-400 tracking-tighter">
                      {stage.period}
                    </span>
                    <h3 className="text-2xl font-light text-platinum-800 dark:text-platinum-100 italic">
                      {stage.title}
                    </h3>
                  </div>
                  
                  <div className={`mt-4 p-6 rounded-2xl bg-white/40 dark:bg-platinum-900/40 backdrop-blur-sm border border-platinum-100/50 dark:border-platinum-800/50 shadow-sm hover:shadow-md transition-all duration-500 relative overflow-hidden group`}>
                    <p className="text-platinum-600 dark:text-platinum-300 leading-relaxed text-sm md:text-base">
                      {stage.content}
                    </p>
                    
                    {/* 小裝飾圖示 */}
                    <div className="absolute -bottom-2 -right-2 opacity-5 group-hover:opacity-20 transition-opacity duration-500 transform group-hover:scale-110">
                      {stage.icon}
                    </div>
                  </div>
                </motion.div>

                {/* 空白側（佔位用，確保對齊） */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

