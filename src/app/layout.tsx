import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
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
  title: "Best Dental Clinic in Gurgaon | Cosmodocs",
  description:
    "Cosmodocs is the best dental clinic in Gurgaon offering painless dental care – Dental Implants, Root Canal, Teeth Whitening, Braces & Aligners, Smile Makeover & more. Book your appointment today!",
  keywords:
    "best dental clinic gurgaon, dentist near me, dental implants gurgaon, root canal treatment, teeth whitening, braces aligners, cosmodocs",
  openGraph: {
    title: "Best Dental Clinic in Gurgaon | Cosmodocs",
    description:
      "Get advanced, painless dental treatments from expert dentists at Cosmodocs, Gurgaon. Book your free consultation today!",
    type: "website",
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
        {/* Preconnect to Google Fonts CDN */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Preload LCP hero image so browser fetches it before React hydrates */}
        <link rel="preload" as="image" href="/hero.webp" type="image/webp" />
      </head>
      <body className="antialiased font-sans">
        {/* aria-hidden prevents screen readers announcing decorative glows */}
        <div className="glow-wrapper" aria-hidden="true">
          <div className="glow-lemon" />
          <div className="glow-accent" />
          <div className="glow-blue" />
        </div>
        {children}
      </body>
    </html>
  );
}
