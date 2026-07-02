export const metadata = {
  title: "Thank You"
};

export default function ThankYouPage() {
  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">Message received</p>
        <h1>Thank you.</h1>
        <p>We have your request and will follow up as soon as possible.</p>
        <a className="button primary" href="/">
          Back home
        </a>
      </section>
    </main>
  );
}
