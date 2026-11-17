'use client'

import Link from 'next/link'
import {
  ArrowUp,
  ArrowUpRight,
  CheckCircle2,
  Globe,
  Mail,
  Moon,
  Phone,
  ShieldCheck,
  Sparkles,
  Sun,
} from 'lucide-react'
import { SperaLogo } from './spera-logo'

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
    { ar: 'تطوير المواقع والمنصات السحابية', en: 'Web Applications & Cloud Platforms', href: `${defaultServices}#web` },
    { ar: 'تطبيقات الجوال (iOS & Android)', en: 'Mobile App Engineering (iOS & Android)', href: `${defaultServices}#mobile` },
    { ar: 'أنظمة الأعمال المخصصة والـ ERP', en: 'Custom ERP & Business Systems', href: `${defaultServices}#erp` },
    { ar: 'حلول الذكاء الاصطناعي والأتمتة', en: 'AI Solutions & Intelligent Automation', href: `${defaultServices}#ai` },
    { ar: 'المنيو الرقمي التفاعلي QR', en: 'Interactive Digital QR Menus', href: `${defaultServices}#qr` },
    { ar: 'تصميم واجهات وتجربة المستخدم UI/UX', en: 'UI/UX Interface & Experience Design', href: `${defaultServices}#uiux` },
  ]

  const portfolioHighlights = [
    { ar: 'منصة مشاريع التخرج (Saudi GradHub)', en: 'Saudi GradHub Innovation Platform', href: defaultProjects },
    { ar: 'أنظمة الرصد والسلامة الذكية', en: 'Field Safety & Compliance System', href: defaultProjects },
    { ar: 'منصة النوخذة للتعلم الذكي (إمارات 2071)', en: 'Al Nowkhaza UAE Classroom Agent', href: defaultProjects },
    { ar: 'نظام تشفير الرسائل (CryptoGuard)', en: 'CryptoGuard Arabic Encryption', href: defaultProjects },
    { ar: 'نظام إدارة الصيدليات (PharmaSync POS)', en: 'PharmaSync Pharmacy & POS System', href: defaultProjects },
    { ar: 'استعراض كافة الأعمال (+24 مشروع)', en: 'Explore All Projects (+24 Solutions)', href: defaultProjects, isHighlight: true },
  ]

  const companyLinks = [
    { ar: 'من نحن وقصة تأسيس سبيرا كود', en: 'About SperaCode Story & Vision', href: defaultAbout },
    { ar: 'منهجية العمل ومراحل التسليم الـ 5', en: '5-Phase Delivery Methodology', href: `${defaultAbout}#methodology` },
    { ar: 'الضمانات وحقوق الملكية 100%', en: 'Guarantees & 100% IP Ownership', href: `${defaultAbout}#guarantees` },
    { ar: 'سابقة الأعمال والمشاريع الحية', en: 'Live Client Case Studies', href: defaultProjects },
    { ar: 'الأسئلة الشائعة التقنية', en: 'Technical FAQs', href: `${defaultHome}#faq` },
  ]

  const whatsappMessage = encodeURIComponent(
    rtl
      ? 'مرحبًا SperaCode، أود الاستفسار عن خدماتكم والبدء في مشروع جديد.'
      : 'Hello SperaCode, I would like to inquire about your services and discuss a project.'
  )

  return (
    <footer className="footer-elite">
      {/* Pre-Footer Action Banner */}
      <div className="container">
        <div className="footer-cta-banner">
          <div className="footer-cta-glow" aria-hidden="true" />
          <div className="footer-cta-text">
            <span className="footer-cta-kicker">
              <Sparkles size={14} />
              {rtl ? 'شريكك التقني الموثوق' : 'YOUR TRUSTED TECH PARTNER'}
            </span>
            <h3>
              {rtl
                ? 'جاهز لتحويل فكرتك إلى منتج رقمي استثنائي؟'
                : 'Ready to build your next breakthrough digital product?'}
            </h3>
            <p>
              {rtl
                ? 'تواصل مع فريقنا الهندسي اليوم؛ نناقش متطلباتك ونقدم لك مقترحاً فنياً وتكلفة واضحة بدون أي التزام.'
                : 'Connect with our software architects to review specifications and receive a tailored proposal.'}
            </p>
          </div>

          <div className="footer-cta-actions">
            <Link className="button button-primary footer-action-btn" href={defaultContact}>
              {rtl ? 'ابدأ مشروعك الآن' : 'Start Your Project'}
              <ArrowUpRight aria-hidden="true" size={16} />
            </Link>
            <a
              className="button button-secondary footer-action-btn"
              href={`https://wa.me/?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {rtl ? 'محادثة فورية على واتساب' : 'Chat on WhatsApp'}
              <ArrowUpRight aria-hidden="true" size={16} />
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
                ? 'سبيرا كود (SperaCode) شركة برمجيات متخصصة في هندسة المنصات السحابية، تطبيقات الجوال، وتطبيقات الذكاء الاصطناعي للمؤسسات والشركات الطموحة.'
                : 'SperaCode crafts resilient, scalable digital products, cloud platforms, mobile apps, and enterprise AI systems for ambitious organizations.'}
            </p>

            {/* Live Infrastructure Status */}
            <div className="footer-status-pill">
              <span className="status-dot-pulse" aria-hidden="true" />
              <span className="status-text">
                {rtl ? 'جميع الأنظمة تعمل بكفاءة 99.9%' : 'All Systems Operational • 99.9%'}
              </span>
            </div>

            {/* Coverage Markets Pill */}
            <div className="footer-markets-tag">
              <Globe size={13} aria-hidden="true" />
              <span>
                {rtl
                  ? 'مقرنا مصر 🇪🇬 • تسليم متكامل للسعودية 🇸🇦 والإمارات 🇦🇪 والكويت 🇰🇼 والخليج والعالم'
                  : 'HQ in Egypt 🇪🇬 • Seamless Delivery to KSA 🇸🇦, UAE 🇦🇪, Kuwait 🇰🇼 & Global'}
              </span>
            </div>

            {/* Quick Contact Line */}
            <div className="footer-quick-contacts">
              <a href="mailto:contact@speracode.com" className="footer-contact-link">
                <Mail size={14} aria-hidden="true" />
                <span>contact@speracode.com</span>
              </a>
              <a
                href={`https://wa.me/?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-link"
              >
                <Phone size={14} aria-hidden="true" />
                <span>{rtl ? 'دعم فني واستشارات عبر واتساب' : 'Instant WhatsApp Advisory'}</span>
              </a>
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
