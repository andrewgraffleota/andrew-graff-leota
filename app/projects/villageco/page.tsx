import Link from "next/link";

const techStack = [
  "Backend APIs",
  "Database security (RLS)",
  "Authentication & authorization",
  "Private networking",
  "CI/CD pipelines",
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
          Childcare Matching Platform
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-300">
          A childcare matching platform with a secure backend and an AI
          matching pipeline. My work focused on authentication, onboarding and
          API design, database security, infrastructure, and AI architecture
          research.
        </p>
      </section>

      <div className="space-y-8">
        <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="mb-3 text-2xl font-bold text-cyan-400">
            What it was
          </h2>
          <p className="leading-8 text-zinc-300">
            A platform that supports secure onboarding and a matching system that
            combines relational data with LLM-based reasoning.
          </p>
        </section>

        <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="mb-3 text-2xl font-bold text-cyan-400">
            What I worked on
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-zinc-300">
            <li>Built authentication and authorization backend services</li>
            <li>Implemented database row-level security and access controls</li>
            <li>
              Built onboarding APIs for collecting user preferences and profile data
            </li>
            <li>Configured private networking for secure database connectivity</li>
            <li>Maintained CI/CD workflows for reliable deployments</li>
            <li>
              Researched hybrid SQL + LLM matching architecture and evaluation
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
            solving, practical AI pipeline design, and secure database design.
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

