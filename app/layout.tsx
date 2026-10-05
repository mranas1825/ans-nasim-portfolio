import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
  display: "swap",
});

const siteUrl = "https://ansnasim.portfolio";
const title = "Ans Nasim — AI-Powered Content Creator & Digital Builder";
const description =
  "Ans Nasim creates and manages faceless content across TikTok, Facebook, and YouTube using AI, creative storytelling, content strategy, editing, research, and problem-solving. Prompt engineering, vibe coding, and viral short-form formats.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s — Ans Nasim",
  },
  description,
  keywords: [
    "Ans Nasim",
    "AI content creator",
    "faceless content",
    "TikTok creator",
    "prompt engineering",
    "vibe coding",
    "short-form video",
    "content strategy",
    "UGC ads",
    "TikTok Shop affiliate",
  ],
  authors: [{ name: "Ans Nasim" }],
  creator: "Ans Nasim",
  openGraph: {
    type: "website",
    url: siteUrl,
    title,
    description,
    siteName: "Ans Nasim Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ans Nasim",
  jobTitle: "AI-Powered Content Creator & Digital Builder",
  description,
  address: { "@type": "PostalAddress", addressLocality: "Lahore", addressCountry: "PK" },
  email: "mailto:mranas18256@gmail.com",
  sameAs: [
    "https://www.linkedin.com/in/anas-nasim-2984bb319",
    "https://www.tiktok.com/@ai.cinemalab52",
    "https://www.facebook.com/1131002856755610",
    "https://www.youtube.com/@PUBGFIMLY",
  ],
  knowsAbout: [
    "AI Content Creation",
    "Prompt Engineering",
    "Faceless Short-form Video",
    "Content Strategy",
    "Vibe Coding",
    "Social Media Management",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${display.variable} ${body.variable} font-body bg-ink-950 text-zinc-100 antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
