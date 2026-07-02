import "./styles.css";
import { site } from "../lib/site-data";

export const metadata = {
  title: {
    default: "Patriot Realty FL",
    template: "%s | Patriot Realty FL"
  },
  description: site.tagline
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
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
            <a href={`tel:${site.phone.replace(/[^0-9]/g, "")}`}>{site.phone}</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
