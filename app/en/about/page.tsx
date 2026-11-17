import type { Metadata } from 'next'
import AboutPage from '../../about/about-page'
import { createBreadcrumbSchema, createAboutPageSchema, serializeStructuredData } from '../../seo-data'
import { SITE_NAME, SITE_NAME_AR, SITE_URL } from '../../site-config'

const description = 'Learn about SperaCode, an elite software engineering house and digital agency delivering world-class web, mobile, and AI solutions with 100% IP ownership.'

export const metadata: Metadata = {
  title: 'About Us | Software Engineering House & AI Lab | SperaCode',
  description,
  alternates: {
    canonical: '/en/about',
    languages: {
      'ar-EG': '/about',
      en: '/en/about',
      'x-default': '/about',
    },
  },
  openGraph: {
    title: `About ${SITE_NAME} — Software Engineering & AI Solutions`,
    description,
    url: `${SITE_URL}/en/about`,
    siteName: `${SITE_NAME} (${SITE_NAME_AR})`,
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['ar_EG'],
    images: [
      {
        url: '/home-hero-dark.png',
        width: 1200,
        height: 630,
        alt: `About ${SITE_NAME}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `About ${SITE_NAME} — Digital Products & Software`,
    description,
    images: ['/home-hero-dark.png'],
  },
}

export default function EnglishAboutRoute() {
  const aboutSchema = createAboutPageSchema('en')
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: '/en' },
    { name: 'About Us', url: '/en/about' },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeStructuredData(aboutSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeStructuredData(breadcrumbSchema) }}
      />
      <AboutPage initialLocale="en" />
    </>
  )
}
