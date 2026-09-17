import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://thesimplestcalorietracker.com",
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://thesimplestcalorietracker.com/privacy-policy",
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: "https://thesimplestcalorietracker.com/support",
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];
}
