import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Deepak Vanka | AI & ML Student | Software Developer',
  description:
    'Portfolio of Deepak Vanka, a Computer Science (AI & ML) student at SRM Institute of Science and Technology interested in software development, AI/ML, and emerging technologies.',
  keywords: [
    'Deepak Vanka',
    'Deepak Vanka Portfolio',
    'AI ML Engineer',
    'Software Developer',
    'SRM Institute of Science and Technology',
    'SentiGuard AI',
    'Academic Result Management System',
    'React',
    'Next.js',
    'Python',
    'Java',
  ],
  authors: [{ name: 'Deepak Vanka' }],
  openGraph: {
    title: 'Deepak Vanka | AI & ML Student | Software Developer',
    description:
      'Portfolio of Deepak Vanka, a Computer Science (AI & ML) student interested in software development, AI/ML, and emerging technologies.',
    url: 'https://deepakvanka.dev',
    siteName: 'Deepak Vanka Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Deepak Vanka | AI & ML Student | Software Developer',
    description:
      'Portfolio of Deepak Vanka, a Computer Science (AI & ML) student interested in software development, AI/ML, and emerging technologies.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${plusJakarta.variable} antialiased min-h-screen flex flex-col`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
