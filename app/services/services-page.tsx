'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Bot,
  Check,
  CheckCircle2,
  Clock,
  Code2,
  Cpu,
  FileCheck2,
  Globe2,
  HelpCircle,
  Home,
  Layers,
  LayoutGrid,
  Lock,
  Mail,
  Menu,
  Moon,
  PenTool,
  Phone,
  QrCode,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Sun,
  Wrench,
  X,
  Zap,
} from 'lucide-react'
import { SperaLogo } from '@/components/spera-logo'
import { SiteFooter } from '@/components/site-footer'
import { WhatsAppFloatingButton } from '@/components/whatsapp-floating-button'

type Locale = 'ar' | 'en'

interface ServicesPageProps {
  initialLocale?: Locale
}

export default function ServicesPage({ initialLocale = 'ar' }: ServicesPageProps) {
  const [locale] = useState<Locale>(initialLocale)
  const [dark, setDark] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [showBackToTop, setShowBackToTop] = useState(false)

  const rtl = locale === 'ar'
  const basePath = rtl ? '' : '/en'
  const homeHref = basePath || '/'
  const servicesHref = `${basePath}/services`
  const projectsHref = `${basePath}/projects`
  const aboutHref = `${basePath}/about`
  const contactHref = `${basePath}/contact`

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem('speracode-theme')
    const nextDark = savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
    setDark(nextDark)
    document.documentElement.lang = initialLocale
    document.documentElement.dir = initialLocale === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.classList.toggle('dark', nextDark)

    const handleScroll = () => {
      const scrollY = window.scrollY
      setScrolled(scrollY > 20)
      setShowBackToTop(scrollY > 400)

      const winScroll = document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolledPct = height > 0 ? (winScroll / height) * 100 : 0
      setScrollProgress(scrolledPct)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el))

    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [initialLocale])

  function toggleLocale() {
    window.location.assign(rtl ? '/en/services' : '/services')
  }

  function toggleTheme() {
    const next = !dark
    setDark(next)
    localStorage.setItem('speracode-theme', next ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark', next)
  }

  const navItems = [
    { label: rtl ? 'الرئيسية' : 'Home', href: homeHref },
    { label: rtl ? 'خدماتنا' : 'Services', href: servicesHref, isCurrent: true },
    { label: rtl ? 'أعمالنا' : 'Portfolio', href: projectsHref },
    { label: rtl ? 'من نحن' : 'About', href: aboutHref },
    { label: rtl ? 'اتصل بنا' : 'Contact', href: contactHref },
  ]

  const servicesData = [
    {
      id: 'web',
      category: 'web',
      icon: Globe2,
      badge: rtl ? 'الأكثر طلباً' : 'MOST REQUESTED',
      title: rtl ? 'تطوير المواقع والمنصات السحابية' : 'Web Applications & Cloud Platforms',
      subtitle: rtl
        ? 'مواقع شركات، منصات إلكترونية، وبوابات تجارية متطورة بأحدث تقنيات Next.js 16 وReact 19'
        : 'Enterprise websites, web apps, and modern portals engineered with Next.js 16 and React 19',
      description: rtl
        ? 'نبني مواقع ومنصات رقمية فائقة السرعة، متوافقة 100% مع كافة الشاشات، ومهيأة بأعلى معايير السيو (SEO) والذكاء الاصطناعي (GEO) لتحويل الزوار إلى عملاء حقيقيين.'
        : 'We architect lightning-fast, highly resilient web applications optimized for search engines and generative AI bots, driving high conversion rates and seamless user retention.',
      features: rtl
        ? [
            'هندسة متطورة بـ Next.js 16 مع Fluid Compute وسرعة استجابة فائقة',
            'تهيئة كاملة لمحركات البحث (SEO) والذكاء الاصطناعي (GEO)',
            'لوحة تحكم إدارية سهلة لتحديث المحتوى والمنتجات والأسعار',
            'توافق كامل 100% مع الهواتف الذكية والأجهزة اللوحية',
          ]
        : [
            'Engineered on Next.js 16 with Fluid Compute and sub-second load times',
            'Engineered for both traditional SEO and Generative Engine Optimization (GEO)',
            'Intuitive custom dashboard for frictionless content and media management',
            'Fully responsive native-feel UI across all screens and mobile viewports',
          ],
      deliverables: rtl
        ? ['كود مصدري نظيف بنسبة 100%', 'شهادة حماية SSL وتشفير سحابي', 'ربط بوابات الدفع والشحن', 'دليل استخدام وتدريب كامل']
        : ['100% Full Source Code Ownership', 'Free SSL & Cloudflare Edge CDN', 'Payment & Shipping Gateway Setup', 'Comprehensive Admin Documentation'],
      tech: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Vercel Edge'],
      contactParam: 'web',
    },
    {
      id: 'mobile',
      category: 'mobile',
      icon: Smartphone,
      badge: rtl ? 'أداء أصلي' : 'NATIVE-GRADE',
      title: rtl ? 'تطبيقات الجوال الذكية (iOS & Android)' : 'Mobile Applications (iOS & Android)',
      subtitle: rtl
        ? 'تطبيقات جوال متقدمة تلبي أعلى معايير تجربة الاستخدام وتضمن أداءً سلساً على متجري App Store وGoogle Play'
        : 'Cross-platform native mobile apps built with Flutter for premium performance on App Store and Google Play',
      description: rtl
        ? 'نطور تطبيقات جوال ذكية تقدم تجربة استخدام استثنائية وسرعة فائقة بفضل كود موحد وقوي عبر إطار عمل Flutter، مع دعم كامل للإشعارات الفورية وبوابات الدفع والعمل بدون اتصال.'
        : 'We deliver fluid, feature-rich iOS and Android mobile apps with Flutter, ensuring zero frame drops, offline capabilities, push notifications, and frictionless in-app payments.',
      features: rtl
        ? [
            'كود برمجي موحد فائق الأداء بـ Flutter لأجهزة iPhone وAndroid',
            'دعم كامل لنظام الإشعارات اللحظية (Push Notifications) لجذب المستخدمين',
            'ربط بوابات الدفع الإلكتروني (Apple Pay، Mada، فيزا/ماستركارد)',
            'إمكانية تصفح البيانات والعمل في وضع عدم الاتصال (Offline Mode)',
          ]
        : [
            'Unified, high-velocity codebase with Flutter for iOS & Android',
            'Rich push notification workflows to maximize engagement',
            'Seamless payment gateway integration (Apple Pay, Mada, Credit Cards)',
            'Offline caching and smart data synchronization',
          ],
      deliverables: rtl
        ? ['رفع التطبيق على App Store و Google Play', 'لوحة تحكم لإدارة المستخدمين والإشعارات', 'تجهيز الهوية البصرية للأيقونة والشاشات', 'دعم فني وضمان تحديثات ما بعد النشر']
        : ['App Store & Google Play Deployment', 'Cloud Admin Panel for Notifications', 'App Store Artwork & Icon Assets', 'Post-Launch Version Warranty'],
      tech: ['Flutter', 'Dart', 'Firebase', 'REST APIs', 'App Store Connect', 'Google Play Console'],
      contactParam: 'mobile',
    },
    {
      id: 'qr',
      category: 'qr',
      icon: QrCode,
      badge: rtl ? 'حل حصري للمطاعم' : 'RESTAURANTS & CAFÉS',
      title: rtl ? 'المنيو الرقمي التفاعلي QR' : 'Interactive Digital QR Menu',
      subtitle: rtl
        ? 'قائمة طعام تفاعلية ثنائية اللغة بمسح QR دون تحميل أي تطبيق، مع طلب فوري عبر واتساب وتحديث لحظي'
        : 'Bilingual mobile digital menu scanned instantly via QR without app downloads, featuring direct WhatsApp ordering',
      description: rtl
        ? 'حل ثوري للمطاعم والكافيهات يوفر آلاف الجنيهات والريالات من تكاليف الطباعة المتكررة؛ يمكّن ضيوفك من تصفح صور الأطباق والأسعار بلحظات وإرسال الطلبات إلى واتساب المطعم مباشرة.'
        : 'Transform your restaurant experience: guests scan table QR codes to view dishes with high-res photos and prices, then submit curated orders directly to your WhatsApp staff in one tap.',
      features: rtl
        ? [
            'فتح فوري بكاميرا الهاتف بمسح QR دون الحاجة لتحميل أي تطبيق أو تسجيل',
            'تحديث فوري للأسعار، والأطباق، وحالة توفر الوجبات بلحظات من جوالك',
            'واجهة ثنائية اللغة (عربي وإنجليزي) مدعومة بصور جذابة وتصنيفات واضحة',
            'إرسال سلة الطلبات مباشرة إلى رقم واتساب المطعم برقم الطاولة أو التوصيل',
          ]
        : [
            'Instant camera scan with zero app install or login friction',
            'Real-time price, availability, and menu item updates from mobile',
            'Full bilingual Arabic & English interface with photo galleries',
            'Direct WhatsApp ordering with table numbers and special notes',
          ],
      deliverables: rtl
        ? ['رابط دائم للمنيو وتصميم QR احترافي للطاولات', 'لوحة تحكم فائقة السهولة لتعديل القائمة والأسعار', 'دعم فني واستضافة سريعة مشمولة', 'إحصائيات لعدد الزوار والأصناف الأكثر طلباً']
        : ['Permanent Menu URL & Print-Ready QR Assets', 'Ultra-Simple Mobile Admin Portal', 'Fast Cloud Hosting & Free SSL Included', 'Traffic & Popular Item Analytics'],
      tech: ['Next.js PWA', 'Instant QR Engine', 'WhatsApp Business API', 'Edge Caching'],
      contactParam: 'qr',
    },
    {
      id: 'ai',
      category: 'ai',
      icon: Bot,
      badge: rtl ? 'ذكاء اصطناعي وأتمتة' : 'AI & AUTOMATION',
      title: rtl ? 'حلول الذكاء الاصطناعي والأتمتة' : 'AI Solutions & LLM Agents',
      subtitle: rtl
        ? 'روبوتات محادثة ذكية وأنظمة أتمتة تخدم عملاءك على مدار الساعة وترفع كفاءة العمليات التشغيلية'
        : 'Enterprise-grade conversational AI agents, custom knowledge chatbots, and autonomous operational workflows',
      description: rtl
        ? 'نبتكر وكلاء ذكاء اصطناعي مدربين خصيصاً على بيانات شركتك ومنتجاتك؛ يردون على استفسارات العملاء بدقة متناهية على الموقع وواتساب ويديرون العمليات الروتينية بكفاءة لا تتوقف.'
        : 'We integrate autonomous AI agents trained securely on your company knowledge base, enabling 24/7 instant lead qualification, automated tier-1 customer support, and operational triage.',
      features: rtl
        ? [
            'شات بوت ذكي مدرب على مستندات وخدمات شركتك بدقة فائقة (RAG)',
            'رد تلقائي وفوري على استفسارات العملاء في موقعك أو قنوات واتساب',
            'أتمتة فرز وتصنيف استفسارات المبيعات وتوجيهها للفريق المختص',
            'تكامل سلس مع أنظمة الـ CRM وقواعد البيانات الحالية في مؤسستك',
          ]
        : [
            'Domain-trained AI chatbot with Retrieval-Augmented Generation (RAG)',
            'Instant 24/7 automated responses on your website and messaging channels',
            'Automated inbound lead qualification and ticket triage',
            'Seamless integration with current CRMs and enterprise databases',
          ],
      deliverables: rtl
        ? ['روبوت ذكاء اصطناعي مهيأ ومدمج بموقعك أو قنواتك', 'لوحة متابعة سجلات المحادثات ودقة الإجابات', 'تحديث وتدريب مستمر لبيانات المعرفة', 'دليل الصيانة وضبط معايير الأمان']
        : ['Fully Trained AI Assistant & Web Embed Widget', 'Conversational Analytics & Accuracy Dashboard', 'Continuous Knowledge Base Fine-Tuning', 'Security & Prompt Injection Defenses'],
      tech: ['OpenAI GPT-4o', 'Anthropic Claude', 'LangChain', 'Vector DB', 'Python FastAPI'],
      contactParam: 'ai',
    },
    {
      id: 'erp',
      category: 'erp',
      icon: Code2,
      badge: rtl ? 'أنظمة مخصصة' : 'BESPOKE ENTERPRISE',
      title: rtl ? 'أنظمة إدارة الأعمال والـ ERP المخصصة' : 'Custom ERP & Management Systems',
      subtitle: rtl
        ? 'لوحات تحكم وأنظمة إدارة مصممة خصيصاً لتلائم دورة أعمال شركتك وإدارتها بدقة وأمان'
        : 'Custom business management tools, ERP software, and internal dashboards tailored to your workflows',
      description: rtl
        ? 'تخلص من قيود البرامج الجاهزة واشتراكاتها الباهظة؛ نبني لك نظام إدارة سحابي مصمم بدقة وفق دورة عمل شركتك: المخازن، الفواتير، المبيعات، الصلاحيات، وتقارير الأداء المباشرة.'
        : 'Escape rigid off-the-shelf software and recurring license penalties. We build tailored ERP solutions mapping 100% to your workflows: inventory, invoicing, CRM, and real-time executive dashboards.',
      features: rtl
        ? [
            'إدارة متكاملة للمخزون، الفواتير، والمشتريات والمبيعات ونقاط البيع (POS)',
            'نظام أدوار وصلاحيات دقيق للموظفين والإداريين لحماية البيانات الحساسة',
            'تقارير تحليلية ورسوم بيانية فورية لأداء الشركة والمؤشرات المالية (KPIs)',
            'ملكية كاملة للكود والنظام بدون أي رسوم اشتراك شهرية متكررة للمستخدمين',
          ]
        : [
            'Unified multi-branch inventory, POS, invoicing, and purchase tracking',
            'Granular role-based access control (RBAC) protecting sensitive operations',
            'Real-time financial KPI telemetry and executive performance dashboards',
            'Zero recurring per-seat licensing fees—100% perpetual business asset',
          ],
      deliverables: rtl
        ? ['نظام إداري سحابي آمن مخصص لمؤسستك', 'تدريب كامل لفريق العمل على كافة أقسام النظام', 'نسخ احتياطي يومي مشفر لقواعد البيانات', 'ضمان فني ودعم مستمر وفق اتفاقية SLA']
        : ['Secure Cloud ERP Custom-Built for Your Workflows', 'Staff Training & Onboarding Workshops', 'Automated Daily Encrypted Database Backups', 'SLA Technical Support & Maintenance'],
      tech: ['PostgreSQL', 'Node.js', 'Next.js', 'Docker', 'Redis', 'Tailwind CSS'],
      contactParam: 'erp',
    },
    {
      id: 'uiux',
      category: 'uiux',
      icon: PenTool,
      badge: rtl ? 'تصميم تجربة الاستخدام' : 'HUMAN-CENTERED DESIGN',
      title: rtl ? 'تصميم واجهات وتجربة المستخدم UI/UX' : 'UI/UX Interface & Experience Design',
      subtitle: rtl
        ? 'تصميم واجهات رقمية جذابة وسهلة الاستخدام مبنية على دراسة سلوك العميل لزيادة التفاعل والتحويل'
        : 'Data-driven interface design, interactive Figma prototypes, and scalable design systems',
      description: rtl
        ? 'نحول فكرتك إلى تجربة رقمية استثنائية تأسر العميل؛ نصمم نماذج سلكية وتفاعلية تختبر رحلة العميل قبل كتابة سطر كود واحد، مع بناء نظام تصميم موحد يضمن اتساق علامتك التجارية.'
        : 'We translate your vision into captivating, intuitive digital interfaces. From wireframes to pixel-perfect interactive prototypes, we test and refine before engineering, maximizing conversion.',
      features: rtl
        ? [
            'دراسة سلوك العميل ورسم رحلة المستخدم (User Journey & Architecture)',
            'نماذج تفاعلية حية (Clickable Prototypes) على Figma للتجربة والتقييم',
            'نظام تصميم موحد (Design System & UI Kit) لتسهيل التطوير المستقبلي',
            'مراعاة معايير سهولة الوصول العالمية (Accessibility & WCAG)',
          ]
        : [
            'User journey research and intuitive information architecture',
            'Interactive, clickable Figma prototypes to test usability early',
            'Comprehensive design system and reusable component tokens',
            'WCAG accessibility compliance and conversion-rate optimization (CRO)',
          ],
      deliverables: rtl
        ? ['ملفات Figma المنظمة والمجهزة للمطورين', 'دليل الأنماط والألوان والخطوط والمكونات', 'نسخة تفاعلية لاختبار تجربة الاستخدام', 'أيقونات وأصول بصرية مجهزة بجودة عالية']
        : ['Organized Figma Source Files with Design Tokens', 'Complete Visual Style Guide (Typography, Colors, Icons)', 'Clickable Interactive Prototype for User Testing', 'Production-Ready Asset Export'],
      tech: ['Figma', 'FigJam', 'Design Systems', 'Micro-interactions', 'WCAG 2.1'],
      contactParam: 'uiux',
    },
    {
      id: 'infra',
      category: 'infra',
      icon: Wrench,
      badge: rtl ? 'بنية تحتية ودعم' : 'CLOUD INFRASTRUCTURE & SLA',
      title: rtl ? 'الصيانة السحابية، الاستضافة، والبريد المؤسسي' : 'Cloud Hosting, SLA Support & Corporate Email',
      subtitle: rtl
        ? 'بنية تحتية سحابية موثوقة بنسبة تشغيل 99.9%، بريد مؤسسي رسمي، ودعم تقني دائم ومستمر'
        : 'Enterprise cloud hosting, guaranteed 99.9% uptime, professional domain email, and proactive SLA support',
      description: rtl
        ? 'نضمن استقرار موقعك أو نظامك على مدار الساعة؛ نقدم استضافة سحابية متقدمة مع جدران حماية ضد الهجمات، ونسخ احتياطي يومي، وبريد إلكتروني رسمي يعزز ثقة عملائك بشركتك.'
        : 'Keep your digital systems bulletproof. We deliver enterprise cloud hosting with DDoS defense, continuous health monitoring, automated backups, and branded corporate mailboxes.',
      features: rtl
        ? [
            'بنية تحتية سحابية موثوقة بنسبة تشغيل 99.9% مع مراقبة أداء حية',
            'نسخ احتياطي يومي وأسبوعي مشفر مع خطط استعادة فورية عند الطوارئ',
            'بريد إلكتروني رسمي باسم نطاق شركتك (name@company.com) بمساحات آمنة',
            'تحديثات أمنية دورية وحماية ضد هجمات الـ DDoS والبرمجيات الخبيثة',
          ]
        : [
            'High-availability cloud infrastructure with 99.9% uptime and health checks',
            'Automated daily encrypted backups with point-in-time disaster recovery',
            'Official domain mailboxes (e.g., name@yourcompany.com) with spam protection',
            'Continuous security patches, SSL renewals, and DDoS mitigation',
          ],
      deliverables: rtl
        ? ['تقرير أداء شهري تفصيلي بالاستقرار والزيارات', 'خط دعم فني مباشر واستجابة طارئة في أقل من ساعتين', 'إدارة النطاقات وتجديد الشهادات الأمنية تلقائياً', 'فحص دوري للأداء ومؤشرات Core Web Vitals']
        : ['Monthly SLA Performance & Security Report', 'Dedicated Support Escalation Hotline (<2hr SLA)', 'Automatic Domain & SSL Certificate Lifecycle Management', 'Continuous Speed & Core Web Vitals Audits'],
      tech: ['AWS', 'Cloudflare', 'Vercel', 'Docker', 'Google Workspace', 'Linux'],
      contactParam: 'support',
    },
  ]

  const filterTabs = [
    { id: 'all', label: rtl ? 'جميع الخدمات' : 'All Services' },
    { id: 'web', label: rtl ? 'مواقع ومنصات' : 'Web & Platforms' },
    { id: 'mobile', label: rtl ? 'تطبيقات الجوال' : 'Mobile Apps' },
    { id: 'qr', label: rtl ? 'منيو QR للمطاعم' : 'QR Menu' },
    { id: 'ai', label: rtl ? 'ذكاء اصطناعي' : 'AI & Bots' },
    { id: 'erp', label: rtl ? 'أنظمة ERP' : 'Custom ERP' },
    { id: 'uiux', label: rtl ? 'تصميم UI/UX' : 'UI/UX Design' },
    { id: 'infra', label: rtl ? 'استضافة وصيانة' : 'Cloud & SLA' },
  ]

  const filteredServices =
    selectedFilter === 'all'
      ? servicesData
      : servicesData.filter((s) => s.category === selectedFilter)

  const guarantees = [
    {
      icon: ShieldCheck,
      title: rtl ? 'ملكية الكود والأصول 100%' : '100% IP & Code Ownership',
      desc: rtl
        ? 'تنتقل إليك كافة حقوق الشيفرة المصدرية والتصاميم بالكامل دون أي قيود أو اشتراكات مخفية.'
        : 'All intellectual property, source code, and design files transfer entirely to you upon completion.',
    },
    {
      icon: Clock,
      title: rtl ? 'التزام صارم بمواعيد التسليم' : 'Guaranteed Delivery Timelines',
      desc: rtl
        ? 'نعمل وفق جدول زمني دقيق ومراحل تسليم أسبوعية واضحة بدون تأخير أو مفاجآت.'
        : 'Structured agile milestones with strict launch deadlines committed in writing.',
    },
    {
      icon: Sparkles,
      title: rtl ? 'ضمان فني ودعم بعد الإطلاق' : 'Post-Launch Technical Warranty',
      desc: rtl
        ? 'فترة ضمان مجانية مشمولة مع كل مشروع لضمان استقرار الأداء وخلو الشيفرة من أي أعطال.'
        : 'Complimentary post-launch warranty included with every delivery to guarantee peak stability.',
    },
    {
      icon: FileCheck2,
      title: rtl ? 'تسعير شفاف وعقود رسمية' : 'Transparent Milestone Pricing',
      desc: rtl
        ? 'عروض أسعار مفصلة ومكتوبة بدفعات مرحلية حسب الإنجاز الفعلي ودون أي تكاليف خفية.'
        : 'Detailed itemized quotes with milestone-based installments and zero hidden fees.',
    },
  ]

  const serviceFaqs = rtl
    ? [
        {
          q: 'كيف نحدد الخدمة الأنسب لاحتياجات مشروعي؟',
          a: 'يقوم مهندسونا بعقد جلسة استكشاف فنية سريعة لدراسة أهدافك وميزانيتك والفئة المستهدفة، ثم نقترح عليك البنية التحتية والتقنيات المثالية التي تحقق أعلى عائد استثماري.',
        },
        {
          q: 'هل يمكنني البدء بنسخة أولية (MVP) ثم تطويرها لاحقاً؟',
          a: 'نعم بالتأكيد. نبني جميع مشاريعنا بمعمارية برمجية قابلة للتوسع (Scalable Architecture)، مما يتيح لك إطلاق نسخة أولية سريعة واختبار السوق ثم إضافة خصائص جديدة بسلاسة.',
        },
        {
          q: 'كيف يتم سداد تكلفة المشروع؟',
          a: 'نعتمد نظام الدفعات المرحلية المرتبط بنسب الإنجاز الفعلي (Milestone-based Payments) لضمان راحة العميل وشفافية التنفيذ.',
        },
        {
          q: 'هل تقدمون الدعم الفني بعد تسليم المشروع؟',
          a: 'نعم، يتضمن كل مشروع فترة ضمان ودعم فني مجانية بعد الإطلاق، كما نقدم خطط صيانة ودعم تشغيلي شهرية وسنوية (SLA) لضمان استمرار موقعك أو تطبيقك بأعلى كفاءة.',
        },
      ]
    : [
        {
          q: 'How do we determine the best technical stack for my project?',
          a: 'Our solution architects conduct a complimentary discovery session to analyze your operational goals, budget, and timeline, then recommend the optimal scalable architecture.',
        },
        {
          q: 'Can we start with a Minimum Viable Product (MVP) and scale later?',
          a: 'Absolutely. We design and engineer with clean modular architecture, allowing you to launch quickly, test market demand, and incrementally add features without rewrites.',
        },
        {
          q: 'How does milestone-based payment work?',
          a: 'We operate on transparent milestone installments tied directly to tangible project deliverables, giving you complete visibility and control over project progression.',
        },
        {
          q: 'What kind of support is included after product launch?',
          a: 'Every project comes with a complimentary post-launch warranty. We also offer monthly and annual SLA maintenance contracts covering proactive monitoring, backups, and security patches.',
        },
      ]

  return (
    <div className={`site services-page ${dark ? 'theme-dark' : ''}`} dir={rtl ? 'rtl' : 'ltr'}>
      {/* Top Reading Progress Bar */}
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} aria-hidden="true" />

      <a className="skip-link" href="#services-main">
        {rtl ? 'انتقل إلى المحتوى الرئيسي' : 'Skip to main content'}
      </a>

      {/* Header */}
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-inner">
          <SperaLogo rtl={rtl} homeHref={homeHref} />

          <nav className="desktop-nav" aria-label={rtl ? 'التنقل الرئيسي' : 'Main navigation'}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={item.isCurrent ? 'page' : undefined}
                className={item.isCurrent ? 'nav-active' : ''}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="nav-actions">
            <button
              type="button"
              className="icon-button locale-button"
              onClick={toggleLocale}
              aria-label={rtl ? 'Switch to English' : 'التبديل إلى العربية'}
            >
              {rtl ? 'EN' : 'عربي'}
            </button>
            <button
              type="button"
              className="icon-button"
              onClick={toggleTheme}
              aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {dark ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
            </button>
            <Link className="button button-primary nav-cta" href={contactHref}>
              {rtl ? 'ابدأ مشروعك' : 'Start Project'}
              <ArrowUpRight aria-hidden="true" />
            </Link>
            <button
              type="button"
              className="icon-button mobile-menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                onClick={() => setMenuOpen(false)}
                href={item.href}
                className={item.isCurrent ? 'mobile-nav-active' : ''}
              >
                {item.label}
                <ArrowUpRight aria-hidden="true" />
              </Link>
            ))}
            <button
              type="button"
              className="button button-secondary"
              style={{ marginTop: '14px' }}
              onClick={toggleLocale}
            >
              {rtl ? 'Switch to English' : 'التبديل إلى العربية'}
            </button>
            <Link
              onClick={() => setMenuOpen(false)}
              className="button button-primary"
              href={contactHref}
            >
              {rtl ? 'ابدأ مشروعك معنا' : 'Start Your Project'}
              <ArrowUpRight aria-hidden="true" />
            </Link>
          </nav>
        )}
      </header>

      <main id="services-main">
        {/* Hero Section */}
        <section className="services-hero">
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href={homeHref} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <Home size={14} />
                <span>{rtl ? 'الرئيسية' : 'Home'}</span>
              </Link>
              <span aria-hidden="true">/</span>
              <span>{rtl ? 'خدماتنا التقنية' : 'Services'}</span>
            </nav>

            <div className="services-hero-content">
              <div className="eyebrow">
                <span className="live-dot" />
                {rtl ? 'خدمات هندسية وحلول رقمية شاملة' : 'FULL-CYCLE SOFTWARE & AI SOLUTIONS'}
              </div>

              <h1>
                {rtl ? (
                  <>
                    حلول برمجية متطورة
                    <br />
                    <em>ترفع كفاءة أعمالك وتسرّع نموها</em>
                  </>
                ) : (
                  <>
                    Engineering high-impact software
                    <br />
                    <em>that accelerates business growth</em>
                  </>
                )}
              </h1>

              <p className="services-hero-lead">
                {rtl
                  ? 'من المواقع فائقة السرعة وتطبيقات الجوال إلى أنظمة الـ ERP المخصصة وحلول الذكاء الاصطناعي، نبتكر أدوات رقمية مصممة خصيصاً لأهدافك التجارية بمعايير هندسية عالمية.'
                  : 'From high-velocity cloud web platforms and mobile apps to custom ERPs and intelligent AI agents, we deliver resilient software designed for measurable ROI.'}
              </p>

              {/* Guarantees Strip */}
              <div className="services-guarantees-strip">
                <div className="strip-item">
                  <CheckCircle2 size={18} className="strip-icon" />
                  <span>{rtl ? 'ملكية الكود 100%' : '100% Code Ownership'}</span>
                </div>
                <div className="strip-item">
                  <CheckCircle2 size={18} className="strip-icon" />
                  <span>{rtl ? 'ضمان فني مجاني' : 'Free Post-Launch Warranty'}</span>
                </div>
                <div className="strip-item">
                  <CheckCircle2 size={18} className="strip-icon" />
                  <span>{rtl ? 'التزام صارم بالمواعيد' : 'On-Time Delivery'}</span>
                </div>
                <div className="strip-item">
                  <CheckCircle2 size={18} className="strip-icon" />
                  <span>{rtl ? 'دعم فني مستمر SLA' : 'SLA Technical Support'}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Showcase Section */}
        <section className="services-catalog-section section">
          <div className="container">
            {/* Filter Pills */}
            <div className="services-filter-bar">
              <span className="services-filter-title">
                <LayoutGrid size={16} />
                {rtl ? 'تصفية حسب المجال:' : 'Filter category:'}
              </span>
              <div className="services-filter-pills" role="tablist">
                {filterTabs.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={selectedFilter === tab.id}
                    className={`filter-tab-pill ${selectedFilter === tab.id ? 'active' : ''}`}
                    onClick={() => setSelectedFilter(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Services Detailed Cards Grid */}
            <div className="services-detailed-grid">
              {filteredServices.map((service, index) => {
                const IconComponent = service.icon
                const quoteUrl = `${contactHref}?service=${service.contactParam}`
                const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(
                  rtl
                    ? `مرحبًا SperaCode، أود الاستفسار وطلب عرض سعر لخدمة: ${service.title}`
                    : `Hello SperaCode, I would like to inquire about: ${service.title}`
                )}`

                return (
                  <article
                    key={service.id}
                    id={service.id}
                    className="service-detail-card"
                    data-reveal
                  >
                    <div className="service-card-header">
                      <div className="service-card-icon-wrap">
                        <IconComponent size={26} />
                      </div>
                      <div className="service-card-meta">
                        <span className="service-card-badge">{service.badge}</span>
                        <h2 className="service-card-title">{service.title}</h2>
                      </div>
                    </div>

                    <p className="service-card-subtitle">{service.subtitle}</p>
                    <p className="service-card-desc">{service.description}</p>

                    {/* Key Features */}
                    <div className="service-card-section">
                      <h3 className="service-section-heading">
                        <Zap size={16} />
                        {rtl ? 'أبرز المزايا الفنية:' : 'Key Technical Capabilities:'}
                      </h3>
                      <ul className="service-features-list">
                        {service.features.map((feat, fi) => (
                          <li key={fi}>
                            <Check size={16} className="feature-check" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Deliverables */}
                    <div className="service-card-section">
                      <h3 className="service-section-heading">
                        <FileCheck2 size={16} />
                        {rtl ? 'مخرجات التسليم (ما الذي تحصل عليه؟):' : 'What is Included (Deliverables):'}
                      </h3>
                      <div className="service-deliverables-tags">
                        {service.deliverables.map((deliv, di) => (
                          <span key={di} className="deliverable-tag">
                            <CheckCircle2 size={13} />
                            {deliv}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Tech Badges */}
                    <div className="service-card-tech">
                      <span className="tech-label">{rtl ? 'التقنيات المستخدمة:' : 'Tech stack:'}</span>
                      <div className="tech-pills">
                        {service.tech.map((t, ti) => (
                          <span key={ti} className="tech-pill">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Card Actions */}
                    <div className="service-card-footer">
                      <Link className="button button-primary service-action-btn" href={quoteUrl}>
                        {rtl ? 'طلب عرض سعر للخدمة' : 'Request Proposal'}
                        <ArrowUpRight size={16} />
                      </Link>
                      <a
                        className="button button-secondary service-action-btn"
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Phone size={15} />
                        {rtl ? 'محادثة سريعة عبر واتساب' : 'Chat on WhatsApp'}
                      </a>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        {/* 4 Pillars Guarantees Section */}
        <section className="section guarantees-section">
          <div className="container">
            <div className="section-header" style={{ textAlign: 'center', maxWidth: '720px', marginInline: 'auto' }}>
              <div className="eyebrow" style={{ justifyContent: 'center' }}>
                <ShieldCheck size={16} />
                {rtl ? 'معايير الجودة والضمان' : 'THE SPERACODE GUARANTEE'}
              </div>
              <h2 className="section-title">
                {rtl ? 'لماذا تختار الشراكة مع سبيرا كود؟' : 'Engineering Integrity You Can Rely On'}
              </h2>
              <p className="section-subtitle">
                {rtl
                  ? 'نؤمن بأن البرمجيات الناجحة لا تعتمد فقط على جودة الكود، بل على الثقة، الشفافية، والالتزام الصارم بما اتفقنا عليه.'
                  : 'We believe exceptional software goes beyond clean syntax—it requires absolute transparency, client ownership, and contractual punctuality.'}
              </p>
            </div>

            <div className="guarantees-grid">
              {guarantees.map((item, gi) => {
                const ItemIcon = item.icon
                return (
                  <div key={gi} className="guarantee-card" data-reveal>
                    <div className="guarantee-icon">
                      <ItemIcon size={24} />
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Services FAQs */}
        <section className="section services-faq-section">
          <div className="container">
            <div className="section-header" style={{ textAlign: 'center', maxWidth: '680px', marginInline: 'auto' }}>
              <div className="eyebrow" style={{ justifyContent: 'center' }}>
                <HelpCircle size={16} />
                {rtl ? 'إجابات على استفساراتك' : 'COMMON QUESTIONS'}
              </div>
              <h2 className="section-title">
                {rtl ? 'الأسئلة الشائعة حول خدماتنا' : 'Frequently Asked Questions'}
              </h2>
            </div>

            <div className="faq-grid" style={{ maxWidth: '880px', marginInline: 'auto' }}>
              {serviceFaqs.map((faq, fidx) => (
                <div key={fidx} className="faq-card" data-reveal>
                  <h3 className="faq-question">
                    <span className="faq-number">0{fidx + 1}</span>
                    {faq.q}
                  </h3>
                  <p className="faq-answer">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <SiteFooter
        rtl={rtl}
        dark={dark}
        onToggleDark={toggleTheme}
        onToggleLocale={toggleLocale}
        homeHref={homeHref}
        projectsHref={projectsHref}
        contactHref={contactHref}
        servicesHref={servicesHref}
        aboutHref={aboutHref}
      />

      {/* Animated Floating WhatsApp Widget */}
      <WhatsAppFloatingButton rtl={rtl} />

      {/* Floating Back To Top Button */}
      <button
        type="button"
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label={rtl ? 'العودة إلى أعلى الصفحة' : 'Back to top'}
      >
        <ArrowUp />
      </button>
    </div>
  )
}
