import type { Metadata, Viewport } from "next";
import { Amiri, Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-cairo",
});

const amiri = Amiri({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-amiri",
});

const siteUrl = "https://sakina-noor.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "سكينة | رفيقك الروحي اليومي",
    template: "%s | سكينة",
  },
  description:
    "سكينة — رفيقك الروحي اليومي. صلوات، أذكار، قرآن، وحصن المسلم في تجربة هادئة تليق بخشوعك.",
  keywords: ["سكينة", "تطبيق إسلامي", "أذكار", "قرآن كريم", "مواقيت الصلاة", "حصن المسلم"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ar_AR",
    url: siteUrl,
    siteName: "سكينة",
    title: "سكينة | رفيقك الروحي اليومي",
    description: "صلوات، أذكار، قرآن، وحصن المسلم في تجربة هادئة تليق بخشوعك.",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "سكينة — رفيقك الروحي اليومي" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "سكينة | رفيقك الروحي اليومي",
    description: "صلوات، أذكار، قرآن، وحصن المسلم في تجربة هادئة.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  icons: { icon: "/logo.svg", shortcut: "/logo.svg" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#ece7de",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "سكينة",
  alternateName: "Sakina",
  url: siteUrl,
  inLanguage: "ar",
  description: "رفيقك الروحي اليومي للصلاة والأذكار والقرآن وحصن المسلم.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${amiri.variable}`}>
      <head>
        <link rel="preconnect" href="https://everyayah.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://everyayah.com" />
      </head>
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </body>
    </html>
  );
}
