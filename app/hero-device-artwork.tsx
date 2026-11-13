type HeroDeviceArtworkProps = {
  dark: boolean
  rtl: boolean
}

export function HeroDeviceArtwork({ dark, rtl }: HeroDeviceArtworkProps) {
  return (
    <div className={`hero-device-stage contact-device-art ${dark ? 'is-dark' : ''}`} role="img" aria-label={rtl ? 'تصميم توضيحي لصفحة تواصل على حاسوب وهاتف' : 'Contact page preview on a laptop and phone'}>
      <svg className="contact-art-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <path className="signal-track" d="M3 21H16L22 27H34" />
        <path className="signal-pulse signal-pulse-one" d="M3 21H16L22 27H34" />
        <path className="signal-track" d="M97 76H84L78 70H65" />
        <path className="signal-pulse signal-pulse-two" d="M97 76H84L78 70H65" />
        <path className="signal-track" d="M5 84H17L23 78H31" />
        <path className="signal-pulse signal-pulse-three" d="M5 84H17L23 78H31" />
      </svg>
      <div className="contact-laptop">
        <div className="contact-laptop-screen">
          <div className="contact-browser-bar"><span/><span/><span/><i>{rtl ? 'speracode.com/contact' : 'speracode.com/contact'}</i></div>
          <div className="contact-page-preview" dir={rtl ? 'rtl' : 'ltr'}>
            <div className="preview-nav"><b>SperaCode</b><span>{rtl ? 'الرئيسية　 خدماتنا　 أعمالنا' : 'Home　 Services　 Work'}</span><button>{rtl ? 'ابدأ مشروعك' : 'Let’s talk'}</button></div>
            <div className="preview-content">
              <div className="preview-copy"><small>{rtl ? 'نحن هنا لمساعدتك' : 'LET’S BUILD SOMETHING'}</small><h3>{rtl ? <>خلّينا نبدأ<br/>من فكرتك.</> : <>Tell us about<br/>your next idea.</>}</h3><p>{rtl ? 'شاركنا التفاصيل وسنساعدك في اختيار الخطوة المناسبة.' : 'Share a few details and we’ll help you find the right next step.'}</p><div className="preview-contact-line"><i/> {rtl ? 'نرد عليك خلال يوم عمل' : 'We usually reply within one day'}</div></div>
              <div className="preview-form"><div className="preview-form-title">{rtl ? 'أخبرنا عن مشروعك' : 'Tell us about your project'}</div><div className="preview-form-row"><span>{rtl ? 'الاسم' : 'Your name'}</span><span>{rtl ? 'البريد الإلكتروني' : 'Email address'}</span></div><div className="preview-form-field"/><div className="preview-form-field wide"/><button>{rtl ? 'إرسال الرسالة　 ↗' : 'Send a message　 ↗'}</button></div>
            </div>
          </div>
        </div>
        <div className="contact-laptop-base"/>
      </div>
      <div className="contact-phone">
        <div className="contact-phone-notch"/>
        <div className="contact-phone-screen" dir={rtl ? 'rtl' : 'ltr'}>
          <div className="phone-status"><b>9:41</b><span>● ● ▰</span></div>
          <div className="phone-brand">SperaCode <i>↗</i></div>
          <small>{rtl ? 'تواصل معنا' : 'CONTACT OUR TEAM'}</small>
          <h4>{rtl ? 'ابدأ محادثة' : 'Start a conversation'}</h4>
          <p>{rtl ? 'نحن جاهزون لسماع فكرتك.' : 'We’re ready to hear your idea.'}</p>
          <div className="phone-message">{rtl ? 'مرحبًا، أريد معرفة المزيد عن خدماتكم.' : 'Hi, I’d love to learn more about your services.'}</div>
          <div className="phone-send">{rtl ? 'اكتب رسالتك...' : 'Write a message...'} <b>↗</b></div>
        </div>
      </div>
    </div>
  )
}
