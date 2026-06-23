import Link from "next/link";
import { internshipProjects } from "@/data/portfolio";

export default function ExperiencePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 text-white">
      <section className="mb-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Professional Experience
        </p>
        <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
          Software Developer Internship
        </h1>
        <p className="max-w-3xl text-lg leading-8 text-zinc-300">
          I completed a software developer internship at Do AI Limited in
          Wellington, contributing across live client products as a full-stack
          developer, data engineer, and technical content creator.
        </p>
      </section>

      <section className="mb-12 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
        <h2 className="text-2xl font-bold">Do AI Limited</h2>
        <p className="mt-2 text-zinc-400">
          Software Developer Intern · Wellington, New Zealand · January 2026 –
          April 2026
        </p>
        <p className="mt-5 max-w-4xl leading-8 text-zinc-300">
          During this internship, I worked across backend APIs, React and
          TypeScript frontends, Azure Functions, PostgreSQL, Snowflake, dbt,
          Streamlit dashboards, CI/CD, automated testing, technical
          documentation, and AI education content.
        </p>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-bold">Client Product Case Studies</h2>

        <div className="grid gap-6 md:grid-cols-2">
          {internshipProjects.map((project) => (
            <article
              key={project.slug}
              className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-cyan-700"
            >
              <p className="text-sm font-semibold text-cyan-400">
                {project.subtitle}
              </p>
              <h3 className="mt-2 text-2xl font-bold">{project.title}</h3>
              <p className="mt-4 leading-7 text-zinc-300">
                {project.summary}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-zinc-700 px-3 py-1 text-sm text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <Link
                href={`/projects/${project.slug}`}
                className="mt-6 inline-block rounded-xl bg-cyan-500 px-4 py-2 font-semibold text-zinc-950 transition hover:bg-cyan-400"
              >
                View case study
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

