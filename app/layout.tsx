import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "xVerse Platforms - Innovative Tech Solutions & Digital Transformation",
  description: "xVerse Platforms is a leading tech company providing innovative solutions, digital transformation services, and cutting-edge technology to empower businesses and drive growth.",
  keywords: [
    "xVerse Platforms",
    "tech company",
    "digital transformation",
    "technology solutions",
    "software development",
    "innovation",
    "tech consulting",
    "business technology",
    "digital solutions",
    "tech startup",
    "enterprise technology",
    "IT services"
  ],
  authors: [{ name: "xVerse Platforms" }],
  creator: "xVerse Platforms",
  publisher: "xVerse Platforms",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.xverseplatforms.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "xVerse Platforms - Innovative Tech Solutions",
    description: "Empowering businesses with cutting-edge technology solutions and digital transformation services.",
    url: 'https://www.xverseplatforms.com',
    siteName: 'xVerse Platforms',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'xVerse Platforms - Tech Innovation',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'xVerse Platforms - Tech Innovation',
    description: 'Leading tech company providing innovative solutions and digital transformation services.',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  other: {
    'theme-color': '#001f4d',
    'msapplication-TileColor': '#001f4d',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "xVerse Platforms",
              "url": "https://www.xverseplatforms.com",
              "logo": "https://www.xverseplatforms.com/logo.png",
              "description": "Leading tech company providing innovative solutions and digital transformation services.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Lagos",
                "addressCountry": "Nigeria"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+234 803 123 4567",
                "contactType": "customer service",
                "email": "support@xverseplatforms.com"
              },
              "sameAs": [
                "https://twitter.com/xverseplatforms",
                "https://linkedin.com/company/xverseplatforms"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}