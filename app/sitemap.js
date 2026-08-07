import { getPageSlugs, site } from "../lib/site-data";

export default function sitemap() {
  const now = new Date();

  return [
    { url: site.url, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/get-approved`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/va-home-loan-authority`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${site.url}/cathy-heighter`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/join-our-team`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    ...getPageSlugs().map((slug) => ({
      url: `${site.url}/${slug}`,
      lastModified: now,
      changeFrequency: slug === "areas" ? "weekly" : "monthly",
      priority: ["buy", "sell", "va-home-buying-florida"].includes(slug) ? 0.9 : 0.8
    }))
  ];
}
