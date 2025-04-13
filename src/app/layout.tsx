import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './globals.css';

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mcprepository.net'),
  title: {
    default: 'MCPRepository.net - Professional MCP Directory',
    template: '%s | MCPRepository.net'
  },
  description: 'Professional directory of MCP servers with curated reviews, ratings, and comprehensive resources. Find reliable MCP solutions for your projects.',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mcprepository.net',
    siteName: 'MCPRepository.net',
    title: 'MCPRepository.net - Professional MCP Directory',
    description: 'Find reliable MCP servers for your projects with our comprehensive directory and expert reviews.',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'MCPRepository.net - Professional MCP Directory'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MCPRepository.net - Professional MCP Directory',
    description: 'Find reliable MCP servers for your projects with our comprehensive directory and expert reviews.',
    images: ['/opengraph-image.png']
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
