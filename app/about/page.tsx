import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-transparent px-6 pt-36 pb-24 text-white">
      <section className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-12 md:flex-row md:items-start">
          <div className="flex-1">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">About</p>
            <h1 className="text-5xl font-black tracking-tight md:text-7xl">Andrew Graff Leota.</h1>

            <p className="mt-8 text-xl leading-9 text-gray-400">
              I&apos;m a Wellington-based developer building across software engineering, data engineering,
              cybersecurity, AI automation and digital content.
            </p>
          </div>

          <div className="relative h-72 w-72 shrink-0 overflow-hidden rounded-full border border-white/10 bg-white/5 shadow-2xl md:h-80 md:w-80">
            <Image
              src="/aglside.png"
              alt="Andrew Graff Leota"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Card title="Background">
            I have studied a Bachelor of Information Technology majoring in Cyber Security and completed full-stack internship work across live client products.
          </Card>
          <Card title="What I'm building toward">
            I&apos;m focused on becoming a strong software engineer with a security mindset, practical AI skills and the ability to communicate clearly.
          </Card>
        </div>
      </section>
    </main>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
      <h2 className="mb-4 text-2xl font-bold">{title}</h2>
      <p className="leading-8 text-gray-400">{children}</p>
    </div>
  );
}
