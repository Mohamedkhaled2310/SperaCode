'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import {
  ArrowDownLeft,
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Bot,
  Check,
  Code2,
  Globe2,
  Mail,
  Menu,
  Moon,
  PenTool,
  QrCode,
  Smartphone,
  Sun,
  Wrench,
  X,
} from 'lucide-react'
import { SperaLogo } from '@/components/spera-logo'
import { CustomerReviews } from '@/components/customer-reviews'
import { AnimatedMarqueeCarousel } from '@/components/animated-marquee-carousel'
import { SiteFooter } from '@/components/site-footer'
import { WhatsAppFloatingButton } from '@/components/whatsapp-floating-button'
import { buildWhatsAppUrl } from './site-config'
import { projects } from './projects/project-data'
import { homeFaqs } from './seo-data'

type Locale = 'ar' | 'en'

const services = [
  { icon: Globe2, en: 'Web development', ar: 'تطوير المواقع والمنصات', descEn: 'Fast, secure, search-optimized web apps and platforms for ambitious businesses.', descAr: 'مواقع وتطبيقات ويب سريعة، آمنة، ومهيأة للظهور في محركات البحث ومحركات الذكاء الاصطناعي.' },
  { icon: Smartphone, en: 'Mobile applications', ar: 'تطبيقات الجوال', descEn: 'High-performance iOS and Android apps built with Flutter and modern stacks.', descAr: 'تطبيقات متطورة لأجهزة iOS وAndroid بتجربة مستخدم سلسة وأداء فائق السرعة.' },
  { icon: QrCode, en: 'Digital QR menu', ar: 'المنيو الرقمي التفاعلي QR', descEn: 'Bilingual digital restaurant menus with direct WhatsApp ordering and instant updates.', descAr: 'قوائم طعام رقمية تفاعلية بمسح QR مع طلب فوري عبر واتساب ودون تكاليف طباعة.', badge: true },
  { icon: Bot, en: 'AI solutions & Chatbots', ar: 'حلول الذكاء الاصطناعي والأتمتة', descEn: 'Custom AI chatbots and business workflow automations that scale operations.', descAr: 'روبوتات محادثة ذكية وأتمتة للعمليات اليومية ترفع كفاءة أعمالك وتخدم عملاءك على مدار الساعة.' },
  { icon: PenTool, en: 'UI/UX design', ar: 'تصميم تجربة وواجهة المستخدم UI/UX', descEn: 'Data-driven, human-centered product design that maximizes engagement.', descAr: 'واجهات رقمية مبنية على دراسة سلوك المستخدم لتحقيق أعلى معدلات تحويل ورضا.' },
  { icon: Wrench, en: 'Maintenance & support', ar: 'الصيانة والدعم الفني المستمر', descEn: 'Proactive speed optimization, security updates, and SLA technical support.', descAr: 'متابعة دورية، وتحديثات أمنية، وإصلاح أعطال، وضمان استقرار موقعك أو تطبيقك.' },
  { icon: Mail, en: 'Enterprise Email & Hosting', ar: 'البريد المؤسسي والاستضافة السحابية', descEn: 'Reliable cloud infrastructure and corporate email accounts under your domain.', descAr: 'بنية تحتية سحابية متقدمة، واستضافة فائقة السرعة، وبريد إلكتروني رسمي بهوية شركتك.' },
  { icon: Code2, en: 'Custom business software', ar: 'أنظمة إدارة الأعمال المخصصة', descEn: 'Bespoke ERPs, internal tools, and dashboards shaped to your exact business rules.', descAr: 'لوحات تحكم وأنظمة إدارة مصممة خصيصًا لتلائم طبيعة ودورة عمل شركتك.' },
]

