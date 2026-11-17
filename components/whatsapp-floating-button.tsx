'use client'

import { useEffect, useState } from 'react'

interface WhatsAppFloatingButtonProps {
  rtl?: boolean
  phoneNumber?: string
  defaultMessage?: string
}

export function WhatsAppFloatingButton({
  rtl = true,
  phoneNumber,
  defaultMessage,
}: WhatsAppFloatingButtonProps) {
  const [visible, setVisible] = useState(false)
  const [tooltipDismissed, setTooltipDismissed] = useState(false)

  useEffect(() => {
    // Show after slight scroll or after 1.5s
    const timer = setTimeout(() => setVisible(true), 1200)

    const handleScroll = () => {
      if (window.scrollY > 80) {
        setVisible(true)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const message =
    defaultMessage ||
    (rtl
      ? 'مرحبًا SperaCode، أود الاستفسار عن خدماتكم والبدء في مشروع جديد.'
      : 'Hello SperaCode, I would like to inquire about your services and discuss a project.')

  const targetUrl = phoneNumber
    ? `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    : `https://wa.me/?text=${encodeURIComponent(message)}`

  return (
    <div
      className={`whatsapp-widget-wrap ${visible ? 'is-visible' : ''} ${rtl ? 'dir-rtl' : 'dir-ltr'}`}
      aria-label={rtl ? 'تواصل معنا عبر واتساب' : 'Chat on WhatsApp'}
    >
      {/* Interactive Tooltip Pill */}
      {!tooltipDismissed && (
        <a
          href={targetUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-tooltip"
          onClick={() => setTooltipDismissed(true)}
        >
          <span className="whatsapp-tooltip-dot" />
          <span className="whatsapp-tooltip-text">
            {rtl ? 'تحدث مع مهندسينا الآن' : 'Chat with our team'}
          </span>
          <span className="whatsapp-tooltip-sub">
            {rtl ? 'متاحون للرد السريع' : 'Online & ready to help'}
          </span>
        </a>
      )}

      {/* Main Animated Floating Action Button */}
      <a
        href={targetUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-floating-btn"
        aria-label={rtl ? 'محادثة عبر واتساب' : 'Chat on WhatsApp'}
      >
        {/* Animated Radar Pulse Waves */}
        <span className="whatsapp-pulse-ring ring-1" aria-hidden="true" />
        <span className="whatsapp-pulse-ring ring-2" aria-hidden="true" />

        {/* Live Online Beacon */}
        <span className="whatsapp-status-beacon" title={rtl ? 'متصل الآن' : 'Online now'} />

        {/* Crisp Vector WhatsApp SVG Icon */}
        <svg
          className="whatsapp-svg-icon"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.52 3.48A11.85 11.85 0 0012.06 0C5.46 0 .09 5.37.09 11.97c0 2.11.55 4.16 1.6 5.98L0 24l6.23-1.63a11.9 11.9 0 005.83 1.51h.01c6.6 0 11.97-5.37 11.97-11.97 0-3.2-1.25-6.21-3.52-8.43zM12.07 21.88h-.01a9.88 9.88 0 01-5.04-1.38l-.36-.22-3.74.98 1-3.65-.24-.38a9.86 9.86 0 01-1.51-5.26c0-5.46 4.44-9.9 9.9-9.9 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 012.9 7c0 5.46-4.44 9.9-9.9 9.91zm5.43-7.42c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.64-.93-2.25-.24-.59-.49-.51-.68-.52h-.58c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"
            fill="currentColor"
          />
        </svg>
      </a>
    </div>
  )
}
