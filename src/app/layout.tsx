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
    default: 'Largest ModelContextProtocol Server Repository | MCPRepository.net',
    template: '%s | MCPRepository.net'
  },
  description: 'Discover ModelContextProtocol (MCP) Servers with comprehensive reviews and step-by-step installation guides. Find the perfect MCP solution for your AI projects.',
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
    title: 'Search MCP Server | ModelContextProtocol | MCPRepository.net',
    description: 'Discover ModelContextProtocol (MCP) Servers with comprehensive reviews and step-by-step installation guides. Find the perfect MCP solution for your AI projects.',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Largest ModelContextProtocol Server Repository | MCPRepository.net'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Largest ModelContextProtocol Server Repository | MCPRepository.net',
    description: 'Discover ModelContextProtocol (MCP) Servers with comprehensive reviews and step-by-step installation guides. Find the perfect MCP solution for your AI projects.',
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
