export const SITE_URL = "https://thesimplestcalorietracker.com";

export const APP_STORE_URL =
  "https://apps.apple.com/us/app/the-simplest-calorie-tracker/id6761067469";

// Keep this snapshot aligned with the public App Store listing whenever an
// app release or price change is published.
export const appStoreSnapshot = {
  rating: "4.9",
  ratingCount: 45,
  lastVerified: "September 17, 2026",
  testimonials: [
    {
      quote:
        "A very simple, no-nonsense calorie tracker with excellent features.",
      label: "App Store reviewer",
    },
    {
      quote: "No judgement or anything, just recording and tracking.",
      label: "App Store reviewer",
    },
    {
      quote: "Incredibly self-explanatory and easy to use.",
      label: "App Store reviewer",
    },
  ],
} as const;

export const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    featured: false,
    badge: null,
    detail: "Start with the essentials.",
    features: [
      "Calorie tracking",
      "Macro tracking",
      "USDA food search",
      "Manual food entries",
      "Custom recipes",
      "Limited saved foods and recipes",
      "Serving-size and gram-based tracking",
      "Progress insights and nutrition history",
      "Daily logging streaks",
      "Water tracking",
      "Custom calorie and macro goals",
      "Home and Lock Screen widgets",
      "iCloud backup",
      "No ads",
      "No sign-up required",
    ],
  },
  {
    name: "Premium Monthly",
    price: "$3.99",
    detail: "Per month, managed through Apple.",
    badge: null,
    features: [
      "Barcode scanning",
      "AI Meal Scanning",
      "Unlimited saved foods and recipes",
      "Custom app themes",
      "Extra Analytics for health, progress insights, and nutrition history",
    ],
    featured: false,
  },
  {
    name: "Premium Yearly",
    price: "$29.99",
    detail: "Per year, managed through Apple.",
    badge: "Save 37%",
    features: [
      "Barcode scanning",
      "AI Meal Scanning",
      "Unlimited saved foods and recipes",
      "Custom app themes",
      "Extra Analytics for health, progress insights, and nutrition history",
    ],
    featured: true,
  },
] as const;
