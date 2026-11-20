'use client'

import Image from 'next/image'
import { FolderGit2, Globe2, CheckCircle2 } from 'lucide-react'

interface ProjectsHeroVisualProps {
  dark: boolean
  rtl: boolean
}

export function ProjectsHeroVisual({ dark, rtl }: ProjectsHeroVisualProps) {
  return (
    <div className="projects-showcase-container">
      <div className="art-ambient-glow" aria-hidden="true" />

      {/* Main floating device showcase */}
      <div className="projects-device-frame animated-hero-float">
        <Image
          src={dark ? '/hero-devices-dark.png' : '/hero-devices-light.png'}
          alt={
            rtl
              ? 'معاينة نماذج ومشاريع سبيرا كود على الحاسوب والهاتف'
              : 'SperaCode portfolio preview across laptop and smartphone'
          }
          width={720}
          height={460}
          className="projects-device-img"
          priority
        />
        <div className="art-glass-overlay" />
      </div>

      {/* 3 Core Highlights Strip Directly Underneath */}
      <div className="projects-features-strip" role="list">
        {/* Highlight 1: Delivered Projects */}
        <div className="project-highlight-card" role="listitem">
          <div className="highlight-icon icon-blue">
            <FolderGit2 size={18} />
          </div>
          <div className="highlight-info">
            <strong>{rtl ? '+24 مشروعاً منجزاً' : '+24 Live Projects'}</strong>
            <p>{rtl ? 'جاهزة ومسلمة بالكامل' : 'Delivered on time'}</p>
          </div>
        </div>

        {/* Highlight 2: Regional Reach */}
        <div className="project-highlight-card" role="listitem">
          <div className="highlight-icon icon-cyan">
            <Globe2 size={18} />
          </div>
          <div className="highlight-info">
            <strong>{rtl ? 'مصر • السعودية • الخليج' : 'Egypt • KSA • Gulf'}</strong>
            <p>{rtl ? 'عملاء يثقون في أعمالنا' : 'Trusted by regional clients'}</p>
          </div>
        </div>

        {/* Highlight 3: Live Demos */}
        <div className="project-highlight-card" role="listitem">
          <div className="highlight-icon icon-emerald">
            <CheckCircle2 size={18} />
          </div>
          <div className="highlight-info">
            <strong>{rtl ? 'معاينة حية ومباشرة' : '100% Live Demos'}</strong>
            <p>{rtl ? 'جرّب كل نظام بنفسك' : 'Test every solution live'}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
