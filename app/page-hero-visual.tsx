import { Bot, QrCode } from 'lucide-react'
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
        <QrCode aria-hidden="true" />
        <span>
          {rtl ? 'منيو رقمي' : 'Digital menu'}
          <br />
          <b>{rtl ? 'محدّث وجاهز للطلب' : 'Always ready to order'}</b>
        </span>
      </div>
      <div className="art-label label-ai">
        <Bot aria-hidden="true" />
        <span>
          {rtl ? 'مساعد ذكي' : 'AI assistant'}
          <br />
          <b>{rtl ? 'جاهز وقت ما تحتاجه' : 'Here when you need it'}</b>
        </span>
      </div>
      <HeroDeviceArtwork dark={dark} rtl={rtl} />
      <div className="art-status">
        <span aria-hidden="true" />
        {rtl ? 'جاهز يكبر معاك' : 'Built to grow with you'}
      </div>
    </div>
  )
}
