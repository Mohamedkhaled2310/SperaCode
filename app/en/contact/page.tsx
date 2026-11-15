import type { Metadata } from 'next'
import ContactPage from '../../contact/contact-page'
import { createBreadcrumbSchema, createContactPageSchema, serializeStructuredData } from '../../seo-data'
import { SITE_NAME, SITE_NAME_AR, SITE_URL } from '../../site-config'

const description = 'Contact SperaCode to discuss your web application, mobile app, digital QR menu, or AI automation project. Receive a complimentary technical consultation and proposal.'

export const metadata: Metadata = {
  title: 'Contact Us | Start Your Project Consultation',
  description,
  alternates: {
    canonical: '/en/contact',
    languages: {
      'ar-EG': '/contact',
      en: '/en/contact',
      'x-default': '/contact',
    },
  },
  openGraph: {
    title: `Contact ${SITE_NAME} — Start Your Project`,
    description,
    url: `${SITE_URL}/en/contact`,
    siteName: `${SITE_NAME} (${SITE_NAME_AR})`,
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['ar_EG'],
    images: [
      {
        url: '/home-hero-dark.png',
        width: 1200,
        height: 630,
        alt: `Contact ${SITE_NAME}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Contact ${SITE_NAME} — Free Consultation`,
    description,
    images: ['/home-hero-dark.png'],
  },
}

export default function EnglishContactRoute() {
  const contactSchema = createContactPageSchema('en')
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: '/en' },
    { name: 'Contact', url: '/en/contact' },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeStructuredData(contactSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeStructuredData(breadcrumbSchema) }}
      />
      <ContactPage initialLocale="en" />
    </>
  )
}
