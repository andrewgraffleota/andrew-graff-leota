import Link from "next/link";

const techStack = [
  "REST APIs",
  "Python",
  "React",
  "Multi-tenancy",
  "Integration Testing",
];

export default function FlourishPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 text-white">
      <section className="mb-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Case Study
        </p>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Flourish — Nursery Business Management SaaS
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-300">
          A business management platform for specialty plant nurseries,
          covering sales, inventory, invoicing, locations, clients, and batch
          management.
        </p>
      </section>

      <div className="space-y-8">
        <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="mb-3 text-2xl font-bold text-cyan-400">What it was</h2>
          <p className="leading-8 text-zinc-300">
            A multi-area SaaS for nursery operators, designed to coordinate
            sales, inventory, invoicing, and batch workflows while keeping data
            organized across real-world production processes.
          </p>
        </section>

        <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="mb-3 text-2xl font-bold text-cyan-400">
            What I worked on
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-zinc-300">
            <li>
              Delivered API implementations for client management, sales,
              locations, cost tracking, and batch management
            </li>
            <li>
              Helped implement multi-organisation backend and frontend functionality
            </li>
            <li>Connected dashboard KPIs to live data</li>
            <li>Worked with integration-tested production features</li>
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
            Fast delivery under pressure, REST API design, multi-tenant SaaS
            thinking, and reliable implementation across product areas.
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

