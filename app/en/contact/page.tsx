import type { Metadata } from 'next'
import ContactPage from '../../contact/contact-page'
import { createContactPageSchema, serializeStructuredData } from '../../seo-data'
import { SITE_URL } from '../../site-config'

const description = 'Tell SperaCode about your website, app, QR menu, AI, or custom software project. The inquiry form prepares a WhatsApp message for you to review and send.'

export const metadata: Metadata = {
  title: 'Contact',
  description,
  alternates: SITE_URL ? {
    canonical: '/en/contact',
    languages: { 'ar-EG': '/contact', en: '/en/contact', 'x-default': '/contact' },
  } : undefined,
  openGraph: {
    title: 'Contact',
    description,
    url: SITE_URL ? `${SITE_URL}/en/contact` : undefined,
    siteName: 'SperaCode',
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['ar_EG'],
    images: SITE_URL ? [{ url: '/speracode-mark.png', alt: 'SperaCode logo' }] : undefined,
  },
}

export default function EnglishContactRoute() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeStructuredData(createContactPageSchema('en')) }} />
      <ContactPage initialLocale="en" />
    </>
  )
}
