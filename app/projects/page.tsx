import type { Metadata } from 'next'
import ProjectsGallery from './projects-gallery'
import { createBreadcrumbSchema, createPortfolioPageSchema, serializeStructuredData } from '../seo-data'
import { SITE_NAME, SITE_NAME_AR, SITE_URL } from '../site-config'

const description = 'استكشف سابقة أعمال سبيرا كود (SperaCode)؛ تشمل مواقع إلكترونية، منصات تعليمية وتجارية، وتطبيقات ويب وأنظمة أعمال مخصصة مع روابط وصول حية لكل مشروع.'

export const metadata: Metadata = {
  title: 'أعمالنا ومشاريعنا | سابقة أعمال برمجية متميزة',
  description,
  alternates: {
    canonical: '/projects',
    languages: {
      'ar-EG': '/projects',
      en: '/en/projects',
      'x-default': '/projects',
    },
  },
  openGraph: {
    title: `سابقة أعمال ${SITE_NAME} — مشاريع وأنظمة منجزة`,
    description,
    url: `${SITE_URL}/projects`,
    siteName: `${SITE_NAME} (${SITE_NAME_AR})`,
    type: 'website',
    locale: 'ar_EG',
    alternateLocale: ['en_US'],
    images: [
      {
        url: '/home-hero-dark.png',
        width: 1200,
        height: 630,
        alt: `سابقة أعمال ${SITE_NAME}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `أعمال ومشاريع ${SITE_NAME}`,
    description,
    images: ['/home-hero-dark.png'],
  },
}

export default function ProjectsPage() {
  const portfolioSchema = createPortfolioPageSchema('ar')
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'الرئيسية', url: '/' },
    { name: 'أعمالنا', url: '/projects' },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeStructuredData(portfolioSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeStructuredData(breadcrumbSchema) }}
      />
      <ProjectsGallery initialLocale="ar" />
    </>
  )
}
