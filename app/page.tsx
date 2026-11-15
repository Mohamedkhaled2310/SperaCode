import type { Metadata } from 'next'
import HomePage from './home-page'
import { createFaqPageSchema, serializeStructuredData } from './seo-data'
import { SITE_URL } from './site-config'

const description = 'SperaCode شركة برمجيات في مصر تطوّر المواقع وتطبيقات الجوال والمنيو الرقمي وحلول الذكاء الاصطناعي وتصميم UI/UX، من الفكرة إلى الإطلاق.'

export const metadata: Metadata = {
  title: 'شركة برمجيات في مصر',
  description,
  alternates: SITE_URL ? {
    canonical: '/',
    languages: { 'ar-EG': '/', en: '/en', 'x-default': '/' },
  } : undefined,
  openGraph: {
    title: 'SperaCode — حلول رقمية لنمو أعمالك',
    description,
    url: SITE_URL,
    siteName: 'SperaCode',
    type: 'website',
    locale: 'ar_EG',
    alternateLocale: ['en_US'],
    images: SITE_URL ? [{ url: '/speracode-mark.png', alt: 'شعار SperaCode — سبيرا كود' }] : undefined,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SperaCode — شركة برمجيات في مصر',
    description,
    images: SITE_URL ? ['/speracode-mark.png'] : undefined,
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
