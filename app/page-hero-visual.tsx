import { Mail, MessageCircle } from 'lucide-react'
import { HeroDeviceArtwork } from './hero-device-artwork'

type PageHeroVisualProps = {
  dark: boolean
  rtl: boolean
  className?: string
}

export function PageHeroVisual({ dark, rtl, className = '' }: PageHeroVisualProps) {
  return (
    <div className={`hero-art ${className}`.trim()}>
      <div className="art-label label-menu">
        <Mail aria-hidden="true" />
        <span>
          {rtl ? 'نموذج تواصل' : 'Contact form'}
          <br />
          <b>{rtl ? 'شاركنا تفاصيل فكرتك' : 'Tell us about your idea'}</b>
        </span>
      </div>
      <div className="art-label label-ai">
        <MessageCircle aria-hidden="true" />
        <span>
          {rtl ? 'فريقنا جاهز' : 'Our team is here'}
          <br />
          <b>{rtl ? 'رد سريع وخطوات واضحة' : 'Quick replies, clear next steps'}</b>
        </span>
      </div>
      <HeroDeviceArtwork dark={dark} rtl={rtl} />
      <div className="art-status">
        <span aria-hidden="true" />
        {rtl ? 'نرد عليك خلال يوم عمل' : 'Reply within one business day'}
      </div>
    </div>
  )
}
