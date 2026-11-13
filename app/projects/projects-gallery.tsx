'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Check, Menu, Moon, Sun, X } from 'lucide-react'
import { SperaLogo } from '@/components/spera-logo'

const projects = [
  { title: 'Savora Café', category: 'منيو رقمي', type: 'QR Menu', image: '/project-savora.png', description: 'تجربة منيو رقمية دافئة وأنيقة لمقهى عصري، مع تصفح سريع وطلب مباشر.', tags: ['QR Menu', 'Restaurant', 'UI/UX'] },
  { title: 'Nova Clinic', category: 'مواقع إلكترونية', type: 'Websites', image: '/project-clinic.png', description: 'موقع طبي واضح يسهّل على المرضى اكتشاف الخدمات والتواصل وحجز المواعيد.', tags: ['Next.js', 'Healthcare', 'Responsive'] },
  { title: 'Orbit AI', category: 'ذكاء اصطناعي', type: 'AI', image: '/project-orbit.png', description: 'لوحة تجربة لمساعد ذكي يبسّط تواصل خدمة العملاء عبر الويب والجوال.', tags: ['AI', 'Dashboard', 'Automation'] },
  { title: 'Pulse Commerce', category: 'تجارة إلكترونية', type: 'Websites', image: '/project-savora.png', description: 'واجهة متجر حديثة بهوية نابضة وتصفح مصمم ليكون سهلًا على الهاتف.', tags: ['E-commerce', 'React', 'Mobile'] },
  { title: 'Care Mobile', category: 'تطبيقات جوال', type: 'Apps', image: '/project-clinic.png', description: 'تصور لتجربة تطبيق صحي تربط المرضى بخدمات الرعاية بطريقة ميسّرة.', tags: ['Mobile app', 'Flutter', 'Product design'] },
  { title: 'Flow Studio', category: 'تصميم UI/UX', type: 'UI/UX', image: '/project-orbit.png', description: 'نظام واجهات ولوحة معلومات قابلة للتوسع لمنتج SaaS من الجيل الجديد.', tags: ['UI/UX', 'Design system', 'SaaS'] },
]
const categories = ['الكل', 'مواقع إلكترونية', 'تطبيقات جوال', 'منيو رقمي', 'ذكاء اصطناعي', 'تصميم UI/UX']

