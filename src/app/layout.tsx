import type { Metadata, Viewport } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const nunito = Nunito_Sans({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thesimplestcalorietracker.com"),
  title: {
    default: "The Simplest Calorie Tracker | Calorie Tracker for iPhone",
    template: "%s | The Simplest Calorie Tracker",
  },
  description:
    "A simple calorie tracker for iPhone. Log food fast, track calories and macros, save meals and recipes, scan barcodes, and understand your progress.",
  keywords: [
    "calorie tracker",
    "simple calorie tracker",
    "calorie counter app",
    "food tracker",
    "macro tracker",
    "calorie tracking app for iPhone",
  ],
  alternates: { canonical: "/" },
  applicationName: "The Simplest Calorie Tracker",
  appleWebApp: {
    title: "Simplest Calorie Tracker",
    capable: true,
    statusBarStyle: "default",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "The Simplest Calorie Tracker",
    title: "The calorie tracker that keeps it simple.",
    description:
      "Log food in seconds, see where you stand, and get on with your day.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "The Simplest Calorie Tracker for iPhone",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The calorie tracker that keeps it simple.",
    description:
      "Log food in seconds, see where you stand, and get on with your day.",
    images: ["/og.png"],
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
      <body>{children}</body>
    </html>
  );
}
