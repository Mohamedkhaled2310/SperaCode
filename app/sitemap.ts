import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [{
    url: 'https://speracode.com/projects', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8,
  }, {
    url: 'https://speracode.com/contact',
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.7,
    alternates: { languages: { 'ar-EG': 'https://speracode.com/contact?lang=ar', en: 'https://speracode.com/contact?lang=en', 'x-default': 'https://speracode.com/contact' } },
  }, {
    url: 'https://speracode.com/',
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 1,
    alternates: { languages: { 'ar-EG': 'https://speracode.com/?lang=ar', en: 'https://speracode.com/?lang=en', 'x-default': 'https://speracode.com/' } },
  }]
}
