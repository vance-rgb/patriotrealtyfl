import { notFound } from "next/navigation";
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
      title: `${page.metaTitle || page.title} | Patriot Realty FL`,
      description: page.intro,
      url: `/${slug}`,
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: page.title }]
    },
    twitter: {
      card: "summary_large_image",
      title: `${page.metaTitle || page.title} | Patriot Realty FL`,
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

  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">{page.eyebrow}</p>
        <h1>{page.title}</h1>
        <p>{page.intro}</p>
      </section>

      {page.videoEmbed ? (
        <section className="section video-section" aria-label="Seller video">
          <div className="video-copy">
            <p className="eyebrow">A message for Florida sellers</p>
            <h2>Thinking about selling your home?</h2>
            <p>Watch this quick introduction, then reach out when you are ready to discuss pricing, preparation, and timing.</p>
          </div>
          <div className="facebook-video-wrap">
            <iframe
              src={page.videoEmbed.src}
              title={page.videoEmbed.title}
              width="476"
              height="476"
              scrolling="no"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
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

      <section className="section">
        <div className="detail-list">
          {page.sections.map((section) => (
            <article key={section.heading}>
              {section.kicker ? <p className="eyebrow">{section.kicker}</p> : null}
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
              {section.links?.length ? (
                <div className="text-links">
                  {section.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                    >
                      {link.label} →
                    </a>
                  ))}
                </div>
              ) : null}
              {section.note ? <small className="disclosure">{section.note}</small> : null}
            </article>
          ))}
        </div>
      </section>

      <section className="cta-strip">
        <div>
          <p className="eyebrow">Ready when you are</p>
          <h2>Make your next step clearer.</h2>
        </div>
        <a className="button primary" href={`mailto:${site.email}`}>
          Contact Patriot Realty FL
        </a>
      </section>
    </main>
  );
}
