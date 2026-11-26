'use client'

import { useState, useMemo } from 'react'
import {
  Globe2,
  Smartphone,
  QrCode,
  Layers,
  Bot,
  ShieldCheck,
  Check,
  Sparkles,
  ArrowLeft,
  ArrowRight,
  MessageCircle,
  Clock,
  Send,
  Zap,
} from 'lucide-react'
import { buildWhatsAppUrl, SITE_PHONE_LOCAL } from '@/app/site-config'

type ProjectType = {
  id: string
  titleAr: string
  titleEn: string
  descAr: string
  descEn: string
  icon: typeof Globe2
  baseDays: string
  tierAr: string
  tierEn: string
  stack: string[]
}

type FeatureOption = {
  id: string
  titleAr: string
  titleEn: string
  icon: typeof Zap
}

const PROJECT_TYPES: ProjectType[] = [
  {
    id: 'web',
    titleAr: 'موقع أو منصة إلكترونية',
    titleEn: 'Website or Web Platform',
    descAr: 'موقع شركة تعريفي فائق السرعة، صفحة هبوط ترويجية، أو منصة تفاعلية.',
    descEn: 'High-speed corporate website, high-converting landing page, or SaaS platform.',
    icon: Globe2,
    baseDays: '7–14 يوم عمل',
    tierAr: 'مناسب واقتصادي مع ملكية تامة',
    tierEn: 'Cost-effective with 100% IP ownership',
    stack: ['Next.js', 'React', 'Tailwind CSS', 'Vercel Edge'],
  },
  {
    id: 'store',
    titleAr: 'متجر إلكتروني متكامل',
    titleEn: 'E-Commerce Store',
    descAr: 'متجر بكتالوج منتجات وسلة شراء ودفع أونلاين وإدارة مخزون.',
    descEn: 'Full store with product catalog, cart, checkout, payments, and inventory.',
    icon: Layers,
    baseDays: '14–21 يوم عمل',
    tierAr: 'استثمار تجاري يرفع المبيعات',
    tierEn: 'High-ROI commercial e-commerce',
    stack: ['Next.js', 'PostgreSQL', 'Stripe/Paymob', 'Cloud Storage'],
  },
  {
    id: 'app',
    titleAr: 'تطبيق جوال (iOS & Android)',
    titleEn: 'Mobile App (iOS & Android)',
    descAr: 'تطبيق هجين أو أصيل يعمل بسلاسة على آيفون وأندرويد.',
    descEn: 'Cross-platform app engineered for high performance on iOS and Android.',
    icon: Smartphone,
    baseDays: '21–35 يوم عمل',
    tierAr: 'حل مخصص متكامل وشامل',
    tierEn: 'Full-cycle enterprise mobile app',
    stack: ['React Native', 'Flutter', 'Node.js API', 'Firebase'],
  },
  {
    id: 'qr',
    titleAr: 'المنيو الرقمي التفاعلي QR',
    titleEn: 'Interactive QR Menu',
    descAr: 'منيو ذكي للمطاعم والكافيهات مع طلب مباشر وتحديث أسعار فوري.',
    descEn: 'Smart restaurant/café menu with instant WhatsApp ordering and live updates.',
    icon: QrCode,
    baseDays: '3–5 أيام عمل',
    tierAr: 'إطلاق سريع وتكلفة منخفضة',
    tierEn: 'Rapid launch & zero app downloads',
    stack: ['Next.js', 'WhatsApp Direct API', 'Cloud CDN', 'QR Engine'],
  },
  {
    id: 'erp',
    titleAr: 'نظام إدارة أعمال أو ERP مخصص',
    titleEn: 'Custom ERP & Management System',
    descAr: 'نظام داخلي لإدارة الفواتير، الموظفين، المخازن، والعملاء بدقة.',
    descEn: 'Internal business software for invoicing, HR, inventory, and operations.',
    icon: Bot,
    baseDays: '28–45 يوم عمل',
    tierAr: 'منظومة مؤسسية لضبط العمليات',
    tierEn: 'Tailored enterprise ERP architecture',
    stack: ['Next.js', 'Node.js', 'PostgreSQL', 'Role-Based Access'],
  },
]

