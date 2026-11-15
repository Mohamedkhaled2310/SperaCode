import type { Metadata } from 'next'
import HomePage from '../home-page'
import { createFaqPageSchema, serializeStructuredData } from '../seo-data'
import { SITE_URL } from '../site-config'

const description = 'SperaCode is an Egypt-based software house delivering websites, mobile apps, digital QR menus, AI solutions, and UI/UX design from discovery through launch and support.'

export const metadata: Metadata = {
  title: 'Software Development Company in Egypt',
  description,
  alternates: {
    canonical: '/en',
    languages: { 'ar-EG': '/', en: '/en', 'x-default': '/' },
  },
  openGraph: {
    title: 'SperaCode — Digital products that drive business growth',
    description,
    url: `${SITE_URL}/en`,
    siteName: 'SperaCode',
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['ar_EG'],
    images: [{ url: '/hero-devices-light.png', alt: 'SperaCode digital solutions on desktop and mobile' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SperaCode — Software development in Egypt',
    description,
    images: ['/hero-devices-light.png'],
  },
}

export default function EnglishHomeRoute() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeStructuredData(createFaqPageSchema('en')) }} />
      <HomePage initialLocale="en" />
    </>
  )
}
