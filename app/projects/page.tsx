import Link from "next/link";
import { internshipProjects } from "@/data/portfolio";

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 text-white">
      <section className="mb-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Projects
        </p>
        <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
          Portfolio Case Studies
        </h1>
        <p className="max-w-3xl text-lg leading-8 text-zinc-300">
          A collection of academic, internship, AI, cloud, cybersecurity, and
          software development work. These projects show my growth from study
          into real production experience.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {internshipProjects.map((project) => (
          <article
            key={project.slug}
            className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-cyan-700"
          >
            <p className="text-sm font-semibold text-cyan-400">
              {project.subtitle}
            </p>
            <h2 className="mt-2 text-2xl font-bold">{project.title}</h2>
            <p className="mt-4 leading-7 text-zinc-300">{project.summary}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-zinc-700 px-3 py-1 text-sm text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <Link
              href={`/projects/${project.slug}`}
              className="mt-6 inline-block rounded-xl bg-cyan-500 px-4 py-2 font-semibold text-zinc-950 transition hover:bg-cyan-400"
            >
              Read more
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}