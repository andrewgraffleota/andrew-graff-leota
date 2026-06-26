import Link from "next/link";

const techStack = [
  "Snowflake",
  "dbt",
  "Streamlit",
  "SQL",
  "OpenAPI",
  "Data Modelling",
];

export default function AxisDataPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 text-white">
      <section className="mb-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Case Study
        </p>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Axis Data: Sports Medicine Analytics
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-300">
          A sports medicine analytics platform involving Snowflake, dbt,
          Streamlit dashboards, data quality investigation, and technical API
          documentation.
        </p>
      </section>

      <div className="space-y-8">
        <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="mb-3 text-2xl font-bold text-cyan-400">What it was</h2>
          <p className="leading-8 text-zinc-300">
            A data and analytics system designed to support reporting and
            decision-making across sports medicine operations, transforming
            large referral datasets into stakeholder-ready dashboards and
            documentation.
          </p>
        </section>

        <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="mb-3 text-2xl font-bold text-cyan-400">
            What I worked on
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-zinc-300">
            <li>Built dbt dimension modelling across 174,000+ referral records</li>
            <li>
              Developed Streamlit dashboards for business and board-level audiences
            </li>
            <li>
              Investigated data quality issues including orphan patient records
            </li>
            <li>
              Worked with Snowflake SQL, schema tests, and incremental model patterns
            </li>
            <li>Created OpenAPI 3.0 documentation for vendor integration</li>
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
            Production data engineering, dashboard design for non-technical
            stakeholders, data quality analysis, and integration documentation.
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

