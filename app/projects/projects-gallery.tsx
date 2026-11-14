'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Check, Menu, Moon, Sun, X } from 'lucide-react'
import { SperaLogo } from '@/components/spera-logo'
import { PageHeroVisual } from '../page-hero-visual'
import { projects } from './project-data'

type Locale = 'ar' | 'en'
const categories = ['All', 'Websites', 'Platforms', 'Business systems'] as const
const categoryLabels = { ar: ['الكل', 'مواقع إلكترونية', 'منصات رقمية', 'أنظمة أعمال'], en: [...categories] }

export default function ProjectsGallery() {
  const [active, setActive] = useState<string>('All')
  const [locale, setLocale] = useState<Locale>('ar')
  const [dark, setDark] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const rtl = locale === 'ar'
  const filtered = useMemo(() => projects.filter((project) => active === 'All' || project.category === active), [active])

  useEffect(() => {
    const savedLocale = localStorage.getItem('speracode-locale')
    const savedTheme = localStorage.getItem('speracode-theme')
    const nextLocale: Locale = savedLocale === 'en' ? 'en' : 'ar'
    const nextDark = savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
    setLocale(nextLocale)
    setDark(nextDark)
    document.documentElement.lang = nextLocale
    document.documentElement.dir = nextLocale === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.classList.toggle('dark', nextDark)
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target) }
    }), { threshold: 0.12 })
    document.querySelectorAll('[data-reveal]').forEach((element) => observer.observe(element))
    return () => { window.removeEventListener('scroll', onScroll); observer.disconnect() }
  }, [])

  function toggleLocale() {
    const next: Locale = rtl ? 'en' : 'ar'
    setLocale(next)
    localStorage.setItem('speracode-locale', next)
    document.documentElement.lang = next
    document.documentElement.dir = next === 'ar' ? 'rtl' : 'ltr'
  }

  function toggleTheme() {
    const next = !dark
    setDark(next)
    localStorage.setItem('speracode-theme', next ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark', next)
  }

  const labels = rtl
    ? { home: 'الرئيسية', services: 'خدماتنا', work: 'أعمالنا', about: 'من نحن', contact: 'اتصل بنا', start: 'ابدأ مشروعك', breadcrumb: 'الرئيسية', heroTop: 'SPERACODE / أعمالنا', heroTitle: <>أفكار تتحوّل إلى<br/><em>تجارب رقمية</em></>, heroDesc: 'اكتشف مواقع ومنصات وأنظمة أعمال صممناها لتجمع بين هدف واضح وتنفيذ متقن.', explore: 'استكشف المشاريع', count: 'مشروعًا', categories: 'تصنيفات', links: 'روابط مباشرة', intro: 'مختاراتنا', heading: 'المشاريع السابقة', introText: 'شاهد لقطات حقيقية من مواقعنا، وافتح كل مشروع لاستكشاف التجربة كاملة.', projectCount: 'مشاريع', open: 'افتح الموقع', note: 'الصور تعرض لقطات فعلية من واجهات المشاريع. قد تتطلب بعض الأنظمة تسجيل الدخول للوصول إلى الديمو.', next: 'خطوتك القادمة', cta: 'هل لديك فكرة لمشروع؟', ctaText: 'ابدأ محادثة معنا، ودعنا نبني تجربة رقمية تناسب أهدافك.', footer: 'نحوّل الأفكار إلى تجارب رقمية مدروسة.', back: 'العودة للرئيسية', switch: 'English', themeDark: 'تفعيل الوضع الداكن', themeLight: 'تفعيل الوضع الفاتح' }
    : { home: 'Home', services: 'Services', work: 'Our work', about: 'About', contact: 'Contact', start: 'Start a project', breadcrumb: 'Home', heroTop: 'SPERACODE / PORTFOLIO', heroTitle: <>Ideas made into<br/><em>digital experiences</em></>, heroDesc: 'Explore websites, platforms, and business systems designed around clear goals and thoughtful execution.', explore: 'Explore projects', count: 'projects', categories: 'categories', links: 'direct links', intro: 'Selected work', heading: 'Projects we have delivered', introText: 'See real screenshots from our websites, then open each project to explore the full experience.', projectCount: 'projects', open: 'Visit website', note: 'Images show real interface captures from each project. Some systems may require signing in to access the demo.', next: 'What’s next', cta: 'Have a project in mind?', ctaText: 'Tell us what you are planning and we will help shape the right digital experience.', footer: 'Thoughtful digital experiences, built around your goals.', back: 'Back to home', switch: 'عربي', themeDark: 'Switch to dark mode', themeLight: 'Switch to light mode' }

  return <div className={`site projects-page ${dark ? 'theme-dark' : ''}`} dir={rtl ? 'rtl' : 'ltr'}>
    <a className="skip-link" href="#main">{rtl ? 'انتقل إلى المحتوى' : 'Skip to content'}</a>
    <header className={`navbar${scrolled ? ' scrolled' : ''}`}><div className="container nav-inner"><SperaLogo rtl={rtl}/><nav className="desktop-nav" aria-label={rtl ? 'التنقل الرئيسي' : 'Main navigation'}><Link href="/">{labels.home}</Link><Link href="/#services">{labels.services}</Link><Link href="/projects" aria-current="page">{labels.work}</Link><Link href="/#about">{labels.about}</Link><Link href="/contact">{labels.contact}</Link></nav><div className="nav-actions"><button type="button" className="icon-button locale-button" onClick={toggleLocale} aria-label={rtl ? 'Switch to English' : 'التبديل إلى العربية'}>{labels.switch}</button><button type="button" className="icon-button" onClick={toggleTheme} aria-label={dark ? labels.themeLight : labels.themeDark} aria-pressed={dark}>{dark ? <Sun/> : <Moon/>}</button><Link className="button button-primary nav-cta" href="/contact">{labels.start}<ArrowUpRight/></Link><button type="button" className="icon-button projects-menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? (rtl ? 'إغلاق القائمة' : 'Close menu') : (rtl ? 'فتح القائمة' : 'Open menu')}>{menuOpen ? <X/> : <Menu/>}</button></div></div>{menuOpen && <nav className="mobile-nav projects-mobile-nav" aria-label={rtl ? 'التنقل الرئيسي' : 'Main navigation'}><Link onClick={() => setMenuOpen(false)} href="/">{labels.home}<ArrowUpRight/></Link><Link onClick={() => setMenuOpen(false)} href="/#services">{labels.services}<ArrowUpRight/></Link><Link onClick={() => setMenuOpen(false)} href="/projects">{labels.work}<ArrowUpRight/></Link><Link onClick={() => setMenuOpen(false)} href="/#about">{labels.about}<ArrowUpRight/></Link><Link onClick={() => setMenuOpen(false)} href="/contact">{labels.contact}<ArrowUpRight/></Link><button className="button button-secondary" onClick={toggleLocale}>{labels.switch}</button></nav>}</header>
    <main id="main">
      <section className="projects-hero"><div className="container projects-hero-inner"><div className="projects-hero-layout"><div className="projects-hero-copy"><Link className="breadcrumb" href="/">{labels.breadcrumb} <ArrowLeft aria-hidden="true"/> {labels.work}</Link><span className="section-kicker">{labels.heroTop}</span><h1>{labels.heroTitle}</h1><p>{labels.heroDesc}</p><div className="projects-hero-actions"><Link className="button button-primary" href="/contact">{labels.start}<ArrowUpRight aria-hidden="true"/></Link><a className="button button-secondary" href="#gallery">{labels.explore}<ArrowDown aria-hidden="true"/></a></div><div className="projects-hero-stats"><span><b>{String(projects.length).padStart(2, '0')}</b> {labels.count}</span><span><b>{String(categories.length - 1).padStart(2, '0')}</b> {labels.categories}</span><span><b>01</b> {labels.links}</span></div></div><div className="projects-hero-visual"><PageHeroVisual dark={dark} rtl={rtl}/></div></div></div></section>
      <section className="section projects-gallery-section" id="gallery"><div className="container"><div className="portfolio-intro" data-reveal><div><span className="section-kicker">{labels.intro}</span><h2>{labels.heading}</h2><p>{labels.introText}</p></div><span className="portfolio-count">{String(filtered.length).padStart(2, '0')} <span>{labels.projectCount}</span></span></div><div className="portfolio-filters" role="group" aria-label={rtl ? 'تصفية المشاريع' : 'Filter projects'}>{categories.map((category, index) => { const label = categoryLabels[locale][index]; return <button type="button" className={active === category ? 'portfolio-filter active' : 'portfolio-filter'} key={category} onClick={() => setActive(category)} aria-pressed={active === category}>{label}</button> })}</div><div className="portfolio-grid">{filtered.map((project, index) => <article className="portfolio-card" data-reveal key={project.title} style={{'--reveal-delay': `${Math.min(index, 4) * 75}ms`} as React.CSSProperties}><a className="portfolio-image" href={project.demoUrl} target="_blank" rel="noopener noreferrer" aria-label={`${labels.open}: ${project.title}`}><Image src={project.image} alt={project.imageAlt} width={1200} height={800} sizes="(max-width: 760px) 100vw, 1100px"/><span className="portfolio-image-overlay"><span>{labels.open}<ArrowUpRight aria-hidden="true"/></span></span><span className="portfolio-type">{rtl ? project.arCategory : project.category}</span></a><div className="portfolio-card-content"><div className="portfolio-card-heading"><span className="portfolio-index">{String(index + 1).padStart(2, '0')}</span><h3>{project.title}</h3><ArrowUpRight aria-hidden="true"/></div><p>{rtl ? project.arDescription : project.description}</p><div className="portfolio-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><a className="portfolio-demo-link" href={project.demoUrl} target="_blank" rel="noopener noreferrer">{labels.open}<ArrowUpRight aria-hidden="true"/></a></div></article>)}</div><div className="portfolio-note"><Check aria-hidden="true"/><span>{labels.note}</span></div></div></section>
      <section className="portfolio-cta"><div className="container"><div className="portfolio-cta-card" data-reveal><span className="section-kicker">{labels.next}</span><h2>{labels.cta}</h2><p>{labels.ctaText}</p><Link className="button button-primary" href="/contact">{labels.start}<ArrowUpRight/></Link></div></div></section>
    </main>
    <footer className="footer projects-footer"><div className="container"><div className="footer-grid"><div><SperaLogo footer rtl={rtl}/><p>{labels.footer}</p></div><nav aria-label={rtl ? 'روابط الموقع' : 'Site links'}><Link href="/">{labels.home}</Link><Link href="/#services">{labels.services}</Link><Link href="/projects">{labels.work}</Link><Link href="/contact">{labels.contact}</Link></nav><div className="footer-bottom"><span>© {new Date().getFullYear()} SperaCode</span><Link href="/contact">{labels.contact}</Link></div></div></div></footer>
  </div>
}
