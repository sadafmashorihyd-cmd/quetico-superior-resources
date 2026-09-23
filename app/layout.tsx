import type { Metadata } from "next";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

const siteUrl = "https://queticosuperiorresources.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Quetico Superior Resources Inc.",
    template: "%s | Quetico Superior Resources Inc.",
  },
  description:
    "Quetico Superior Resources Inc. is a Canadian mineral exploration company advancing gold, copper and platinum group metals projects in the Quetico–Superior region of northwestern Ontario.",
  keywords: [
    "Quetico Superior Resources",
    "gold exploration Ontario",
    "copper exploration",
    "platinum group metals",
    "Thunder Bay mining",
    "junior mining company Canada",
  ],
  openGraph: {
    title: "Quetico Superior Resources Inc.",
    description:
      "A new dawn emerges in the Quetico — exploring for gold, copper and platinum group metals.",
    url: siteUrl,
    siteName: "Quetico Superior Resources Inc.",
    images: ["/hero-dawn.jpg"],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quetico Superior Resources Inc.",
    description:
      "A new dawn emerges in the Quetico — exploring for gold, copper and platinum group metals.",
    images: ["/hero-dawn.jpg"],
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${mono.variable}`}>
      <body>
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
