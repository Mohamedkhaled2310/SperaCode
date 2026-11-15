import type { MetadataRoute } from 'next'
import { SITE_URL } from './site-config'

const languageAlternates = (arPath: string, enPath: string) => ({
  languages: {
    'ar-EG': `${SITE_URL}${arPath}`,
    en: `${SITE_URL}${enPath}`,
    'x-default': `${SITE_URL}${arPath}`,
  },
})

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
      alternates: languageAlternates('/', '/en'),
    },
    {
      url: `${SITE_URL}/en`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: languageAlternates('/', '/en'),
    },
    {
      url: `${SITE_URL}/projects`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: languageAlternates('/projects', '/en/projects'),
    },
    {
      url: `${SITE_URL}/en/projects`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: languageAlternates('/projects', '/en/projects'),
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.7,
      alternates: languageAlternates('/contact', '/en/contact'),
    },
    {
      url: `${SITE_URL}/en/contact`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.7,
      alternates: languageAlternates('/contact', '/en/contact'),
    },
  ]
}
