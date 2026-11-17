'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, CheckCircle2, Star, Quote } from 'lucide-react'

interface ReviewItem {
  quoteAr: string
  quoteEn: string
  authorAr: string
  authorEn: string
  roleAr: string
  roleEn: string
  projectAr: string
  projectEn: string
  country: string
  flag: string
  rating: number
}

const reviews: ReviewItem[] = [
  {
    quoteAr: 'شراكتنا مع SperaCode كانت نقطة تحول في إطلاق منصة GradHub؛ التزام فائق بالموعد وأحدث معايير الأمان وتجربة مستخدم نالت إشادة الجامعات والشركات الحاضنة.',
    quoteEn: 'Partnering with SperaCode was a turning point for launching Saudi GradHub. Strict deadline adherence, top-tier security standards, and seamless UX praised by universities.',
    authorAr: 'م. فهد الشمري',
    authorEn: 'Eng. Fahad Al-Shammari',
    roleAr: 'المشرف التقني والشريك المؤسس',
    roleEn: 'Technical Lead & Co-Founder',
    projectAr: 'منصة مشاريع التخرج السعودية',
    projectEn: 'Saudi GradHub Platform',
    country: 'السعودية',
    flag: '🇸🇦',
    rating: 5,
  },
  {
    quoteAr: 'لوحة الرصد والمراقبة الميدانية نُفذت بدقة هندسية عالية؛ معالجة فورية لمؤشرات الخطر وتصميم بديهي مكّن فرق العمل والتفتيش من أداء مهامها بكفاءة كاملة.',
    quoteEn: 'The field safety and inspection monitoring dashboard was engineered with outstanding precision. Instant hazard metrics and intuitive workflows empowering inspection teams.',
    authorAr: 'د. طارق عبد العزيز',
    authorEn: 'Dr. Tarek Abdelaziz',
    roleAr: 'استشاري السلامة والعمليات',
    roleEn: 'Operations & Safety Consultant',
    projectAr: 'نظام الرصد الذكي والمراقبة',
    projectEn: 'Smart Field Safety System',
    country: 'مصر',
    flag: '🇪🇬',
    rating: 5,
  },
  {
    quoteAr: 'موقع HZ Construction يعكس بدقة فخامة مشاريعنا في المملكة؛ سرعة تحميل استثنائية، دعم كامل لكود البناء السعودي، وتنسيق مبهر بين اللغتين.',
    quoteEn: 'The HZ Construction corporate portal flawlessly mirrors our engineering quality in KSA. Exceptional load speeds, full Saudi Building Code compliance, and superb bilingual design.',
    authorAr: 'أ. حسين الزاير',
    authorEn: 'Mr. Hussain Al-Zayer',
    roleAr: 'الرئيس التنفيذي للمجموعة',
    roleEn: 'Group Chief Executive Officer',
    projectAr: 'شركة حسين غازي الزاير للمقاولات',
    projectEn: 'HZ Construction Contracting',
    country: 'السعودية',
    flag: '🇸🇦',
    rating: 5,
  },
  {
    quoteAr: 'تميز استثنائي في بناء وكلاء الذكاء الاصطناعي لمنصة النوخذة؛ نقلوا فكرة مئوية 2071 إلى واقع تعليمي تفاعلي وذكي يربط المعلم والطالب بأحدث تقنيات الـ AI.',
    quoteEn: 'Exceptional mastery in building autonomous AI agents for Al Nowkhaza. They translated the Centennial 2071 vision into an interactive pedagogical AI reality for schools.',
    authorAr: 'م. راشد النعيمي',
    authorEn: 'Eng. Rashid Al-Nuaimi',
    roleAr: 'مدير التحول الرقمي',
    roleEn: 'Director of Digital Transformation',
    projectAr: 'منصة النوخذة الذكية - إمارات 2071',
    projectEn: 'Al Nowkhaza UAE Classroom Agent',
    country: 'الإمارات',
    flag: '🇦🇪',
    rating: 5,
  },
  {
    quoteAr: 'منصة مدرستنا الكويتية تخدم آلاف الطلاب والمعلمين يوميًا؛ استقرار تام للسيرفرات وسلاسة فائقة في تحميل المذكرات وبنوك الأسئلة بدون أي انقطاع.',
    quoteEn: 'SchoolQ8 handles thousands of students and teachers daily. Absolute infrastructure stability and rapid downloading of revision notes and exam banks with zero downtime.',
    authorAr: 'أ. ناصر الصباح',
    authorEn: 'Mr. Nasser Al-Sabah',
    roleAr: 'المشرف العام على المنصة',
    roleEn: 'General Platform Director',
    projectAr: 'مدرستنا الكويتية (SchoolQ8)',
    projectEn: 'SchoolQ8 Educational Platform',
    country: 'الكويت',
    flag: '🇰🇼',
    rating: 5,
  },
  {
    quoteAr: 'منظومة Titan Trade ERP اختصرت دورة إدارة المشتريات والمخازن المتعددة إلى النصف؛ دقة في الحسابات، فواتير إلكترونية متوافقة، ودعم فني متاح لحظيًا.',
    quoteEn: 'The Titan Trade ERP cut our multi-warehouse procurement cycle in half. Flawless accounting, electronic invoicing compliance, and immediate technical support.',
    authorAr: 'م. مصطفى الشريف',
    authorEn: 'Eng. Mostafa El-Sherif',
    roleAr: 'مدير تكنولوجيا المعلومات',
    roleEn: 'Chief Information Officer (CIO)',
    projectAr: 'منظومة Titan Trade ERP',
    projectEn: 'Titan Trade Enterprise ERP',
    country: 'مصر',
    flag: '🇪🇬',
    rating: 5,
  },
]

