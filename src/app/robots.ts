import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://thesimplestcalorietracker.com/sitemap.xml",
    host: "https://thesimplestcalorietracker.com",
  };
}
