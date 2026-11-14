import type { Metadata } from 'next'
import ContactPage from './contact-page'

export const metadata: Metadata = {
  title: 'تواصل معنا',
  description: 'تواصل مع SperaCode لمناقشة مشروعك القادم. أرسل تفاصيل احتياجك عبر واتساب واحصل على الخطوة المناسبة لحلك الرقمي.',
  alternates: { canonical: '/contact', languages: { 'ar-EG': '/contact?lang=ar', en: '/contact?lang=en', 'x-default': '/contact' } },
  openGraph: {
    title: 'تواصل مع SperaCode',
    description: 'شاركنا فكرتك، وسنساعدك على تحديد الخطوة المناسبة لمشروعك الرقمي.',
    url: 'https://speracode.com/contact',
    type: 'website',
  },
}

export default function ContactRoute() {
  return <ContactPage />
}
