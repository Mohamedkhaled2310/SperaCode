import type { Metadata } from 'next'
import HomePage from '../home-page'
import { createFaqPageSchema, serializeStructuredData } from '../seo-data'
import { SITE_URL } from '../site-config'

const description = 'SperaCode is an Egypt-based software house delivering websites, mobile apps, digital QR menus, AI solutions, and UI/UX design from discovery through launch and support.'

export const metadata: Metadata = {
  title: 'Software Development Company in Egypt',
  description,
  alternates: SITE_URL ? {
    canonical: '/en',
    languages: { 'ar-EG': '/', en: '/en', 'x-default': '/' },
  } : undefined,
  openGraph: {
    title: 'SperaCode — Digital products that drive business growth',
    description,
    url: SITE_URL ? `${SITE_URL}/en` : undefined,
    siteName: 'SperaCode',
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['ar_EG'],
    images: SITE_URL ? [{ url: '/speracode-mark.png', alt: 'SperaCode logo' }] : undefined,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SperaCode — Software development in Egypt',
    description,
    images: SITE_URL ? ['/speracode-mark.png'] : undefined,
  },
}

export default function EnglishHomeRoute() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeStructuredData(createFaqPageSchema('en')) }} />
      <HomePage initialLocale="en" />
    </>
  )
}
