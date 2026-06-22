export default function AIPage() {
  return (
    <main className="min-h-screen bg-[#050505] px-6 pt-36 pb-24 text-white">
      <section className="mx-auto max-w-5xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">AI</p>
        <h1 className="text-5xl font-black tracking-tight md:text-7xl">Practical AI systems.</h1>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-400">
          I’m interested in building AI tools that solve real problems: student assistants, workflow automation,
          RAG systems, local models and structured knowledge interfaces.
        </p>

        <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.04] p-8">
          <h2 className="mb-4 text-3xl font-bold">ĀKI</h2>
          <p className="leading-8 text-gray-400">
            ĀKI is an AI assistant concept designed to help Whitireia and WelTec students with timetable questions,
            study support and information technology learning. The project explores LLMs, local models, RAG,
            structured data and automation workflows.
          </p>
        </div>
      </section>
    </main>
  );
}
