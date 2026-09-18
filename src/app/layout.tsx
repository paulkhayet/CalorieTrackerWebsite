import type { Metadata, Viewport } from "next";
import { Nunito_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { AppStoreAnalytics } from "./_components/app-store-analytics";
import "./globals.css";

const nunito = Nunito_Sans({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thesimplestcalorietracker.com"),
  title: {
    default:
      "The Simplest Calorie Tracker | Simple Calorie & Macro Tracker for iPhone",
    template: "%s | The Simplest Calorie Tracker",
  },
  description:
    "The official website for The Simplest Calorie Tracker, a calm calorie and macro tracker for iPhone. Log food fast, see your day clearly, and keep tracking simple.",
  keywords: [
    "calorie tracker",
    "simple calorie tracker",
    "calorie counter app",
    "food tracker",
    "macro tracker",
    "calorie tracking app for iPhone",
  ],
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/app-icon.png", type: "image/png", sizes: "512x512" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/app-icon.png",
  },
  applicationName: "The Simplest Calorie Tracker",
  appleWebApp: {
    title: "Simplest Calorie Tracker",
    capable: true,
    statusBarStyle: "default",
  },
  other: {
    "apple-itunes-app": "app-id=6761067469",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "The Simplest Calorie Tracker",
    title: "The Simplest Calorie Tracker for iPhone",
    description:
      "A calm calorie and macro tracker for iPhone. Log food, see your day clearly, and move on.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "The Simplest Calorie Tracker for iPhone — calorie and macro tracking without the clutter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Simplest Calorie Tracker for iPhone",
    description:
      "A calm calorie and macro tracker for iPhone. Log food, see your day clearly, and move on.",
    images: ["/opengraph-image"],
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
  themeColor: "#fff6ed",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={nunito.variable}>
      <body>
        {children}
        <Analytics />
        <AppStoreAnalytics />
      </body>
    </html>
  );
}
