import Image from 'next/image'

type HeroDeviceArtworkProps = {
  dark: boolean
  rtl: boolean
}

export function HeroDeviceArtwork({ dark, rtl }: HeroDeviceArtworkProps) {
  return (
    <div
      className="hero-device-stage"
      role="img"
      aria-label={
        rtl
          ? 'تصميم توضيحي لحاسوب محمول وهاتف يعرضان واجهة تواصل لشركة SperaCode'
          : 'Illustration of a laptop and phone displaying a contact interface by SperaCode'
      }
    >
      <Image
        src={dark ? '/hero-devices-dark.png' : '/hero-devices-light.png'}
        alt={
          rtl
            ? 'تصميم توضيحي لحاسوب محمول وهاتف يعرضان واجهة تواصل لشركة SperaCode'
            : 'Illustration of a laptop and phone displaying a contact interface by SperaCode'
        }
        width={1376}
        height={768}
        sizes="(max-width: 900px) 100vw, 560px"
        quality={90}
        priority
        className="hero-image"
      />
    </div>
  )
}
