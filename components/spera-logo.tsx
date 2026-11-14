import Link from 'next/link'

const logoUrl = '/speracode-mark.png'

export function SperaLogo({ footer = false, rtl }: { footer?: boolean; rtl: boolean }) {
  return (
    <Link href="/" className={`brand${footer ? ' brand-footer' : ''}`} aria-label={rtl ? 'سبيرا كود — الرئيسية' : 'SperaCode — Home'}>
      <span className="brand-logo-crop" aria-hidden="true"><img src={logoUrl} alt="" /></span>
      <span className="brand-name" dir={rtl ? 'rtl' : 'ltr'} lang={rtl ? 'ar' : 'en'}>{rtl ? <><b>سبيرا</b><span>كود</span></> : <><b>Spera</b><span>Code</span></>}</span>
    </Link>
  )
}
