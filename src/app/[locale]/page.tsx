import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Navbar, Footer } from '@/components/layout'
import {
  HeroSection,
  BlogSection,
  PartnerSection,
  FriendsSection,
  JourneySection,
  ContactSection,
} from '@/components/sections'

import { keywords } from '@/config/site'

interface PageProps {
  params: { locale: string }
}

export async function generateMetadata({ params: { locale } }: PageProps): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'metadata' })

  return {
    title: t('title'),
    description: t('description'),
    keywords: keywords,
    authors: [{ name: '嚴郁琇 (q_nnn412)', url: 'https://github.com/NiaN0412/' }],
    creator: 'q_nnn412',
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: 'https://nian0412.github.io',
      siteName: t('title'),
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      creator: '@q_nnn412',
    },
    alternates: {
      canonical: `https://nian0412.github.io/${locale}`,
      languages: {
        'zh-TW': 'https://nian0412.github.io/zh-TW',
        'en': 'https://nian0412.github.io/en',
        'ja': 'https://nian0412.github.io/ja',
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export default function HomePage({ params: { locale } }: PageProps) {
  // Enable static rendering
  setRequestLocale(locale)
  
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <BlogSection />
        <PartnerSection />
        <FriendsSection />
        <JourneySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
