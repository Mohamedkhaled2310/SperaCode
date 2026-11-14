'use client'

import Link from 'next/link'
import { FormEvent, useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight, ArrowUpLeft, ArrowUpRight, Check, Clock3, Mail, Menu, MessageCircle, Moon, Send, Sun, X } from 'lucide-react'
import { SperaLogo } from '@/components/spera-logo'
import { PageHeroVisual } from '../page-hero-visual'

type Locale = 'ar' | 'en'

const emailAddress = 'info@speracode.com'

const content = {
  ar: {
    home: 'الرئيسية', work: 'أعمالنا', services: 'خدماتنا', page: 'تواصل معنا',
    kicker: 'خلّينا نبدأ من هنا', title: 'احكِ لنا عن فكرتك.', intro: 'سواء كانت لديك فكرة واضحة أو ما زلت تستكشف الخيارات، شاركنا ما تحتاجه وسنساعدك في تحديد الخطوة المناسبة.',
    formTitle: 'أرسل تفاصيل مشروعك', formIntro: 'املأ النموذج وسيفتح لك واتساب برسالة جاهزة للمراجعة والإرسال.',
    name: 'الاسم', nameHint: 'كيف يمكننا مناداتك؟', email: 'البريد الإلكتروني (اختياري)', emailHint: 'name@example.com', phone: 'رقم الهاتف / واتساب (اختياري)', phoneHint: '+20', company: 'الشركة (اختياري)', companyHint: 'اسم شركتك أو مشروعك',
    service: 'ما الخدمة التي تبحث عنها؟', serviceOptions: ['اختر الخدمة', 'موقع إلكتروني', 'تطبيق جوال', 'منيو رقمي QR', 'حل ذكاء اصطناعي', 'تصميم UI/UX', 'نظام أو برنامج مخصص', 'أخرى'],
    timeline: 'موعد الإطلاق المتوقع (اختياري)', timelineOptions: ['اختر موعدًا', 'في أقرب وقت', 'خلال شهر', 'خلال 1–3 أشهر', 'ما زلت أستكشف'],
    message: 'حدثنا أكثر عن مشروعك', messageHint: 'ما الهدف الذي تريد تحقيقه؟ ومن سيستخدم المنتج؟ أي تفاصيل تساعدنا على فهم احتياجك مرحب بها.',
    send: 'إرسال عبر واتساب', privacy: 'لن تُحفظ بياناتك على الموقع؛ سيفتح واتساب برسالة جاهزة لتراجعها وتختار المحادثة ثم ترسلها.',
    sent: 'فتحنا واتساب برسالتك جاهزة. اختر المحادثة، راجع التفاصيل، ثم أرسلها إلى فريق SperaCode.',
    direct: 'تواصل بالطريقة التي تناسبك', directText: 'يمكنك مراسلتنا مباشرة أو بدء محادثة على واتساب.', emailLabel: 'راسلنا عبر البريد', emailCta: 'info@speracode.com', whatsappLabel: 'ابدأ محادثة واتساب', whatsappCta: 'افتح واتساب واختر المحادثة',
    note: 'لمساعدتنا على الرد بشكل أدق', stepsTitle: 'ماذا يحدث بعد إرسال رسالتك؟', steps: [['نراجع احتياجك', 'نطّلع على فكرتك والتفاصيل التي شاركتها.'], ['نقترح الخطوة التالية', 'نرتب معك محادثة قصيرة لفهم الأولويات.'], ['تستلم تصورًا واضحًا', 'نناقش النطاق والخيارات المناسبة قبل البدء.']],
    faqTitle: 'قبل أن تراسلنا', faqs: [['هل يجب أن أكون متأكدًا من فكرتي؟', 'ليس بالضرورة. يمكننا مساعدتك على ترتيب الفكرة وتحويلها إلى نطاق عمل واضح.'], ['هل تقدمون عرض سعر قبل البدء؟', 'نعم، نراجع المتطلبات أولًا ثم نشاركك تصورًا مكتوبًا للنطاق والتكلفة قبل بدء التنفيذ.'], ['هل يمكنني التواصل حتى لو لم أكن في مصر؟', 'نعم، نعمل عن بُعد ونتابع التواصل والاجتماعات عبر الإنترنت.']],
    footer: 'نحوّل الأفكار إلى تجارب رقمية مدروسة.', back: 'العودة للرئيسية', themeDark: 'التبديل إلى الوضع الداكن', themeLight: 'التبديل إلى الوضع الفاتح', language: 'Switch to English',
    required: 'هذا الحقل مطلوب.',
  },
  en: {
    home: 'Home', work: 'Our work', services: 'Services', page: 'Contact',
    kicker: 'A good place to start', title: 'Tell us what you have in mind.', intro: 'Whether you have a detailed brief or are still exploring, share what you need and we will help you find the right next step.',
    formTitle: 'Tell us about your project', formIntro: 'Complete the form and WhatsApp will open with a ready-to-review message.',
    name: 'Your name', nameHint: 'What should we call you?', email: 'Email address (optional)', emailHint: 'name@example.com', phone: 'Phone / WhatsApp (optional)', phoneHint: '+20', company: 'Company (optional)', companyHint: 'Your company or project',
    service: 'What do you need help with?', serviceOptions: ['Choose a service', 'Website', 'Mobile app', 'QR digital menu', 'AI solution', 'UI/UX design', 'Custom software', 'Something else'],
    timeline: 'Target launch (optional)', timelineOptions: ['Select a timeframe', 'As soon as possible', 'Within a month', 'In 1–3 months', 'Still exploring'],
    message: 'A little more about your project', messageHint: 'What are you hoping to achieve? Who will use it? Any context that helps us understand your needs is welcome.',
    send: 'Send via WhatsApp', privacy: 'Your details are not stored on this site. WhatsApp opens with a ready-to-review message; choose a chat and send it yourself.',
    sent: 'WhatsApp opened with your message. Choose a chat, review the details, and send it to the SperaCode team.',
    direct: 'Reach us your way', directText: 'Send us an email or start a conversation on WhatsApp.', emailLabel: 'Email our team', emailCta: 'info@speracode.com', whatsappLabel: 'Start a WhatsApp chat', whatsappCta: 'Open WhatsApp and choose a chat',
    note: 'A little context goes a long way', stepsTitle: 'What happens next?', steps: [['We review your brief', 'We read your idea and the details you shared.'], ['We suggest a next step', 'We arrange a short conversation to understand your priorities.'], ['We outline the options', 'We discuss scope and a suitable approach before work begins.']],
    faqTitle: 'A few quick answers', faqs: [['Do I need a complete brief?', 'Not at all. We can help shape the idea and turn it into a clear scope of work.'], ['Will I get a quote before work starts?', 'Yes. We review the requirements and share a written scope and estimate before implementation.'], ['Can I contact you from outside Egypt?', 'Absolutely. We work remotely and hold meetings online.']],
    footer: 'Thoughtful digital experiences, built around your goals.', back: 'Back to home', themeDark: 'Switch to dark mode', themeLight: 'Switch to light mode', language: 'التبديل إلى العربية',
    required: 'This field is required.',
  },
} as const

