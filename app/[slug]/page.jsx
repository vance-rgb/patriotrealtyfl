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
    title: page.title,
    description: page.intro
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
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
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
