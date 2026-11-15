import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import './globals.css'
import { SITE_URL } from './site-config'

export const metadata: Metadata = {
  metadataBase: SITE_URL ? new URL(SITE_URL) : undefined,
  title: { default: 'SperaCode | شركة برمجيات في مصر', template: '%s | SperaCode' },
  description: 'SperaCode شركة برمجيات في مصر تطوّر المواقع وتطبيقات الجوال والمنيو الرقمي وحلول الذكاء الاصطناعي وتصميم UI/UX، من الفكرة إلى الإطلاق.',
  applicationName: 'SperaCode',
  creator: 'SperaCode',
  publisher: 'SperaCode',
  keywords: ['شركة برمجيات في مصر', 'تطوير مواقع إلكترونية', 'تطبيقات جوال', 'منيو QR للمطاعم', 'حلول الذكاء الاصطناعي', 'تصميم UI/UX', 'software development company Egypt', 'web development Egypt'],
  alternates: SITE_URL ? { canonical: '/', languages: { 'ar-EG': '/', en: '/en', 'x-default': '/' } } : undefined,
  openGraph: {
    title: 'SperaCode — حلول رقمية لنمو أعمالك',
    description: 'مواقع وتطبيقات ومنيو QR وذكاء اصطناعي وتصميم من الفكرة حتى الإطلاق.',
    url: SITE_URL,
    siteName: 'SperaCode',
    type: 'website',
    locale: 'ar_EG',
    alternateLocale: ['en_US'],
    images: SITE_URL ? [{ url: '/speracode-mark.png', alt: 'شعار SperaCode — سبيرا كود' }] : undefined,
  },
  twitter: { card: 'summary_large_image', title: 'SperaCode — حلول رقمية لنمو أعمالك', description: 'شركة برمجيات في مصر لتطوير المواقع والتطبيقات وحلول الأعمال الرقمية.', images: SITE_URL ? ['/speracode-mark.png'] : undefined },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
  icons: { icon: '/icon.svg', apple: '/apple-icon.png' },
}
export const viewport: Viewport = { colorScheme: 'light dark', themeColor: [{ media: '(prefers-color-scheme: light)', color: '#FFFFFF' }, { media: '(prefers-color-scheme: dark)', color: '#070D1A' }] }
const organization = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'ProfessionalService'],
  ...(SITE_URL ? {
    '@id': `${SITE_URL}/#organization`,
    url: SITE_URL,
    logo: `${SITE_URL}/speracode-mark.png`,
    image: `${SITE_URL}/hero-devices-light.png`,
  } : {}),
  name: 'SperaCode',
  alternateName: 'سبيرا كود',
  description: 'SperaCode (سبيرا كود) is an Egypt-based software house delivering websites, mobile applications, digital QR menus, AI solutions, and UI/UX design.',
  areaServed: { '@type': 'Country', name: 'Egypt' },
  contactPoint: { '@type': 'ContactPoint', contactType: 'sales', ...(SITE_URL ? { url: `${SITE_URL}/contact` } : {}), availableLanguage: ['Arabic', 'English'] },
  knowsAbout: ['Web development', 'Mobile applications', 'Digital QR menus', 'Artificial intelligence', 'UI/UX design', 'Custom business software'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Digital product services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Website design and development', description: 'Corporate websites, e-commerce, and custom web applications.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobile application development', description: 'Applications for iOS and Android.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Digital QR menus', description: 'Digital restaurant and café menus with Arabic and English content.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI solutions', description: 'Chatbots, AI integrations, and workflow automation.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'UI/UX design', description: 'Digital interfaces shaped around user needs and business goals.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Maintenance and technical support', description: 'Maintenance, fixes, performance improvements, and security updates.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Business email, domains, and hosting', description: 'Professional email, domain, and hosting setup under the client’s brand.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom business software', description: 'Dashboards, management systems, and internal tools.' } },
    ],
  },
  additionalProperty: [
    { '@type': 'PropertyValue', name: 'Projects delivered', value: '50+' },
    { '@type': 'PropertyValue', name: 'Clients served', value: '45' },
    { '@type': 'PropertyValue', name: 'Years of experience', value: '6+' },
  ],
}
const website = { '@context': 'https://schema.org', '@type': 'WebSite', name: 'SperaCode', inLanguage: ['ar-EG', 'en'], ...(SITE_URL ? { '@id': `${SITE_URL}/#website`, url: SITE_URL, publisher: { '@id': `${SITE_URL}/#organization` } } : {}) }
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ar" dir="rtl" suppressHydrationWarning data-scroll-behavior="smooth"><head><link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/><link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800&family=Montserrat:wght@400;500;600;700;800&display=swap" rel="stylesheet"/><Script id="theme-init" strategy="beforeInteractive" dangerouslySetInnerHTML={{__html: `(function(){try{var t=localStorage.getItem('speracode-theme');var d=t?t==='dark':matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark');var l=location.pathname==='/en'||location.pathname.indexOf('/en/')===0?'en':'ar';document.documentElement.lang=l;document.documentElement.dir=l==='ar'?'rtl':'ltr'}catch(e){}})()`}}/><Script id="organization-jsonld" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{__html: JSON.stringify({ '@context': 'https://schema.org', '@graph': [organization, website] })}}/></head><body className="antialiased">{children}</body></html>
}
