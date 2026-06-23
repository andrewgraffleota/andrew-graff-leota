import Link from "next/link";

const techStack = [
  "React",
  "TypeScript",
  "Python Azure Functions",
  "Stripe",
  "Brevo",
  "Playwright",
  "Tailwind CSS",
];

export default function EasyReadPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 text-white">
      <section className="mb-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Case Study
        </p>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Easy Read — Accessible Document SaaS
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-300">
          A SaaS product that converts documents into accessible Easy Read
          format. My work focused on React, TypeScript, backend fixes,
          Stripe payments, Brevo email, Playwright testing, and accessibility
          improvements.
        </p>
      </section>

      <div className="space-y-8">
        <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="mb-3 text-2xl font-bold text-cyan-400">What it was</h2>
          <p className="leading-8 text-zinc-300">
            An accessibility-first SaaS that turns documents into an Easy Read
            format, with UI and product behavior designed for clarity and
            consistent typography.
          </p>
        </section>

        <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="mb-3 text-2xl font-bold text-cyan-400">
            What I worked on
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-zinc-300">
            <li>Fixed organisation resubscription flow</li>
            <li>Added automated Playwright end-to-end tests</li>
            <li>Built guest download subscription intercept</li>
            <li>Integrated Stripe payment options</li>
            <li>Integrated Brevo transactional email for organisation invitations</li>
            <li>
              Improved typography, sentence case, branding, and UI consistency
            </li>
          </ul>
        </section>

        <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="mb-3 text-2xl font-bold text-cyan-400">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-zinc-700 px-3 py-1 text-sm text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="mb-3 text-2xl font-bold text-cyan-400">
            What this shows
          </h2>
          <p className="leading-8 text-zinc-300">
            Full-stack product delivery, automated testing, payment integration
            experience, and accessibility-aware UI development.
          </p>
        </section>
      </div>

      <div className="mt-10">
        <Link
          href="/projects"
          className="inline-block rounded-xl bg-cyan-500 px-5 py-2.5 font-semibold text-zinc-950 transition hover:bg-cyan-400"
        >
          Back to projects
        </Link>
      </div>
    </main>
  );
}

