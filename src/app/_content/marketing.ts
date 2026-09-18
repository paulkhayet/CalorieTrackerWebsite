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
      "Food search and manual entry",
      "Calories and macro tracking",
      "Daily goals and a clear Today view",
    ],
  },
  {
    name: "Premium Monthly",
    price: "$3.99",
    detail: "Per month, managed through Apple.",
    badge: null,
    features: [
      "Barcode scanning for packaged foods",
      "Advanced insights and health tracking",
      "Unlimited saved foods, recipes, and themes",
    ],
    featured: false,
  },
  {
    name: "Premium Yearly",
    price: "$29.99",
    detail: "Per year, managed through Apple.",
    badge: "Save 37%",
    features: [
      "Barcode scanning for packaged foods",
      "Advanced insights and health tracking",
      "Unlimited saved foods, recipes, and themes",
    ],
    featured: true,
  },
] as const;
