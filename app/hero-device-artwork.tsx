import Image from 'next/image'

type Palette = {
  background: string
  header: string
  sidebar: string
  card: string
  border: string
  ink: string
  muted: string
  accent: string
  accentSoft: string
  cyan: string
}

const lightPalette: Palette = {
  background: '#F6F8FC',
  header: '#FFFFFF',
  sidebar: '#F0F3F8',
  card: '#FFFFFF',
  border: '#E3E9F2',
  ink: '#18233B',
  muted: '#718099',
  accent: '#176FE8',
  accentSoft: '#E9F2FF',
  cyan: '#00AFC1',
}

const darkPalette: Palette = {
  background: '#0B1220',
  header: '#111A2B',
  sidebar: '#101A2C',
  card: '#141F33',
  border: '#28364D',
  ink: '#F4F7FC',
  muted: '#9AAAC1',
  accent: '#2788F5',
  accentSoft: '#172D49',
  cyan: '#22D3DC',
}

function LaptopDashboard({ palette }: { palette: Palette }) {
  const metrics = [
    { label: 'Projects', value: '50+', detail: 'delivered' },
    { label: 'Clients', value: '45', detail: 'served' },
    { label: 'Experience', value: '6+', detail: 'years' },
  ]
  const chartPoints = [
    { x: 150, y: 326, label: 'Websites' },
    { x: 295, y: 283, label: 'Mobile' },
    { x: 438, y: 302, label: 'UX / UI' },
    { x: 585, y: 237, label: 'AI' },
  ]

  return (
    <>
      <rect width="640" height="410" fill={palette.background} />
      <rect width="640" height="38" fill={palette.header} />
      <circle cx="19" cy="19" r="7" fill={palette.accent} />
      <path d="M16 19h6M19 16v6" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
      <text x="32" y="24" fill={palette.ink} fontFamily="Montserrat,Arial,sans-serif" fontSize="19" fontWeight="700">SperaCode</text>
      <text x="151" y="23" fill={palette.muted} fontFamily="Montserrat,Arial,sans-serif" fontSize="8" fontWeight="600">OVERVIEW</text>
      <rect x="526" y="9" width="101" height="20" rx="10" fill={palette.accentSoft} />
      <circle cx="539" cy="19" r="3" fill={palette.cyan} />
      <text x="547" y="22" fill={palette.accent} fontFamily="Montserrat,Arial,sans-serif" fontSize="7" fontWeight="700">SUPPORT 24/7</text>

      <rect y="38" width="98" height="372" fill={palette.sidebar} />
      <rect x="10" y="55" width="78" height="27" rx="6" fill={palette.accentSoft} />
      <circle cx="22" cy="68" r="4" fill={palette.accent} />
      <text x="31" y="71" fill={palette.accent} fontFamily="Montserrat,Arial,sans-serif" fontSize="7" fontWeight="700">Overview</text>
      <circle cx="22" cy="104" r="4" fill={palette.muted} opacity=".65" />
      <text x="31" y="107" fill={palette.muted} fontFamily="Montserrat,Arial,sans-serif" fontSize="7">Projects</text>
      <circle cx="22" cy="132" r="4" fill={palette.muted} opacity=".65" />
      <text x="31" y="135" fill={palette.muted} fontFamily="Montserrat,Arial,sans-serif" fontSize="7">Clients</text>
      <circle cx="22" cy="160" r="4" fill={palette.muted} opacity=".65" />
      <text x="31" y="163" fill={palette.muted} fontFamily="Montserrat,Arial,sans-serif" fontSize="7">Services</text>
      <rect x="12" y="386" width="74" height="1" fill={palette.border} />
      <text x="18" y="400" fill={palette.muted} fontFamily="Montserrat,Arial,sans-serif" fontSize="6">WEB · MOBILE · AI</text>

      <text x="112" y="62" fill={palette.ink} fontFamily="Montserrat,Arial,sans-serif" fontSize="18" fontWeight="700">Company overview</text>
      <text x="112" y="79" fill={palette.muted} fontFamily="Montserrat,Arial,sans-serif" fontSize="7">SperaCode digital products</text>
      {metrics.map((metric, index) => {
        const x = 112 + index * 168
        return (
          <g key={metric.label}>
            <rect x={x} y="94" width="158" height="71" rx="8" fill={palette.card} stroke={palette.border} />
            <text x={x + 12} y="111" fill={palette.muted} fontFamily="Montserrat,Arial,sans-serif" fontSize="7" fontWeight="600">{metric.label}</text>
            <text x={x + 12} y="143" fill={palette.ink} fontFamily="Montserrat,Arial,sans-serif" fontSize="28" fontWeight="700">{metric.value}</text>
            <text x={x + 63} y="142" fill={palette.muted} fontFamily="Montserrat,Arial,sans-serif" fontSize="7">{metric.detail}</text>
            <rect x={x + 12} y="152" width="30" height="3" rx="1.5" fill={index === 1 ? palette.cyan : palette.accent} opacity=".8" />
          </g>
        )
      })}
      <rect x="108" y="176" width="516" height="216" rx="9" fill={palette.card} stroke={palette.border} />
      <text x="124" y="198" fill={palette.ink} fontFamily="Montserrat,Arial,sans-serif" fontSize="11" fontWeight="700">SperaCode solutions</text>
      <text x="124" y="212" fill={palette.muted} fontFamily="Montserrat,Arial,sans-serif" fontSize="7">Websites · mobile apps · product design</text>
      <rect x="519" y="186" width="88" height="18" rx="9" fill={palette.accentSoft} />
      <circle cx="531" cy="195" r="3" fill={palette.cyan} />
      <text x="540" y="198" fill={palette.accent} fontFamily="Montserrat,Arial,sans-serif" fontSize="6.5" fontWeight="700">OUR EXPERTISE</text>
      <line x1="132" y1="242" x2="607" y2="242" stroke={palette.border} strokeWidth="1" />
      <line x1="132" y1="274" x2="607" y2="274" stroke={palette.border} strokeWidth="1" />
      <line x1="132" y1="306" x2="607" y2="306" stroke={palette.border} strokeWidth="1" />
      <line x1="132" y1="338" x2="607" y2="338" stroke={palette.border} strokeWidth="1" />
      <path d="M150 326 C198 309 246 286 295 283 C345 279 389 309 438 302 C488 295 535 253 585 237" fill="none" stroke={palette.accent} strokeWidth="3" strokeLinecap="round" />
      <path d="M150 326 C198 309 246 286 295 283 C345 279 389 309 438 302 C488 295 535 253 585 237 L585 338 L150 338 Z" fill={palette.accent} opacity=".08" />
      {chartPoints.map((point, index) => (
        <g key={point.label}>
          <circle cx={point.x} cy={point.y} r="5" fill={palette.card} stroke={index === 1 ? palette.cyan : palette.accent} strokeWidth="2.5" />
          <text x={point.x} y="359" textAnchor="middle" fill={palette.muted} fontFamily="Montserrat,Arial,sans-serif" fontSize="6.5">{point.label}</text>
        </g>
      ))}
    </>
  )
}

