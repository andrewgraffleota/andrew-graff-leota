export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#050505] px-6 pt-36 pb-24 text-white">
      <section className="mx-auto max-w-4xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">Contact</p>
        <h1 className="text-5xl font-black tracking-tight md:text-7xl">Let’s connect.</h1>

        <p className="mt-8 text-xl leading-9 text-gray-400">
          I’m open to software engineering, data engineering, cybersecurity and AI-related opportunities.
        </p>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <a href="mailto:andrewgraff@outlook.co.nz" className="rounded-full bg-blue-600 px-7 py-3 text-center font-semibold text-white hover:bg-blue-500">
            Email Me
          </a>
          <a href="https://github.com/andrewgraffleota" target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-7 py-3 text-center font-semibold text-white hover:bg-white/10">
            GitHub
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-7 py-3 text-center font-semibold text-white hover:bg-white/10">
            LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}
