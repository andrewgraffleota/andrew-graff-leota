const projects = [
  {
    title: "VillageCo",
    type: "Full-stack / AI Matching",
    description:
      "Backend authentication, sitter onboarding APIs, Azure infrastructure problem-solving and hybrid LLM + SQL matching architecture.",
    tags: ["Python", "PostgreSQL", "Azure", "LLMs"],
  },
  {
    title: "Axis Data",
    type: "Data Engineering",
    description:
      "Snowflake data warehouse, dbt models and Streamlit dashboards for analytics and executive reporting.",
    tags: ["Snowflake", "dbt", "Streamlit", "Analytics"],
  },
  {
    title: "Easy Read",
    type: "Full-stack Product",
    description:
      "React and TypeScript feature delivery, Playwright testing, Stripe payment flow support and accessibility improvements.",
    tags: ["React", "TypeScript", "Stripe", "Testing"],
  },
  {
    title: "ĀKI",
    type: "AI / Student Assistant",
    description:
      "An AI timetable and study assistant using LLMs, local models, structured data, RAG and workflow automation.",
    tags: ["AI", "RAG", "Ollama", "n8n"],
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#050505] px-6 pt-36 pb-24 text-white">
      <section className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">Projects</p>
        <h1 className="text-5xl font-black tracking-tight md:text-7xl">Selected work.</h1>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 transition hover:-translate-y-1 hover:bg-white/[0.07]">
              <p className="mb-3 text-sm font-medium text-blue-400">{project.type}</p>
              <h2 className="mb-4 text-3xl font-bold">{project.title}</h2>
              <p className="mb-6 leading-8 text-gray-400">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}