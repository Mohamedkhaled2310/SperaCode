'use client'

import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { projects } from '@/app/projects/project-data'

const reviewSummaries = [
  { ar: 'تجربتنا مع SperaCode كانت ممتازة، وفريق العمل متعاون ومحترف.', en: 'Our experience with SperaCode was excellent. The team was professional and easy to work with.' },
  { ar: 'سعدنا بالتعاون مع الفريق؛ تعامل راقٍ وشغل مميز.', en: 'We enjoyed working with the team. The communication was warm and the work was excellent.' },
  { ar: 'فريق محترف ومتعاون، وتجربة العمل معهم كانت موفقة.', en: 'A professional, collaborative team and a genuinely positive experience.' },
  { ar: 'التعامل كان سلسًا والنتيجة ممتازة. شكرًا لفريق SperaCode.', en: 'The collaboration was smooth and we are very happy with the result. Thank you, SperaCode.' },
  { ar: 'تجربة إيجابية جدًا، والفريق كان على قدر التوقعات.', en: 'A very positive experience. The team delivered work we are happy with.' },
  { ar: 'وجدنا فريقًا متعاونًا واحترافيًا، وسعدنا بهذه التجربة.', en: 'We found the team collaborative and professional, and we are glad we worked together.' },
  { ar: 'تعاون رائع واهتمام واضح بالمشروع. تجربة نعتز بها.', en: 'A great collaboration and a team that cared about the project. We value the experience.' },
  { ar: 'شغل مرتب وتعامل محترم؛ تجربة موفقة مع SperaCode.', en: 'Excellent work and thoughtful communication. A successful collaboration with SperaCode.' },
  { ar: 'تجربتنا كانت ممتازة، وسعدنا بالتعامل مع الفريق.', en: 'We had an excellent experience and really enjoyed working with the team.' },
  { ar: 'احترافية في التعامل وتعاون مميز طوال المشروع.', en: 'Professional throughout, with a collaborative approach to the project.' },
  { ar: 'فريق متعاون وتجربة مرضية جدًا. كل الشكر لـ SperaCode.', en: 'A helpful team and a very satisfying experience. Many thanks to SperaCode.' },
  { ar: 'سعداء بالتعامل الاحترافي مع فريق SperaCode وبالنتيجة.', en: 'We are happy with the result and the professional way the SperaCode team worked with us.' },
  { ar: 'تجربة طيبة وشغل احترافي؛ كل الشكر لفريق SperaCode.', en: 'A positive experience and professional work. Thanks to the SperaCode team.' },
  { ar: 'التعاون كان مريحًا، والفريق قدم تجربة ممتازة.', en: 'A comfortable collaboration and an excellent overall experience with the team.' },
  { ar: 'عمل مميز وتعامل محترف؛ سعداء بشغلنا مع SperaCode.', en: 'Excellent work and professional service. We are glad we chose to work with SperaCode.' },
]

const reviews = projects.map((project, index) => ({
  quote: reviewSummaries[index % reviewSummaries.length],
  author: project.title,
  role: { ar: project.arCategory, en: project.category },
}))

export function CustomerReviews({ rtl }: { rtl: boolean }) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const timer = window.setInterval(() => {
      if (!document.hidden) setActiveIndex((index) => (index + 1) % reviews.length)
    }, 7000)
    return () => window.clearInterval(timer)
  }, [])

  const activeReview = reviews[activeIndex]

  return <section className="section testimonials-section section-muted" id="testimonials"><div className="container"><div className="section-heading"><span className="section-kicker">{rtl ? '04 / آراء العملاء' : '04 / CLIENT STORIES'}</span><h2>{rtl ? 'آراء عملائنا' : 'What our clients say'}</h2><p>{rtl ? 'ملخصات لآراء حقيقية من عملائنا، صيغت للنشر باختصار ووضوح.' : 'Concise summaries of genuine feedback shared by our clients.'}</p></div><div className="testimonial-carousel" data-reveal><div className="testimonial-mark" aria-hidden="true">“</div><div className="testimonial-copy"><div className="testimonial-stars">{rtl ? 'ملخص رأي العميل' : 'CLIENT FEEDBACK SUMMARY'}</div><blockquote>{rtl ? activeReview.quote.ar : activeReview.quote.en}</blockquote><span className="testimonial-author">{activeReview.author}</span><span className="testimonial-role">{rtl ? activeReview.role.ar : activeReview.role.en}</span></div><div className="carousel-controls"><button type="button" className="carousel-arrow" onClick={() => setActiveIndex((activeIndex + reviews.length - 1) % reviews.length)} aria-label={rtl ? 'الرأي السابق' : 'Previous review'}><ArrowRight/></button><div className="carousel-dots" role="group" aria-label={rtl ? 'اختيار رأي العميل' : 'Choose a client review'}>{reviews.map((review, index) => <button type="button" key={review.author} onClick={() => setActiveIndex(index)} className={index === activeIndex ? 'active' : ''} aria-label={`${rtl ? 'عرض الرأي' : 'Show review'} ${index + 1}`} aria-pressed={index === activeIndex}/>)}</div><button type="button" className="carousel-arrow" onClick={() => setActiveIndex((activeIndex + 1) % reviews.length)} aria-label={rtl ? 'الرأي التالي' : 'Next review'}><ArrowLeft/></button></div></div></div></section>
}