const process = [
  ['Discover', 'We analyze your market, business goals, and technical requirements.', 'الاستكشاف والتحليل', 'ندرس متطلباتك، ونحدد الفئات المستهدفة، ونرسم خارطة طريق واضحة.'],
  ['Design', 'We design user-centric interfaces and build interactive prototypes.', 'التصميم وتجربة الاستخدام', 'نصمم واجهات عصرية ونماذج تفاعلية تراعي أدق تفاصيل رحلة المستخدم.'],
  ['Develop', 'We engineer robust solutions using scalable, modern frameworks.', 'التطوير البرمجي', 'نبني المشروع بشيفرة نظيفة، سريعة، ومتوافقة مع أعلى معايير الأمان.'],
  ['Test & launch', 'We run comprehensive QA and deploy to high-availability servers.', 'الاختبار والإطلاق', 'فحص شامل للأداء والتوافق والأمان قبل التدشين الرسمي للمشروع.'],
  ['Support & growth', 'We continuously monitor, maintain, and help scale your product.', 'الدعم والنمو المستمر', 'متابعة أداء مستمرة وتحديثات دورية لمواكبة نمو أعمالك بنجاح.'],
]

const copy = {
  en: {
    nav: ['Home', 'Services', 'Work', 'About', 'FAQ', 'Contact'],
    badge: 'SOFTWARE HOUSE & AI LAB',
    hero: <>We engineer digital products that <em>drive exponential business growth.</em></>,
    sub: 'SperaCode delivers end-to-end software solutions: custom websites, native-grade mobile apps, digital QR menus, AI automations, and UI/UX design—from concept to scale.',
    start: 'Start your project',
    work: 'Explore our portfolio',
    checks: ['Guaranteed delivery dates', 'Complimentary post-launch warranty', '100% IP & code ownership'],
    stats: ['Delivered projects', 'Satisfied clients', 'Years of experience', 'SLA technical support'],
    services: 'Our services',
    servicesSub: 'Comprehensive engineering and digital capabilities built to scale your business.',
    projects: 'Selected work',
    projectsSub: 'Curated platforms, e-commerce stores, and enterprise systems delivered to leading companies.',
    projectDemo: 'LIVE DEMO',
    case: 'Visit live project',
    qrTitle: 'Your restaurant menu, one touch away.',
    qrSub: 'Delight guests with a lightning-fast interactive menu. Update dishes and prices instantly and accept direct orders on WhatsApp without print fees.',
    benefits: ['Real-time item and price updates', 'Zero recurring printing costs', 'Bilingual Arabic & English', 'Runs instantly in any mobile browser', 'Direct WhatsApp ordering'],
    plans: 'Get started with QR',
    demo: 'Test live demo',
    why: 'Why SperaCode',
    reasons: [
      ['On-time delivery commitment', 'Clear project milestones and strict adherence to agreed launch deadlines.'],
      ['Complimentary warranty & support', 'Dedicated post-delivery technical warranty, monitoring, and guidance.'],
      ['Transparent milestone pricing', 'Detailed written quotes with milestone-based installments and zero hidden fees.'],
      ['Clean, scalable architecture', 'Well-documented, modern codebase that effortlessly scales as your company grows.'],
    ],
    process: 'How we work',
    tech: 'Modern technologies we rely on',
    faq: 'Frequently asked questions',
    final: 'Have an idea? Let’s bring it to life.',
    finalSub: 'Tell us about your project vision, and our engineering team will propose the optimal architecture and timeline.',
    whatsapp: 'Chat on WhatsApp',
    message: 'Send project brief',
    footer: 'Crafting future-ready digital experiences and software for forward-thinking enterprises.',
    more: 'Discover more',
    all: 'All projects',
    category: ['Websites', 'Platforms', 'Business systems'],
  },
  ar: {
    nav: ['الرئيسية', 'خدماتنا', 'أعمالنا', 'لماذا نحن', 'الأسئلة الشائعة', 'اتصل بنا'],
    badge: 'شركة برمجيات وحلول ذكاء اصطناعي',
    hero: <>نبني منتجات رقمية متقدمة <em>تدعم نمو أعمالك وتضاعف نجاحها.</em></>,
    sub: 'سبيرا كود (SperaCode) شركة برمجيات تقدّم حلولًا رقمية وهندسية متكاملة تشمل: المواقع الإلكترونية، تطبيقات الجوال، المنيو الرقمي QR، وحلول الذكاء الاصطناعي وتصميم UI/UX من الفكرة إلى الريادة.',
    start: 'ابدأ مشروعك معنا',
    work: 'استعرض سابقة أعمالنا',
    checks: ['التزام صارم بمواعيد التسليم', 'فترة ضمان ودعم فني بعد الإطلاق', 'ملكية فكرية وكود بنسبة 100% للعميل'],
    stats: ['مشروعًا تم تنفيذه', 'عميلًا يثق بنا', 'سنوات خبرة متخصصة', 'دعم فني متواصل'],
    services: 'خدماتنا وحلولنا',
    servicesSub: 'منظومة تقنية متكاملة صُممت لتمكين علامتك التجارية من المنافسة والتوسع.',
    projects: 'نماذج من أعمالنا',
    projectsSub: 'مجموعة مختارة من المواقع، المنصات الرقمية، وأنظمة الأعمال التي نفذناها مع روابط مباشرة لاستكشافها.',
    projectDemo: 'موقع حي',
    case: 'فتح المشروع',
    qrTitle: 'قائمة طعامك الذكية.. بمسحة واحدة.',
    qrSub: 'وفّر لرواد مطعمك أو مقهاك تجربة استثنائية مع منيو تفاعلي سريع؛ حدّث الأصناف والأسعار في ثوانٍ، واستقبل طلبات الزبائن مباشرة على واتساب دون مصاريف طباعة.',
    benefits: ['تحديث فوري للأسعار والوجبات', 'وداعًا لتكاليف الطباعة وإعادة التصميم', 'واجهة ثنائية اللغة (عربي وإنجليزي)', 'يعمل فورًا على أي هاتف دون تحميل تطبيق', 'استقبال الطلبات بضغطة زر على واتساب'],
    plans: 'احصل على منيو QR الآن',
    demo: 'جرّب النسخة التجريبية',
    why: 'لماذا يختارنا العملاء؟',
    reasons: [
      ['التزام تام بالمواعيد', 'جدول زمني واضح ومراحل تسليم محددة نلتزم بها بدقة واحترافية.'],
      ['ضمان ودعم فني حقيقي', 'نقدم ضمانًا فنيًا مجانيًا بعد الإطلاق مع إمكانية الاشتراك في باقات الصيانة الشاملة.'],
      ['تسعير شفاف وعادل', 'عروض أسعار تفصيلية ومكتوبة، وسداد على دفعات مرحلية دون أي رسوم غير معلنة.'],
      ['شيفرة برمجية نقية وقابلة للتوسع', 'بناء هندسي متين بنية تحتية سحابية موثوقة وقابلة للتطوير المستمر مع نمو مشروعك.'],
    ],
    process: 'منهجية العمل والإنتاج',
    tech: 'التقنيات الحديثة التي نعتمدها',
    faq: 'الأسئلة الأكثر شيوعًا',
    final: 'هل أنت جاهز لتحويل فكرتك إلى واقع؟',
    finalSub: 'شاركنا تفاصيل مشروعك أو فكرتك، وسيقدم لك خبراؤنا استشارة فنية وخطة عمل متكاملة مجانًا.',
    whatsapp: 'تواصل عبر واتساب',
    message: 'إرسال تفاصيل المشروع',
    footer: 'نبتكر برمجيات وحلولًا رقمية استثنائية تصنع الفارق لعلامتك التجارية.',
    more: 'المزيد من التفاصيل',
    all: 'كافة المشاريع',
    category: ['مواقع إلكترونية', 'منصات رقمية', 'أنظمة أعمال'],
  },
}

