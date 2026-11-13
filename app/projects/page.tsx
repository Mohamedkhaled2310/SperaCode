import type { Metadata } from 'next'
import ProjectsGallery from './projects-gallery'

export const metadata: Metadata = {
  title: 'أعمالنا ومشاريعنا',
  description: 'استكشف نماذج أعمال SperaCode في المواقع الإلكترونية وتطبيقات الجوال والذكاء الاصطناعي والمنيو الرقمي.',
  alternates: { canonical: '/projects' },
  openGraph: { title: 'أعمال SperaCode', description: 'مشاريع رقمية وتجارب تقنية من SperaCode.', url: 'https://speracode.com/projects', type: 'website' },
}

export default function ProjectsPage() {
  return <ProjectsGallery />
}
