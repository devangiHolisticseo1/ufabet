import { Poppins, Geist_Mono } from 'next/font/google';
import './globals.css';
import BootstrapLoader from './components/BootstrapLoader';
import { getBaseUrl, getCanonicalUrl } from '../lib/urls';
import "bootstrap/dist/css/bootstrap.min.css";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(getBaseUrl()),
  title: {
    default: 'UFABET - Online Football Betting Direct Website',
    template: '%s | UFABET',
  },
  description: 'UFABET is Thailand trusted direct football betting website. Enjoy secure, agent-free online football betting, fast payouts, and 24/7 support.',
  keywords: [
    'UFABET',
    'football betting',
    'online betting',
    'direct website',
    'no agent',
    'Thailand',
    'SBOBET',
    'betting site',
    'sportsbook'
  ],
  openGraph: {
    title: 'UFABET - Online Football Betting Direct Website',
    description: 'UFABET is Thailand trusted direct football betting website. Enjoy secure, agent-free online football betting, fast payouts, and 24/7 support.',
    url: getCanonicalUrl('/'),
    siteName: 'UFABET',
    images: [
      {
        url: '/images/home/ubet-logo 1.png',
        width: 600,
        height: 315,
        alt: 'UFABET Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UFABET - Online Football Betting Direct Website',
    description: 'UFABET is Thailand trusted direct football betting website. Enjoy secure, agent-free online football betting, fast payouts, and 24/7 support.',
    images: ['/images/home/ubet-logo 1.png'],
    site: '@ufabet',
  },
  alternates: {
    canonical: getCanonicalUrl('/'),
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.variable}>
        {children}
        <BootstrapLoader />
      </body>
    </html>
  );
}