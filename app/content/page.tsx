export default function ContentPage() {
  return (
    <main className="min-h-screen bg-[#050505] px-6 pt-36 pb-24 text-white">
      <section className="mx-auto max-w-5xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-red-400">Content</p>
        <h1 className="text-5xl font-black tracking-tight md:text-7xl">Building audiences.</h1>

        <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-400">
          Alongside software and cybersecurity, I create content around fitness, lifestyle, learning and personal growth.
        </p>

        <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
          <a href="https://youtube.com/@andrewgraffleota" target="_blank" rel="noreferrer" className="rounded-full bg-white px-7 py-3 font-semibold text-black hover:bg-gray-200">
            YouTube
          </a>
          <a href="https://tiktok.com/@andrewgraffleota" target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-7 py-3 font-semibold text-white hover:bg-white/10">
            TikTok
          </a>
          <a href="https://instagram.com/andrewgraffleota" target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-7 py-3 font-semibold text-white hover:bg-white/10">
            Instagram
          </a>
        </div>
      </section>
    </main>
  );
}