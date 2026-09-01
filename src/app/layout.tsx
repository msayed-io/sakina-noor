import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "سكينة نور | رفيقك الروحي اليومي",
  description:
    "سكينة نور — رفيقك الروحي اليومي. صلوات، أذكار، قرآن، وحصن المسلم في تجربة هادئة تليق بخشوعك.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#ece7de",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        {/* Google Fonts — نفس روابط وأوزان الملف الأصلي بالحرف */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800;900&family=Amiri:wght@400;700&display=swap"
          rel="stylesheet"
        />
        {/* تسريع أول اتصال بمصدر التلاوات (التحسين الوحيد المطلوب — البند 6) */}
        <link rel="preconnect" href="https://everyayah.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://everyayah.com" />
      </head>
      <body>{children}</body>
    </html>
  );
}
