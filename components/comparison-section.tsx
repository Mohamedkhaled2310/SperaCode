'use client'

import { Check, X, ShieldCheck, Zap, Sparkles } from 'lucide-react'

type ComparisonSectionProps = {
  rtl?: boolean
}

const COMPARISON_ROWS = [
  {
    featureAr: 'ملكية الكود والشيفرة البرمجية',
    featureEn: 'Code & IP Ownership',
    speraAr: 'ملكية تامة 100% لك مع ملفات المشروع، بدون أي اشتراكات متكررة.',
    speraEn: '100% full intellectual property and source code ownership forever.',
    traditionalAr: 'اشتراكات شهرية متكررة أو قيود تمنعك من امتلاك وتعديل كودك.',
    traditionalEn: 'Vendor lock-in, monthly rental fees, or hidden license charges.',
  },
  {
    featureAr: 'السرعة ومؤشرات الويب (Speed & Performance)',
    featureEn: 'Load Speed & Core Web Vitals',
    speraAr: 'تفتح في أقل من ثانية واحدة بتقنيات Next.js السحابية الحديثة.',
    speraEn: 'Sub-second load times (<1s) powered by modern Next.js edge stack.',
    traditionalAr: 'قوالب بطيئة تتجاوز 4-6 ثوانٍ وتتسبب في هروب الزوار وخسارة العملاء.',
    traditionalEn: 'Heavy bloated templates taking 4+ seconds, hurting conversions.',
  },
  {
    featureAr: 'الأمان وحماية البيانات والأنظمة',
    featureEn: 'Security & Stability',
    speraAr: 'كود نقي ومحمي بدون إضافات عشوائية أو ثغرات أمنية.',
    speraEn: 'Clean, hardened codebase with zero dangerous plugins or vulnerabilities.',
    traditionalAr: 'إضافات ووردبريس وموديلات جاهزة معرضة للاختراق والتعطل المستمر.',
    traditionalEn: 'Frequent plugin conflicts, malware vulnerabilities, and crashes.',
  },
  {
    featureAr: 'تصميم الواجهات وهوية علامتك التجارية',
    featureEn: 'Tailored UI/UX Design',
    speraAr: 'تصميم فريد صُمم خصيصًا ليناسب فكرتك ويزيد مبيعاتك بنظام Figma.',
    speraEn: 'Custom Figma design system tailored strictly to maximize conversions.',
    traditionalAr: 'تصاميم قوالب مستهلكة مكررة عند مئات المواقع والمنافسين.',
    traditionalEn: 'Reused marketplace themes identical to hundreds of competitors.',
  },
  {
    featureAr: 'الدعم الفني وسرعة الرد',
    featureEn: 'Engineering Support & SLA',
    speraAr: 'تواصل مباشر وسريع عبر واتساب وهاتفياً مع مهندسي مشروعك.',
    speraEn: 'Direct WhatsApp & phone communication directly with project engineers.',
    traditionalAr: 'تذاكر دعم فني بطيئة وردود آلية قد تستغرق أيامًا لحل مشكلة بسيطة.',
    traditionalEn: 'Impersonal support ticketing systems with days of delayed replies.',
  },
  {
    featureAr: 'التوسع واستقبال أعداد زوار ضخمة',
    featureEn: 'Scalability & AI Readiness',
    speraAr: 'بنية سحابية قابلة للتوسع لاستقبال ملايين الزوار والربط بالذكاء الاصطناعي.',
    speraEn: 'Cloud-native architecture engineered to handle millions of visitors & AI.',
    traditionalAr: 'انهيار السيرفر أو بطء شديد عند زيادة عدد الزوار أو الطلبات.',
    traditionalEn: 'System crashes or catastrophic lag under concurrent peak traffic.',
  },
]

export function ComparisonSection({ rtl = true }: ComparisonSectionProps) {
  return (
    <section className="section comparison-section" id="why-speracode">
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center', maxWidth: '780px', marginInline: 'auto' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            <Sparkles size={15} />
            {rtl ? 'الفارق الهندسي الحقيقي' : 'WHY SPERACODE'}
          </div>
          <h2>
            {rtl ? (
              <>
                لماذا يختار عملاؤنا <em>سبيرا كود</em>؟
              </>
            ) : (
              <>
                Why Leaders Choose <em>SperaCode</em>
              </>
            )}
          </h2>
          <p>
            {rtl
              ? 'مقارنة شفافة توضح لك الفارق الحاسم بين الاستثمار في بنية برمجية حديثة تمتلكها بالكامل، وبين الطرق التقليدية المكلفة والبطيئة.'
              : 'A transparent comparison showing the difference between owning an elite modern software architecture versus legacy rented templates.'}
          </p>
        </div>

        {/* Desktop / Tablet Comparison Table */}
        <div className="comparison-table-wrapper">
          <table className="comparison-table" role="table">
            <thead>
              <tr>
                <th scope="col" style={{ width: '28%' }}>
                  {rtl ? 'وجه المقارنة' : 'Evaluation Criteria'}
                </th>
                <th scope="col" className="col-spera" style={{ width: '38%' }}>
                  <div className="th-brand-header">
                    <span className="live-dot" />
                    <strong>{rtl ? 'سبيرا كود (SperaCode)' : 'SperaCode Standard'}</strong>
                  </div>
                </th>
                <th scope="col" className="col-traditional" style={{ width: '34%' }}>
                  <div className="th-traditional-header">
                    <span>{rtl ? 'الحلول التقليدية والقوالب' : 'Traditional / Rented CMS'}</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((row, index) => (
                <tr key={index}>
                  <td className="comparison-feature-name">
                    <strong>{rtl ? row.featureAr : row.featureEn}</strong>
                  </td>
                  <td className="comparison-spera-cell">
                    <div className="cell-content">
                      <span className="comparison-check-icon">
                        <Check size={16} />
                      </span>
                      <span>{rtl ? row.speraAr : row.speraEn}</span>
                    </div>
                  </td>
                  <td className="comparison-traditional-cell">
                    <div className="cell-content">
                      <span className="comparison-x-icon">
                        <X size={15} />
                      </span>
                      <span>{rtl ? row.traditionalAr : row.traditionalEn}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View: Comparison Cards */}
        <div className="comparison-mobile-cards">
          {COMPARISON_ROWS.map((row, index) => (
            <div key={index} className="comparison-mobile-card">
              <h4>{rtl ? row.featureAr : row.featureEn}</h4>
              
              <div className="comparison-mobile-choice is-spera">
                <div className="choice-header">
                  <Check size={16} className="text-emerald" />
                  <strong>{rtl ? 'مع SperaCode:' : 'With SperaCode:'}</strong>
                </div>
                <p>{rtl ? row.speraAr : row.speraEn}</p>
              </div>

              <div className="comparison-mobile-choice is-traditional">
                <div className="choice-header">
                  <X size={15} className="text-red" />
                  <span>{rtl ? 'الطرق التقليدية:' : 'Traditional Solutions:'}</span>
                </div>
                <p>{rtl ? row.traditionalAr : row.traditionalEn}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
