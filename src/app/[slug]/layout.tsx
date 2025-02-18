interface LayoutProps {
  children: React.ReactNode;
  params: {
    slug: string;
  };
}

export default function Layout({ children, params }: LayoutProps) {
  return (
    <div>
      {children}
    </div>
  );
}

export async function generateMetadata({ params }: LayoutProps) {
  return {
    title: `Product: ${params.slug}`,
  };
}
