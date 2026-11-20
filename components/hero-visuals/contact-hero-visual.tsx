'use client'

import Image from 'next/image'
import { MessageCircle, Mail, Clock, ShieldCheck } from 'lucide-react'

interface ContactHeroVisualProps {
  dark: boolean
  rtl: boolean
}

export function ContactHeroVisual({ dark, rtl }: ContactHeroVisualProps) {
  return (
    <div className="page-hero-art-wrapper contact-art-wrapper">
      <div className="art-ambient-glow" aria-hidden="true" />

      {/* Main floating device showcase */}
      <div className="art-main-device animated-hero-float">
        <Image
          src={dark ? '/hero-devices-dark.png' : '/hero-devices-light.png'}
          alt={rtl ? 'تواصل مع فريق سبيra كود واستلم عرض سعرك' : 'Connect with SperaCode engineering team'}
          width={720}
          height={460}
          className="art-device-img"
          priority
        />
        <div className="art-glass-overlay" />
      </div>

      {/* Floating Animated Badge 1: WhatsApp direct */}
      <a
        href="https://wa.me/201515327087"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-hero-chip chip-top-start animated-chip-float contact-chip-clickable"
      >
        <span className="chip-icon-circle chip-whatsapp">
          <MessageCircle size={16} />
        </span>
        <div className="chip-text-group">
          <div className="chip-header-line">
            <span className="live-dot" />
            <strong>{rtl ? 'واتساب مباشر' : 'Direct WhatsApp'}</strong>
          </div>
          <small dir="ltr">01515327087</small>
        </div>
      </a>

      {/* Floating Animated Badge 2: Official Email */}
      <a
        href="mailto:info.speracode@gmail.com"
        className="floating-hero-chip chip-top-end animated-chip-float-delay contact-chip-clickable"
      >
        <span className="chip-icon-circle chip-blue">
          <Mail size={16} />
        </span>
        <div className="chip-text-group">
          <strong>{rtl ? 'بريدنا الرسمي' : 'Official Email'}</strong>
          <small dir="ltr">info.speracode@gmail.com</small>
        </div>
      </a>

      {/* Floating Animated Badge 3: Fast response guarantee */}
      <div className="floating-hero-chip chip-bottom-center animated-chip-float-alt">
        <span className="chip-icon-circle chip-emerald">
          <Clock size={16} />
        </span>
        <div className="chip-text-group">
          <strong>{rtl ? 'عرض سعر فني مجاني' : 'Complimentary Proposal'}</strong>
          <small>{rtl ? 'دراسة فنية وجدول زمني خلال 24 ساعة' : 'Tailored scope delivered within 24h'}</small>
        </div>
      </div>
    </div>
  )
}
