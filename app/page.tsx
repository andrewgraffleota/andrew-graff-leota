import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#050505] px-6 pt-36 pb-24 text-white">
      <section className="mx-auto flex max-w-6xl flex-col items-center gap-12 md:flex-row">
        <div className="flex-1">
          <p className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
            Software • Data • Cybersecurity • AI
          </p>

          <h1 className="text-5xl font-black leading-tight tracking-tight md:text-7xl">
            Building software, data systems and digital communities.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400 md:text-xl">
            I&apos;m Andrew Graff Leota, a Wellington-based developer with experience across full-stack
            engineering, data engineering, cybersecurity, AI automation, and content creation.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/projects"
              className="rounded-full bg-blue-600 px-7 py-3 text-center font-semibold text-white hover:bg-blue-500"
            >
              View Projects
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-white/15 px-7 py-3 text-center font-semibold text-white hover:bg-white/10"
            >
              About Me
            </Link>
          </div>
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
      </section>
    </main>
  );
}
