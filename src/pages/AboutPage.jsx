import { Helmet } from "react-helmet-async";
export default function AboutPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20">
      <Helmet>
        <title>About Us — Nomad Coffee Roasters</title>
        <meta
          name="description"
          content=" Nomad started as a table at a Saturday market and grew into a small roastery. Every batch is still roasted by hand and taste-tested before it ships." />
      </Helmet>
      <h1 className="font-display text-3xl text-ink">About us</h1>
      <p className="mt-6 text-ink/70">
        Nomad started as a table at a Saturday market and grew into a small
        roastery. We still roast every batch by hand and taste-test before
        anything ships.
      </p>
    </main>
  );
}
