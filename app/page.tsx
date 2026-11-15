import type { Metadata } from 'next'
import HomePage from './home-page'
import { createFaqPageSchema, serializeStructuredData } from './seo-data'
import { SITE_URL } from './site-config'

const description = 'شركة SperaCode المصرية لتطوير المواقع وتطبيقات الجوال والمنيو الرقمي وحلول الذكاء الاصطناعي وتصميم UI/UX، من الفكرة حتى الإطلاق والدعم.'

export const metadata: Metadata = {
  title: 'شركة برمجيات في مصر',
  description,
  alternates: {
    canonical: '/',
    languages: { 'ar-EG': '/', en: '/en', 'x-default': '/' },
  },
  openGraph: {
    title: 'SperaCode — حلول رقمية لنمو أعمالك',
    description,
    url: SITE_URL,
    siteName: 'SperaCode',
    type: 'website',
    locale: 'ar_EG',
    alternateLocale: ['en_US'],
    images: [{ url: '/hero-devices-light.png', alt: 'حلول SperaCode الرقمية على الحاسوب والهاتف' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SperaCode — شركة برمجيات في مصر',
    description,
    images: ['/hero-devices-light.png'],
  },
}

export default function ArabicHomeRoute() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeStructuredData(createFaqPageSchema('ar')) }} />
      <HomePage initialLocale="ar" />
    </>
  )
}
