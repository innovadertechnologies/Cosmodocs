import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
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
  title: "Best Dental Clinic in Gurgaon | Cosmodocs – Painless Dental Care",
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
      <body className="antialiased font-sans">
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
