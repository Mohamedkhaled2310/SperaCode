import Link from 'next/link'

export function SperaLogo({
  footer = false,
  rtl,
  homeHref = '/',
}: {
  footer?: boolean
  rtl: boolean
  homeHref?: string
}) {
  return (
    <Link
      href={homeHref}
      className={`brand${footer ? ' brand-footer' : ''}`}
      aria-label={rtl ? 'سبيرا كود — الصفحة الرئيسية' : 'SperaCode — Home'}
    >
      <span className="brand-logo-crop" aria-hidden="true">
        {/* Light theme logo: Transparent with dark navy, blue, and cyan */}
        <img
          src="/speracode-mark-light.png"
          alt=""
          className="logo-img-light"
          width={44}
          height={44}
        />
        {/* Dark theme logo: Transparent with crisp white, electric blue, and cyan */}
        <img
          src="/speracode-mark-dark.png"
          alt=""
          className="logo-img-dark"
          width={44}
          height={44}
        />
      </span>
      <span className="brand-name" dir={rtl ? 'rtl' : 'ltr'} lang={rtl ? 'ar' : 'en'}>
        {rtl ? (
          <>
            <b>سبيرا</b>
            <span>كود</span>
          </>
        ) : (
          <>
            <b>Spera</b>
            <span>Code</span>
          </>
        )}
      </span>
    </Link>
  )
}
