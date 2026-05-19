import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";

// Reduced from 7 weights to 3 — eliminates 4 unnecessary font file downloads
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-serif",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://cosmodocs.in'),
  title: {
    default: "Best Dental Clinic in Gurgaon | Cosmodocs",
    template: "%s | Cosmodocs"
  },
  description:
    "Cosmodocs is the best dental clinic in Gurgaon offering painless dental care – Dental Implants, Root Canal, Teeth Whitening, Braces & Aligners, Smile Makeover & more. Book your appointment today!",
  keywords:
    "best dental clinic gurgaon, dentist near me, dental implants gurgaon, root canal treatment, teeth whitening, braces aligners, cosmodocs",
  authors: [{ name: "Cosmodocs" }],
  creator: "Cosmodocs",
  publisher: "Cosmodocs",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Best Dental Clinic in Gurgaon | Cosmodocs",
    description:
      "Get advanced, painless dental treatments from expert dentists at Cosmodocs, Gurgaon. Book your free consultation today!",
    url: "https://cosmodocs.in",
    siteName: "Cosmodocs",
    images: [
      {
        url: "/cosmodocs_hero_banner.webp",
        width: 1200,
        height: 630,
        alt: "Cosmodocs Dental Clinic Gurgaon",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Dental Clinic in Gurgaon | Cosmodocs",
    description:
      "Get advanced, painless dental treatments from expert dentists at Cosmodocs, Gurgaon.",
    images: ["/cosmodocs_hero_banner.webp"],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* DNS Prefetch - earliest possible hint */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        
        {/* Preconnect to Google Fonts CDN */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Preload LCP hero image with high priority */}
        <link rel="preload" as="image" href="/hero.webp" type="image/webp" fetchPriority="high" />
      </head>
      <body className="antialiased font-sans">
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:bg-lemon-green focus:text-medical-blue focus:px-4 focus:py-2 focus:rounded-lg focus:font-bold"
        >
          Skip to main content
        </a>
        
        {/* aria-hidden prevents screen readers announcing decorative glows */}
        <div className="glow-wrapper" aria-hidden="true">
          <div className="glow-lemon" />
          <div className="glow-accent" />
          <div className="glow-blue" />
        </div>
        {children}
        
        {/* Google tag (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-18128245000"
        />
        <Script
          id="google-ads-tag"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-18128245000');
            `,
          }}
        />
      </body>
    </html>
  );
}
