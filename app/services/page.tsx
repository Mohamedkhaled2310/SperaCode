import type { Metadata } from 'next'
import ServicesPage from './services-page'
import { createBreadcrumbSchema, createServicesPageSchema, serializeStructuredData } from '../seo-data'
import { SITE_NAME, SITE_NAME_AR, SITE_URL } from '../site-config'

const description = 'استكشف خدمات سبيرا كود (SperaCode) البرمجية: تطوير المواقع، تطبيقات الجوال، المنيو الرقمي QR للمطاعم، حلول الذكاء الاصطناعي، وتصميم UI/UX وأنظمة الـ ERP.'

export const metadata: Metadata = {
  title: 'خدماتنا البرمجية وحلول الذكاء الاصطناعي | SperaCode',
  description,
  alternates: {
    canonical: '/services',
    languages: {
      'ar-EG': '/services',
      en: '/en/services',
      'x-default': '/services',
    },
  },
  openGraph: {
    title: `خدمات وحلول ${SITE_NAME} — هندسة برمجيات وذكاء اصطناعي`,
    description,
    url: `${SITE_URL}/services`,
    siteName: `${SITE_NAME} (${SITE_NAME_AR})`,
    type: 'website',
    locale: 'ar_EG',
    alternateLocale: ['en_US'],
    images: [
      {
        url: '/home-hero-dark.png',
        width: 1200,
        height: 630,
        alt: `خدمات ${SITE_NAME}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `خدمات برمجية وحلول ذكاء اصطناعي | ${SITE_NAME}`,
    description,
    images: ['/home-hero-dark.png'],
  },
}

export default function ServicesRoute() {
  const servicesSchema = createServicesPageSchema('ar')
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'الرئيسية', url: '/' },
    { name: 'خدماتنا', url: '/services' },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeStructuredData(servicesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeStructuredData(breadcrumbSchema) }}
      />
      <ServicesPage initialLocale="ar" />
    </>
  )
}
