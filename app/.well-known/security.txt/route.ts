import { SITE_URL } from '../../site-config'

export const dynamic = 'force-static'

export async function GET() {
  if (!SITE_URL) {
    return new Response('Security contact is not configured yet.\n', {
      status: 404,
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    })
  }

  const expires = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString()
  const contents = [
    `Contact: ${SITE_URL}/contact`,
    `Expires: ${expires}`,
    'Preferred-Languages: ar, en',
    `Canonical: ${SITE_URL}/.well-known/security.txt`,
  ].join('\n')

  return new Response(`${contents}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
