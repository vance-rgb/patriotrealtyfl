import { site } from "../../lib/site-data";

export const metadata = {
  title: "Contact Form Help",
  robots: { index: false, follow: false }
};

export default function ContactErrorPage() {
  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">We could not send that request</p>
        <h1>Please try again or contact Vance directly.</h1>
        <p>
          Email <a href={`mailto:${site.email}`}>{site.email}</a> or call{" "}
          <a href={`tel:${site.phone.replace(/[^0-9]/g, "")}`}>{site.phone}</a>.
        </p>
        <a className="button primary" href="/#contact">Return to the contact form</a>
      </section>
    </main>
  );
}
