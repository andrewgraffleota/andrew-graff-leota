import Link from "next/link";

const techStack = [
  "n8n",
  "LLMs",
  "HTML",
  "JSON",
  "HubSpot CMS",
  "AI Education",
];

export default function TptAcademyPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 text-white">
      <section className="mb-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Case Study
        </p>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Ten Past Tomorrow Academy — AI Education Platform
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-300">
          An online learning platform delivering AI and automation courses. My
          work focused on implementing structured course modules for n8n
          automation and custom AI education.
        </p>
      </section>

      <div className="space-y-8">
        <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="mb-3 text-2xl font-bold text-cyan-400">What it was</h2>
          <p className="leading-8 text-zinc-300">
            A course delivery platform where automation pipelines help generate,
            structure, and publish learning content—so technical ideas are
            communicated clearly and consistently.
          </p>
        </section>

        <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="mb-3 text-2xl font-bold text-cyan-400">
            What I worked on
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-zinc-300">
            <li>Implemented production modules for n8n 101</li>
            <li>Created modules for Custom AI 101</li>
            <li>Produced lesson HTML, quiz JSON, and walkthrough content</li>
            <li>
              Covered automation topics such as APIs, filtering, routing, error
              handling, and LLM email assistants
            </li>
            <li>
              Supported learning content for AI build-vs-buy, data sovereignty,
              deployment, and output control
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
            Technical communication, AI and automation understanding, structured
            content production, and the ability to teach technical ideas clearly.
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

