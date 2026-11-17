import type { Metadata } from 'next'
import AboutPage from './about-page'
import { createBreadcrumbSchema, createAboutPageSchema, serializeStructuredData } from '../seo-data'
import { SITE_NAME, SITE_NAME_AR, SITE_URL } from '../site-config'

const description = 'تعرف على سبيرا كود (SperaCode)؛ شركة برمجيات مصرية رائدة في تطوير المواقع والمنصات وتطبيقات الجوال والذكاء الاصطناعي مع ضمانات الملكية 100% والتسليم في الموعد.'

export const metadata: Metadata = {
  title: 'من نحن | قصة ومنهجية شركة SperaCode للبرمجيات',
  description,
  alternates: {
    canonical: '/about',
    languages: {
      'ar-EG': '/about',
      en: '/en/about',
      'x-default': '/about',
    },
  },
  openGraph: {
    title: `عن ${SITE_NAME} — هندسة برمجيات بمعايير عالمية`,
    description,
    url: `${SITE_URL}/about`,
    siteName: `${SITE_NAME} (${SITE_NAME_AR})`,
    type: 'website',
    locale: 'ar_EG',
    alternateLocale: ['en_US'],
    images: [
      {
        url: '/home-hero-dark.png',
        width: 1200,
        height: 630,
        alt: `عن ${SITE_NAME}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `من نحن | شركة ${SITE_NAME} للبرمجيات`,
    description,
    images: ['/home-hero-dark.png'],
  },
}

export default function AboutRoute() {
  const aboutSchema = createAboutPageSchema('ar')
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'الرئيسية', url: '/' },
    { name: 'من نحن', url: '/about' },
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
      <AboutPage initialLocale="ar" />
    </>
  )
}
