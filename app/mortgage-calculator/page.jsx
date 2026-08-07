const videoId = "30frn8tigpM";
const calculatorUrl = "https://www.approvedfl.com/calculator";

export const metadata = {
  title: "Advanced Mortgage Payment Calculator",
  description: "Start with a property address and explore estimated VA, FHA, and conventional monthly mortgage payment scenarios.",
  alternates: { canonical: "/mortgage-calculator" },
  openGraph: {
    title: "Advanced Mortgage Payment Calculator | Approved Patriot Realty",
    description: "Load available property and listing-price details, then explore estimated home payment scenarios.",
    url: "/mortgage-calculator",
    images: [{ url: `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`, width: 1280, height: 720, alt: "Advanced mortgage calculator tutorial" }]
  }
};

export default function MortgageCalculatorPage() {
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "Advanced Mortgage Calculator Tutorial: Payments, Costs & Affordability",
    description: "A tutorial showing how the Approved Mortgage Payment Planner estimates payments and compares financing scenarios.",
    thumbnailUrl: `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`,
    embedUrl: `https://www.youtube.com/embed/${videoId}`
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema).replace(/</g, "\\u003c") }} />
      <section className="authority-hero">
        <div>
          <p className="eyebrow">Advanced mortgage calculator</p>
          <h1>Turn a home listing into a payment estimate.</h1>
          <p>Enter a property address, load available property and listing-price details, and explore estimated VA, FHA, or conventional monthly payment scenarios.</p>
          <div className="hero-actions">
            <a className="button primary" href={calculatorUrl} target="_blank" rel="noopener noreferrer">Open the payment planner</a>
            <Link className="button secondary" href="/va-home-loan-authority-youtube">Watch the calculator tutorial</Link>
          </div>
        </div>
        <div className="authority-video">
          <iframe src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0`} title="Advanced Mortgage Calculator Tutorial" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen loading="lazy" />
        </div>
      </section>
      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Property-specific planning</p>
          <h2>More useful than a blank loan calculator.</h2>
          <p>Begin with the home itself, then adjust the financing assumptions to see how different choices may affect the estimated payment.</p>
        </div>
        <div className="calculator-features">
          <article><h3>Start with an address</h3><p>Load available property details and advertised listing-price data.</p></article>
          <article><h3>Compare loan scenarios</h3><p>Explore VA, FHA, and conventional examples using your selected assumptions.</p></article>
          <article><h3>See the fuller picture</h3><p>Review estimated principal, interest, property taxes, and homeowners insurance together.</p></article>
          <article><h3>Customize and share</h3><p>Adjust assumptions, save the scenario, or send it to a mortgage professional.</p></article>
        </div>
      </section>
      <section className="section">
        <div className="calculator-launch">
          <div>
            <p className="eyebrow">Try it with a property you found</p>
            <h2>Open the Approved Mortgage Payment Planner.</h2>
            <p>Results are estimates for educational and planning purposes. They are not a loan estimate, rate quote, approval, or commitment to lend. Property and listing data depend on source availability.</p>
          </div>
          <a className="button primary" href={calculatorUrl} target="_blank" rel="noopener noreferrer">Calculate a payment</a>
        </div>
      </section>
      <section className="cta-strip">
        <div><p className="eyebrow">Ready for the next step?</p><h2>Use the estimate to start a better conversation.</h2></div>
        <a className="button primary" href="https://startloanapp.com/" target="_blank" rel="noopener noreferrer">Start a loan application</a>
      </section>
    </main>
  );
}
import Link from "next/link";
