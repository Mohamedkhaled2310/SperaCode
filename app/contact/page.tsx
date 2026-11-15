import type { Metadata } from 'next'
import ContactPage from './contact-page'
import { createContactPageSchema, serializeStructuredData } from '../seo-data'
import { SITE_URL } from '../site-config'

const description = 'تواصل مع SperaCode لمناقشة مشروع موقع أو تطبيق أو منيو QR أو حل ذكاء اصطناعي. يجهّز النموذج رسالة واتساب لمراجعتها وإرسالها.'

export const metadata: Metadata = {
  title: 'تواصل معنا',
  description,
  alternates: {
    canonical: '/contact',
    languages: { 'ar-EG': '/contact', en: '/en/contact', 'x-default': '/contact' },
  },
  openGraph: {
    title: 'تواصل مع SperaCode',
    description,
    url: `${SITE_URL}/contact`,
    siteName: 'SperaCode',
    type: 'website',
    locale: 'ar_EG',
    alternateLocale: ['en_US'],
    images: [{ url: '/hero-devices-light.png', alt: 'تواصل مع SperaCode لمناقشة مشروع رقمي' }],
  },
}

export default function ContactRoute() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeStructuredData(createContactPageSchema('ar')) }} />
      <ContactPage initialLocale="ar" />
    </>
  )
}
