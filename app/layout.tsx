import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ViewTransitions } from "next-view-transitions";
const inter = Inter({ subsets: ["latin"] });

import type { Viewport, Metadata } from "next";
import config from "@/app.config.json";
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL!), //required
  openGraph: {
    siteName: config.appName,
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow",
  },
  // alternates: {
  //   types: {
  //     'application/rss+xml': 'https://dminhvu.com/rss.xml',
  //   },
  // },
  applicationName: config.appName,
  appleWebApp: {
    title: config.appName,
    statusBarStyle: "default",
    capable: true,
  },
  // verification: {
  //   google: 'YOUR_DATA',
  //   yandex: ['YOUR_DATA'],
  //   other: {
  //     'msvalidate.01': ['YOUR_DATA'],
  //     'facebook-domain-verification': ['YOUR_DATA'],
  //   },
  // },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
      // {
      //   url: '/favicon-16x16.png',
      //   sizes: '16x16',
      //   type: 'image/png',
      // },
      // add favicon-32x32.png, favicon-96x96.png, android-chrome-192x192.png
    ],
    shortcut: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "57x57",
        type: "image/png",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      // add apple-icon-72x72.png, apple-icon-76x76.png, apple-icon-114x114.png, apple-icon-120x120.png, apple-icon-144x144.png, apple-icon-152x152.png, apple-icon-180x180.png
    ],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body
          style={{ scrollBehavior: "smooth" }}
          className={
            inter.className + "!overflow-x-hidden max-w-[100vw] mx-auto"
          }
        >
          {children}
          <Toaster richColors />
        </body>
      </html>
    </ViewTransitions>
  );
}
