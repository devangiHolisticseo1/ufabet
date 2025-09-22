import { Poppins, Geist_Mono } from 'next/font/google';
import './globals.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import BootstrapLoader from './components/BootstrapLoader';
import { getBaseUrl, getCanonicalUrl } from '../lib/urls';

// import 'bootstrap-icons/font/bootstrap-icons.css';
import "bootstrap/dist/css/bootstrap.min.css";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-poppins',
  display: 'swap',
});

// const geistMono = Geist_Mono({
//   subsets: ['latin'],
//   variable: '--font-geist-mono',
// });

export const metadata = {
  metadataBase: new URL(process.env.NODE_ENV === 'production' ? 'https://your-domain.com' : 'http://localhost:3000'),
  title: {
    default: 'UFABET - Online แทงบอล Direct Website',
    template: '%s | UFABET',
  },
  description: "UFABET is Thailand's trusted direct football betting website. Enjoy secure, agent-free online แทงบอล, fast payouts, and 24/7 support.",
  keywords: [
    'UFABET',
    'แทงบอล',
    'football betting',
    'online betting',
    'direct website',
    'no agent',
    'Thailand',
    'SBOBET',
    'สมัครแทงบอล',
    'betting site',
    'sportsbook'
  ],
  openGraph: {
    title: 'UFABET - Online แทงบอล Direct Website',
    description: "UFABET is Thailand's trusted direct football betting website. Enjoy secure, agent-free online แทงบอล, fast payouts, and 24/7 support.",
    url: process.env.NODE_ENV === 'production' ? 'https://your-domain.com/' : 'http://localhost:3000/',
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
    title: 'UFABET - Online แทงบอล Direct Website',
    description: "UFABET is Thailand's trusted direct football betting website. Enjoy secure, agent-free online แทงบอล, fast payouts, and 24/7 support.",
    images: ['/images/home/ubet-logo 1.png'],
    site: '@ufabet',
  },
  alternates: {
    canonical: process.env.NODE_ENV === 'production' ? 'https://your-domain.com/' : 'http://localhost:3000/',
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
