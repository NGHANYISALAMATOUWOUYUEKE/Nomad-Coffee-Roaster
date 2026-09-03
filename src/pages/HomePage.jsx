import { Helmet } from "react-helmet-async";

export default function HomePage() {
  return (
    <main>
      <Helmet>
        <title>Nomad coffee Roasters - Small -batch coffee roasting</title>
        <meta
          name="description"
          content="Nomad roast coffee a few kilos at a time,sourcing directly where we can. wholesale, subscriptions, and barista training." />
      </Helmet>
      <section className="bg-cream/60">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h1 className="max-w-xl font-display text-4xl leading-tight text-ink sm:text-5xl">
            Coffee roasted a few kilos at a time.
          </h1>
          <p className="mt-6 max-w-md text-ink/70">
            We roast in small batches, source directly where we can, and try
            not to overthink the rest.
          </p>
        </div>
      </section>
    </main>
  );
}
