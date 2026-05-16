import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Inter, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Infinit Food & Drinks | Premium Dining in Prishtinë",
  description:
    "Where Flavor Has No Limits. Located in the heart of Prishtinë, Kosovo — Infinit Food & Drinks blends heritage, taste, and modern culinary artistry.",
  keywords:
    "best restaurant Prishtina, food drinks Prishtina, breakfast Prishtina, premium dining Kosovo, coffee restaurant Kosovo",
  openGraph: {
    title: "Infinit Food & Drinks",
    description: "Infinite Taste. Timeless Heritage. — Prishtinë's premium dining destination.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cormorant.variable} ${inter.variable} ${montserrat.variable} scroll-smooth`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