export default function ProjectsGallery() {
  const [active, setActive] = useState('الكل')
  const [dark, setDark] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const filtered = useMemo(() => projects.filter((project) => active === 'الكل' || project.category === active), [active])
  useEffect(() => {
    const saved = localStorage.getItem('speracode-theme')
    const isDark = saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
    setDark(isDark)
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target) }
    }), { threshold: 0.12 })
    document.querySelectorAll('[data-reveal]').forEach((element) => observer.observe(element))
    return () => { window.removeEventListener('scroll', onScroll); observer.disconnect() }
  }, [])
  function toggleTheme() {
    const next = !dark
    setDark(next)
    localStorage.setItem('speracode-theme', next ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark', next)
  }

  return <div className={`site projects-page ${dark ? 'theme-dark' : ''}`} dir="rtl">
    <header className={`navbar${scrolled ? ' scrolled' : ''}`}><div className="container nav-inner"><SperaLogo/><nav className="desktop-nav" aria-label="التنقل الرئيسي"><Link href="/#home">الرئيسية</Link><Link href="/#services">خدماتنا</Link><Link href="/projects" aria-current="page">أعمالنا</Link><Link href="/#about">من نحن</Link><Link href="/contact">اتصل بنا</Link></nav><div className="nav-actions"><button className="icon-button" onClick={toggleTheme} aria-label={dark ? 'تفعيل الوضع الفاتح' : 'تفعيل الوضع الداكن'}>{dark ? <Sun/> : <Moon/>}</button><Link className="button button-primary nav-cta" href="/contact">ابدأ مشروعك<ArrowUpRight/></Link><button className="icon-button projects-menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}>{menuOpen ? <X/> : <Menu/>}</button></div></div>{menuOpen && <nav className="mobile-nav projects-mobile-nav"><Link onClick={() => setMenuOpen(false)} href="/">الرئيسية<ArrowUpRight/></Link><Link onClick={() => setMenuOpen(false)} href="/#services">خدماتنا<ArrowUpRight/></Link><Link onClick={() => setMenuOpen(false)} href="/projects">أعمالنا<ArrowUpRight/></Link><Link onClick={() => setMenuOpen(false)} href="/#about">من نحن<ArrowUpRight/></Link><Link onClick={() => setMenuOpen(false)} href="/contact">اتصل بنا<ArrowUpRight/></Link></nav>}</header>
    <main>
      <section className="projects-hero"><div className="projects-hero-glow"/><div className="container projects-hero-inner"><Link className="breadcrumb" href="/">الرئيسية <ArrowLeft/> أعمالنا</Link><span className="section-kicker">SPERACODE / PORTFOLIO</span><h1>أفكار تتحوّل إلى<br/><em>تجارب رقمية</em></h1><p>اكتشف نماذج من تصاميمنا وحلولنا الرقمية. كل تجربة صُمّمت لتجمع بين هدف واضح وتنفيذ متقن.</p><div className="projects-hero-stats"><span><b>06</b> نماذج أعمال</span><span><b>05</b> تخصصات</span><span><b>01</b> رؤية واضحة</span></div><a href="#gallery" className="scroll-cue" aria-label="انتقل إلى معرض الأعمال"><ArrowDown/></a></div></section>
      <section className="section projects-gallery-section" id="gallery"><div className="container"><div className="portfolio-intro" data-reveal><div><span className="section-kicker">مختاراتنا</span><h2>المشاريع السابقة</h2><p>مجموعة مرتبة من الأفكار والتجارب الرقمية في مجالات مختلفة.</p></div><span className="portfolio-count">{String(filtered.length).padStart(2, '0')} <span>مشاريع</span></span></div><div className="portfolio-filters" role="group" aria-label="تصفية المشاريع">{categories.map((category) => <button className={active === category ? 'portfolio-filter active' : 'portfolio-filter'} key={category} onClick={() => setActive(category)} aria-pressed={active === category}>{category}</button>)}</div><div className="portfolio-grid">{filtered.map((project, index) => <article className="portfolio-card" data-reveal key={project.title} style={{'--reveal-delay': `${Math.min(index, 4) * 75}ms`} as React.CSSProperties}><Link className="portfolio-image" href="/contact" aria-label={`تواصل معنا لتنفيذ مشروع مشابه: ${project.title}`}><Image src={project.image} alt={`تصميم توضيحي لمشروع ${project.title}`} width={1200} height={800} /><span className="portfolio-image-overlay"><span>اكتشف طريقة العمل <ArrowUpRight/></span></span><span className="portfolio-type">{project.category}</span></Link><div className="portfolio-card-content"><div className="portfolio-card-heading"><span className="portfolio-index">{String(index + 1).padStart(2, '0')}</span><h3>{project.title}</h3><ArrowUpRight/></div><p>{project.description}</p><div className="portfolio-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><span className="portfolio-concept"><span/> نموذج استعراضي — ليس مشروع عميل منشور</span></div></article>)}</div><div className="portfolio-note"><Check/> نماذج العرض توضح أسلوبنا في التصميم والتنفيذ. تواصل معنا لمشاهدة أعمال العملاء المصرح بنشرها.</div></div></section>
      <section className="portfolio-cta"><div className="container"><div className="portfolio-cta-card" data-reveal><span className="section-kicker">خطوتك القادمة</span><h2>هل لديك فكرة لمشروع؟</h2><p>ابدأ محادثة معنا، ودعنا نبني تجربة رقمية تناسب أهدافك.</p><Link className="button button-primary" href="/contact">ابدأ مشروعك<ArrowUpRight/></Link></div></div></section>
    </main>
    <footer className="footer"><div className="container"><div className="footer-bottom"><span>© {new Date().getFullYear()} SperaCode</span><Link href="/">العودة للرئيسية</Link><Link href="/contact">تواصل معنا</Link></div></div></footer>
  </div>
}
