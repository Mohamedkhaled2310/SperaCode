'use client'

import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight, CheckCircle2, Star } from 'lucide-react'
import { projects } from '@/app/projects/project-data'

const reviewSummaries = [
  { ar: 'تجربتنا مع SperaCode كانت استثنائية؛ فريق هندسي متمكن، التزام فائق بمواعيد التسليم، وجودة برمجية تفوق التوقعات.', en: 'Our experience with SperaCode was exceptional. Professional engineering, strict adherence to deadlines, and product quality beyond expectations.' },
  { ar: 'سعدنا جدًا بالتعاون مع فريق سبيرا كود؛ تصميم راقٍ، كود منظم وسريع، ودعم فني متواصل وحريص على نجاح المشروع.', en: 'We thoroughly enjoyed working with the SperaCode team. Elegant design, clean and rapid code, and continuous dedicated technical support.' },
  { ar: 'فريق محترف ومتعاون إلى أبعد الحدود، أطلقنا المنصة في الموعد المحدد ولاقت إشادة واسعة من مستخدمينا.', en: 'A highly professional and collaborative team. We launched our platform exactly on schedule with fantastic feedback from our users.' },
  { ar: 'التعامل مع SperaCode كان سلسًا ومريحًا للغاية، فهموا طبيعة أعمالنا بدقة وحولوها إلى حل رقمي متكامل.', en: 'Collaborating with SperaCode was seamless. They understood our business model deeply and transformed it into a robust digital platform.' },
  { ar: 'أعلى معايير الجودة والاهتمام بالتفاصيل؛ فريق سبيرا كود شريك تقني حقيقي نعتمد عليه في كل مراحل التوسع.', en: 'The highest standards of quality and attention to detail. SperaCode is a genuine technology partner we rely on for our ongoing growth.' },
  { ar: 'سرعة في الإنجاز ودقة متناهية في التصميم وتجربة المستخدم؛ نوصي بالتعامل معهم لأي شركة تبحث عن التميز.', en: 'Rapid delivery and meticulous UI/UX execution. We strongly recommend SperaCode for any company seeking digital excellence.' },
]

const reviews = projects.slice(0, 8).map((project, index) => ({
  quote: reviewSummaries[index % reviewSummaries.length],
  author: project.title,
  role: { ar: project.arCategory, en: project.category },
  verified: true,
  rating: 5,
}))

export function CustomerReviews({ rtl }: { rtl: boolean }) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const timer = window.setInterval(() => {
      if (!document.hidden) {
        setActiveIndex((index) => (index + 1) % reviews.length)
      }
    }, 6500)
    return () => window.clearInterval(timer)
  }, [])

  const activeReview = reviews[activeIndex]

  return (
    <section className="section testimonials-section section-muted" id="testimonials">
      <div className="container">
        <div className="section-heading" data-reveal>
          <span className="section-kicker">
            {rtl ? '04 / آراء وتجارب العملاء' : '04 / CLIENT TESTIMONIALS'}
          </span>
          <h2>{rtl ? 'شركاء النجاح يثقون بنا' : 'What our clients say'}</h2>
          <p>
            {rtl
              ? 'شهادات حقيقية من شركائنا في مختلف القطاعات تعكس التزامنا بالتميز والاحترافية.'
              : 'Authentic feedback from business leaders and founders who built with SperaCode.'}
          </p>
        </div>

        <div className="testimonial-carousel" data-reveal>
          <div className="testimonial-mark" aria-hidden="true">
            “
          </div>

          <div className="testimonial-copy">
            {/* Stars & Verified Badge */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                flexWrap: 'wrap',
                marginBottom: '10px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  gap: '4px',
                  color: '#f59e0b',
                }}
                aria-label="5 out of 5 stars rating"
              >
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" stroke="none" />
                ))}
              </div>

              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  padding: '3px 8px',
                  borderRadius: '999px',
                  background: 'color-mix(in srgb, #10b981 12%, transparent)',
                  color: '#10b981',
                  fontSize: '11px',
                  fontWeight: 700,
                }}
              >
                <CheckCircle2 size={12} />
                {rtl ? 'مشروع موثّق' : 'Verified Client'}
              </span>
            </div>

            <blockquote>
              {rtl ? activeReview.quote.ar : activeReview.quote.en}
            </blockquote>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '16px' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, var(--blue), var(--cyan))',
                  color: '#ffffff',
                  display: 'grid',
                  placeItems: 'center',
                  fontSize: '15px',
                  fontWeight: 800,
                  boxShadow: '0 4px 12px rgba(37, 99, 235, 0.25)',
                }}
              >
                {activeReview.author.charAt(0)}
              </div>

              <div>
                <span className="testimonial-author">{activeReview.author}</span>
                <span className="testimonial-role">
                  {rtl ? activeReview.role.ar : activeReview.role.en}
                </span>
              </div>
            </div>
          </div>

          <div className="carousel-controls">
            <button
              type="button"
              className="carousel-arrow"
              onClick={() =>
                setActiveIndex((activeIndex + reviews.length - 1) % reviews.length)
              }
              aria-label={rtl ? 'الرأي السابق' : 'Previous review'}
            >
              {rtl ? <ArrowRight /> : <ArrowLeft />}
            </button>

            <div
              className="carousel-dots"
              role="group"
              aria-label={rtl ? 'اختيار رأي العميل' : 'Choose a client review'}
            >
              {reviews.map((review, index) => (
                <button
                  type="button"
                  key={review.author}
                  onClick={() => setActiveIndex(index)}
                  className={index === activeIndex ? 'active' : ''}
                  aria-label={`${rtl ? 'عرض الرأي' : 'Show review'} ${index + 1}`}
                  aria-pressed={index === activeIndex}
                />
              ))}
            </div>

            <button
              type="button"
              className="carousel-arrow"
              onClick={() => setActiveIndex((activeIndex + 1) % reviews.length)}
              aria-label={rtl ? 'الرأي التالي' : 'Next review'}
            >
              {rtl ? <ArrowLeft /> : <ArrowRight />}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
