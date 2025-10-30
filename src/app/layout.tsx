import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Hieu Bui — Software Engineer",
    template: "%s | Hieu Bui",
  },
  description: "I craft modern mobile apps and full‑stack experiences focused on quality and performance.",
  keywords: [
    "Hieu Bui",
    "Software Engineer",
    "Android",
    "Kotlin",
    "Java",
    "Hilt",
    "Coroutines",
    "Flow",
    "MVVM",
    "Next.js",
    "TypeScript",
    "React",
  ],
  authors: [{ name: "Hieu Bui" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: "Hieu Bui — Software Engineer",
    description: "I craft modern mobile apps and full‑stack experiences focused on quality and performance.",
    siteName: "Hieu Bui",
    images: [
      {
        url: "/hieu-cc.jpg",
        width: 1200,
        height: 630,
        alt: "Hieu Bui",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hieu Bui — Software Engineer",
    description: "I craft modern mobile apps and full‑stack experiences focused on quality and performance.",
    images: ["/hieu-cc.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
