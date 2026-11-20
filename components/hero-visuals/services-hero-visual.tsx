'use client'

import Image from 'next/image'
import { Globe2, Smartphone, QrCode, Bot, Sparkles, CheckCircle2 } from 'lucide-react'

interface ServicesHeroVisualProps {
  dark: boolean
  rtl: boolean
}

export function ServicesHeroVisual({ dark, rtl }: ServicesHeroVisualProps) {
  return (
    <div className="page-hero-art-wrapper services-art-wrapper">
      <div className="art-ambient-glow" aria-hidden="true" />

      {/* Main floating device showcase */}
      <div className="art-main-device animated-hero-float">
        <Image
          src="/project-savora.png"
          alt={rtl ? 'معاينة الخدمات والمتاجر والتطبيقات' : 'Services and applications preview'}
          width={720}
          height={460}
          className="art-device-img"
          priority
        />
        <div className="art-glass-overlay" />
      </div>

      {/* Floating Animated Badge 1: Web & E-Commerce */}
      <div className="floating-hero-chip chip-top-start animated-chip-float">
        <span className="chip-icon-circle chip-blue">
          <Globe2 size={16} />
        </span>
        <div className="chip-text-group">
          <strong>{rtl ? 'مواقع سريعة ومتاجر' : 'Fast Websites & E-Commerce'}</strong>
          <small>{rtl ? 'تفتح في ثانية وتجلب عملاء' : 'Sub-second load speed'}</small>
        </div>
      </div>

      {/* Floating Animated Badge 2: Mobile Apps */}
      <div className="floating-hero-chip chip-top-end animated-chip-float-delay">
        <span className="chip-icon-circle chip-cyan">
          <Smartphone size={16} />
        </span>
        <div className="chip-text-group">
          <strong>{rtl ? 'تطبيقات iOS & Android' : 'iOS & Android Apps'}</strong>
          <small>{rtl ? 'خفيفة وسهلة للزبون' : 'Smooth native feel'}</small>
        </div>
      </div>

      {/* Floating Animated Badge 3: QR Menu & AI */}
      <div className="floating-hero-chip chip-bottom-center animated-chip-float-alt">
        <span className="chip-icon-circle chip-emerald">
          <QrCode size={16} />
        </span>
        <div className="chip-text-group">
          <strong>{rtl ? 'منيو QR ورد آلي ذكي' : 'QR Menu & AI Chatbots'}</strong>
          <small>{rtl ? 'يوفر مصاريف الطباعة ويسرع الطلب' : 'Direct WhatsApp orders'}</small>
        </div>
      </div>
    </div>
  )
}
