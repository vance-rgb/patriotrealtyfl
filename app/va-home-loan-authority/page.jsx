import { site } from "../../lib/site-data";

const videoId = "30frn8tigpM";
const calculatorUrl = "https://www.approvedfl.com/calculator";
const channelUrl = "https://www.youtube.com/channel/UCpBM8scFIPz4I9hNuELunnA";

export const metadata = {
  title: "VA Home Loan Authority & Payment Calculator",
  description: "Use an advanced property-specific mortgage payment planner and learn how to estimate VA, FHA, and conventional housing payments.",
  alternates: { canonical: "/va-home-loan-authority" },
  openGraph: {
    title: "VA Home Loan Authority | Patriot Realty FL",
    description: "Enter a property address, load available listing details, and explore estimated VA, FHA, and conventional payment scenarios.",
    url: "/va-home-loan-authority",
    images: [{ url: `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`, width: 1280, height: 720, alt: "Advanced Mortgage Calculator tutorial" }]
  }
};

export default function VaHomeLoanAuthorityPage() {
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "Advanced Mortgage Calculator Tutorial: Payments, Costs & Affordability",
    description: "A tutorial showing how the Approved Mortgage Payment Planner estimates payments and compares home financing scenarios.",
    thumbnailUrl: `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`,
    embedUrl: `https://www.youtube.com/embed/${videoId}`
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema).replace(/</g, "\\u003c") }}
      />

      <section className="authority-hero">
        <div>
          <p className="eyebrow">VA Home Loan Authority</p>
          <h1>Turn a listing into a payment estimate.</h1>
          <p>
            Enter a property address, load available property and listing-price
            details, and explore estimated VA, FHA, or conventional monthly
            payment scenarios in seconds.
          </p>
          <div className="hero-actions">
            <a className="button primary" href={calculatorUrl} target="_blank" rel="noopener noreferrer">Open the payment planner</a>
            <a className="button secondary" href={channelUrl} target="_blank" rel="noopener noreferrer">Visit the YouTube channel</a>
          </div>
        </div>

        <div className="authority-video">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0`}
            title="Advanced Mortgage Calculator Tutorial: Payments, Costs and Affordability"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Advanced property-specific planning</p>
          <h2>More useful than a blank loan calculator.</h2>
          <p>
            Start with the home itself, then adjust the financing assumptions to
            understand how different choices may affect the estimated payment.
          </p>
        </div>

        <div className="calculator-features">
          <article>
            <h3>Start with an address</h3>
            <p>Enter a property address and the planner loads available property details and advertised listing-price data.</p>
          </article>
          <article>
            <h3>Compare loan scenarios</h3>
            <p>Switch between VA, FHA, and conventional examples to see how the selected assumptions affect the estimate.</p>
          </article>
          <article>
            <h3>See a fuller payment picture</h3>
            <p>Review estimated principal, interest, property taxes, and homeowners insurance together.</p>
          </article>
          <article>
            <h3>Customize and share</h3>
            <p>Adjust the down payment and interest-rate assumptions, then save the scenario or send it to a mortgage professional.</p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="calculator-launch">
          <div>
            <p className="eyebrow">Try it with a property you found</p>
            <h2>Open the Approved Mortgage Payment Planner.</h2>
            <p>
              Payment results are estimates for educational and planning
              purposes. They are not a loan estimate, rate quote, approval, or
              commitment to lend. Property and listing data depend on source availability.
            </p>
          </div>
          <a className="button primary" href={calculatorUrl} target="_blank" rel="noopener noreferrer">Calculate a payment</a>
        </div>
      </section>

      <section className="section split">
        <div>
          <p className="eyebrow">Continue learning</p>
          <h2>VA Home Loan Authority on YouTube.</h2>
          <p>
            Watch practical videos about VA loans, mortgage documents,
            appraisals, entitlement, payments, and preparing for homeownership.
          </p>
        </div>
        <div className="hero-actions dark-actions">
          <a className="button primary" href={channelUrl} target="_blank" rel="noopener noreferrer">Watch VA Home Loan Authority</a>
          <a className="button outline" href="/get-approved">Get approved for a home loan</a>
        </div>
      </section>

      <section className="cta-strip">
        <div>
          <p className="eyebrow">Coordinate the next step</p>
          <h2>Use the estimate to start a better conversation.</h2>
        </div>
        <a className="button primary" href="https://startloanapp.com/" target="_blank" rel="noopener noreferrer">Start a loan application</a>
      </section>
    </main>
  );
}
