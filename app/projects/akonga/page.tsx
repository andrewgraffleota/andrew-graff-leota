import Link from "next/link";

import { akongaSlides } from "@/data/akonga";
import SlideLightboxGallery from "@/components/ui/slide-lightbox";

export default function AkongaPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 text-white">
      <section className="mb-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Project
        </p>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Ākonga
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-300">
          Ākonga is a paper-driven slide series from my studies—updated bit
          by bit as I refine understanding and turn key ideas into practical
          technical skills.
        </p>
      </section>

      <div className="space-y-8">
        {akongaSlides.map((slide) => (
          <section
            key={slide.id}
            className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6"
          >
            <h2 className="mb-3 text-2xl font-bold text-cyan-400">
              {slide.paper.title}
            </h2>

            <div className="space-y-2 text-zinc-300">
              {slide.paper.authors ? (
                <p className="text-sm">
                  <span className="font-semibold text-zinc-200">Authors: </span>
                  {slide.paper.authors}
                </p>
              ) : null}
              {slide.paper.venue || slide.paper.year ? (
                <p className="text-sm">
                  <span className="font-semibold text-zinc-200">Details: </span>
                  {slide.paper.venue ? slide.paper.venue : null}
                  {slide.paper.venue && slide.paper.year ? " • " : null}
                  {slide.paper.year ? slide.paper.year : null}
                </p>
              ) : null}
              {slide.paper.note ? (
                <p className="text-sm leading-7 text-zinc-300">{slide.paper.note}</p>
              ) : null}
            </div>

            <SlideLightboxGallery
              images={slide.images}
              prioritySrc={
                slide.id === "design" ? "/akonga/design/1.png" : undefined
              }
            />

            {slide.takeaway ? (
              <div className="mt-5 rounded-xl border border-zinc-800 bg-zinc-950/30 p-4">
                <h3 className="mb-2 text-lg font-bold text-zinc-200">
                  Key takeaway
                </h3>
                <p className="leading-7 text-zinc-300">{slide.takeaway}</p>
              </div>
            ) : null}
          </section>
        ))}
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

