import { Helmet } from "react-helmet-async"

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20">
      <Helmet>
        <title>Contact - Nomad Coffee Roasters</title>
        <meta
          name="description"
          content="Contact us at hello@nomadcoffee.example" />
      </Helmet>
      <h1 className="font-display text-3xl text-ink">Get in touch</h1>
      <p className="mt-6 text-ink/70">
        hello@nomadcoffee.example — we're usually slow to reply on weekends.
      </p>
    </main>
  );
}
