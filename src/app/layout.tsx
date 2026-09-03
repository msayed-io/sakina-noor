import type { Metadata, Viewport } from "next";
import "./globals.css";

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
    <html lang="ar" dir="rtl">
      <body>
        {/* Hero background preloads — media-scoped so each device class
            fetches ONLY its own photograph (never both). React 19 hoists
            these into <head> during SSR for the earliest possible fetch
            start → sub-second LCP, zero FOUC. */}
        <link
          rel="preload"
          as="image"
          href="https://res.cloudinary.com/dubcctda0/image/upload/v1788448109/MEITU_%D9%A2%D9%A0%D9%A2%D9%A6%D9%A0%D9%A9%D9%A0%D9%A3_%D9%A1%D9%A8%D9%A0%D9%A1%D9%A5%D9%A6%D9%A9%D9%A7%D9%A0_gyl6yw.jpg"
          media="(max-width: 768px)"
        />
        <link
          rel="preload"
          as="image"
          href="https://res.cloudinary.com/dubcctda0/image/upload/v1788448076/MEITU_%D9%A2%D9%A0%D9%A2%D9%A6%D9%A0%D9%A9%D9%A0%D9%A3_%D9%A1%D9%A7%D9%A4%D9%A9%D9%A5%D9%A8%D9%A2%D9%A6%D9%A9_emndof.jpg"
          media="(min-width: 769px)"
        />
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </body>
    </html>
  );
}
