import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const PILLARS = {
  wholesale: {
    title: "Wholesale - Nomad Coffee Roasters",
    meta: "We supply roasted beans to cafés and offices biweekly schedule",
    label: "Wholesale",
    body: "We supply roasted beans to cafés and offices on a weekly or biweekly schedule, with volume pricing past 20kg a month.",
  },
  subscription: {
    title: "Subscription - Nomad Coffee Roasters",
    meta: "We supply roasted beans to cafés and offices biweekly schedule",
    label: "Subscription",
    body: "A bag every two or four weeks, picked to match what you've liked before. Pause or cancel anytime.",
  },
  training: {
    title: "Barista training - Nomad Coffee Roasters",
    meta: "We supply roasted beans to cafés and offices biweekly schedule",
    label: "Barista training",
    body: "Half-day and full-day sessions on brewing, dialing in espresso, and running a consistent bar during a rush.",
  },
};



export default function ServicePage() {
  const { pillarId } = useParams()
  const current = PILLARS[pillarId || "wholesale"];

  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <Helmet>
        <title>{current.title}</title>
        <meta
          name="description"
          content={current.meta} />
      </Helmet>
      <h1 className="font-display text-3xl text-ink">What we offer</h1>

      <div className="mt-8 flex gap-2">
        {Object.entries(PILLARS).map(([key, pillar]) => (
          <Link
            key={key}
            to={`/service/${key}`}
            className={`rounded-full px-4 py-2 text-sm ${pillarId === key
              ? "bg-ink text-cream"
              : "bg-cream text-ink/70"
              }`}
          >
            {pillar.label}
          </Link>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="font-display text-xl text-ink">{current.label}</h2>
        <p className="mt-3 max-w-xl text-ink/70">{current.body}</p>
      </div>
    </main>
  );
}
