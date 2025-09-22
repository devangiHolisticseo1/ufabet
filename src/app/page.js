// --- SEO Metadata ---

export async function generateMetadata() {
  return {
    title: 'UFABET - Online แทงบอล Direct Website | Football Betting Thailand',
    description: 'UFABET is Thailand’s trusted direct football betting website. Enjoy secure, agent-free online แทงบอล, fast payouts, and 24/7 support. Register and play safely today!',
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
      description: 'UFABET is Thailand’s trusted direct football betting website. Enjoy secure, agent-free online แทงบอล, fast payouts, and 24/7 support.',
      url: 'https://ufabet.com/',
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
      description: 'UFABET is Thailand’s trusted direct football betting website. Enjoy secure, agent-free online แทงบอล, fast payouts, and 24/7 support.',
      images: ['/images/home/ubet-logo 1.png'],
      site: '@ufabet',
    },
    alternates: {
      canonical: 'https://ufabet.com/',
    },
  };
}

import HomeClient from './HomeClient';

export default async function Home() {
  // No data fetching needed, but this makes the page static (SSG)
  return <HomeClient />;
}