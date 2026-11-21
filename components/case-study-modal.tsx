'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import {
  X,
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Globe2,
  MessageCircle,
  Code2,
  Sparkles,
} from 'lucide-react'
import type { PortfolioProject } from '@/app/projects/project-data'
import { buildWhatsAppUrl } from '@/app/site-config'

type CaseStudyModalProps = {
  project: PortfolioProject | null
  onClose: () => void
  rtl?: boolean
}

export function CaseStudyModal({ project, onClose, rtl = true }: CaseStudyModalProps) {
  useEffect(() => {
    if (!project) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [project, onClose])

  if (!project) return null

  const whatsappInquiry = buildWhatsAppUrl(
    rtl
      ? `مرحبًا SperaCode 🚀\nأود الاستفسار وطلب مشروع مماثل لـ "${project.title}" (${project.arCategory}):\nما هي التكلفة والمدة التقديرية لتنفيذ فكرة مشابهة؟`
      : `Hello SperaCode 🚀\nI would like to inquire about building a solution similar to "${project.title}" (${project.category}):\nWhat is the estimated timeline and budget for a comparable system?`
  )

  const isLive = Boolean(project.isLive && project.demoUrl)

  return (
    <div
      className="case-study-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      dir={rtl ? 'rtl' : 'ltr'}
    >
      <div
        className="case-study-dialog"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="case-study-close-btn"
          onClick={onClose}
          aria-label={rtl ? 'إغلاق نافذة التفاصيل' : 'Close details'}
        >
          <X size={20} />
        </button>

        {/* Media Preview Stage */}
        <div className="case-study-media">
          <Image
            src={project.image}
            alt={rtl ? project.imageAlt : project.imageAltEn}
            width={1200}
            height={700}
            className="case-study-cover-img"
            priority
          />
          <div className="case-study-badges">
            <span className="case-study-category-badge">
              {rtl ? project.arCategory : project.category}
            </span>
            {isLive ? (
              <span className="case-study-status-chip is-live">
                <span className="live-dot" />
                {rtl ? 'موقع نشط وحي' : 'Live Production Site'}
              </span>
            ) : (
              <span className="case-study-status-chip is-delivered">
                <CheckCircle2 size={13} />
                {rtl ? 'مشروع تم تنفيذه وتسليمه' : 'Successfully Delivered'}
              </span>
            )}
          </div>
        </div>

        {/* Content Body */}
        <div className="case-study-body">
          <div className="case-study-title-group">
            <span className="section-kicker">
              {rtl ? 'دراسة حالة المشروع' : 'PROJECT CASE STUDY'}
            </span>
            <h2 id="case-study-title">{project.title}</h2>
            <p className="case-study-overview">
              {rtl ? project.arDescription : project.description}
            </p>
          </div>

          {/* 3 Pillars: Challenge, Solution, Impact */}
          <div className="case-study-grid-details">
            <div className="case-study-detail-card">
              <div className="detail-card-header">
                <span className="detail-icon icon-cyan">
                  <Zap size={16} />
                </span>
                <strong>{rtl ? 'التحدي والمتطلب' : 'The Challenge'}</strong>
              </div>
              <p>
                {rtl
                  ? 'بناء بنية برمجية تفاعلية فائقة السرعة تواكب هوية العلامة التجارية، مع إدارة محتوى سلسة وسرعة تحميل فورية دون بطء أو أعطال.'
                  : 'Engineering an ultra-fast, responsive architecture matching enterprise brand identity with zero downtime and intuitive content management.'}
              </p>
            </div>

            <div className="case-study-detail-card">
              <div className="detail-card-header">
                <span className="detail-icon icon-blue">
                  <Code2 size={16} />
                </span>
                <strong>{rtl ? 'الحل الهندسي لسبيرا كود' : 'SperaCode Engineering'}</strong>
              </div>
              <p>
                {rtl
                  ? 'تطوير مخصص بالكامل باستخدام أحدث تقنيات الويب السحابية، مع تحسين مؤشرات السيو وتجربة المستخدم بنسبة 100% بدون قوالب جاهزة.'
                  : 'Fully custom engineering utilizing modern cloud web stacks, achieving sub-second page performance and 100% full source code ownership.'}
              </p>
            </div>

            <div className="case-study-detail-card">
              <div className="detail-card-header">
                <span className="detail-icon icon-emerald">
                  <ShieldCheck size={16} />
                </span>
                <strong>{rtl ? 'النتيجة والمصداقية' : 'Measurable Impact'}</strong>
              </div>
              <p>
                {rtl
                  ? 'تحقيق سرعة تصفح 98/100 في Core Web Vitals، نقل ملكية الكود بالكامل، وضمان فني مستمر أثبت كفاءته في السوق.'
                  : '98/100 Core Web Vitals score, complete intellectual property handover, and dependable production performance.'}
              </p>
            </div>
          </div>

          {/* Tags */}
          <div className="case-study-tags-row">
            <span className="tags-label">{rtl ? 'الكلمات والتقنيات:' : 'Tags & Tech:'}</span>
            <div className="case-study-tags-list">
              {project.tags.map((tag) => (
                <span key={tag} className="case-study-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div className="case-study-footer">
            <div className="case-study-action-btns">
              {isLive && (
                <a
                  className="button button-primary"
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{rtl ? 'زيارة الموقع الحي' : 'Visit Live Project'}</span>
                  <ArrowUpRight size={17} />
                </a>
              )}
              <a
                className={`button ${isLive ? 'button-secondary' : 'button-primary'}`}
                href={whatsappInquiry}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{rtl ? 'طلب مشروع مماثل على واتساب' : 'Request Similar Project on WhatsApp'}</span>
                <MessageCircle size={17} />
              </a>
            </div>
            <span className="case-study-guarantee-note">
              <Sparkles size={14} />
              {rtl ? 'نضمن لك جودة هندسية مماثلة وتسليمًا في الموعد' : 'Guaranteed engineering quality and on-time delivery'}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
