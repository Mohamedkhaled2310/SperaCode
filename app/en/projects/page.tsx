import type { Metadata } from 'next'
import ProjectsGallery from '../../projects/projects-gallery'
import { createPortfolioPageSchema, serializeStructuredData } from '../../seo-data'
import { SITE_URL } from '../../site-config'

const description = 'Explore SperaCode websites, digital platforms, and business systems, with project descriptions and direct links to the live sites or demos.'

export const metadata: Metadata = {
  title: 'Selected Projects and Portfolio',
  description,
  alternates: SITE_URL ? {
    canonical: '/en/projects',
    languages: { 'ar-EG': '/projects', en: '/en/projects', 'x-default': '/projects' },
  } : undefined,
  openGraph: {
    title: 'SperaCode selected work',
    description,
    url: SITE_URL ? `${SITE_URL}/en/projects` : undefined,
    siteName: 'SperaCode',
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['ar_EG'],
    images: SITE_URL ? [{ url: '/speracode-mark.png', alt: 'SperaCode logo' }] : undefined,
  },
}

export default function EnglishProjectsRoute() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeStructuredData(createPortfolioPageSchema('en')) }} />
      <ProjectsGallery initialLocale="en" />
    </>
  )
}
