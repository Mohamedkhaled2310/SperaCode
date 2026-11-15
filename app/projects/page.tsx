import type { Metadata } from 'next'
import ProjectsGallery from './projects-gallery'
import { createPortfolioPageSchema, serializeStructuredData } from '../seo-data'
import { SITE_URL } from '../site-config'

const description = 'استكشف أعمال SperaCode في المواقع الإلكترونية والمنصات الرقمية وأنظمة الأعمال، مع وصف لكل مشروع وروابط مباشرة للمواقع أو الديموهات.'

export const metadata: Metadata = {
  title: 'أعمالنا ومشاريعنا',
  description,
  alternates: {
    canonical: '/projects',
    languages: { 'ar-EG': '/projects', en: '/en/projects', 'x-default': '/projects' },
  },
  openGraph: {
    title: 'أعمال ومشاريع SperaCode',
    description,
    url: `${SITE_URL}/projects`,
    siteName: 'SperaCode',
    type: 'website',
    locale: 'ar_EG',
    alternateLocale: ['en_US'],
    images: [{ url: '/hero-devices-light.png', alt: 'نماذج من أعمال SperaCode الرقمية' }],
  },
}

export default function ProjectsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeStructuredData(createPortfolioPageSchema('ar')) }} />
      <ProjectsGallery initialLocale="ar" />
    </>
  )
}
