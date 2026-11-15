import type { Metadata } from 'next'
import HomePage from '../home-page'
import { createBreadcrumbSchema, createFaqPageSchema, serializeStructuredData } from '../seo-data'
import { SITE_NAME, SITE_NAME_AR, SITE_URL } from '../site-config'

const description = 'SperaCode is an Egypt-based software house and digital product agency delivering high-performance websites, mobile applications, digital QR menus, and AI solutions.'

export const metadata: Metadata = {
  title: 'Software Development Company in Egypt | Web, Mobile & AI Solutions',
  description,
  alternates: {
    canonical: '/en',
    languages: {
      'ar-EG': '/',
      en: '/en',
      'x-default': '/',
    },
  },
  openGraph: {
    title: `${SITE_NAME} — Digital Products That Drive Business Growth`,
    description,
    url: `${SITE_URL}/en`,
    siteName: `${SITE_NAME} (${SITE_NAME_AR})`,
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['ar_EG'],
    images: [
      {
        url: '/home-hero-dark.png',
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — Digital Agency`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} — Software House in Egypt`,
    description,
    images: ['/home-hero-dark.png'],
  },
}

export default function EnglishHomeRoute() {
  const faqSchema = createFaqPageSchema('en')
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: '/en' },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeStructuredData(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeStructuredData(breadcrumbSchema) }}
      />
      <HomePage initialLocale="en" />
    </>
  )
}
