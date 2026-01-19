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

interface PageProps {
  params: { locale: string }
}

export async function generateMetadata({ params: { locale } }: PageProps): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'metadata' })

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
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
