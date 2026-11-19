'use client'

import Link from 'next/link'
import {
  ArrowUp,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Code2,
  Cpu,
  Globe,
  Mail,
  Moon,
  Phone,
  ShieldCheck,
  Sparkles,
  Sun,
  Zap,
} from 'lucide-react'
import { SperaLogo } from './spera-logo'
import { buildWhatsAppUrl, SITE_EMAIL, SITE_PHONE_LOCAL } from '@/app/site-config'

interface SiteFooterProps {
  rtl: boolean
  dark?: boolean
  onToggleDark?: () => void
  onToggleLocale?: () => void
  homeHref?: string
  projectsHref?: string
  contactHref?: string
  servicesHref?: string
  aboutHref?: string
}

export function SiteFooter({
  rtl,
  dark = false,
  onToggleDark,
  onToggleLocale,
  homeHref,
  projectsHref,
  contactHref,
  servicesHref,
  aboutHref,
}: SiteFooterProps) {
  const defaultHome = homeHref || (rtl ? '/' : '/en')
  const defaultProjects = projectsHref || (rtl ? '/projects' : '/en/projects')
  const defaultContact = contactHref || (rtl ? '/contact' : '/en/contact')
  const defaultServices = servicesHref || (rtl ? '/services' : '/en/services')
  const defaultAbout = aboutHref || (rtl ? '/about' : '/en/about')

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  const services = [
    { ar: 'تطوير المواقع والمنصات السحابية', en: 'Web & Cloud Platforms', href: `${defaultServices}#web` },
    { ar: 'تطبيقات الجوال (iOS & Android)', en: 'Mobile Apps (iOS & Android)', href: `${defaultServices}#mobile` },
    { ar: 'أنظمة الأعمال المخصصة والـ ERP', en: 'Custom ERP & Business Systems', href: `${defaultServices}#erp` },
    { ar: 'حلول الذكاء الاصطناعي والأتمتة', en: 'AI Solutions & Automation', href: `${defaultServices}#ai` },
    { ar: 'المنيو الرقمي التفاعلي QR', en: 'Interactive Digital QR Menus', href: `${defaultServices}#qr` },
    { ar: 'تصميم واجهات UI/UX', en: 'UI/UX Interface Design', href: `${defaultServices}#uiux` },
  ]

  const portfolioHighlights = [
    { ar: 'منصة مشاريع التخرج (Saudi GradHub)', en: 'Saudi GradHub Platform', href: defaultProjects },
    { ar: 'أنظمة الرصد والسلامة الذكية', en: 'Field Safety & Compliance', href: defaultProjects },
    { ar: 'منصة النوخذة للتعلم الذكي', en: 'Al Nowkhaza AI Agent', href: defaultProjects },
    { ar: 'نظام تشفير الرسائل (CryptoGuard)', en: 'CryptoGuard Encryption', href: defaultProjects },
    { ar: 'نظام إدارة الصيدليات (PharmaSync)', en: 'PharmaSync POS & ERP', href: defaultProjects },
    { ar: 'استعراض كافة الأعمال (+24 مشروع)', en: 'Explore All Work (+24)', href: defaultProjects, isHighlight: true },
  ]

  const companyLinks = [
    { ar: 'من نحن ورؤية سبيرا كود', en: 'About SperaCode', href: defaultAbout },
    { ar: 'منهجية العمل (5 مراحل)', en: '5-Phase Methodology', href: `${defaultAbout}#methodology` },
    { ar: 'الضمانات وحقوق الملكية 100%', en: 'Guarantees & 100% IP', href: `${defaultAbout}#guarantees` },
    { ar: 'الأسئلة الشائعة التقنية', en: 'Technical FAQs', href: `${defaultHome}#faq` },
    { ar: 'تواصل وطلب استشارة', en: 'Contact & Consultation', href: defaultContact },
  ]

  const techBadges = [
    'Next.js 16',
    'React 19',
    'TypeScript',
    'Edge Cloud',
    'Cloudflare Security',
  ]

  const whatsappDirect = buildWhatsAppUrl(
    rtl
      ? 'مرحبًا SperaCode، أود الاستفسار عن خدماتكم التقنية وبدء مشروع جديد.'
      : 'Hello SperaCode, I would like to inquire about your software engineering services.'
  )

  return (
    <footer className="footer-elite" dir={rtl ? 'rtl' : 'ltr'}>
      {/* Live Ops & Quick Connect Bar */}
      <div className="container">
        <div className="footer-ops-bar">
          <div className="footer-ops-left">
            <div className="footer-status-pill">
              <span className="status-dot-pulse" aria-hidden="true" />
              <span className="status-text">
                {rtl ? 'جميع الأنظمة تعمل بكفاءة 99.9%' : 'All Systems Operational • 99.9%'}
              </span>
            </div>
            <div className="footer-response-pill">
              <Clock size={12} aria-hidden="true" />
              <span>{rtl ? 'متوسط الرد: أقل من 15 دقيقة • متاحون 24/7' : 'Avg Response: <15 mins • 24/7'}</span>
            </div>
          </div>

          <div className="footer-ops-right">
            <a
              href={whatsappDirect}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-contact-chip"
              title={rtl ? `واتساب: ${SITE_PHONE_LOCAL}` : `WhatsApp: ${SITE_PHONE_LOCAL}`}
            >
              <Phone size={13} aria-hidden="true" />
              <span>{rtl ? `واتساب (${SITE_PHONE_LOCAL})` : `WhatsApp (${SITE_PHONE_LOCAL})`}</span>
            </a>
            <a
              href={`mailto:${SITE_EMAIL}`}
              className="footer-contact-chip"
              title={SITE_EMAIL}
            >
              <Mail size={13} aria-hidden="true" />
              <span>{SITE_EMAIL}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Multi-Column Directory */}
      <div className="container footer-main-content">
        <div className="footer-elite-grid">
          {/* Brand & Organization Column */}
          <div className="footer-col-brand">
            <SperaLogo footer rtl={rtl} homeHref={defaultHome} />

            <p className="footer-brand-desc">
              {rtl
                ? 'سبيرا كود (SperaCode) شركة برمجيات متخصصة في هندسة المنصات السحابية، تطبيقات الجوال، والذكاء الاصطناعي للمؤسسات والشركات الطموحة.'
                : 'SperaCode crafts resilient, scalable digital products, cloud platforms, mobile apps, and enterprise AI systems for ambitious organizations.'}
            </p>

            {/* Tech Stack Badges */}
            <div className="footer-tech-stack" aria-label="Tech Stack">
              {techBadges.map((badge) => (
                <span key={badge} className="footer-tech-chip">
                  <Code2 size={11} aria-hidden="true" />
                  {badge}
                </span>
              ))}
            </div>

            {/* Coverage Markets Tag */}
            <div className="footer-markets-tag">
              <Globe size={13} aria-hidden="true" />
              <span>
                {rtl
                  ? 'مقرنا مصر 🇪🇬 • تسليم متكامل للسعودية 🇸🇦 والإمارات 🇦🇪 والكويت 🇰🇼 والخليج والعالم 🌍'
                  : 'HQ in Egypt 🇪🇬 • Serving KSA 🇸🇦, UAE 🇦🇪, Kuwait 🇰🇼 & Global 🌍'}
              </span>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="footer-col-nav">
            <h4>{rtl ? 'الخدمات والحلول' : 'Services & Solutions'}</h4>
            <ul className="footer-links-list">
              {services.map((s) => (
                <li key={s.en}>
                  <Link href={s.href}>{rtl ? s.ar : s.en}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Portfolio Highlights */}
          <div className="footer-col-portfolio">
            <h4>{rtl ? 'سابقة الأعمال' : 'Featured Work'}</h4>
            <ul className="footer-links-list">
              {portfolioHighlights.map((p) => (
                <li key={p.en}>
                  <Link href={p.href} className={p.isHighlight ? 'footer-link-highlight' : ''}>
                    {rtl ? p.ar : p.en}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company & Guarantees */}
          <div className="footer-col-company">
            <h4>{rtl ? 'الشركة والضمانات' : 'Company & SLA'}</h4>
            <ul className="footer-links-list">
              {companyLinks.map((c) => (
                <li key={c.en}>
                  <Link href={c.href}>{rtl ? c.ar : c.en}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Legal, Security & Preferences Bottom Bar */}
        <div className="footer-elite-bottom">
          <div className="footer-copyright-group">
            <span>
              © {currentYear} {rtl ? 'سبيرا كود (SperaCode)' : 'SperaCode'}.{' '}
              {rtl ? 'كافة الحقوق محفوظة.' : 'All rights reserved.'}
            </span>
            <span className="footer-guarantee-pill">
              <ShieldCheck size={13} aria-hidden="true" />
              {rtl ? 'ملكية فكرية وكود بنسبة 100% للعميل' : '100% Full IP & Code Ownership'}
            </span>
          </div>

          <div className="footer-controls-group">
            {onToggleLocale && (
              <button
                type="button"
                className="footer-pill-btn"
                onClick={onToggleLocale}
                aria-label={rtl ? 'Switch to English' : 'التبديل إلى العربية'}
              >
                <Globe size={13} aria-hidden="true" />
                <span>{rtl ? 'English' : 'العربية'}</span>
              </button>
            )}

            {onToggleDark && (
              <button
                type="button"
                className="footer-pill-btn"
                onClick={onToggleDark}
                aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {dark ? <Sun size={14} /> : <Moon size={14} />}
                <span>{dark ? (rtl ? 'الوضع الفاتح' : 'Light Mode') : (rtl ? 'الوضع الداكن' : 'Dark Mode')}</span>
              </button>
            )}

            <button
              type="button"
              className="footer-back-to-top"
              onClick={scrollToTop}
              aria-label={rtl ? 'العودة إلى أعلى الصفحة' : 'Back to top'}
            >
              <span>{rtl ? 'الأعلى' : 'Top'}</span>
              <ArrowUp size={14} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
