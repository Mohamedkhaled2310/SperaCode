export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/+$/, '') || 'https://speracode.com'
export const SITE_NAME = 'SperaCode'
export const SITE_NAME_AR = 'سبيرا كود'

// Optional default WhatsApp phone number (e.g. '201000000000')
export const WHATSAPP_PHONE = process.env.NEXT_PUBLIC_WHATSAPP_PHONE?.replace(/[^0-9]/g, '') || ''

export function buildWhatsAppUrl(message: string, phone: string = WHATSAPP_PHONE): string {
  const clean = phone.replace(/[^0-9]/g, '')
  const encoded = encodeURIComponent(message.trim())
  return clean ? `https://wa.me/${clean}?text=${encoded}` : `https://wa.me/?text=${encoded}`
}
