import { getPageSlugs, site } from "../lib/site-data";

export default function sitemap() {
  const now = new Date();

  return [
    { url: site.url, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/get-approved`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    ...getPageSlugs().map((slug) => ({
      url: `${site.url}/${slug}`,
      lastModified: now,
      changeFrequency: slug === "areas" ? "weekly" : "monthly",
      priority: ["buy", "sell", "va-home-buying-florida"].includes(slug) ? 0.9 : 0.8
    }))
  ];
}
