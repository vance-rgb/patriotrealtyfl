import { areas, services, site, stats } from "../lib/site-data";

export const metadata = {
  alternates: { canonical: "/" }
};

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Florida residential real estate</p>
          <h1>{site.name}</h1>
          <p>{site.tagline}</p>
          <div className="hero-actions">
            <a className="button primary" href="#contact">
              Request a consult
            </a>
            <a className="button secondary" href="/areas">
              Explore areas
            </a>
          </div>
        </div>
        <div className="market-panel" aria-label="Market highlights">
          {stats.map((stat) => (
            <div key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">How we help</p>
          <h2>Focused guidance for your next Florida move.</h2>
        </div>
        <div className="card-grid">
          {services.map((service) => (
            <article className="card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section split">
        <div>
          <p className="eyebrow">Featured areas</p>
          <h2>Compare Florida markets before narrowing your search.</h2>
          <p>
            Start with lifestyle, travel, ownership costs, property types, and
            the pace of each market—not just a list of homes.
          </p>
        </div>
        <div className="area-list">
          {areas.map((area) => (
            <span key={area}>{area}</span>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">A coordinated transaction</p>
          <h2>Real estate, financing, and closing support.</h2>
          <p>
            Patriot Realty FL can help with the property search and negotiation.
            When you need separately licensed mortgage or title services, learn
            about our affiliated companies and choose the providers that fit you.
          </p>
        </div>
        <div className="hero-actions dark-actions">
          <a className="button primary" href="/va-home-buying-florida">Florida VA buyers</a>
          <a className="button outline" href="/trusted-partners">Meet our partners</a>
        </div>
      </section>

      <section className="contact-band" id="contact">
        <div>
          <p className="eyebrow">Start a conversation</p>
          <h2>Tell us what kind of move you are planning.</h2>
        </div>
        <form action="/api/contact" method="post">
          <label>
            Name
            <input name="name" placeholder="Your name" required />
          </label>
          <label>
            Email
            <input name="email" type="email" placeholder="you@example.com" required />
          </label>
          <label>
            What can we help with?
            <textarea name="message" placeholder="Buying, selling, relocating, or comparing areas?" required />
          </label>
          <button type="submit">Send request</button>
        </form>
      </section>
    </main>
  );
}
