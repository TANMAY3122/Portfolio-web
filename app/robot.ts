import { MetadataRoute } from "next";

export default function robot(): MetadataRoute.Robots {
  const baseUrl = "https://nikks.tech";
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/contact", "/blog", "/blog/*"],
      disallow: [],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