const FEATURE_OPTIONS: FeatureOption[] = [
  {
    id: 'admin',
    titleAr: 'لوحة تحكم إدارية سهلة (عربي/إنجليزي)',
    titleEn: 'Easy Admin Dashboard (AR/EN)',
    icon: Layers,
  },
  {
    id: 'payment',
    titleAr: 'بوابات دفع إلكتروني أونلاين',
    titleEn: 'Online Payment Gateway Integration',
    icon: Zap,
  },
  {
    id: 'whatsapp',
    titleAr: 'ربط تنبيهات ومحادثات واتساب فورية',
    titleEn: 'Direct WhatsApp Alerts & Chat Sync',
    icon: MessageCircle,
  },
  {
    id: 'ai',
    titleAr: 'مساعد ذكاء اصطناعي للرد الآلي 24/7',
    titleEn: 'Smart 24/7 AI Chatbot Assistant',
    icon: Bot,
  },
  {
    id: 'bilingual',
    titleAr: 'دعم كامل للغتين (عربي + إنجليزي)',
    titleEn: 'Bilingual Support (Arabic & English)',
    icon: Globe2,
  },
  {
    id: 'seo',
    titleAr: 'تهيئة متقدمة لمحركات البحث (SEO & GEO)',
    titleEn: 'Advanced SEO & AI Search Optimization',
    icon: Sparkles,
  },
]

