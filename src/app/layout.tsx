import type { Metadata, Viewport } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const title = "Steven Morano | Marketing Operations & Technology";
const description =
  "Steven Morano is a New York marketing operations leader who uses AI and software to build practical tools, improve systems, and test new ideas.";

export const metadata: Metadata = {
  metadataBase: new URL("https://stevenmorano.com"),
  title,
  description,
  applicationName: "Steven Morano",
  authors: [{ name: "Steven Morano", url: "https://stevenmorano.com" }],
  creator: "Steven Morano",
  publisher: "Steven Morano",
  category: "portfolio",
  keywords: [
    "Steven Morano",
    "marketing operations leader",
    "marketing director",
    "marketing manager",
    "AI marketing",
    "marketing automation",
    "CRM strategy",
    "paid media",
    "Rye Brook New York",
    "Westchester marketing",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: "/",
    title,
    description,
    siteName: "Steven Morano",
    firstName: "Steven",
    lastName: "Morano",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@SteveMorano",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#05070b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${geist.variable} ${jetBrainsMono.variable}`}
      lang="en"
    >
      <body>{children}</body>
    </html>
  );
}
