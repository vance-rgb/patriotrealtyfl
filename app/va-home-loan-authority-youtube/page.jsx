const videoId = "30frn8tigpM";
const channelUrl = "https://www.youtube.com/channel/UCpBM8scFIPz4I9hNuELunnA";

export const metadata = {
  title: "VA Home Loan Authority YouTube Channel",
  description: "Watch practical VA home-loan education about payments, appraisals, entitlement, mortgage documents, and preparing for homeownership.",
  alternates: { canonical: "/va-home-loan-authority-youtube" },
  openGraph: {
    title: "VA Home Loan Authority on YouTube | Patriot Realty FL",
    description: "Practical VA mortgage education for veterans and military families.",
    url: "/va-home-loan-authority-youtube",
    images: [{ url: `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`, width: 1280, height: 720, alt: "VA Home Loan Authority video" }]
  }
};

export default function VaHomeLoanAuthorityYoutubePage() {
  return (
    <main>
      <section className="authority-hero">
        <div>
          <p className="eyebrow">Video learning center</p>
          <h1>VA Home Loan Authority on YouTube.</h1>
          <p>Watch practical videos about VA loans, mortgage documents, appraisals, entitlement, monthly payments, and preparing for homeownership.</p>
          <div className="hero-actions">
            <a className="button primary" href={channelUrl} target="_blank" rel="noopener noreferrer">Visit the YouTube channel</a>
            <a className="button secondary" href="/va-home-loan-authority">Read The Patriot Advantage guide</a>
          </div>
        </div>
        <div className="authority-video">
          <iframe src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0`} title="VA Home Loan Authority featured video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen loading="lazy" />
        </div>
      </section>
      <section className="section">
        <div className="section-heading"><p className="eyebrow">Learn before you apply</p><h2>Clear answers for the VA home-buying journey.</h2><p>Use the channel to build your knowledge, then connect with properly licensed professionals for advice about your specific real estate and mortgage situation.</p></div>
        <div className="calculator-features">
          <article><h3>Understand VA financing</h3><p>Learn the language, documents, eligibility concepts, and major milestones behind a VA-backed purchase.</p></article>
          <article><h3>Plan your payment</h3><p>See how purchase price, rate assumptions, taxes, insurance, and other costs can shape an estimated payment.</p></article>
          <article><h3>Prepare for appraisal</h3><p>Understand the role of the VA appraisal and why property condition can matter during a purchase.</p></article>
          <article><h3>Build the right team</h3><p>Learn why VA-experienced real estate, mortgage, and title professionals can help transactions stay coordinated.</p></article>
        </div>
      </section>
      <section className="cta-strip">
        <div><p className="eyebrow">Put the education to work</p><h2>Explore a property payment or begin your application.</h2></div>
        <div className="hero-actions"><a className="button secondary" href="/mortgage-calculator">Mortgage calculator</a><a className="button primary" href="https://startloanapp.com/" target="_blank" rel="noopener noreferrer">Start a loan application</a></div>
      </section>
    </main>
  );
}
