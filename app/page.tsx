import type { Metadata } from 'next'
import HomePage from './home-page'
import { createBreadcrumbSchema, createFaqPageSchema, serializeStructuredData } from './seo-data'
import { SITE_NAME, SITE_NAME_AR, SITE_URL } from './site-config'

const description = 'SperaCode (سبيرا كود) شركة برمجيات مصرية متخصصة في تطوير المواقع والمنصات وتطبيقات الجوال والمنيو الرقمي QR وحلول الذكاء الاصطناعي وتصميم UI/UX.'

export const metadata: Metadata = {
  title: 'شركة برمجيات في مصر | تطوير مواقع وتطبيقات جوال وذكاء اصطناعي',
  description,
  alternates: {
    canonical: '/',
    languages: {
      'ar-EG': '/',
      en: '/en',
      'x-default': '/',
    },
  },
  openGraph: {
    title: `${SITE_NAME} — حلول برمجية متطورة لنمو أعمالك`,
    description,
    url: SITE_URL,
    siteName: `${SITE_NAME} (${SITE_NAME_AR})`,
    type: 'website',
    locale: 'ar_EG',
    alternateLocale: ['en_US'],
    images: [
      {
        url: '/home-hero-dark.png',
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — سبيرا كود`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} — شركة برمجيات رائدة في مصر`,
    description,
    images: ['/home-hero-dark.png'],
  },
}

export default function ArabicHomeRoute() {
  const faqSchema = createFaqPageSchema('ar')
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'الرئيسية', url: '/' },
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
      <HomePage initialLocale="ar" />
    </>
  )
}
