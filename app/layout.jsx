import "./styles.css";
import { site } from "../lib/site-data";

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Florida Real Estate for Buyers & Sellers | Patriot Realty FL",
    template: "%s | Patriot Realty FL"
  },
  description: site.tagline,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: site.name,
    title: "Florida Real Estate for Buyers & Sellers | Patriot Realty FL",
    description: site.tagline,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Patriot Realty FL" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Florida Real Estate for Buyers & Sellers | Patriot Realty FL",
    description: site.tagline,
    images: ["/opengraph-image"]
  }
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: site.name,
    url: site.url,
    email: site.email,
    telephone: site.phone,
    areaServed: { "@type": "State", name: "Florida" },
    description: site.tagline
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
        />
        <header className="site-header">
          <a className="brand" href="/" aria-label="Patriot Realty FL home">
            <span className="brand-mark">PR</span>
            <span>
              <strong>{site.name}</strong>
              <small>{site.domain}</small>
            </span>
          </a>
          <nav aria-label="Main navigation">
            {site.nav.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </header>
        {children}
        <footer className="site-footer">
          <div>
            <strong>{site.name}</strong>
            <p>{site.tagline}</p>
          </div>
          <div className="footer-contact">
            <a href={`mailto:${site.email}`}>{site.email}</a>
            {site.phone ? <a href={`tel:${site.phone.replace(/[^0-9]/g, "")}`}>{site.phone}</a> : null}
          </div>
        </footer>
      </body>
    </html>
  );
}
