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
  metadataBase: new URL("https://mohamedkaram.com"),
  title: "Mohamed Karam — Pharmacist, MBA Candidate & Entrepreneur",
  description:
    "Mohamed Karam is a Licensed Pharmacist, MBA Candidate, Cosmetic Formulation Specialist, and Amazon FBA entrepreneur building at the intersection of healthcare, business, and innovation.",
  keywords: [
    "Mohamed Karam",
    "Pharmacist Egypt",
    "MBA Candidate",
    "Cosmetic Formulation",
    "Amazon FBA",
    "Healthcare Entrepreneur",
    "Pharmacy Operations",
    "Compounding Specialist",
  ],
  authors: [{ name: "Mohamed Karam" }],
  creator: "Mohamed Karam",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mohamedkaram.com",
    title: "Mohamed Karam — Pharmacist, MBA Candidate & Entrepreneur",
    description:
      "Building at the intersection of Healthcare, Business & Innovation. Licensed Pharmacist · MBA Candidate · Cosmetic Formulator · Amazon FBA Seller.",
    siteName: "Mohamed Karam",
    // OG image is auto-discovered from app/opengraph-image.tsx
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Karam — Pharmacist, MBA Candidate & Entrepreneur",
    description:
      "Building at the intersection of Healthcare, Business & Innovation.",
    // Twitter image is auto-discovered from app/opengraph-image.tsx
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
