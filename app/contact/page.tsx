import type { Metadata } from 'next'
import ContactPage from './contact-page'
import { createBreadcrumbSchema, createContactPageSchema, serializeStructuredData } from '../seo-data'
import { SITE_NAME, SITE_NAME_AR, SITE_URL } from '../site-config'

const description = 'تواصل مع سبيرا كود (SperaCode) لمناقشة مشروع موقعك الإلكتروني، تطبيق الجوال، المنيو الرقمي QR، أو حلول الذكاء الاصطناعي. احصل على استشارة وعرض سعر مجاني.'

export const metadata: Metadata = {
  title: 'تواصل معنا | طلب استشارة وعرض سعر مجاني',
  description,
  alternates: {
    canonical: '/contact',
    languages: {
      'ar-EG': '/contact',
      en: '/en/contact',
      'x-default': '/contact',
    },
  },
  openGraph: {
    title: `تواصل مع ${SITE_NAME} — ابدأ مشروعك البرمجي`,
    description,
    url: `${SITE_URL}/contact`,
    siteName: `${SITE_NAME} (${SITE_NAME_AR})`,
    type: 'website',
    locale: 'ar_EG',
    alternateLocale: ['en_US'],
    images: [
      {
        url: '/home-hero-dark.png',
        width: 1200,
        height: 630,
        alt: `تواصل مع ${SITE_NAME}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `تواصل مع ${SITE_NAME} — استشارة مجانية`,
    description,
    images: ['/home-hero-dark.png'],
  },
}

export default function ContactRoute() {
  const contactSchema = createContactPageSchema('ar')
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'الرئيسية', url: '/' },
    { name: 'تواصل معنا', url: '/contact' },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeStructuredData(contactSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeStructuredData(breadcrumbSchema) }}
      />
      <ContactPage initialLocale="ar" />
    </>
  )
}
