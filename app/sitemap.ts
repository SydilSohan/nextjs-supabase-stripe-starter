import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const defaultPages = [
    {
      url: process.env.NEXT_PUBLIC_SITE_URL!,
      lastModified: new Date(),
      changeFrequency: "daily" as any,
      priority: 1,
    },

    // other pages
  ];

  const sitemap = [...defaultPages];

  return sitemap;
}
