import type { Metadata, Viewport } from 'next'
import { IBM_Plex_Sans_Arabic, Plus_Jakarta_Sans } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { createOrganizationSchema, websiteSchema, createFaqPageSchema } from './seo-data'
import { SITE_NAME, SITE_NAME_AR, SITE_URL } from './site-config'

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-ibm-plex-arabic',
  display: 'swap',
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | شركة برمجيات في مصر وتطوير تطبيقات ومواقع`,
    template: `%s | ${SITE_NAME}`,
  },
  description: 'SperaCode (سبيرا كود) شركة برمجيات رائدة في مصر والوطن العربي؛ نطور مواقع الويب، تطبيقات الجوال (iOS & Android)، المنيو الرقمي QR، وحلول الذكاء الاصطناعي وتصميم UI/UX من الفكرة إلى الإطلاق.',
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  keywords: [
    'شركة برمجيات في مصر',
    'شركات برمجة في مصر',
    'تطوير مواقع إلكترونية',
    'تطوير تطبيقات الجوال',
    'منيو QR للمطاعم',
    'حلول الذكاء الاصطناعي',
    'تصميم UI/UX',
    'برمجة متجر إلكتروني',
    'software house Egypt',
    'web development Egypt',
    'mobile app development Egypt',
    'digital QR menu Egypt',
    'AI solutions Egypt',
  ],
  alternates: {
    canonical: '/',
    languages: {
      'ar-EG': '/',
      'en': '/en',
      'x-default': '/',
    },
  },
  openGraph: {
    title: `${SITE_NAME} — حلول برمجية ورقمية لنمو أعمالك`,
    description: 'نبتكر ونصمم منتجات رقمية متكاملة: مواقع ويب فائقة السرعة، تطبيقات جوال، منيو تفاعلي للمطاعم، وحلول ذكاء اصطناعي وأتمتة.',
    url: SITE_URL,
    siteName: `${SITE_NAME} (${SITE_NAME_AR})`,
    type: 'website',
    locale: 'ar_EG',
    alternateLocale: ['en_US'],
    images: [
      {
        url: '/home-hero-dark.png',
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — حلول رقمية تدعم نمو أعمالك`,
      },
      {
        url: '/speracode-mark.png',
        width: 512,
        height: 512,
        alt: `شعار ${SITE_NAME}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} — شركة برمجيات في مصر والخليج`,
    description: 'تطوير مواقع، وتطبيقات جوال، ومنيو QR، وحلول ذكاء اصطناعي من الفكرة إلى التسليم.',
    images: ['/home-hero-dark.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  other: {
    'ai-content-declaration': 'author-verified, production software agency',
    'format-detection': 'telephone=no',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
    { media: '(prefers-color-scheme: dark)', color: '#070D1A' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organization = createOrganizationSchema()
  const faqSchema = createFaqPageSchema('ar')

  return (
    <html
      lang="ar"
      dir="rtl"
      suppressHydrationWarning
      className={`${ibmPlexArabic.variable} ${plusJakarta.variable}`}
      data-scroll-behavior="smooth"
    >
      <head>
        <link rel="alternate" type="text/markdown" href="/llms.txt" title="LLM Knowledge Base" />
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('speracode-theme');var d=t?t==='dark':matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark');var l=location.pathname==='/en'||location.pathname.indexOf('/en/')===0?'en':'ar';document.documentElement.lang=l;document.documentElement.dir=l==='ar'?'rtl':'ltr'}catch(e){}})()`,
          }}
        />
        <Script
          id="organization-jsonld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [organization, websiteSchema, faqSchema],
            }),
          }}
        />
      </head>
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  )
}
