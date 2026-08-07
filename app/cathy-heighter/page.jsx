import { site } from "../../lib/site-data";

const videoId = "JJVJZCoocmE";

export const metadata = {
  title: "Cathy Heighter | Florida Real Estate Professional",
  description: "Meet Cathy Heighter, a licensed real estate professional with Patriot Realty FL whose leadership is grounded in service, advocacy, and resilience.",
  alternates: { canonical: "/cathy-heighter" },
  openGraph: {
    title: "Meet Cathy Heighter | Patriot Realty FL",
    description: "Service, leadership, advocacy, and thoughtful Florida real estate guidance.",
    url: "/cathy-heighter",
    type: "profile",
    images: [{ url: `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`, width: 1280, height: 720, alt: "Cathy Heighter at TEDxLake Mary" }]
  }
};

export default function CathyHeighterPage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Cathy Heighter",
    jobTitle: "Licensed real estate professional",
    sameAs: ["https://www.facebook.com/CathyHeighter"],
    worksFor: {
      "@type": "RealEstateAgent",
      name: site.name,
      url: site.url
    },
    subjectOf: {
      "@type": "VideoObject",
      name: "Choosing Service Over Grief Leads to Unexpected Leadership & Legacy",
      description: "Cathy Heighter's TEDxLake Mary talk about service, leadership, advocacy, resilience, and legacy.",
      thumbnailUrl: `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`,
      embedUrl: `https://www.youtube.com/embed/${videoId}`
    }
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema).replace(/</g, "\\u003c") }}
      />

      <section className="agent-hero">
        <div>
          <p className="eyebrow">Patriot Realty FL</p>
          <h1>Meet Cathy Heighter.</h1>
          <p>
            Cathy is a licensed real estate professional whose approach is
            shaped by service, leadership, advocacy, and a deep commitment to
            helping people move forward.
          </p>
          <div className="hero-actions">
            <a className="button primary" href={`mailto:${site.email}?subject=I%20would%20like%20to%20work%20with%20Cathy%20Heighter`}>
              Work with Cathy
            </a>
            <a className="button secondary" href="/buy">Explore the buyer process</a>
          </div>
        </div>

        <div className="agent-video">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0`}
            title="Choosing Service Over Grief Leads to Unexpected Leadership and Legacy — Cathy Heighter at TEDxLake Mary"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </section>

      <section className="section">
        <div className="agent-intro">
          <p className="eyebrow">Service that shapes leadership</p>
          <h2>A personal story of resilience, advocacy, and legacy.</h2>
          <p>
            In her TEDxLake Mary talk, Cathy shares how the loss of her son in
            war became a catalyst for unexpected leadership, advocacy, and
            service. Her story reflects the empathy, perseverance, and sense of
            responsibility she brings to the people she serves.
          </p>
        </div>
      </section>

      <section className="section split">
        <div>
          <p className="eyebrow">Real estate guidance</p>
          <h2>Support for your next Florida move.</h2>
          <p>
            Whether you are buying, selling, or relocating, Cathy and Patriot
            Realty FL can help you approach the next step with a practical plan
            and steady communication.
          </p>
        </div>
        <div className="card">
          <h3>Connect with Cathy</h3>
          <p>Contact Patriot Realty FL and let us know you would like to work with Cathy Heighter.</p>
          <div className="text-links">
            <a href={`mailto:${site.email}?subject=Connect%20me%20with%20Cathy%20Heighter`}>{site.email} →</a>
            <a href={`tel:${site.phone.replace(/[^0-9]/g, "")}`}>{site.phone} →</a>
            <a href="https://www.facebook.com/CathyHeighter" target="_blank" rel="noopener noreferrer">Cathy on Facebook →</a>
          </div>
        </div>
      </section>

      <section className="cta-strip">
        <div>
          <p className="eyebrow">Ready when you are</p>
          <h2>Start a conversation with Cathy.</h2>
        </div>
        <a className="button primary" href={`mailto:${site.email}?subject=I%20would%20like%20to%20work%20with%20Cathy%20Heighter`}>
          Contact Patriot Realty FL
        </a>
      </section>
    </main>
  );
}
