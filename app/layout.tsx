import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';
import { portfolioData } from '@/data/portfolio';

const sansFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const monoFont = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500', '600'],
});

export const viewport: Viewport = {
  themeColor: '#141615',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://iftekharhasan.dev'),
  title: `${portfolioData.personal.name} | ${portfolioData.personal.role}`,
  description: `${portfolioData.personal.name} is a Shopify & Frontend Developer based in Bangladesh, focused on custom theme engineering, Online Store 2.0 architecture, and responsive e-commerce storefronts.`,
  keywords: [
    'Shopify Developer',
    'Frontend Developer',
    'Shopify Liquid',
    'Online Store 2.0',
    'Custom Shopify Theme',
    'React',
    'Next.js',
    'Tailwind CSS',
    'Iftekhar Hasan',
    'Ecommerce Developer Bangladesh',
  ],
  authors: [{ name: portfolioData.personal.fullName, url: portfolioData.personal.github }],
  creator: portfolioData.personal.fullName,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://iftekharhasan.dev',
    title: `${portfolioData.personal.name} | ${portfolioData.personal.role}`,
    description: portfolioData.personal.subheadline,
    siteName: `${portfolioData.personal.name} Portfolio`,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&h=630&q=85',
        width: 1200,
        height: 630,
        alt: `${portfolioData.personal.name} — Shopify & Frontend Developer Portfolio`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${portfolioData.personal.name} | ${portfolioData.personal.role}`,
    description: portfolioData.personal.subheadline,
    images: ['https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&h=630&q=85'],
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: portfolioData.personal.fullName,
    jobTitle: portfolioData.personal.role,
    url: 'https://iftekharhasan.dev',
    sameAs: [portfolioData.personal.linkedin, portfolioData.personal.github],
    knowsAbout: [
      'Shopify Theme Development',
      'Shopify Liquid',
      'Online Store 2.0',
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Tailwind CSS',
      'E-commerce UX',
    ],
  };

  return (
    <html lang="en" className={`${sansFont.variable} ${monoFont.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#141615] text-[#F6F5F0] antialiased selection:bg-[#C6F277] selection:text-[#141615]">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