export default function HomePage({ initialLocale = 'ar' }: { initialLocale?: Locale }) {
  const [locale] = useState<Locale>(initialLocale)
  const [dark, setDark] = useState(false)
  const [filter, setFilter] = useState('All')
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('speracode-theme')
    const isDark = savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
    setDark(isDark)
    document.documentElement.classList.toggle('dark', isDark)
    document.documentElement.lang = initialLocale
    document.documentElement.dir = initialLocale === 'en' ? 'ltr' : 'rtl'

    const handleScroll = () => {
      const scrollY = window.scrollY
      setScrolled(scrollY > 20)
      setShowBackToTop(scrollY > 400)

      const winScroll = document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolledPct = height > 0 ? (winScroll / height) * 100 : 0
      setScrollProgress(scrolledPct)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            revealObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('[data-reveal], .section:not(.hero), .service-card, .project-card, .reason-card, .process-step, .tech-section, .final-section').forEach((el) => {
      el.setAttribute('data-reveal', '')
      revealObserver.observe(el)
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      revealObserver.disconnect()
    }
  }, [initialLocale])

  const t = copy[locale]
  const rtl = locale === 'ar'

  const changeLocale = () => {
    window.location.assign(rtl ? '/en' : '/')
  }

  const changeTheme = () => {
    const next = !dark
    setDark(next)
    localStorage.setItem('speracode-theme', next ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark', next)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const categories = ['All', 'Websites', 'Platforms', 'Business systems']
  const visibleProjects =
    filter === 'All' ? projects.slice(0, 6) : projects.filter((project) => project.category === filter).slice(0, 6)

  const basePath = locale === 'en' ? '/en' : ''
  const homeHref = basePath || '/'
  const contactHref = `${basePath}/contact`
  const projectsHref = `${basePath}/projects`
  const servicesHref = `${basePath}/services`
  const aboutHref = `${basePath}/about`

  const navItems = [
    { label: rtl ? 'الرئيسية' : 'Home', href: homeHref, isCurrent: true },
    { label: rtl ? 'خدماتنا' : 'Services', href: servicesHref },
    { label: rtl ? 'أعمالنا' : 'Portfolio', href: projectsHref },
    { label: rtl ? 'من نحن' : 'About', href: aboutHref },
    { label: rtl ? 'اتصل بنا' : 'Contact', href: contactHref },
  ]

  return (
    <div className={`site ${dark ? 'theme-dark' : ''}`} dir={rtl ? 'rtl' : 'ltr'}>
      {/* Top Reading Progress Bar */}
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <a className="skip-link" href="#main">
        {rtl ? 'انتقل إلى المحتوى الرئيسي' : 'Skip to main content'}
      </a>

      {/* Sticky Frosted Header */}
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-inner">
          <SperaLogo rtl={rtl} homeHref={homeHref} />

          <nav className="desktop-nav" aria-label={rtl ? 'التنقل الرئيسي' : 'Main navigation'}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={item.isCurrent ? 'page' : undefined}
                className={item.isCurrent ? 'nav-active' : ''}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="nav-actions">
            <button
              className="icon-button locale-button"
              onClick={changeLocale}
              aria-label={rtl ? 'Switch to English language' : 'التبديل إلى اللغة العربية'}
            >
              {rtl ? 'EN' : 'عربي'}
            </button>

            <button
              className="icon-button"
              onClick={changeTheme}
              aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {dark ? <Sun /> : <Moon />}
            </button>

            <Link className="button button-primary nav-cta" href={contactHref}>
              {t.start}
              <ArrowUpRight />
            </Link>

            <button
              className="icon-button mobile-menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                onClick={() => setMenuOpen(false)}
                href={item.href}
                className={item.isCurrent ? 'mobile-nav-active' : ''}
              >
                {item.label}
                <ArrowUpRight />
              </Link>
            ))}
            <button
              className="button button-secondary"
              style={{ marginTop: '14px' }}
              onClick={changeLocale}
            >
              {rtl ? 'Switch to English' : 'التبديل إلى العربية'}
            </button>
            <Link
              onClick={() => setMenuOpen(false)}
              className="button button-primary"
              href={contactHref}
            >
              {t.start}
              <ArrowUpRight />
            </Link>
          </nav>
        )}
      </header>

      <main id="main">
        {/* Hero Section */}
        <section className="hero section" id="home">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">
                <span className="live-dot" />
                {t.badge}
              </div>

              <h1>{t.hero}</h1>

              <p className="hero-description">{t.sub}</p>

              <div className="hero-actions">
                <Link className="button button-primary" href={contactHref}>
                  {t.start}
                  {rtl ? <ArrowDownLeft /> : <ArrowDownRight />}
                </Link>

                <a className="button button-secondary" href="#work">
                  {t.work}
                  <ArrowUpRight />
                </a>
              </div>

              <div className="trust-points">
                {t.checks.map((x) => (
                  <span key={x}>
                    <Check />
                    {x}
                  </span>
                ))}
              </div>
            </div>

            <div className="home-hero-art">
              <Image
                className="home-hero-image"
                src={dark ? '/home-hero-dark.png' : '/home-hero-light.png'}
                alt={
                  rtl
                    ? 'تصميم متجر وتطبيقات ذكية على شاشات الحاسوب والهاتف لشركة SperaCode'
                    : 'Interactive digital store and mobile interface designed by SperaCode'
                }
                width={1312}
                height={816}
                priority
                sizes="(max-width: 768px) 100vw, 650px"
              />
            </div>
          </div>

          {/* Key Figures & Social Proof Stats */}
          <div className="container stats-wrap">
            <div
              className="stats-card"
              role="group"
              aria-label={rtl ? 'أرقام وإحصائيات SperaCode' : 'SperaCode at a glance'}
            >
              {['50+', '45+', '6+', '24/7'].map((num, i) => (
                <div className="stat" key={num}>
                  <strong>{num}</strong>
                  <span>{t.stats[i]}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Live Animated Tech & Enterprise Partners Marquee */}
        <AnimatedMarqueeCarousel rtl={rtl} />

        {/* Services Section */}
        <section className="section section-muted" id="services">
          <div className="container">
            <SectionHeading
              label={rtl ? '01 / خدماتنا وحلولنا' : '01 / WHAT WE DO'}
              title={t.services}
              subtitle={t.servicesSub}
            />

            <div className="services-grid">
              {services.map(({ icon: Icon, ...item }, i) => (
                <article
                  className="service-card"
                  key={item.en}
                  style={{ '--reveal-delay': `${(i % 4) * 80}ms` } as React.CSSProperties}
                >
                  <div className="service-card-top">
                    <span className="service-icon">
                      <Icon />
                    </span>
                    {item.badge && (
                      <span className="popular-badge">
                        {rtl ? 'الأكثر طلبًا' : 'MOST REQUESTED'}
                      </span>
                    )}
                  </div>

                  <h3>{rtl ? item.ar : item.en}</h3>
                  <p>{rtl ? item.descAr : item.descEn}</p>

                  <Link
                    className="text-link"
                    href={servicesHref}
                  >
                    {t.more}
                    {rtl ? <ArrowLeft /> : <ArrowRight />}
                  </Link>
                </article>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '36px' }}>
              <Link className="button button-secondary" href={servicesHref}>
                {rtl ? 'استكشف كافة الخدمات والمواصفات الفنية' : 'Explore All Services & Specifications'}
                <ArrowUpRight />
              </Link>
            </div>
          </div>
        </section>

        {/* Selected Portfolio Section */}
        <section className="section" id="work">
          <div className="container">
            <SectionHeading
              label={rtl ? '02 / أبرز أعمالنا' : '02 / SELECTED WORK'}
              title={t.projects}
              subtitle={t.projectsSub}
            />

            {/* Category Filter Pills */}
            <div
              className="filter-row"
              role="group"
              aria-label={rtl ? 'تصفية المشاريع' : 'Filter projects'}
            >
              {categories.map((category, i) => (
                <button
                  className={filter === category ? 'filter-chip active' : 'filter-chip'}
                  key={category}
                  onClick={() => setFilter(category)}
                  aria-pressed={filter === category}
                >
                  {rtl ? (i === 0 ? t.all : t.category[i - 1]) : category}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="projects-grid">
              {visibleProjects.map((project, index) => (
                <article
                  className="project-card"
                  key={project.title}
                  style={{ '--reveal-delay': `${(index % 3) * 100}ms` } as React.CSSProperties}
                >
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-cover"
                    aria-label={`${t.case}: ${project.title}`}
                  >
                    <Image
                      src={project.image}
                      alt={rtl ? project.imageAlt : project.imageAltEn}
                      width={800}
                      height={500}
                      sizes="(max-width: 768px) 100vw, (max-width: 1050px) 50vw, 380px"
                      loading="lazy"
                    />
                    <span className="concept-tag">{t.projectDemo}</span>
                    <span className="project-open">
                      {t.case}
                      <ArrowUpRight />
                    </span>
                  </a>

                  <div className="project-meta">
                    <span>{rtl ? project.arCategory : project.category}</span>
                    <span className="project-dot" />
                  </div>

                  <h3>{project.title}</h3>
                  <p>{rtl ? project.arDescription : project.description}</p>

                  <div className="tag-row">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <small className="concept-note">
                    {rtl ? 'رابط مباشر لتصفح الموقع الحقيقي.' : 'Direct link to live deployed project.'}
                  </small>
                </article>
              ))}
            </div>

            <div className="projects-more">
              <Link className="button button-secondary" href={projectsHref}>
                {rtl ? 'استكشف كافة المشاريع والأعمال' : 'Explore all projects'}
                {rtl ? <ArrowLeft /> : <ArrowRight />}
              </Link>
            </div>
          </div>
        </section>

        {/* QR Interactive Menu Feature Section */}
        <section className="section qr-section" id="qr-menu">
          <div className="container qr-panel">
            <div className="qr-copy">
              <div className="eyebrow">
                <span className="live-dot" />
                {rtl ? 'المنيو الرقمي QR' : 'SMART QR MENU'}
              </div>

              <h2>{t.qrTitle}</h2>
              <p>{t.qrSub}</p>

              <ul className="benefit-list">
                {t.benefits.map((x) => (
                  <li key={x}>
                    <Check />
                    {x}
                  </li>
                ))}
              </ul>

              <div className="hero-actions">
                <Link href={contactHref} className="button button-primary">
                  {t.plans}
                  <ArrowUpRight />
                </Link>
                <Link href={contactHref} className="button button-secondary">
                  {t.demo}
                </Link>
              </div>
            </div>

            {/* Interactive Phone Mockup */}
            <div className="qr-visual">
              <div className="phone-shell">
                <div className="phone-notch" />
                <div className="menu-screen">
                  <div className="menu-cover">
                    <QrCode />
                    <span>{rtl ? 'منيو الكافيه والمطعم' : 'MODERN CAFÉ & RESTAURANT'}</span>
                    <b>
                      {rtl ? (
                        <>
                          أشهى المأكولات.
                          <br />
                          تجربة استثنائية.
                        </>
                      ) : (
                        <>
                          Good food.
                          <br />
                          Great moments.
                        </>
                      )}
                    </b>
                  </div>

                  <div className="menu-cats">
                    <span>{rtl ? 'الأكثر طلبًا' : 'Popular'}</span>
                    <span>{rtl ? 'مشروبات' : 'Drinks'}</span>
                    <span>{rtl ? 'وجبات رئيسية' : 'Main'}</span>
                  </div>

                  <div className="menu-item">
                    <i className="food" />
                    <span>
                      <b>{rtl ? 'توست أفوكادو بالبيض' : 'Avocado Poached Toast'}</b>
                      <small>{rtl ? 'خبز طازج، أفوكادو، بيض' : 'Fresh artisanal sourdough'}</small>
                    </span>
                    <strong>$12</strong>
                  </div>

                  <div className="menu-item">
                    <i className="food food-b" />
                    <span>
                      <b>{rtl ? 'بان كيك بالتوت العضوي' : 'Wild Berry Pancakes'}</b>
                      <small>{rtl ? 'عسل طبيعي وتوت موسمي' : 'Pure maple syrup & berries'}</small>
                    </span>
                    <strong>$14</strong>
                  </div>

                  <div className="menu-order">
                    {rtl ? 'إرسال الطلب عبر واتساب' : 'Order via WhatsApp'}
                    <ArrowUpRight />
                  </div>
                </div>
              </div>

              <div className="qr-chip">
                <QrCode />
                <span>{rtl ? 'امسح. اختر. استمتع.' : 'Scan. Browse. Enjoy.'}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose SperaCode Section */}
        <section className="section section-muted" id="why">
          <div className="container">
            <SectionHeading
              label={rtl ? '03 / لماذا تختارنا' : '03 / THE SPERACODE ADVANTAGE'}
              title={t.why}
              subtitle={
                rtl
                  ? 'شراكة تقنية حقيقية قائمة على الشفافية والاحترافية ونتائج الأعمال الملموسة.'
                  : 'A strategic software partnership designed around reliability, transparency, and real growth.'
              }
            />

            <div className="reasons-grid">
              {t.reasons.map(([title, description], i) => (
                <article className="reason-card" key={title}>
                  <span className="reason-number">0{i + 1}</span>
                  <div className="reason-icon">
                    {[
                      <Check key="c" />,
                      <Mail key="m" />,
                      <Code2 key="d" />,
                      <Globe2 key="g" />,
                    ][i]}
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Verified Customer Reviews Carousel */}
        <CustomerReviews rtl={rtl} />

        {/* Work Methodology & Process */}
        <section className="section">
          <div className="container">
            <SectionHeading
              label={rtl ? '05 / منهجية العمل' : '05 / HOW WE DELIVER'}
              title={t.process}
              subtitle={
                rtl
                  ? 'خطوات عمل منظمة ومدروسة تضمن أعلى درجات الدقة والالتزام من البداية حتى الإطلاق.'
                  : 'Structured engineering phases from initial consultation to launch and continuous support.'
              }
            />

            <div className="process-grid">
              {process.map(([enTitle, enDesc, arTitle, arDesc], i) => (
                <article className="process-step" key={enTitle}>
                  <span className="step-number">0{i + 1}</span>
                  <div className="step-line" />
                  <h3>{rtl ? arTitle : enTitle}</h3>
                  <p>{rtl ? arDesc : enDesc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Modern Tech Stack Section */}
        <section className="tech-section">
          <div className="container tech-inner">
            <div>
              <span className="section-kicker">
                {rtl ? '06 / التقنيات' : '06 / MODERN STACK'}
              </span>
              <h2>{t.tech}</h2>
            </div>
            <div className="tech-list">
              {[
                'Next.js 16',
                'React 19',
                'TypeScript',
                'Node.js',
                'Flutter',
                'Python',
                'Supabase',
                'PostgreSQL',
                'Tailwind CSS',
                'OpenAI & Gemini',
                'Docker',
                'Figma',
              ].map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Rich FAQ Section for SEO & User Experience */}
        <section className="section faq-section" id="faq">
          <div className="container faq-layout">
            <div>
              <SectionHeading
                label={rtl ? '07 / الأسئلة الشائعة' : '07 / FREQUENTLY ASKED'}
                title={t.faq}
                subtitle={
                  rtl
                    ? 'إجابات واضحة وشفافة على التساؤلات الأكثر أهمية لمساعدتك في اتخاذ قرارك.'
                    : 'Clear answers to help you understand our scope, timelines, and collaboration.'
                }
              />
              <Link href={contactHref} className="text-link">
                {rtl ? 'هل لديك سؤال آخر؟ تواصل معنا' : 'Have a different question? Talk to us'}
                {rtl ? <ArrowLeft /> : <ArrowRight />}
              </Link>
            </div>

            <div className="faq-list">
              {homeFaqs.map((faq) => (
                <details className="faq-item" key={faq.questionEn}>
                  <summary>
                    {rtl ? faq.questionAr : faq.questionEn}
                    <span className="faq-plus" />
                  </summary>
                  <p>{rtl ? faq.answerAr : faq.answerEn}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* High Conversion Bottom CTA */}
        <section className="section final-section" id="contact">
          <div className="container">
            <div className="home-contact-cta">
              <span className="section-kicker">
                {rtl ? 'خطوتك القادمة' : 'TAKE THE NEXT STEP'}
              </span>
              <h2>{t.final}</h2>
              <p>{t.finalSub}</p>
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
                <Link className="button button-primary" href={contactHref}>
                  {rtl ? 'طلب استشارة ومقترح فني' : 'Request Technical Proposal'}
                  {rtl ? <ArrowLeft /> : <ArrowRight />}
                </Link>
                <a
                  className="button button-secondary"
                  href={buildWhatsAppUrl(
                    rtl
                      ? 'مرحبًا SperaCode، أود مناقشة مشروع جديد معكم.'
                      : 'Hello SperaCode, I would like to discuss a project with your team.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.whatsapp}
                  <ArrowUpRight />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Elite Global Footer */}
      <SiteFooter
        rtl={rtl}
        dark={dark}
        onToggleDark={changeTheme}
        onToggleLocale={changeLocale}
        homeHref={homeHref}
        projectsHref={projectsHref}
        contactHref={contactHref}
        servicesHref={servicesHref}
        aboutHref={aboutHref}
      />

      {/* Animated Floating WhatsApp Widget */}
      <WhatsAppFloatingButton rtl={rtl} />

      <button
        type="button"
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label={rtl ? 'العودة إلى أعلى الصفحة' : 'Back to top'}
      >
        <ArrowUp />
      </button>
    </div>
  )
}

function SectionHeading({
  label,
  title,
  subtitle,
}: {
  label: string
  title: string | React.ReactNode
  subtitle: string
}) {
  return (
    <div className="section-heading" data-reveal>
      <span className="section-kicker">{label}</span>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  )
}
