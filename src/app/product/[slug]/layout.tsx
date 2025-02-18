import { Metadata } from 'next'

type Props = {
  params: { slug: string }
  children: React.ReactNode
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `Product ${params.slug}`,
  }
}

export default function ProductLayout({ children }: Props) {
  return children
}