export function CostEstimator({ rtl = true }: { rtl?: boolean }) {
  const [selectedProject, setSelectedProject] = useState<string>('web')
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'admin',
    'whatsapp',
    'seo',
  ])
  const [urgency, setUrgency] = useState<'standard' | 'fast'>('standard')

  const currentProject = useMemo(() => {
    return PROJECT_TYPES.find((p) => p.id === selectedProject) || PROJECT_TYPES[0]
  }, [selectedProject])

  const toggleFeature = (id: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const selectedFeatureTitles = useMemo(() => {
    return FEATURE_OPTIONS.filter((f) => selectedFeatures.includes(f.id)).map(
      (f) => (rtl ? f.titleAr : f.titleEn)
    )
  }, [selectedFeatures, rtl])

  const prefilledBrief = useMemo(() => {
    const pTitle = rtl ? currentProject.titleAr : currentProject.titleEn
    const urgencyLabel = urgency === 'fast'
      ? (rtl ? 'مسار سريع ذو أولوية عاجلة' : 'Fast-Track Priority')
      : (rtl ? 'جدول زمني عادي' : 'Standard Timeline')

    const feats = selectedFeatureTitles.length > 0
      ? selectedFeatureTitles.map((t) => `• ${t}`).join('\n')
      : (rtl ? '• المتطلبات الأساسية فقط' : '• Core specifications only')

    if (rtl) {
      return `مرحبًا فريق SperaCode 🚀
أود الاستفسار وطلب عرض سعر تفصيلي بناءً على حاسبة التقدير في الموقع:

📌 نوع المشروع: ${pTitle}
⏱ الجدول الزمني المطلوب: ${urgencyLabel}
🛠 الميزات والإضافات المحددة:
${feats}

يرجى إفادتي بالتكلفة المحددة والخطوات التالية لبدء العمل.`
    }

    return `Hello SperaCode Team 🚀
I would like to request a detailed quotation based on the online project estimator:

📌 Project Type: ${pTitle}
⏱ Delivery Preference: ${urgencyLabel}
🛠 Selected Features:
${feats}

Please advise on the fixed quotation and onboarding steps.`
  }, [currentProject, urgency, selectedFeatureTitles, rtl])

  const whatsappLink = buildWhatsAppUrl(prefilledBrief)

  return (
    <div className="cost-estimator-card" dir={rtl ? 'rtl' : 'ltr'}>
      <div className="estimator-header">
        <span className="section-kicker">
          {rtl ? 'أداة تفاعلية سريعة' : 'INTERACTIVE TOOL'}
        </span>
        <h3>
          {rtl
            ? 'احسب مواصفات وجدول مشروعك بدقة'
            : 'Estimate Your Project Scope & Timeline'}
        </h3>
        <p>
          {rtl
            ? 'اختر نوع مشروعك والميزات التي تحتاجها واكتشف المدة والتقنيات المقترحة فوراً، مع إمكانية إرسال المواصفات بضغطة زر إلى واتساب.'
            : 'Select your project type and desired capabilities to view estimated timelines and modern tech stacks, then send directly to WhatsApp.'}
        </p>
      </div>

      {/* Step 1: Project Type Selection */}
      <div className="estimator-section">
        <span className="estimator-step-label">
          <strong>1.</strong> {rtl ? 'ما هو نوع المشروع الأساسي؟' : '1. Choose your core project type:'}
        </span>
        <div className="estimator-type-grid">
          {PROJECT_TYPES.map((type) => {
            const Icon = type.icon
            const isSelected = selectedProject === type.id
            return (
              <button
                type="button"
                key={type.id}
                className={`estimator-type-pill ${isSelected ? 'active' : ''}`}
                onClick={() => setSelectedProject(type.id)}
              >
                <span className="estimator-pill-icon">
                  <Icon size={18} />
                </span>
                <span className="estimator-pill-title">
                  {rtl ? type.titleAr : type.titleEn}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Step 2: Features Checklist */}
      <div className="estimator-section">
        <span className="estimator-step-label">
          <strong>2.</strong> {rtl ? 'الميزات والإضافات المطلوبة (اختر ما يناسبك):' : '2. Key features & capabilities (multi-select):'}
        </span>
        <div className="estimator-features-grid">
          {FEATURE_OPTIONS.map((feat) => {
            const Icon = feat.icon
            const isChecked = selectedFeatures.includes(feat.id)
            return (
              <button
                type="button"
                key={feat.id}
                className={`estimator-feature-chip ${isChecked ? 'checked' : ''}`}
                onClick={() => toggleFeature(feat.id)}
              >
                <span className="feature-checkbox">
                  {isChecked ? <Check size={14} /> : null}
                </span>
                <Icon size={16} className="feature-icon" />
                <span>{rtl ? feat.titleAr : feat.titleEn}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Step 3: Priority */}
      <div className="estimator-section">
        <span className="estimator-step-label">
          <strong>3.</strong> {rtl ? 'الأولوية والسرعة المطلوبة للتسليم:' : '3. Timeline priority:'}
        </span>
        <div className="estimator-urgency-row">
          <button
            type="button"
            className={`urgency-toggle-btn ${urgency === 'standard' ? 'active' : ''}`}
            onClick={() => setUrgency('standard')}
          >
            <Clock size={16} />
            <span>{rtl ? 'جدول زمني قياسي (موصى به)' : 'Standard Timeline (Recommended)'}</span>
          </button>
          <button
            type="button"
            className={`urgency-toggle-btn ${urgency === 'fast' ? 'active' : ''}`}
            onClick={() => setUrgency('fast')}
          >
            <Zap size={16} />
            <span>{rtl ? 'مسار سريع عاجل (أولوية قصوى)' : 'Fast-Track Priority (Urgent)'}</span>
          </button>
        </div>
      </div>

      {/* Output Summary Card */}
      <div className="estimator-summary-box">
        <div className="summary-highlights-row">
          <div className="summary-stat-cell">
            <span className="summary-stat-title">{rtl ? 'المدة التقديرية للتسليم' : 'Estimated Delivery'}</span>
            <strong>{urgency === 'fast' ? (rtl ? 'نصف المدة تقريبًا (مسار مكثف)' : 'Accelerated Fast Track') : currentProject.baseDays}</strong>
          </div>

          <div className="summary-stat-cell">
            <span className="summary-stat-title">{rtl ? 'الملكية والترخيص' : 'Code & IP Ownership'}</span>
            <strong style={{ color: 'var(--cyan)' }}>{rtl ? 'ملكية الكود 100% لك' : '100% Full IP Transfer'}</strong>
          </div>

          <div className="summary-stat-cell">
            <span className="summary-stat-title">{rtl ? 'مستوى الاستثمار' : 'Pricing Tier'}</span>
            <strong>{rtl ? currentProject.tierAr : currentProject.tierEn}</strong>
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="estimator-stack-row">
          <span className="stack-label">{rtl ? 'التقنيات المقترحة للمشروع:' : 'Recommended Stack:'}</span>
          <div className="stack-pills-list">
            {currentProject.stack.map((s) => (
              <span key={s} className="stack-tag">
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="estimator-action-bar">
          <a
            className="button button-primary estimator-submit-btn"
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>{rtl ? 'إرسال المواصفات وعرض السعر عبر واتساب 🚀' : 'Send Scope & Get Quote on WhatsApp 🚀'}</span>
            <MessageCircle size={18} />
          </a>
          <span className="estimator-trust-note">
            <ShieldCheck size={14} />
            {rtl
              ? 'استشارة أولية مجانية بالكامل وبدون أي التزام مالي'
              : '100% Free technical discovery with zero financial obligation'}
          </span>
        </div>
      </div>
    </div>
  )
}
