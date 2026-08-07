export const metadata = {
  title: "Thank You",
  robots: { index: false, follow: false }
};

export default function ThankYouPage() {
  return (
    <main id="main-content" tabIndex="-1">
      <section className="page-hero">
        <p className="eyebrow">Message received</p>
        <h1>Thank you.</h1>
        <p>We have your request and will follow up as soon as possible.</p>
        <Link className="button primary" href="/">
          Back home
        </Link>
      </section>
    </main>
  );
}
import Link from "next/link";
