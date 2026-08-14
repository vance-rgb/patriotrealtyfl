import { notFound } from "next/navigation";
import Link from "next/link";
import { getPage, getPageSlugs, site } from "../../lib/site-data";

export function generateStaticParams() {
  return getPageSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = getPage(slug);

  if (!page) {
    return {};
  }

  return {
    title: page.metaTitle || page.title,
    description: page.intro,
    alternates: { canonical: `/${slug}` },
    openGraph: {
      title: `${page.metaTitle || page.title} | Approved Patriot Realty`,
      description: page.intro,
      url: `/${slug}`,
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: page.title }]
    },
    twitter: {
      card: "summary_large_image",
      title: `${page.metaTitle || page.title} | Approved Patriot Realty`,
      description: page.intro,
      images: ["/opengraph-image"]
    }
  };
}

export default async function DynamicPage({ params }) {
  const { slug } = await params;
  const page = getPage(slug);

  if (!page) {
    notFound();
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${site.url}/${slug}#webpage`,
        url: `${site.url}/${slug}`,
        name: page.metaTitle || page.title,
        description: page.intro,
        isPartOf: { "@id": `${site.url}/#website` }
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          { "@type": "ListItem", position: 2, name: page.title, item: `${site.url}/${slug}` }
        ]
      },
      ...(page.faqs?.length
        ? [
            {
              "@type": "FAQPage",
              mainEntity: page.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: { "@type": "Answer", text: faq.answer }
              }))
            }
          ]
        : [])
    ]
  };

  const heroHighlights = page.heroHighlights || [
    "Florida market guidance",
    "Clear transaction planning",
    "Direct professional support"
  ];

  return (
    <main id="main-content" className={`landing-page landing-page-${slug}`} tabIndex="-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />

      <section className="landing-hero">
        <div className="landing-hero-copy">
          <p className="eyebrow">★ {page.eyebrow} · Florida statewide</p>
          <h1>{page.title}</h1>
          {page.heroAccent ? <p className="hero-accent">{page.heroAccent}</p> : null}
          <p className="hero-intro">{page.intro}</p>
          <div className="hero-highlight-list" aria-label="Service highlights">
            {heroHighlights.map((item) => <span key={item}>{item}</span>)}
          </div>
          <div className="landing-hero-actions">
            <a className="button primary" href={page.cta?.href || `mailto:${site.email}`}>
              {page.cta?.label || "Contact Approved Patriot Realty"}
            </a>
            <a className="button light" href={`tel:${site.phone.replace(/[^0-9]/g, "")}`}>
              Call {site.phone}
            </a>
          </div>
        </div>

        <div className="landing-hero-visual">
          {page.videoEmbed ? (
            <div className="landing-video-frame">
              <div className="video-status"><span /> Featured video guide</div>
              <iframe
                src={page.videoEmbed.src}
                title={page.videoEmbed.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                loading="lazy"
              />
            </div>
          ) : (
            <div className="landing-signal-card">
              <p className="eyebrow">Approved Patriot Realty</p>
              <h2>A clearer Florida real estate plan starts here.</h2>
              <p>Use this guide to prepare your questions, compare options, and make the next conversation more productive.</p>
              <div className="signal-lines" aria-hidden="true"><span /><span /><span /></div>
            </div>
          )}
        </div>
      </section>

      <section className="landing-trust-strip" aria-label="Approved Patriot Realty service standards">
        <div><strong>Florida</strong><span>Statewide guidance</span></div>
        <div><strong>Direct</strong><span>Professional support</span></div>
        <div><strong>Clear</strong><span>Transaction planning</span></div>
        <div><strong>Equal</strong><span>Professional service</span></div>
      </section>

      {page.videoEmbed ? (
        <section className="section landing-video-summary" aria-label="Video guide summary">
          <div className="video-copy">
            <p className="eyebrow">Watch, then plan</p>
            <h2>{page.videoEmbed.title}</h2>
            <p>The written guide below expands the video with practical checkpoints, related resources, and a clear next action.</p>
          </div>
          <div className="video-summary-card">
            <strong>Video + written guide</strong>
            <span>One topic, coordinated across YouTube and the website.</span>
          </div>
        </section>
      ) : null}

      {page.featuredVideo ? (
        <section className="section featured-video-section">
          <div className="video-copy">
            <p className="eyebrow">{page.featuredVideo.eyebrow}</p>
            <h2>{page.featuredVideo.heading}</h2>
            <p>{page.featuredVideo.body}</p>
          </div>
          <div className="feature-video-wrap">
            <iframe
              src={page.featuredVideo.src}
              title={page.featuredVideo.title}
              allow="encrypted-media; fullscreen"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </section>
      ) : null}

      <section className="section landing-content">
        <div className="section-heading landing-section-heading">
          <p className="eyebrow">Your step-by-step guide</p>
          <h2>Make the Florida real estate process easier to understand.</h2>
          <p>Start with the fundamentals, then use the related links and consultation option for your property, market, and timeline.</p>
        </div>
        <div className="detail-list">
          {page.sections.map((section) => (
            <article key={section.heading}>
              {section.kicker ? <p className="eyebrow">{section.kicker}</p> : null}
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
              {section.links?.length ? (
                <div className="text-links">
                  {section.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                    >
                      {link.label} →
                    </Link>
                  ))}
                </div>
              ) : null}
              {section.note ? <small className="disclosure">{section.note}</small> : null}
            </article>
          ))}
        </div>
      </section>

      {page.faqs?.length ? (
        <section className="section landing-faq" aria-labelledby={`${slug}-faq-heading`}>
          <div className="section-heading">
            <p className="eyebrow">Florida real estate questions</p>
            <h2 id={`${slug}-faq-heading`}>Frequently asked questions</h2>
          </div>
          <div className="detail-list">
            {page.faqs.map((faq) => (
              <article key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {page.notice ? (
        <section className="section landing-notice" aria-label="Information and fair housing notice">
          <div className="section-heading">
            <p className="eyebrow">Information and fair housing notice</p>
            <p>{page.notice}</p>
          </div>
        </section>
      ) : null}

      <section className="cta-strip">
        <div>
          <p className="eyebrow">Ready when you are</p>
          <h2>{page.cta?.heading || "Make your next step clearer."}</h2>
        </div>
        <a className="button primary" href={page.cta?.href || `mailto:${site.email}`}>
          {page.cta?.label || "Contact Approved Patriot Realty"}
        </a>
      </section>
    </main>
  );
}
