export const metadata = {
  title: "VA Home Loan Authority — The Patriot Advantage",
  description: "A Florida VA home-buying guide connecting Veterans with VA-experienced real estate, mortgage, and title professionals.",
  alternates: { canonical: "/va-home-loan-authority" },
  openGraph: {
    title: "The Patriot Advantage VA Home-Buying Guide | Approved Patriot Realty",
    description: "Learn why VA-experienced professionals matter from the home search through closing.",
    url: "/va-home-loan-authority"
  }
};

export default function VaHomeLoanAuthorityPage() {
  return (
    <main>
      <section className="authority-hero">
        <div>
          <p className="eyebrow">VA Home Loan Authority</p>
          <h1>VA Home-Buying Guide: The Patriot Advantage.</h1>
          <p>Veterans deserve a team that understands VA-backed purchases. Learn how VA-experienced real estate, mortgage, and title professionals can help coordinate your Florida home purchase from search through closing.</p>
          <div className="hero-actions">
            <Link className="button primary" href="/va-home-buying-florida">Work with a VA-experienced Realtor</Link>
            <Link className="button secondary" href="/get-approved">Get approved for a home loan</Link>
          </div>
        </div>
        <div className="authority-video">
          <iframe src="https://app.heygen.com/embeds/a9c22cb2bb464b958bbcfc9aa03f60f7" title="VA Home-Buying Guide: The Patriot Advantage" allow="encrypted-media; fullscreen" allowFullScreen loading="lazy" />
        </div>
      </section>
      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">The Patriot Advantage</p>
          <h2>VA knowledge across the entire transaction.</h2>
          <p>A strong VA purchase depends on communication among your Realtor, mortgage professional, inspectors, appraiser, and title team.</p>
        </div>
        <div className="calculator-features">
          <article><h3>VA-aware home search</h3><p>Evaluate condition, insurance, association rules, and potential property concerns before writing an offer.</p></article>
          <article><h3>Stronger offer planning</h3><p>Coordinate financing strength, contract timelines, appraisal considerations, and seller expectations.</p></article>
          <article><h3>Experienced lending support</h3><p>Work with a licensed mortgage professional who can address VA eligibility, entitlement, and underwriting.</p></article>
          <article><h3>Coordinated closing</h3><p>Keep lending, appraisal, title, settlement, and contract milestones moving together.</p></article>
        </div>
      </section>
      <section className="section split">
        <div><p className="eyebrow">Plan before you tour</p><h2>Estimate the payment on a home you found.</h2><p>Use the separate property-specific calculator to explore estimated VA, FHA, and conventional payment scenarios.</p></div>
        <div className="hero-actions dark-actions"><Link className="button primary" href="/mortgage-calculator">Open the mortgage calculator</Link><Link className="button outline" href="/va-home-loan-authority-youtube">Visit the YouTube learning center</Link></div>
      </section>
      <section className="cta-strip">
        <div><p className="eyebrow">Your Veteran-focused team</p><h2>Start your Florida VA home-buying plan.</h2></div>
        <a className="button primary" href="mailto:vance@patriotrealtyfl.com?subject=VA%20home-buying%20help">Connect with Approved Patriot Realty</a>
      </section>
    </main>
  );
}
import Link from "next/link";
