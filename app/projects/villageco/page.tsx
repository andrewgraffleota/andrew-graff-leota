import Link from "next/link";

const techStack = [
  "Python Azure Functions",
  "PostgreSQL",
  "Clerk",
  "Azure VNet",
  "GitHub Actions",
  "REST APIs",
  "LLM Architecture",
];

export default function VillageCoPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 text-white">
      <section className="mb-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Case Study
        </p>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          VillageCo: Childcare Matching Platform
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-300">
          A childcare matching platform connecting families with childcare
          providers. My work focused on backend authentication, onboarding
          APIs, database security, infrastructure, and AI matching architecture
          research.
        </p>
      </section>

      <div className="space-y-8">
        <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="mb-3 text-2xl font-bold text-cyan-400">
            What it was
          </h2>
          <p className="leading-8 text-zinc-300">
            A platform that helps families connect with childcare providers
            through secure onboarding and a practical matching system designed
            to work with both SQL data and LLM-based reasoning.
          </p>
        </section>

        <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="mb-3 text-2xl font-bold text-cyan-400">
            What I worked on
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-zinc-300">
            <li>Built core authentication backend using Clerk webhooks</li>
            <li>Implemented PostgreSQL row-level security patterns</li>
            <li>
              Built sitter onboarding APIs for skills, hobbies, interests, and
              languages
            </li>
            <li>Configured Azure VNet integration for private database connectivity</li>
            <li>Fixed GitHub Actions CI/CD deployment pipelines</li>
            <li>
              Researched hybrid SQL plus LLM matching architecture
            </li>
          </ul>
        </section>

        <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="mb-3 text-2xl font-bold text-cyan-400">
            Tech Stack
          </h2>
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
            End-to-end backend ownership, production infrastructure problem
            solving, practical AI decision-making, and secure database design.
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

