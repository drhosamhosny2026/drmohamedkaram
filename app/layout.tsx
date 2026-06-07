import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ascendrabyhosam.com"),
  title: "Hossam Hosny — Business Systems & Growth Builder",
  description:
    "Hossam Hosny is a Business Systems & Growth Builder and founder of ASENDRA — helping organisations design efficient systems, build scalable operations, and drive sustainable growth.",
  keywords: [
    "Hossam Hosny",
    "ASENDRA",
    "Business Systems",
    "Growth Builder",
    "Business Strategy",
    "Systems Design",
    "Operations",
    "Scale",
  ],
  authors: [{ name: "Hossam Hosny" }],
  creator: "Hossam Hosny",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ascendrabyhosam.com",
    title: "Hossam Hosny — Business Systems & Growth Builder",
    description:
      "Business Systems & Growth Builder. Founder of ASENDRA — Strategy · Systems · Scale.",
    siteName: "Hossam Hosny",
    // OG image is auto-discovered from app/opengraph-image.tsx
  },
  twitter: {
    card: "summary_large_image",
    title: "Hossam Hosny — Business Systems & Growth Builder",
    description:
      "Business Systems & Growth Builder. Founder of ASENDRA — Strategy · Systems · Scale.",
    // Twitter image is auto-discovered from app/opengraph-image.tsx
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
  alternates: {
    canonical: "https://ascendrabyhosam.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>{children}</body>
    </html>
  );
}
