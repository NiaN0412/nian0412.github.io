'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { LocaleSwitcher } from '@/components/ui/LocaleSwitcher'
import Link from 'next/link'
import { useParams } from 'next/navigation'

const navItems = [
  { key: 'home', href: '#home' },
  { key: 'blog', href: '#blog' },
  { key: 'partner', href: '#partner' },
  { key: 'friends', href: '#friends' },
  { key: 'journey', href: '#journey' },
  { key: 'contact', href: '#contact' },
]

export function Navbar() {
  const t = useTranslations('nav')
  const params = useParams()
  const locale = params.locale as string
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300
          ${isScrolled 
            ? 'bg-frost-50/90 dark:bg-platinum-950/90 backdrop-blur-md shadow-sm shadow-platinum-200/30 dark:shadow-platinum-950/50 border-b border-frost-200/50 dark:border-platinum-800/50' 
            : 'bg-transparent'
          }
        `}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo - 金色點綴 */}
            <Link 
              href={`/${locale}`}
              className="text-lg font-light tracking-wider group"
            >
              <span className="text-platinum-800 dark:text-platinum-100">q</span>
              <span className="text-gold-500 dark:text-gold-400 group-hover:text-gold-600 dark:group-hover:text-gold-300 transition-colors">_</span>
              <span className="text-platinum-800 dark:text-platinum-100">nnn412</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={`/${locale}${item.href}`}
                  className="px-4 py-2 text-sm text-platinum-600 dark:text-platinum-300
                             hover:text-gold-600 dark:hover:text-gold-400
                             transition-colors duration-200"
                >
                  {t(item.key)}
                </Link>
              ))}
            </div>

            {/* Right side controls */}
            <div className="flex items-center gap-2">
              <div className="hidden md:flex items-center gap-2">
                <LocaleSwitcher />
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-platinum-600 dark:text-platinum-300"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div 
              className="absolute inset-0 bg-black/20 dark:bg-black/40"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <div className="absolute top-16 left-0 right-0 bg-white dark:bg-platinum-900 border-b border-platinum-200 dark:border-platinum-700 shadow-lg">
              <div className="px-6 py-4 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.key}
                    href={`/${locale}${item.href}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3 text-platinum-600 dark:text-platinum-300
                               hover:bg-platinum-50 dark:hover:bg-platinum-800
                               rounded-lg transition-colors duration-200"
                  >
                    {t(item.key)}
                  </Link>
                ))}
                <div className="pt-4 mt-4 border-t border-platinum-100 flex items-center justify-end">
                  <LocaleSwitcher />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
