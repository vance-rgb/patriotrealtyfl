import { site } from "../../lib/site-data";

const recruitingSubject = "I am interested in joining Approved Patriot Realty";

export const metadata = {
  title: "100% Commission Real Estate Careers",
  description: "Experienced Florida real estate agents: keep 100% of your commission with a $500 flat broker fee, no floor time, and no company-provided leads.",
  alternates: { canonical: "/join-our-team" },
  openGraph: {
    title: "We Are Hiring Experienced Florida Realtors | Approved Patriot Realty",
    description: "Keep 100% of your commission. Pay a $500 flat broker fee. No floor time and no company-provided leads.",
    url: "/join-our-team",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Join Approved Patriot Realty" }]
  }
};

export default function JoinOurTeamPage() {
  const emailHref = `mailto:${site.email}?subject=${encodeURIComponent(recruitingSubject)}`;

  return (
    <main>
      <section className="recruit-hero">
        <div>
          <p className="eyebrow">We are hiring</p>
          <h1>Keep the commission you earn.</h1>
          <p>
            Approved Patriot Realty is looking for experienced Florida real estate
            professionals who know how to build relationships, generate
            business, and serve clients independently.
          </p>
          <div className="hero-actions">
            <a className="button primary" href={emailHref}>Start a conversation</a>
            <a className="button secondary" href={`tel:${site.phone.replace(/[^0-9]/g, "")}`}>Call {site.phone}</a>
          </div>
        </div>

        <aside className="commission-card">
          <span className="commission-number">100%</span>
          <span className="commission-label">of your earned commission</span>
          <p className="fee-line"><strong>$500</strong><br />flat broker fee per closed transaction</p>
          <p>You earned it. Keep the rest.</p>
        </aside>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">A straightforward model</p>
          <h2>Built for experienced, self-generating agents.</h2>
        </div>
        <div className="recruit-benefits">
          <article>
            <h3>100% commission</h3>
            <p>Keep your earned commission after the flat broker fee described in your written agreement.</p>
          </article>
          <article>
            <h3>No floor time</h3>
            <p>Spend your time building relationships, serving clients, and moving transactions forward.</p>
          </article>
          <article>
            <h3>No company leads</h3>
            <p>This opportunity is designed for agents who generate and manage their own business.</p>
          </article>
        </div>
      </section>

      <section className="section recruit-fit">
        <div>
          <p className="eyebrow">Who this is for</p>
          <h2>Experience, independence, and client service.</h2>
          <p>
            This is a strong fit for established agents who want a simple
            commission structure and the freedom to focus on their own clients
            and production.
          </p>
        </div>
        <ul className="recruit-checklist">
          <li>Experienced Florida real estate professionals</li>
          <li>Active, appropriate Florida real estate licensure</li>
          <li>A self-generated book of business or prospecting plan</li>
          <li>Professional communication and transaction follow-through</li>
          <li>A client-first approach to representation</li>
        </ul>
      </section>

      <section className="cta-strip">
        <div>
          <p className="eyebrow">Come join our team</p>
          <h2>Let’s talk about your next move.</h2>
          <p className="rate-disclaimer">
            Commission arrangements, fees, eligibility, affiliation, and other
            terms are subject to the final written independent-contractor and
            brokerage agreements.
          </p>
        </div>
        <a className="button primary" href={emailHref}>Ask about joining</a>
      </section>
    </main>
  );
}
