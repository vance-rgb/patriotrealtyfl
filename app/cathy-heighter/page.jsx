import { site } from "../../lib/site-data";

const videoId = "JJVJZCoocmE";
const cathyEmail = "cathy.rememberingvets@gmail.com";
const cathyPhone = "386-931-8323";

export const metadata = {
  title: "Cathy Heighter | Florida Real Estate Professional",
  description: "Meet Cathy Heighter, a Gold Star mother, motivational speaker, and experienced Florida real estate professional with deep VA home-buying knowledge.",
  alternates: { canonical: "/cathy-heighter" },
  openGraph: {
    title: "Meet Cathy Heighter | Patriot Realty FL",
  description: "Gold Star mother, motivational speaker, Veteran advocate, and experienced Florida real estate professional with deep VA home-buying knowledge.",
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
    jobTitle: "Real estate professional and motivational speaker",
    email: cathyEmail,
    telephone: cathyPhone,
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
            Cathy is a Gold Star mother, motivational speaker, Veteran advocate,
            and experienced Florida real estate professional. Her deep knowledge
            of VA home buying helps Veterans and military families approach a
            major move with informed, compassionate guidance.
          </p>
          <div className="hero-actions">
            <a className="button primary" href={`mailto:${cathyEmail}?subject=I%20would%20like%20to%20work%20with%20Cathy%20Heighter`}>
              Work with Cathy
            </a>
            <a className="button secondary" href="/buy">Explore the buyer process</a>
          </div>
        </div>

      </section>

      <section className="section gold-star-feature">
        <div className="agent-intro">
          <p className="eyebrow">Gold Star mother and motivational speaker</p>
          <h2>A personal story of resilience, advocacy, leadership, and legacy.</h2>
          <p>
            In her TEDxLake Mary talk, Cathy shares how the loss of her son in
            war became a catalyst for unexpected leadership, advocacy, and
            service. Her experience as a Gold Star mother and motivational
            speaker reflects the empathy, perseverance, and sense of
            responsibility she brings to the people she serves.
          </p>
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

      <section className="section featured-video-section">
        <div className="video-copy">
          <p className="eyebrow">VA home-buying expertise</p>
          <h2>Veterans deserve a Realtor who understands the VA process.</h2>
          <p>
            Cathy combines real estate experience, Veteran advocacy, and a
            personal understanding of military families. She helps VA buyers
            evaluate homes, prepare offers, anticipate property and appraisal
            considerations, and coordinate closely with the lending and title teams.
          </p>
          <div className="text-links">
            <a href={`mailto:${cathyEmail}?subject=I%20need%20a%20VA-experienced%20Realtor`}>Work with Cathy on a VA home purchase →</a>
            <a href="/va-home-buying-florida">Explore the Florida VA buyer process →</a>
          </div>
        </div>
        <div className="feature-video-wrap">
          <iframe
            src="https://app.heygen.com/embeds/a9c22cb2bb464b958bbcfc9aa03f60f7"
            title="Why Veterans should work with a VA-experienced Realtor"
            allow="encrypted-media; fullscreen"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </section>

      <section className="section split">
        <div>
          <p className="eyebrow">VA-aware real estate guidance</p>
          <h2>Specialized support for Veterans and Florida homebuyers.</h2>
          <p>
            Whether you are using a VA-backed loan, buying, selling, or
            relocating, Cathy combines real estate experience with an unusually
            personal understanding of military families. She and Patriot Realty
            FL can help you approach the next step with a practical plan and
            steady communication.
          </p>
        </div>
        <div className="card">
          <h3>Connect with Cathy</h3>
          <p>Contact Patriot Realty FL and let us know you would like to work with Cathy Heighter.</p>
          <div className="text-links">
            <a href={`mailto:${cathyEmail}?subject=I%20would%20like%20to%20work%20with%20Cathy%20Heighter`}>{cathyEmail} →</a>
            <a href={`tel:${cathyPhone.replace(/[^0-9]/g, "")}`}>{cathyPhone} →</a>
            <a href="https://www.facebook.com/CathyHeighter" target="_blank" rel="noopener noreferrer">Cathy on Facebook →</a>
          </div>
        </div>
      </section>

      <section className="cta-strip">
        <div>
          <p className="eyebrow">Ready when you are</p>
          <h2>Start a conversation with Cathy.</h2>
        </div>
        <a className="button primary" href={`mailto:${cathyEmail}?subject=I%20would%20like%20to%20work%20with%20Cathy%20Heighter`}>
          Contact Cathy
        </a>
      </section>
    </main>
  );
}
