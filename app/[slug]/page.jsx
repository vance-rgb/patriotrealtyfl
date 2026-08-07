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
