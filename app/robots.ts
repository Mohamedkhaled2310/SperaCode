import type { MetadataRoute } from 'next'
import { SITE_URL } from './site-config'

const aiAndSearchCrawlers = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-Web',
  'anthropic-ai',
  'PerplexityBot',
  'Google-Extended',
  'Applebot-Extended',
  'Bingbot',
  'CCBot',
  'Bytespider',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: '/admin/' },
      ...aiAndSearchCrawlers.map((userAgent) => ({ userAgent, allow: '/' })),
    ],
    ...(SITE_URL ? { sitemap: `${SITE_URL}/sitemap.xml` } : {}),
  }
}
