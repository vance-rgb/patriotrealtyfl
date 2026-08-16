import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Thank You",
  robots: { index: false, follow: false }
};

export default function ThankYouPage() {
  return (
    <>
      <Script id="google-ads-lead-conversion" strategy="afterInteractive">
        {`gtag('event', 'conversion', {
  'send_to': 'AW-18389645626/7blBCJjxzeEcELry7sBE',
  'value': 1.0,
  'currency': 'USD'
});`}
      </Script>
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
    </>
  );
}