function MobileDashboard({ palette }: { palette: Palette }) {
  return (
    <>
      <rect width="180" height="440" fill={palette.background} />
      <rect x="61" y="7" width="58" height="15" rx="8" fill="#080D17" />
      <circle cx="111" cy="14.5" r="2" fill="#273247" />
      <circle cx="17" cy="39" r="7" fill={palette.accent} />
      <path d="M14 39h6M17 36v6" stroke="#FFFFFF" strokeWidth="1.4" strokeLinecap="round" />
      <text x="29" y="43" fill={palette.ink} fontFamily="Montserrat,Arial,sans-serif" fontSize="14" fontWeight="700">SperaCode</text>
      <path d="M157 36h10M157 40h10M157 44h10" stroke={palette.muted} strokeWidth="1.5" strokeLinecap="round" />
      <text x="14" y="70" fill={palette.ink} fontFamily="Montserrat,Arial,sans-serif" fontSize="11" fontWeight="700">Company overview</text>
      <text x="14" y="83" fill={palette.muted} fontFamily="Montserrat,Arial,sans-serif" fontSize="6.5">A quick look at SperaCode</text>

      <rect x="12" y="94" width="156" height="74" rx="9" fill={palette.card} stroke={palette.border} />
      <text x="23" y="113" fill={palette.muted} fontFamily="Montserrat,Arial,sans-serif" fontSize="7" fontWeight="600">Projects delivered</text>
      <text x="23" y="145" fill={palette.ink} fontFamily="Montserrat,Arial,sans-serif" fontSize="27" fontWeight="700">50+</text>
      <rect x="110" y="128" width="45" height="24" rx="7" fill={palette.accentSoft} />
      <path d="M119 144l8-8 6 5 11-10" fill="none" stroke={palette.accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

      <rect x="12" y="178" width="74" height="68" rx="8" fill={palette.card} stroke={palette.border} />
      <text x="21" y="196" fill={palette.muted} fontFamily="Montserrat,Arial,sans-serif" fontSize="6.5">Clients</text>
      <text x="21" y="226" fill={palette.ink} fontFamily="Montserrat,Arial,sans-serif" fontSize="20" fontWeight="700">45</text>
      <rect x="94" y="178" width="74" height="68" rx="8" fill={palette.card} stroke={palette.border} />
      <text x="103" y="196" fill={palette.muted} fontFamily="Montserrat,Arial,sans-serif" fontSize="6.5">Experience</text>
      <text x="103" y="226" fill={palette.ink} fontFamily="Montserrat,Arial,sans-serif" fontSize="20" fontWeight="700">6+</text>
      <text x="21" y="237" fill={palette.muted} fontFamily="Montserrat,Arial,sans-serif" fontSize="5.5">served</text>
      <text x="103" y="237" fill={palette.muted} fontFamily="Montserrat,Arial,sans-serif" fontSize="5.5">years</text>

      <rect x="12" y="256" width="156" height="103" rx="8" fill={palette.card} stroke={palette.border} />
      <text x="22" y="275" fill={palette.ink} fontFamily="Montserrat,Arial,sans-serif" fontSize="7.5" fontWeight="700">Our services</text>
      <rect x="22" y="286" width="62" height="24" rx="6" fill={palette.accentSoft} />
      <text x="30" y="301" fill={palette.accent} fontFamily="Montserrat,Arial,sans-serif" fontSize="6" fontWeight="600">Websites</text>
      <rect x="90" y="286" width="66" height="24" rx="6" fill={palette.accentSoft} />
      <text x="98" y="301" fill={palette.accent} fontFamily="Montserrat,Arial,sans-serif" fontSize="6" fontWeight="600">Mobile apps</text>
      <rect x="22" y="318" width="62" height="24" rx="6" fill={palette.accentSoft} />
      <text x="30" y="333" fill={palette.accent} fontFamily="Montserrat,Arial,sans-serif" fontSize="6" fontWeight="600">AI solutions</text>
      <text x="98" y="333" fill={palette.muted} fontFamily="Montserrat,Arial,sans-serif" fontSize="6">UI / UX</text>

      <rect x="12" y="369" width="156" height="48" rx="8" fill={palette.accentSoft} />
      <circle cx="27" cy="393" r="5" fill={palette.cyan} />
      <text x="39" y="389" fill={palette.ink} fontFamily="Montserrat,Arial,sans-serif" fontSize="7" fontWeight="600">Support</text>
      <text x="39" y="403" fill={palette.muted} fontFamily="Montserrat,Arial,sans-serif" fontSize="6">Here when you need us</text>
      <text x="151" y="398" textAnchor="end" fill={palette.accent} fontFamily="Montserrat,Arial,sans-serif" fontSize="10" fontWeight="700">24/7</text>
      <rect x="67" y="430" width="46" height="3" rx="1.5" fill={palette.ink} opacity=".35" />
    </>
  )
}

export function HeroDeviceArtwork({ dark, rtl }: { dark: boolean; rtl: boolean }) {
  const palette = dark ? darkPalette : lightPalette
  const laptop = dark
    ? { x: 158, y: 127, width: 655, height: 423 }
    : { x: 190, y: 142, width: 633, height: 405 }
  const phone = dark
    ? { x: 902, y: 151, width: 181, height: 456 }
    : { x: 928, y: 224, width: 166, height: 382 }
  const laptopClip = dark ? 'speracode-laptop-dark' : 'speracode-laptop-light'
  const phoneClip = dark ? 'speracode-phone-dark' : 'speracode-phone-light'

  return (
    <div className="hero-device-stage">
      <Image
        src={dark ? '/hero-devices-dark.png' : '/hero-devices-light.png'}
        alt={rtl
          ? 'لابتوب وموبايل يعرضان لوحة بيانات SperaCode: أكثر من 50 مشروعًا و45 عميلًا و6 سنوات خبرة'
          : 'Laptop and phone showing SperaCode metrics: 50+ projects, 45 clients, and 6+ years of experience'}
        width={1200}
        height={768}
        sizes="(max-width: 760px) 340px, 500px"
        priority
        className="hero-image"
      />
      <svg className="hero-screen-overlay" viewBox="0 0 1200 768" aria-hidden="true" focusable="false">
        <defs>
          <clipPath id={laptopClip} clipPathUnits="userSpaceOnUse">
            <rect x={laptop.x} y={laptop.y} width={laptop.width} height={laptop.height} rx="5" />
          </clipPath>
          <clipPath id={phoneClip} clipPathUnits="userSpaceOnUse">
            <rect x={phone.x} y={phone.y} width={phone.width} height={phone.height} rx="19" />
          </clipPath>
        </defs>
        <g clipPath={`url(#${laptopClip})`}>
          <g transform={`translate(${laptop.x} ${laptop.y}) scale(${laptop.width / 640} ${laptop.height / 410})`}>
            <LaptopDashboard palette={palette} />
          </g>
        </g>
        <g clipPath={`url(#${phoneClip})`}>
          <g transform={`translate(${phone.x} ${phone.y}) scale(${phone.width / 180} ${phone.height / 440})`}>
            <MobileDashboard palette={palette} />
          </g>
        </g>
      </svg>
    </div>
  )
}