export function CustomerReviews({ rtl }: { rtl: boolean }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [direction, setDirection] = useState<'next' | 'prev'>('next')

  // Touch swipe support
  const touchStartX = useRef<number | null>(null)
  const touchStartY = useRef<number | null>(null)

  const nextReview = () => {
    setDirection('next')
    setActiveIndex((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setDirection('prev')
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  const goToReview = (index: number) => {
    setDirection(index > activeIndex ? 'next' : 'prev')
    setActiveIndex(index)
  }

  // Autoplay with pause on hover/interaction
  useEffect(() => {
    if (isPaused) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const timer = window.setInterval(() => {
      if (!document.hidden) {
        nextReview()
      }
    }, 7000)

    return () => window.clearInterval(timer)
  }, [isPaused, activeIndex])

  // Handle Touch Events for Mobile Swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true)
    touchStartX.current = e.touches[0].clientX
    touchStartY.current = e.touches[0].clientY
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    setIsPaused(false)
    if (touchStartX.current === null || touchStartY.current === null) return

    const deltaX = e.changedTouches[0].clientX - touchStartX.current
    const deltaY = e.changedTouches[0].clientY - touchStartY.current

    // Only swipe if horizontal move is significant and greater than vertical
    if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY)) {
      if (rtl) {
        // In RTL: dragging right is next, dragging left is prev
        if (deltaX > 0) {
          nextReview()
        } else {
          prevReview()
        }
      } else {
        // In LTR: dragging left is next, dragging right is prev
        if (deltaX < 0) {
          nextReview()
        } else {
          prevReview()
        }
      }
    }

    touchStartX.current = null
    touchStartY.current = null
  }

  const review = reviews[activeIndex]

  return (
    <section className="section testimonials-section section-muted" id="testimonials">
      <div className="container">
        <div className="section-heading" data-reveal>
          <span className="section-kicker">
            {rtl ? '04 / آراء وتجارب العملاء' : '04 / CLIENT TESTIMONIALS'}
          </span>
          <h2>{rtl ? 'شركاء النجاح يثقون بحلولنا' : 'What Our Partners Say'}</h2>
          <p>
            {rtl
              ? 'شهادات موثقة من قادة الأعمال والمؤسسين الذين أطلقنا مشاريعهم البرمجية بأعلى كفاءة واحترافية.'
              : 'Verified testimonials from founders and technology leaders who built scalable products with SperaCode.'}
          </p>
        </div>

        {/* Enhanced Testimonial Card */}
        <div
          className="testimonial-card-wrap"
          data-reveal
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="testimonial-card-shell">
            {/* Ambient Backlight Glow */}
            <div className="testimonial-card-glow" aria-hidden="true" />

            {/* Header: Rating & Verified Status */}
            <div className="testimonial-card-header">
              <div className="testimonial-badge-group">
                <div className="testimonial-stars" aria-label="5 out of 5 stars rating">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} fill="currentColor" stroke="none" />
                  ))}
                </div>

                <span className="testimonial-verified-badge">
                  <CheckCircle2 size={13} aria-hidden="true" />
                  {rtl ? 'مشروع موثّق ومنفذ' : 'Verified Project'}
                </span>
              </div>

              <div className="testimonial-counter" aria-hidden="true">
                <span className="counter-current">{String(activeIndex + 1).padStart(2, '0')}</span>
                <span className="counter-divider">/</span>
                <span className="counter-total">{String(reviews.length).padStart(2, '0')}</span>
              </div>
            </div>

            {/* Main Quote Body with Smooth Transition */}
            <div className="testimonial-body-area">
              <Quote className="testimonial-quote-icon" aria-hidden="true" size={32} />
              <blockquote
                key={activeIndex}
                className={`testimonial-quote-text slide-dir-${direction}`}
              >
                “{rtl ? review.quoteAr : review.quoteEn}”
              </blockquote>
            </div>

            {/* Author Profile and Footer Controls */}
            <div className="testimonial-card-footer">
              <div className="testimonial-author-meta">
                <div className="testimonial-avatar" aria-hidden="true">
                  <span>{review.authorEn.charAt(review.authorEn.indexOf(' ') + 1) || review.authorAr.charAt(0)}</span>
                </div>

                <div className="testimonial-author-details">
                  <div className="testimonial-name-row">
                    <strong className="testimonial-name">{rtl ? review.authorAr : review.authorEn}</strong>
                    <span className="testimonial-country" title={review.country}>
                      {review.flag} {review.country}
                    </span>
                  </div>
                  <span className="testimonial-title">
                    {rtl ? review.roleAr : review.roleEn} • <span className="project-ref">{rtl ? review.projectAr : review.projectEn}</span>
                  </span>
                </div>
              </div>

              {/* Navigation Controls: Arrows and Dots */}
              <div className="testimonial-nav-controls">
                <div
                  className="testimonial-dots"
                  role="tablist"
                  aria-label={rtl ? 'اختيار رأي العميل' : 'Select client testimonial'}
                >
                  {reviews.map((r, idx) => (
                    <button
                      key={r.authorEn}
                      type="button"
                      role="tab"
                      aria-selected={idx === activeIndex}
                      aria-label={`${rtl ? 'الانتقال إلى الرأي' : 'Go to testimonial'} ${idx + 1}`}
                      className={`testimonial-dot-btn ${idx === activeIndex ? 'is-active' : ''}`}
                      onClick={() => goToReview(idx)}
                    />
                  ))}
                </div>

                <div className="testimonial-arrow-group">
                  <button
                    type="button"
                    className="testimonial-arrow-btn"
                    onClick={prevReview}
                    aria-label={rtl ? 'الرأي السابق' : 'Previous testimonial'}
                  >
                    {rtl ? <ArrowRight size={17} /> : <ArrowLeft size={17} />}
                  </button>
                  <button
                    type="button"
                    className="testimonial-arrow-btn"
                    onClick={nextReview}
                    aria-label={rtl ? 'الرأي التالي' : 'Next testimonial'}
                  >
                    {rtl ? <ArrowLeft size={17} /> : <ArrowRight size={17} />}
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Swipe Hint */}
            <div className="testimonial-mobile-hint" aria-hidden="true">
              <span>{rtl ? '← اسحب لليمين أو اليسار للتنقل →' : '← Swipe left or right to explore →'}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
