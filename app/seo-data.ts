import { projects } from './projects/project-data'
import { SITE_NAME, SITE_URL } from './site-config'

export const homeFaqs = [
  {
    questionEn: 'How long does a project take?',
    answerEn: 'Simple websites typically take 1–3 weeks. Larger systems depend on scope, and we provide a clear timeline after the initial consultation.',
    questionAr: 'كم تستغرق مدة تنفيذ المشروع؟',
    answerAr: 'تستغرق المواقع البسيطة عادةً من أسبوع إلى ثلاثة أسابيع، أما الأنظمة الأكبر فتعتمد على نطاق العمل، ونقدّم جدولًا زمنيًا واضحًا بعد الاستشارة الأولية.',
  },
  {
    questionEn: 'Do you provide support after delivery?',
    answerEn: 'Yes. Every project includes a support period, and we offer monthly maintenance plans.',
    questionAr: 'هل تقدمون دعمًا بعد التسليم؟',
    answerAr: 'نعم، يشمل كل مشروع فترة دعم فني، كما نوفّر باقات صيانة شهرية.',
  },
  {
    questionEn: 'How is pricing determined?',
    answerEn: 'Pricing is based on scope and features. You receive a fixed written quote before work begins.',
    questionAr: 'كيف يتم تحديد السعر؟',
    answerAr: 'يعتمد السعر على نطاق العمل والمميزات المطلوبة، وتحصل على عرض سعر ثابت ومكتوب قبل بدء التنفيذ.',
  },
  {
    questionEn: 'Do you work remotely?',
    answerEn: 'Yes. Meetings, delivery, and support are all conducted online, so location is never a constraint.',
    questionAr: 'هل تعملون عن بُعد؟',
    answerAr: 'نعم، تتم الاجتماعات والتسليم والدعم عبر الإنترنت، لذا لا يشكّل الموقع الجغرافي أي عائق.',
  },
  {
    questionEn: 'Who owns the code and design?',
    answerEn: 'You do. Full ownership transfers to you upon final payment.',
    questionAr: 'لمن تعود ملكية الشيفرة والتصميم؟',
    answerAr: 'تعود الملكية الكاملة إليك بعد السداد النهائي.',
  },
  {
    questionEn: 'Can you improve an existing website or app?',
    answerEn: 'Yes. We begin with a technical audit, then fix, optimize, or rebuild as needed.',
    questionAr: 'هل يمكنكم تحسين موقع أو تطبيق قائم؟',
    answerAr: 'نعم، نبدأ بفحص فني شامل، ثم نصلح أو نحسّن أو نعيد البناء حسب الحاجة.',
  },
]

export function createFaqPageSchema(locale: 'ar' | 'en') {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    ...(SITE_URL ? { '@id': `${SITE_URL}${locale === 'ar' ? '/' : '/en'}#faq` } : {}),
    inLanguage: locale === 'ar' ? 'ar-EG' : 'en',
    mainEntity: homeFaqs.map((faq) => ({
      '@type': 'Question',
      name: locale === 'ar' ? faq.questionAr : faq.questionEn,
      acceptedAnswer: {
        '@type': 'Answer',
        text: locale === 'ar' ? faq.answerAr : faq.answerEn,
      },
    })),
  }
}

export function createContactPageSchema(locale: 'ar' | 'en') {
  const path = locale === 'ar' ? '/contact' : '/en/contact'

  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    ...(SITE_URL ? { '@id': `${SITE_URL}${path}#webpage`, url: `${SITE_URL}${path}` } : {}),
    name: locale === 'ar' ? 'تواصل مع SperaCode' : 'Contact SperaCode',
    inLanguage: locale === 'ar' ? 'ar-EG' : 'en',
    ...(SITE_URL ? {
      isPartOf: { '@id': `${SITE_URL}/#website` },
      mainEntity: { '@id': `${SITE_URL}/#organization` },
    } : {}),
  }
}

export function createPortfolioPageSchema(locale: 'ar' | 'en') {
  const path = locale === 'ar' ? '/projects' : '/en/projects'

  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    ...(SITE_URL ? { '@id': `${SITE_URL}${path}#webpage`, url: `${SITE_URL}${path}` } : {}),
    name: locale === 'ar' ? 'أعمال ومشاريع SperaCode' : 'SperaCode selected work',
    inLanguage: locale === 'ar' ? 'ar-EG' : 'en',
    ...(SITE_URL ? { isPartOf: { '@id': `${SITE_URL}/#website` } } : {}),
    mainEntity: {
      '@type': 'ItemList',
      itemListOrder: 'https://schema.org/ItemListOrderAscending',
      numberOfItems: projects.length,
      itemListElement: projects.map((project, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'CreativeWork',
          name: project.title,
          description: locale === 'ar' ? project.arDescription : project.description,
          url: project.demoUrl,
          ...(SITE_URL ? { image: `${SITE_URL}${project.image}` } : {}),
        },
      })),
    },
  }
}

export function serializeStructuredData(data: unknown) {
  return JSON.stringify(data).replace(/</g, '\\u003c')
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  inLanguage: ['ar-EG', 'en'],
  ...(SITE_URL ? {
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    publisher: { '@id': `${SITE_URL}/#organization` },
  } : {}),
}
