'use client'

import Image from 'next/image'
import { ExternalLink, CheckCircle2, Globe2, Sparkles, FolderGit2 } from 'lucide-react'

interface ProjectsHeroVisualProps {
  dark: boolean
  rtl: boolean
}

export function ProjectsHeroVisual({ dark, rtl }: ProjectsHeroVisualProps) {
  return (
    <div className="page-hero-art-wrapper projects-art-wrapper">
      <div className="art-ambient-glow" aria-hidden="true" />

      {/* Main layered visual showing real client projects */}
      <div className="art-main-device animated-hero-float">
        <Image
          src="/projects/fun-group.png"
          alt={rtl ? 'معاينة مشاريع وسابقة أعمال سبيرا كود' : 'SperaCode featured portfolio projects'}
          width={720}
          height={460}
          className="art-device-img"
          priority
        />
        <div className="art-glass-overlay" />
        
        {/* Inset preview card for SchoolQ8 */}
        <div className="projects-floating-preview animated-chip-float-delay">
          <Image
            src="/projects/schoolq8.png"
            alt="SchoolQ8 project"
            width={200}
            height={130}
            className="preview-mini-thumb"
          />
          <div className="preview-mini-info">
            <span className="live-status-pill">
              <span className="live-dot" />
              {rtl ? 'موقع نشط ويعمل' : 'Live in Production'}
            </span>
            <strong>{rtl ? 'مدرستنا الكويتية' : 'SchoolQ8 Platform'}</strong>
          </div>
        </div>
      </div>

      {/* Floating Animated Badge 1: Delivered Projects */}
      <div className="floating-hero-chip chip-top-start animated-chip-float">
        <span className="chip-icon-circle chip-blue">
          <FolderGit2 size={16} />
        </span>
        <div className="chip-text-group">
          <strong>{rtl ? '+24 مشروعاً منجزاً' : '+24 Live Projects'}</strong>
          <small>{rtl ? 'جاهزة ومسلمة بالكامل' : 'Delivered on time'}</small>
        </div>
      </div>

      {/* Floating Animated Badge 2: Regional Reach */}
      <div className="floating-hero-chip chip-bottom-center animated-chip-float-alt">
        <span className="chip-icon-circle chip-emerald">
          <Globe2 size={16} />
        </span>
        <div className="chip-text-group">
          <strong>{rtl ? 'مصر • السعودية • الكويت • الإمارات' : 'Egypt • KSA • Kuwait • UAE'}</strong>
          <small>{rtl ? 'عملاء يثقون في أعمالنا' : 'Trusted by regional leaders'}</small>
        </div>
      </div>
    </div>
  )
}
