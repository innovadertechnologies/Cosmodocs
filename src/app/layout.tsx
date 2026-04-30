import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cosmodocs",
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
        {/* Google Analytics (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JV14R6KW97"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JV14R6KW97');
          `}
        </Script>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-P3PZKCGF');
          `}
        </Script>
        {/* Google Ads Conversion Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18128245000"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18128245000');
          `}
        </Script>
      </head>
      <body className="antialiased font-sans">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P3PZKCGF"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <div className="glow-wrapper">
          <div className="glow-lemon"></div>
          <div className="glow-accent"></div>
          <div className="glow-blue"></div>
        </div>
        {children}
      </body>
    </html>
  );
}
