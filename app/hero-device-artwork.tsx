import Image from 'next/image'

type HeroDeviceArtworkProps = {
  dark: boolean
  rtl: boolean
}

export function HeroDeviceArtwork({ dark, rtl }: HeroDeviceArtworkProps) {
  return (
    <div className="hero-device-stage">
      <Image
        src={dark ? '/hero-devices-dark.png' : '/hero-devices-light.png'}
        alt={rtl
          ? 'تصميم توضيحي لحاسوب محمول وهاتف يعرضان لوحة تحكم رقمية'
          : 'Illustration of a laptop and phone displaying a digital dashboard'}
        width={1376}
        height={768}
        sizes="(max-width: 760px) 340px, 500px"
        quality={90}
        priority
        className="hero-image"
      />
    </div>
  )
}
