import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://speracode.com'),
  title: { default: 'SperaCode | Software House in Egypt', template: '%s | SperaCode' },
  description: 'SperaCode شركة برمجيات في مصر تقدم تطوير المواقع وتطبيقات الجوال والمنيو الرقمي وحلول الذكاء الاصطناعي وتصميم UI/UX.',
  applicationName: 'SperaCode',
  creator: 'SperaCode',
  keywords: ['شركة برمجيات في مصر', 'تطوير مواقع', 'تطبيقات جوال', 'منيو QR', 'ذكاء اصطناعي', 'تصميم UI/UX', 'software house Egypt', 'web development Egypt'],
  alternates: { canonical: '/', languages: { 'ar-EG': '/?lang=ar', en: '/?lang=en', 'x-default': '/' } },
  openGraph: { title: 'SperaCode — حلول رقمية لنمو أعمالك', description: 'مواقع وتطبيقات ومنيو QR وذكاء اصطناعي وتصميم من الفكرة حتى الإطلاق.', url: 'https://speracode.com', siteName: 'SperaCode', type: 'website', locale: 'ar_EG', alternateLocale: ['en_US'], images: ['/hero-devices-light.png'] },
  twitter: { card: 'summary_large_image', title: 'SperaCode — حلول رقمية لنمو أعمالك', description: 'شركة برمجيات في مصر لتطوير المواقع والتطبيقات وحلول الأعمال الرقمية.', images: ['/hero-devices-light.png'] },
  robots: { index: true, follow: true },
  icons: { icon: '/icon.svg', apple: '/apple-icon.png' },
}
export const viewport: Viewport = { colorScheme: 'light dark', themeColor: [{ media: '(prefers-color-scheme: light)', color: '#FFFFFF' }, { media: '(prefers-color-scheme: dark)', color: '#070D1A' }] }
const organization = {
  '@context': 'https://schema.org', '@type': ['Organization', 'ProfessionalService'], '@id': 'https://speracode.com/#organization', name: 'SperaCode', alternateName: 'سبيرا كود', url: 'https://speracode.com', email: 'info@speracode.com', logo: 'https://speracode.com/icon.svg',
  description: 'SperaCode is a software house delivering end-to-end digital solutions: websites, mobile applications, digital QR menus, AI solutions, and UI/UX design.',
  areaServed: [{ '@type': 'Country', name: 'Egypt' }, { '@type': 'AdministrativeArea', name: 'Arab League countries' }], address: { '@type': 'PostalAddress', addressCountry: 'EG' },
  contactPoint: { '@type': 'ContactPoint', contactType: 'sales', email: 'info@speracode.com', availableLanguage: ['Arabic', 'English'] },
  knowsAbout: ['Web development', 'Mobile applications', 'QR menu', 'Artificial intelligence', 'UI/UX design'], additionalProperty: [{ '@type': 'PropertyValue', name: 'Projects delivered', value: '50+' }, { '@type': 'PropertyValue', name: 'Clients served', value: '45' }, { '@type': 'PropertyValue', name: 'Years of experience', value: '6+' }],
}
const website = { '@context': 'https://schema.org', '@type': 'WebSite', '@id': 'https://speracode.com/#website', name: 'SperaCode', url: 'https://speracode.com', inLanguage: ['ar-EG', 'en'], publisher: { '@id': 'https://speracode.com/#organization' } }
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ar" dir="rtl" suppressHydrationWarning data-scroll-behavior="smooth"><head><link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/><link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800&family=Montserrat:wght@400;500;600;700;800&display=swap" rel="stylesheet"/><Script id="theme-init" strategy="beforeInteractive" dangerouslySetInnerHTML={{__html: `(function(){try{var t=localStorage.getItem('speracode-theme');var d=t?t==='dark':matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark');var l=localStorage.getItem('speracode-locale')||'ar';document.documentElement.lang=l;document.documentElement.dir=l==='ar'?'rtl':'ltr'}catch(e){}})()`}}/><Script id="organization-jsonld" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{__html: JSON.stringify({ '@context': 'https://schema.org', '@graph': [organization, website] })}}/></head><body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
