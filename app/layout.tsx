import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://speracode.com'),
  title: { default: 'SperaCode | Software House in Egypt', template: '%s | SperaCode' },
  description: 'SperaCode is a software house delivering websites, mobile applications, digital menus, AI solutions, and UI/UX design.',
  alternates: { canonical: '/', languages: { 'ar-EG': '/?lang=ar', en: '/?lang=en', 'x-default': '/' } },
  openGraph: { title: 'SperaCode — Digital products that drive growth', description: 'Websites, apps, QR menus, AI, and design from concept to launch.', url: 'https://speracode.com', siteName: 'SperaCode', type: 'website', images: ['/hero-isolated-alpha.png'] },
  robots: { index: true, follow: true },
  icons: { icon: '/icon.svg', apple: '/apple-icon.png' },
}
export const viewport: Viewport = { colorScheme: 'light dark', themeColor: [{ media: '(prefers-color-scheme: light)', color: '#FFFFFF' }, { media: '(prefers-color-scheme: dark)', color: '#070D1A' }] }
const organization = {
  '@context': 'https://schema.org', '@type': ['Organization', 'ProfessionalService'], name: 'SperaCode', alternateName: 'سبيرا كود', url: 'https://speracode.com', email: 'info@speracode.com', logo: 'https://speracode.com/icon.svg',
  description: 'SperaCode is a software house delivering end-to-end digital solutions: websites, mobile applications, digital QR menus, AI solutions, and UI/UX design.',
  areaServed: [{ '@type': 'Country', name: 'Egypt' }, { '@type': 'AdministrativeArea', name: 'Arab League countries' }], address: { '@type': 'PostalAddress', addressCountry: 'EG' },
  knowsAbout: ['Web development', 'Mobile applications', 'QR menu', 'Artificial intelligence', 'UI/UX design'], additionalProperty: [{ '@type': 'PropertyValue', name: 'Projects delivered', value: '50+' }, { '@type': 'PropertyValue', name: 'Clients served', value: '45' }, { '@type': 'PropertyValue', name: 'Years of experience', value: '6+' }],
}
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ar" dir="rtl" suppressHydrationWarning data-scroll-behavior="smooth"><head><link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/><link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800&family=Montserrat:wght@400;500;600;700;800&display=swap" rel="stylesheet"/><Script id="theme-init" strategy="beforeInteractive" dangerouslySetInnerHTML={{__html: `(function(){try{var t=localStorage.getItem('speracode-theme');var d=t?t==='dark':matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark');var l=localStorage.getItem('speracode-locale')||'ar';document.documentElement.lang=l;document.documentElement.dir=l==='ar'?'rtl':'ltr'}catch(e){}})()`}}/><Script id="organization-jsonld" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{__html: JSON.stringify(organization)}}/></head><body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
