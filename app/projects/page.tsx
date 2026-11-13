import type { Metadata } from 'next'
import ProjectsGallery from './projects-gallery'

export const metadata: Metadata = {
  title: 'أعمالنا ومشاريعنا',
  description: 'استكشف مشاريع SperaCode في المواقع الإلكترونية والمنصات الرقمية وأنظمة الأعمال، مع روابط مباشرة إلى المواقع والديموهات.',
  alternates: { canonical: '/projects' },
  openGraph: { title: 'أعمال SperaCode', description: 'مجموعة من المواقع والمنصات وأنظمة الأعمال التي يمكنك استكشافها عبر روابط مباشرة.', url: 'https://speracode.com/projects', type: 'website' },
}

export default function ProjectsPage() {
  return <ProjectsGallery />
}
