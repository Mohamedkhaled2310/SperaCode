'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Award,
  Building2,
  CheckCircle2,
  Clock,
  Code2,
  Compass,
  FileCheck2,
  Globe2,
  HeartHandshake,
  Layers,
  MapPin,
  Menu,
  Milestone,
  Moon,
  Phone,
  Rocket,
  ShieldCheck,
  Sparkles,
  Sun,
  Target,
  Users2,
  Wrench,
  X,
  Zap,
} from 'lucide-react'
import { SperaLogo } from '@/components/spera-logo'
import { SiteFooter } from '@/components/site-footer'
import { CustomerReviews } from '@/components/customer-reviews'

type Locale = 'ar' | 'en'

interface AboutPageProps {
  initialLocale?: Locale
}

export default function AboutPage({ initialLocale = 'ar' }: AboutPageProps) {
  const [locale] = useState<Locale>(initialLocale)
  const [dark, setDark] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  const rtl = locale === 'ar'
  const basePath = rtl ? '' : '/en'
  const homeHref = basePath || '/'
  const servicesHref = `${basePath}/services`
  const projectsHref = `${basePath}/projects`
  const aboutHref = `${basePath}/about`
  const contactHref = `${basePath}/contact`

  useEffect(() => {
    const savedTheme = localStorage.getItem('speracode-theme')
    const nextDark = savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
    setDark(nextDark)
    document.documentElement.lang = initialLocale
    document.documentElement.dir = initialLocale === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.classList.toggle('dark', nextDark)

    const handleScroll = () => {
      const scrollY = window.scrollY
      setScrolled(scrollY > 20)

      const winScroll = document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolledPct = height > 0 ? (winScroll / height) * 100 : 0
      setScrollProgress(scrolledPct)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el))

    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [initialLocale])

  function toggleLocale() {
    window.location.assign(rtl ? '/en/about' : '/about')
  }

  function toggleTheme() {
    const next = !dark
    setDark(next)
    localStorage.setItem('speracode-theme', next ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark', next)
  }

  const navItems = [
    { label: rtl ? 'الرئيسية' : 'Home', href: homeHref },
    { label: rtl ? 'خدماتنا' : 'Services', href: servicesHref },
    { label: rtl ? 'أعمالنا' : 'Portfolio', href: projectsHref },
    { label: rtl ? 'من نحن' : 'About', href: aboutHref, isCurrent: true },
    { label: rtl ? 'اتصل بنا' : 'Contact', href: contactHref },
  ]

  const stats = rtl
    ? [
        { num: '+24', label: 'مشروعًا تم تسليمه بنجاح', sub: 'في مصر، السعودية، الإمارات، والكويت' },
        { num: '99.8%', label: 'نسبة رضا عملائنا', sub: 'تقييمات موثقة وعلاقات عمل مستمرة' },
        { num: '100%', label: 'ملكية الكود والشيفرة للعميل', sub: 'بدون أي اشتراكات أو قيود خفية' },
        { num: '5+', label: 'سنوات من التميز الهندسي', sub: 'فريق متخصص بأحدث التقنيات السحابية' },
      ]
    : [
        { num: '+24', label: 'Delivered Projects', sub: 'Across Egypt, Saudi Arabia, UAE, and Kuwait' },
        { num: '99.8%', label: 'Client Satisfaction Rate', sub: 'Verified reviews and ongoing partnerships' },
        { num: '100%', label: 'IP & Code Ownership', sub: 'Full intellectual property transferred to client' },
        { num: '5+', label: 'Years Engineering Excellence', sub: 'Specialized in modern cloud & AI architectures' },
      ]

  const methodology = rtl
    ? [
        {
          step: '01',
          title: 'الاستكشاف والتحليل الفني المعمق',
          desc: 'نعقد جلسات استكشافية لفهم نموذج عملك بدقة، وتحديد أهدافك التجارية، واختيار البنية التحتية والتقنيات الأنسب لمشروعك.',
          deliverable: 'وثيقة المواصفات الفنية وخارطة الطريق (Technical Specs & Architecture Roadmap)',
        },
        {
          step: '02',
          title: 'التصميم وبناء النماذج التفاعلية (UI/UX)',
          desc: 'نصمم رحلة المستخدم ونبني نماذج تفاعلية حية (Clickable Prototypes) على Figma لتختبر تجربة الاستخدام والشاشات قبل كتابة سطر كود واحد.',
          deliverable: 'تصاميم Figma التفاعلية ونظام التصميم الموحد (Design System)',
        },
        {
          step: '03',
          title: 'التطوير الهندسي المرن والرشيق (Agile Sprints)',
          desc: 'نبني الشيفرة البرمجية وفق أعلى المعايير الهندسية (Clean Code) مع اجتماعات أسبوعية واستعراض دوري لمراحل التطوير خطوة بخطوة.',
          deliverable: 'بيئة عرض حية (Staging Environment) لمتابعة التطور أولاً بأول',
        },
        {
          step: '04',
          title: 'فحص الجودة الصارم واختبارات الأمان (QA)',
          desc: 'نجري اختبارات شاملة للتوافق مع كافة الشاشات والمتصفحات، وفحص سرعة التحميل (Core Web Vitals > 95%)، واختبارات الأمان وحماية البيانات.',
          deliverable: 'تقرير فحص الجودة وشهادات الحماية والأمان (Security & Performance Audit)',
        },
        {
          step: '05',
          title: 'الإطلاق السحابي والضمان الفني والنمو',
          desc: 'ندشن مشروعك على بنية تحتية سحابية موثوقة مع فترة ضمان مجانية ودعم فني مستمر وتدريب كامل لفريقك على إدارة النظام.',
          deliverable: 'التدشين الرسمي، تسليم الشيفرة بنسبة 100%، وبدء الضمان الفني المجاني',
        },
      ]
    : [
        {
          step: '01',
          title: 'Discovery & Strategic Scoping',
          desc: 'We conduct comprehensive scoping sessions to unpack your business model, understand customer pain points, and architect the optimal software foundation.',
          deliverable: 'Technical Architecture Specification & Milestone Roadmap',
        },
        {
          step: '02',
          title: 'UI/UX & Interactive Prototyping',
          desc: 'We design the user journey and build pixel-perfect interactive prototypes in Figma, validating every micro-interaction before a single line of code is written.',
          deliverable: 'Clickable Figma Prototypes & Reusable Design System Tokens',
        },
        {
          step: '03',
          title: 'Agile Engineering Sprints',
          desc: 'We implement clean, maintainable, modular code with weekly sprint demos, keeping you closely aligned with every feature as it comes to life.',
          deliverable: 'Live Staging Deployments with Continuous Integration (CI/CD)',
        },
        {
          step: '04',
          title: 'Quality Assurance & Security Audits',
          desc: 'Rigorous cross-device, cross-browser, stress-testing, and security scans ensuring sub-second response times and bulletproof data integrity.',
          deliverable: 'Comprehensive QA, Accessibility, and Performance Audit Report',
        },
        {
          step: '05',
          title: 'Cloud Deployment & Warranty',
          desc: 'We launch on high-availability cloud infrastructure with a complimentary warranty period, ongoing SLA technical support, and full team onboarding.',
          deliverable: 'Production Deployment, 100% Code Handover, and Complimentary Warranty',
        },
      ]

  const values = rtl
    ? [
        {
          icon: Code2,
          title: 'هندسة نظيفة بدون ديون تقنية',
          desc: 'نبني برمجياتنا بشيفرة نظيفة وموثقة بالكامل (Clean Code)، لتتمكن من التوسع وتطوير مشروعك مستقبلاً بسلاسة ودون الحاجة لإعادة البناء.',
        },
        {
          icon: Clock,
          title: 'التزام تعاقدي صارم بالمواعيد',
          desc: 'المواعيد بالنسبة لنا عهد مقدس. نضع جداول زمنية واقعية ونلتزم بتسليم كل مرحلة في موعدها المتفق عليه بالعقد.',
        },
        {
          icon: ShieldCheck,
          title: 'ملكية مطلقة للعميل بنسبة 100%',
          desc: 'أنت المالك الوحيد لكامل الكود المصدري، والتصاميم، وقواعد البيانات. لا نفرض قيوداً ولا نلزمك باشتراكات احتكارية.',
        },
        {
          icon: HeartHandshake,
          title: 'شراكة استراتيجية ممتدة',
          desc: 'لا ننظر لعملائنا كمشاريع عابرة، بل كشركاء نجاح. نقدم استشارات تقنية مستمرة لمساعدتك على اتخاذ القرارات الأفضل لأعمالك.',
        },
      ]
    : [
        {
          icon: Code2,
          title: 'Clean Architecture, Zero Tech Debt',
          desc: 'We engineer modular, thoroughly documented codebases that effortlessly adapt and scale as your transaction volume and user base multiply.',
        },
        {
          icon: Clock,
          title: 'Strict Delivery Timelines',
          desc: 'Punctuality is our core engineering discipline. We establish realistic agile milestones and deliver on agreed deadlines without surprises.',
        },
        {
          icon: ShieldCheck,
          title: '100% Client Ownership',
          desc: 'You own every line of code, design file, and database schema from day one. Zero proprietary vendor lock-in or hidden recurring licensing.',
        },
        {
          icon: HeartHandshake,
          title: 'Long-Term Strategic Partnership',
          desc: 'We are more than an agency; we act as your dedicated CTO and technology partner, guiding architectural decisions as your enterprise expands.',
        },
      ]

  const countries = [
    { name: rtl ? 'مصر' : 'Egypt', flag: '🇪🇬', role: rtl ? 'المقر الإقليمي وفريق الهندسة' : 'Regional HQ & Engineering Team' },
    { name: rtl ? 'المملكة العربية السعودية' : 'Saudi Arabia', flag: '🇸🇦', role: rtl ? 'مشاريع حكومية وتجارية ومنصات' : 'Enterprise & E-Commerce Platforms' },
    { name: rtl ? 'الإمارات العربية المتحدة' : 'United Arab Emirates', flag: '🇦🇪', role: rtl ? 'منصات ذكاء اصطناعي وحلول مبتكرة' : 'AI Agents & Innovative Portals' },
    { name: rtl ? 'الكويت' : 'Kuwait', flag: '🇰🇼', role: rtl ? 'منصات تعليمية وأنظمة أعمال' : 'Educational & Business Systems' },
    { name: rtl ? 'الشرق الأوسط والعالم' : 'MENA & Global Remote', flag: '🌍', role: rtl ? 'إدارة مشاريع وسير عمل سحابي' : 'Cloud Delivery & Modern Tooling' },
  ]

  return (
    <div className={`site about-page ${dark ? 'theme-dark' : ''}`} dir={rtl ? 'rtl' : 'ltr'}>
      {/* Top Reading Progress Bar */}
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} aria-hidden="true" />

      <a className="skip-link" href="#about-main">
        {rtl ? 'انتقل إلى المحتوى الرئيسي' : 'Skip to main content'}
      </a>

      {/* Header */}
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
              type="button"
              className="icon-button locale-button"
              onClick={toggleLocale}
              aria-label={rtl ? 'Switch to English' : 'التبديل إلى العربية'}
            >
              {rtl ? 'EN' : 'عربي'}
            </button>
            <button
              type="button"
              className="icon-button"
              onClick={toggleTheme}
              aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {dark ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
            </button>
            <Link className="button button-primary nav-cta" href={contactHref}>
              {rtl ? 'ابدأ مشروعك' : 'Start Project'}
              <ArrowUpRight aria-hidden="true" />
            </Link>
            <button
              type="button"
              className="icon-button mobile-menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
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
                <ArrowUpRight aria-hidden="true" />
              </Link>
            ))}
            <button
              type="button"
              className="button button-secondary"
              style={{ marginTop: '14px' }}
              onClick={toggleLocale}
            >
              {rtl ? 'Switch to English' : 'التبديل إلى العربية'}
            </button>
            <Link
              onClick={() => setMenuOpen(false)}
              className="button button-primary"
              href={contactHref}
            >
              {rtl ? 'ابدأ مشروعك معنا' : 'Start Your Project'}
              <ArrowUpRight aria-hidden="true" />
            </Link>
          </nav>
        )}
      </header>

      <main id="about-main">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href={homeHref}>{rtl ? 'الرئيسية' : 'Home'}</Link>
              <span aria-hidden="true">/</span>
              <span>{rtl ? 'من نحن وعن الشركة' : 'About SperaCode'}</span>
            </nav>

            <div className="about-hero-content">
              <div className="eyebrow">
                <span className="live-dot" />
                {rtl ? 'عن سبيرا كود (SperaCode)' : 'ABOUT SPERACODE'}
              </div>

              <h1>
                {rtl ? (
                  <>
                    نبني برمجيات تصنع الفارق
                    <br />
                    <em>وتنقل أعمالك نحو الريادة والمستقبل</em>
                  </>
                ) : (
                  <>
                    Engineering world-class software
                    <br />
                    <em>that accelerates ambitious companies</em>
                  </>
                )}
              </h1>

              <p className="about-hero-lead">
                {rtl
                  ? 'سبيرا كود (SperaCode) شركة برمجيات وهندسة تقنية متخصصة في تطوير المواقع والمنصات وتطبيقات الجوال وحلول الذكاء الاصطناعي. نجمع بين الدقة الهندسية وأعلى معايير تجربة الاستخدام لنبني منتجات تقود الأسواق في مصر والخليج العربي والعالم.'
                  : 'SperaCode is an elite software engineering house and digital product agency. We bridge the gap between cutting-edge technology (Cloud, Modern Web, AI) and tangible business growth across Egypt, Saudi Arabia, the UAE, Kuwait, and globally.'}
              </p>
            </div>

            {/* Stats Grid */}
            <div className="about-stats-grid">
              {stats.map((s, idx) => (
                <div key={idx} className="about-stat-card" data-reveal>
                  <b className="stat-number">{s.num}</b>
                  <span className="stat-label">{s.label}</span>
                  <p className="stat-sub">{s.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision & Mission Cards */}
        <section className="section vision-mission-section">
          <div className="container">
            <div className="vision-mission-grid">
              <div className="vision-card" data-reveal>
                <div className="vision-icon">
                  <Compass size={28} />
                </div>
                <h2>{rtl ? 'رؤيتنا' : 'Our Vision'}</h2>
                <p>
                  {rtl
                    ? 'أن نكون الشريك التقني وبيت الخبرة البرمجية الأول للشركات والمؤسسات الطموحة في العالم العربي، ونقود التحول الرقمي ببرمجيات تنافس عالمياً في جودتها، سرعتها، وسهولة استخدامها.'
                    : 'To stand as the foremost engineering partner for visionary organizations across the MENA region, crafting world-class digital products that compete on the global stage.'}
                </p>
              </div>

              <div className="vision-card" data-reveal>
                <div className="vision-icon">
                  <Target size={28} />
                </div>
                <h2>{rtl ? 'رسالتنا' : 'Our Mission'}</h2>
                <p>
                  {rtl
                    ? 'تحويل الأفكار المعقدة والتحديات التشغيلية إلى منتجات رقمية سهلة الاستخدام ومربحة تجارياً، مع الالتزام الصارم بنظافة الكود، وشفافية المواعيد، وضمان ملكية العميل الكاملة لكافة أصول مشروعه.'
                    : 'To translate ambitious business challenges into resilient, beautifully crafted software that delivers measurable ROI, backed by clean architecture, contractual transparency, and 100% client ownership.'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5-Phase Methodology Section */}
        <section className="section methodology-section" id="methodology">
          <div className="container">
            <div className="section-header" style={{ textAlign: 'center', maxWidth: '720px', marginInline: 'auto' }}>
              <div className="eyebrow" style={{ justifyContent: 'center' }}>
                <Milestone size={16} />
                {rtl ? 'منهجية العمل والإنتاج' : 'HOW WE DELIVER'}
              </div>
              <h2 className="section-title">
                {rtl ? 'خريطة العمل: 5 مراحل لانطلاق مشروعك' : 'Our 5-Phase Engineering Framework'}
              </h2>
              <p className="section-subtitle">
                {rtl
                  ? 'نتبع مساراً هندسياً واضحاً ومدروساً يضمن الانتقال من الفكرة إلى الإطلاق السلس دون مفاجآت أو هدر للوقت والميزانية.'
                  : 'A disciplined, transparent delivery framework designed to eliminate guesswork, mitigate risks, and guarantee successful launches.'}
              </p>
            </div>

            <div className="methodology-steps">
              {methodology.map((m, mi) => (
                <div key={mi} className="methodology-step-card" data-reveal>
                  <div className="methodology-step-badge">{m.step}</div>
                  <div className="methodology-step-body">
                    <h3>{m.title}</h3>
                    <p>{m.desc}</p>
                    <div className="methodology-deliverable">
                      <FileCheck2 size={15} />
                      <span>
                        <b>{rtl ? 'المخرج المستلم: ' : 'Deliverable: '}</b>
                        {m.deliverable}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="section values-section" id="guarantees">
          <div className="container">
            <div className="section-header" style={{ textAlign: 'center', maxWidth: '720px', marginInline: 'auto' }}>
              <div className="eyebrow" style={{ justifyContent: 'center' }}>
                <ShieldCheck size={16} />
                {rtl ? 'قيمنا الهندسية' : 'OUR CORE PILLARS'}
              </div>
              <h2 className="section-title">
                {rtl ? 'مبادئ هندسية لا نساوم عليها' : 'Engineering Principles We Stand By'}
              </h2>
            </div>

            <div className="values-grid">
              {values.map((v, vi) => {
                const VIcon = v.icon
                return (
                  <div key={vi} className="value-card" data-reveal>
                    <div className="value-icon">
                      <VIcon size={24} />
                    </div>
                    <h3>{v.title}</h3>
                    <p>{v.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Regional Coverage */}
        <section className="section regional-section">
          <div className="container">
            <div className="section-header" style={{ textAlign: 'center', maxWidth: '720px', marginInline: 'auto' }}>
              <div className="eyebrow" style={{ justifyContent: 'center' }}>
                <MapPin size={16} />
                {rtl ? 'التواجد والانتشار' : 'REGIONAL FOOTPRINT'}
              </div>
              <h2 className="section-title">
                {rtl ? 'نخدم عملاءنا في مصر والخليج والعالم' : 'Serving Leading Clients Across MENA & Beyond'}
              </h2>
              <p className="section-subtitle">
                {rtl
                  ? 'نعتمد منظومة عمل سحابية متقدمة؛ مما يتيح لنا إدارة المشاريع والتواصل اللحظي مع شركائنا في مختلف الدول بسلاسة تامة واحترافية عالية.'
                  : 'Modern cloud collaboration infrastructure allows us to conduct sprint reviews and coordinate with clients seamlessly worldwide.'}
              </p>
            </div>

            <div className="regional-grid">
              {countries.map((c, ci) => (
                <div key={ci} className="regional-card" data-reveal>
                  <span className="regional-flag">{c.flag}</span>
                  <h3>{c.name}</h3>
                  <p>{c.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Customer Reviews Section */}
        <CustomerReviews rtl={rtl} />

        {/* Ready to start CTA Banner */}
        <section className="section about-cta-section">
          <div className="container">
            <div className="about-cta-box" data-reveal>
              <div className="about-cta-glow" aria-hidden="true" />
              <h2>{rtl ? 'هل أنت مستعد لبدء مشروعك القادم؟' : 'Ready to Build Your Next Milestone?'}</h2>
              <p>
                {rtl
                  ? 'شاركنا تفاصيل مشروعك اليوم وسيقوم مهندسونا بتقديم استشارة فنية وخطة عمل مخصصة مجاناً.'
                  : 'Connect with our solution architects today for a complimentary discovery session and tailored technical proposal.'}
              </p>
              <div className="about-cta-actions">
                <Link className="button button-primary" href={contactHref}>
                  {rtl ? 'تواصل معنا الآن' : 'Contact Our Team'}
                  <ArrowUpRight size={16} />
                </Link>
                <Link className="button button-secondary" href={projectsHref}>
                  {rtl ? 'استعرض سابقة الأعمال' : 'View Portfolio'}
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <SiteFooter
        rtl={rtl}
        dark={dark}
        onToggleDark={toggleTheme}
        onToggleLocale={toggleLocale}
        homeHref={homeHref}
        projectsHref={projectsHref}
        contactHref={contactHref}
        servicesHref={servicesHref}
        aboutHref={aboutHref}
      />
    </div>
  )
}
