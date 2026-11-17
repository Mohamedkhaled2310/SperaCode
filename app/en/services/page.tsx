import type { Metadata } from 'next'
import ServicesPage from '../../services/services-page'
import { createBreadcrumbSchema, createServicesPageSchema, serializeStructuredData } from '../../seo-data'
import { SITE_NAME, SITE_NAME_AR, SITE_URL } from '../../site-config'

const description = 'Explore SperaCode full-cycle software services: custom web applications, native mobile apps, interactive digital QR menus, AI agents, and UI/UX design.'

export const metadata: Metadata = {
  title: 'Software Development & AI Services | SperaCode',
  description,
  alternates: {
    canonical: '/en/services',
    languages: {
      'ar-EG': '/services',
      en: '/en/services',
      'x-default': '/services',
    },
  },
  openGraph: {
    title: `${SITE_NAME} — Software Engineering & AI Solutions`,
    description,
    url: `${SITE_URL}/en/services`,
    siteName: `${SITE_NAME} (${SITE_NAME_AR})`,
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['ar_EG'],
    images: [
      {
        url: '/home-hero-dark.png',
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} Services`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Software Engineering & AI Services | ${SITE_NAME}`,
    description,
    images: ['/home-hero-dark.png'],
  },
}

export default function EnglishServicesRoute() {
  const servicesSchema = createServicesPageSchema('en')
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: '/en' },
    { name: 'Services', url: '/en/services' },
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
      <ServicesPage initialLocale="en" />
    </>
  )
}
