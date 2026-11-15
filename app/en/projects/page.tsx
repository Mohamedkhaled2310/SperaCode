import type { Metadata } from 'next'
import ProjectsGallery from '../../projects/projects-gallery'
import { createBreadcrumbSchema, createPortfolioPageSchema, serializeStructuredData } from '../../seo-data'
import { SITE_NAME, SITE_NAME_AR, SITE_URL } from '../../site-config'

const description = 'Explore SperaCode portfolio of web platforms, e-commerce storefronts, and enterprise systems, with live links and technology architectures.'

export const metadata: Metadata = {
  title: 'Portfolio & Selected Work | Digital Platforms & Websites',
  description,
  alternates: {
    canonical: '/en/projects',
    languages: {
      'ar-EG': '/projects',
      en: '/en/projects',
      'x-default': '/projects',
    },
  },
  openGraph: {
    title: `${SITE_NAME} — Selected Work & Engineering Portfolio`,
    description,
    url: `${SITE_URL}/en/projects`,
    siteName: `${SITE_NAME} (${SITE_NAME_AR})`,
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['ar_EG'],
    images: [
      {
        url: '/home-hero-dark.png',
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} Portfolio`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} — Selected Work`,
    description,
    images: ['/home-hero-dark.png'],
  },
}

export default function EnglishProjectsRoute() {
  const portfolioSchema = createPortfolioPageSchema('en')
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: '/en' },
    { name: 'Portfolio', url: '/en/projects' },
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
      <ProjectsGallery initialLocale="en" />
    </>
  )
}