export default function ContactPage() {
  const [locale, setLocale] = useState<Locale>('ar')
  const [dark, setDark] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const t = content[locale]
  const rtl = locale === 'ar'
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(rtl ? 'مرحبًا SperaCode، أود مناقشة مشروع.' : 'Hello SperaCode, I would like to discuss a project.')}`

  useEffect(() => {
    const savedLocale = localStorage.getItem('speracode-locale')
    const nextLocale = savedLocale === 'en' ? 'en' : document.documentElement.lang === 'en' ? 'en' : 'ar'
    const nextDark = localStorage.getItem('speracode-theme') === 'dark' || (!localStorage.getItem('speracode-theme') && document.documentElement.classList.contains('dark'))
    setLocale(nextLocale)
    setDark(nextDark)
    document.documentElement.lang = nextLocale
    document.documentElement.dir = nextLocale === 'ar' ? 'rtl' : 'ltr'
  }, [])

  function toggleLocale() {
    const next = locale === 'ar' ? 'en' : 'ar'
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

  function sendToWhatsApp(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const fields = [
      `${t.name}: ${form.get('name')}`,
      `${t.email}: ${form.get('email') || '—'}`,
      `${t.phone}: ${form.get('phone') || '—'}`,
      `${t.company}: ${form.get('company') || '—'}`,
      `${t.service}: ${form.get('service')}`,
      `${t.timeline}: ${form.get('timeline') || '—'}`,
      '',
      `${t.message}:`,
      `${form.get('message')}`,
    ]
    const message = `${rtl ? 'مرحبًا SperaCode، أود مناقشة مشروعي.' : 'Hello SperaCode, I would like to discuss my project.'}\n\n${fields.join('\n')}`
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
    setSubmitted(true)
  }

  return (
    <div className={`site contact-site ${dark ? 'theme-dark' : ''}`} dir={rtl ? 'rtl' : 'ltr'}>
      <a className="skip-link" href="#contact-main">{rtl ? 'انتقل إلى المحتوى' : 'Skip to content'}</a>
      <header className="navbar contact-navbar">
        <div className="container contact-nav-inner">
          <SperaLogo />
          <nav aria-label={rtl ? 'التنقل الرئيسي' : 'Main navigation'}>
            <Link href="/">{t.home}</Link>
            <Link href="/#services">{t.services}</Link>
            <Link href="/projects">{t.work}</Link>
            <Link href="/#about">{rtl ? 'من نحن' : 'About'}</Link>
            <Link href="/contact">{t.page}</Link>
          </nav>
          <div className="contact-nav-actions">
            <button type="button" className="icon-button locale-button" onClick={toggleLocale} aria-label={t.language}>{rtl ? 'EN' : 'عربي'}</button>
            <button type="button" className="icon-button" onClick={toggleTheme} aria-label={dark ? t.themeLight : t.themeDark}>{dark ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}</button>
            <button type="button" className="icon-button contact-menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? (rtl ? 'إغلاق القائمة' : 'Close menu') : (rtl ? 'فتح القائمة' : 'Open menu')}>{menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</button>
          </div>
        </div>
        {menuOpen && <nav className="mobile-nav contact-mobile-nav" aria-label={rtl ? 'التنقل الرئيسي' : 'Main navigation'}>
          <Link onClick={() => setMenuOpen(false)} href="/">{t.home}<ArrowUpRight aria-hidden="true" /></Link>
          <Link onClick={() => setMenuOpen(false)} href="/#services">{t.services}<ArrowUpRight aria-hidden="true" /></Link>
          <Link onClick={() => setMenuOpen(false)} href="/projects">{t.work}<ArrowUpRight aria-hidden="true" /></Link>
          <Link onClick={() => setMenuOpen(false)} href="/#about">{rtl ? 'من نحن' : 'About'}<ArrowUpRight aria-hidden="true" /></Link>
          <Link onClick={() => setMenuOpen(false)} href="/contact">{t.page}<ArrowUpRight aria-hidden="true" /></Link>
        </nav>}
      </header>

      <main id="contact-main" className="contact-main">
        <section className="contact-hero container">
          <div className="contact-hero-copy">
            <span className="contact-kicker"><span className="contact-kicker-mark" />{t.kicker}</span>
            <h1>{t.title}</h1>
            <p>{t.intro}</p>
            <div className="contact-hero-actions">
              <a className="button button-primary" href="#contact-form">{rtl ? 'احكِ لنا عن مشروعك' : 'Tell us about your project'}{rtl ? <ArrowLeft aria-hidden="true" /> : <ArrowRight aria-hidden="true" />}</a>
              <a className="button button-secondary" href={whatsappUrl} target="_blank" rel="noreferrer">{rtl ? 'محادثة واتساب' : 'Chat on WhatsApp'}<MessageCircle aria-hidden="true" /></a>
            </div>
            <div className="contact-hero-trust" aria-label={rtl ? 'مميزات العمل معنا' : 'Why work with us'}>
              <span><Check aria-hidden="true" />{rtl ? 'تسعير واضح' : 'Clear pricing'}</span>
              <span><Check aria-hidden="true" />{rtl ? 'دعم بعد الإطلاق' : 'Post-launch support'}</span>
              <span><Check aria-hidden="true" />{rtl ? 'التزام بالمواعيد' : 'On-time delivery'}</span>
            </div>
          </div>
          <div className="contact-hero-visual"><PageHeroVisual dark={dark} rtl={rtl} /></div>
        </section>

        <section id="contact-form" className="contact-workspace container" aria-label={t.page}>
          <div className="contact-form-card">
            <div className="contact-card-heading">
              <span className="contact-card-icon"><Send aria-hidden="true" /></span>
              <div><span className="contact-eyebrow">{rtl ? 'ابدأ محادثة' : 'START A CONVERSATION'}</span><h2>{t.formTitle}</h2><p>{t.formIntro}</p></div>
            </div>
            <form className="contact-form" onSubmit={sendToWhatsApp}>
              <div className="contact-fields-grid">
                <label className="contact-field"><span>{t.name} <b aria-hidden="true">*</b></span><input autoComplete="name" name="name" placeholder={t.nameHint} required /></label>
                <label className="contact-field"><span>{t.email}</span><input autoComplete="email" name="email" type="email" placeholder={t.emailHint} /></label>
                <label className="contact-field"><span>{t.company}</span><input autoComplete="organization" name="company" placeholder={t.companyHint} /></label>
                <label className="contact-field"><span>{t.phone}</span><input autoComplete="tel" dir="ltr" inputMode="tel" name="phone" placeholder={t.phoneHint} /></label>
                <label className="contact-field"><span>{t.service} <b aria-hidden="true">*</b></span><select key={locale} name="service" defaultValue="" required>{t.serviceOptions.map((item, index) => <option value={index === 0 ? '' : item} key={item} disabled={index === 0}>{item}</option>)}</select></label>
                <label className="contact-field"><span>{t.timeline}</span><select key={locale} name="timeline" defaultValue="">{t.timelineOptions.map((item, index) => <option value={index === 0 ? '' : item} key={item}>{item}</option>)}</select></label>
                <label className="contact-field contact-field-message"><span>{t.message} <b aria-hidden="true">*</b></span><textarea name="message" rows={5} placeholder={t.messageHint} required /></label>
              </div>
              <button className="contact-submit" type="submit">{t.send}{rtl ? <ArrowLeft aria-hidden="true" /> : <ArrowRight aria-hidden="true" />}</button>
              <p className="contact-privacy"><Check aria-hidden="true" />{t.privacy}</p>
              {submitted && <p className="contact-success" role="status" aria-live="polite">{t.sent}</p>}
            </form>
          </div>

          <aside className="contact-sidebar">
            <div className="contact-direct-card">
              <span className="contact-eyebrow">{rtl ? 'تواصل مباشر' : 'DIRECT CONTACT'}</span>
              <h2>{t.direct}</h2>
              <p>{t.directText}</p>
              <a className="contact-channel contact-channel-email" href={`mailto:${emailAddress}`}>
                <span className="contact-channel-icon"><Mail aria-hidden="true" /></span>
                <span><small>{t.emailLabel}</small><strong dir="ltr">{t.emailCta}</strong></span>
                {rtl ? <ArrowUpLeft aria-hidden="true" /> : <ArrowUpRight aria-hidden="true" />}
              </a>
              <a className="contact-channel contact-channel-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer">
                <span className="contact-channel-icon"><MessageCircle aria-hidden="true" /></span>
                <span><small>{t.whatsappLabel}</small><strong>{t.whatsappCta}</strong></span>
                {rtl ? <ArrowUpLeft aria-hidden="true" /> : <ArrowUpRight aria-hidden="true" />}
              </a>
              <div className="contact-response-note"><Clock3 aria-hidden="true" /><span>{t.note}</span></div>
            </div>
            <div className="contact-process-card">
              <span className="contact-eyebrow">{rtl ? 'الخطوات التالية' : 'NEXT STEPS'}</span>
              <h2>{t.stepsTitle}</h2>
              <ol>{t.steps.map(([title, description], index) => <li key={title}><span className="contact-step-number">0{index + 1}</span><span><strong>{title}</strong><small>{description}</small></span></li>)}</ol>
            </div>
          </aside>
        </section>

        <section className="contact-faq container">
          <div className="contact-faq-heading"><span className="contact-eyebrow">{rtl ? 'إجابات سريعة' : 'QUICK ANSWERS'}</span><h2>{t.faqTitle}</h2></div>
          <div className="contact-faq-list">{t.faqs.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div>
        </section>
      </main>

      <footer className="contact-footer"><div className="container contact-footer-inner"><div><SperaLogo footer /><p>{t.footer}</p></div><Link className="contact-back-link" href="/">{t.back}{rtl ? <ArrowRight aria-hidden="true" /> : <ArrowUpRight aria-hidden="true" />}</Link></div></footer>
    </div>
  )
}
