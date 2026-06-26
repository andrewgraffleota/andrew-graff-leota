import VideoPreview from '@/components/ui/video-preview';

type Channel = {
  name: string;
  description: string;
  link: string;
  preview: string;
  videoSrc?: string;
  videoPoster?: string;
};

const channels: Channel[] = [
  {
    name: "YouTube",
    description:
      "Long-form videos covering my fitness journey, learning process, projects, and personal development.",
    link: "https://youtube.com/@andrewgraffleota",
    videoSrc: "/clips/youtube-preview.mp4",
    videoPoster: "/clips/youtube-preview.jpg",
    preview: "Video preview area",
  },
  {
    name: "TikTok",
    description:
      "Short-form content showing training, lifestyle, study, and behind-the-scenes clips.",
    link: "https://tiktok.com/@andrewgraffleota",
    videoSrc: "/clips/tiktok-preview.mp4",
    videoPoster: "/clips/tiktok-preview.jpg",
    preview: "Short-form preview area",
  },
  {
    name: "Instagram",
    description:
      "A visual feed for fitness, lifestyle, learning, and personal brand updates.",
    link: "https://instagram.com/andrewgraffleota",
    preview: "Grid preview area",
  },
  {
    name: "LinkedIn",
    description:
      "Professional updates, internship reflections, project summaries, and career development.",
    link: "https://www.linkedin.com/in/andrew-graff-leota-a06387111",
    preview: "Professional profile preview",
  },
];

export default function ContentPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 text-white">
      <section className="mb-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Content
        </p>
        <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
          Channels and Personal Brand
        </h1>
        <p className="max-w-3xl text-lg leading-8 text-zinc-300">
          Outside of study and software development, I create content around my
          journey, fitness, learning, personal development, and career growth.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {channels.map((channel) => (
          <article
            key={channel.name}
            className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900"
          >
            <div className="flex h-48 items-center justify-center bg-zinc-800 text-zinc-500">
              {channel.videoSrc ? (
                <VideoPreview
                  src={channel.videoSrc}
                  poster={channel.videoPoster}
                  label={`${channel.name} preview`}
                  className="w-full"
                />
              ) : (
                channel.preview
              )}
            </div>

            <div className="p-6">
              <h2 className="text-2xl font-bold">{channel.name}</h2>
              <p className="mt-3 leading-7 text-zinc-300">
                {channel.description}
              </p>

              <a
                href={channel.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block rounded-xl bg-cyan-500 px-4 py-2 font-semibold text-zinc-950 transition hover:bg-cyan-400"
              >
                Visit {channel.name}
              </a>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}