import { site } from "../../lib/site-data";

const applicationUrl = "https://startloanapp.com/";

export const metadata = {
  title: "Get Approved for a Home Loan",
  description: "Start your Florida mortgage preapproval, understand the home-loan process, and prepare to shop with a clearer price range.",
  alternates: { canonical: "/get-approved" },
  openGraph: {
    title: "Get Approved for a Home Loan | Patriot Realty FL",
    description: "Take the first financing step before beginning your Florida home search.",
    url: "/get-approved",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Get approved for a Florida home loan" }]
  }
};

export default function GetApprovedPage() {
  return (
    <main>
      <section className="approval-hero">
        <div>
          <p className="eyebrow">Prepare to buy with confidence</p>
          <h1>Get approved for your home loan.</h1>
          <p>
            A mortgage preapproval can help you understand your price range,
            strengthen your offer, and begin the Florida home search with a
            clearer plan.
          </p>
          <div className="hero-actions">
            <a className="button primary" href={applicationUrl} target="_blank" rel="noopener noreferrer">
              Start your loan application
            </a>
            <a className="button secondary" href="/buy">See the buyer process</a>
          </div>
        </div>
        <aside className="approval-card">
          <p className="eyebrow">Secure online application</p>
          <h2>Ready to take the first step?</h2>
          <p>
            Complete the secure application so a licensed mortgage professional
            can review your goals and available loan options.
          </p>
          <a className="button primary" href={applicationUrl} target="_blank" rel="noopener noreferrer">
            Apply at StartLoanApp.com
          </a>
          <p className="rate-disclaimer">
            Mortgage services are provided by Approved Mortgage Source, LLC,
            NMLS #836792, a separately licensed company.
          </p>
        </aside>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">What to expect</p>
          <h2>A clearer path from application to home search.</h2>
        </div>
        <div className="detail-list approval-steps">
          <article>
            <h2>Complete the secure application</h2>
            <p>Share your income, assets, housing history, and home-buying goals through the secure application portal.</p>
          </article>
          <article>
            <h2>Review your financing options</h2>
            <p>A licensed mortgage professional can review eligibility, documentation, estimated payment, and available loan programs with you.</p>
          </article>
          <article>
            <h2>Shop with a practical target</h2>
            <p>Coordinate your financing plan with Patriot Realty FL so the property search and offer strategy match your approved range.</p>
          </article>
        </div>
      </section>

      <section className="section split">
        <div>
          <p className="eyebrow">Property-specific planning</p>
          <h2>Estimate a payment for a home you found.</h2>
          <p>
            Use the Approved Mortgage Payment Planner to enter an address,
            load available listing details, compare loan scenarios, and review
            an estimated monthly housing payment.
          </p>
        </div>
        <div className="hero-actions dark-actions">
          <a className="button primary" href="/va-home-loan-authority">Open the VA Home Loan Authority</a>
          <a className="button outline" href="https://www.approvedfl.com/calculator" target="_blank" rel="noopener noreferrer">Launch payment planner</a>
        </div>
      </section>

      <section className="section split">
        <div>
          <p className="eyebrow">Mortgage market snapshot</p>
          <h2>See current national mortgage-rate indices.</h2>
          <p>
            This market data is informational only. It is not a rate quote,
            commitment to lend, or guarantee of available terms.
          </p>
        </div>
        <div className="rate-widget-shell" id="mortgage-market-widget">
          <iframe
            src="https://www2.optimalblue.com/OBMMI/widgetConfig.php?actbg=10233f&inactbg=2464a8&hoverBG=b73535&rate=2464a8&footer=10233f"
            title="Optimal Blue mortgage market indices"
            width="100%"
            height="462"
            frameBorder="0"
            loading="lazy"
          />
        </div>
      </section>

      <section className="cta-strip">
        <div>
          <p className="eyebrow">Start when you are ready</p>
          <h2>Take the first step toward your Florida home.</h2>
        </div>
        <a className="button primary" href={applicationUrl} target="_blank" rel="noopener noreferrer">
          Start loan application
        </a>
      </section>
    </main>
  );
}
