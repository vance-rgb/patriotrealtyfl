import { areas, services, site } from "../lib/site-data";
import Link from "next/link";

export const metadata = {
  alternates: { canonical: "/" }
};

export default function HomePage() {
  return (
    <main id="main-content" tabIndex="-1">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Florida residential real estate</p>
          <h1>{site.name}</h1>
          <p>{site.tagline}</p>
          <div className="hero-actions">
            <a className="button primary" href="#contact">
              Request a consult
            </a>
            <Link className="button secondary" href="/areas">
              Explore areas
            </Link>
          </div>
        </div>
        <div className="hero-video">
          <iframe
            src="https://app.heygen.com/embeds/638095ae152740c094e97245f2ac9c7a"
            title="Approved Patriot Realty introduction"
            allow="encrypted-media; fullscreen"
            allowFullScreen
            loading="eager"
          />
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
            Approved Patriot Realty can help with the property search and negotiation.
            When you need separately licensed mortgage or title services, learn
            about our affiliated companies and choose the providers that fit you.
          </p>
        </div>
        <div className="hero-actions dark-actions">
          <Link className="button primary" href="/get-approved">Get approved for a home loan</Link>
          <Link className="button primary" href="/va-home-buying-florida">Florida VA buyers</Link>
          <Link className="button outline" href="/trusted-partners">Meet our partners</Link>
        </div>
      </section>

      <section className="contact-band" id="contact">
        <div>
          <p className="eyebrow">Start a conversation</p>
          <h2>Tell us what kind of move you are planning.</h2>
        </div>
        <form action="/api/contact" method="post">
          <input
            className="website-field"
            name="website"
            tabIndex="-1"
            autoComplete="off"
            aria-hidden="true"
          />
          <label>
            Name
            <input name="name" placeholder="Your name" maxLength="100" autoComplete="name" required />
          </label>
          <label>
            Email
            <input name="email" type="email" placeholder="you@example.com" maxLength="254" autoComplete="email" required />
          </label>
          <label>
            Phone <span className="optional">(optional)</span>
            <input name="phone" type="tel" placeholder="386-555-0123" maxLength="30" autoComplete="tel" />
          </label>
          <label>
            I am interested in
            <select name="interest" defaultValue="">
              <option value="" disabled>Select one</option>
              <option value="Buying a home">Buying a home</option>
              <option value="Selling a home">Selling a home</option>
              <option value="Relocating to Florida">Relocating to Florida</option>
              <option value="VA home buying">VA home buying</option>
              <option value="General question">General question</option>
            </select>
          </label>
          <label>
            What can we help with?
            <textarea name="message" placeholder="Tell us about your plans and timeline." maxLength="3000" required />
          </label>
          <button type="submit">Send request</button>
          <p className="form-note">Your information is used only to respond to this request.</p>
        </form>
      </section>
    </main>
  );
}
