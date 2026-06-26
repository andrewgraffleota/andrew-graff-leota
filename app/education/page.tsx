import { papers } from "@/data/portfolio";

export default function EducationPage() {
  const level7 = papers.filter((paper) => paper.level === "Level 7");
  const level6 = papers.filter((paper) => paper.level === "Level 6");
  const level5 = papers.filter((paper) => paper.level === "Level 5");

  const groups = [
    { title: "Level 7 — Final Year / Advanced Papers", items: level7 },
    { title: "Level 6 — Intermediate Technical Papers", items: level6 },
    { title: "Level 5 — Foundation IT Papers", items: level5 },
  ];

  return (
    <main className="mx-auto max-w-6xl px-4 py-16 text-white">
      <section className="mb-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Academic Record
        </p>
        <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
          Bachelor of Information Technology
        </h1>
        <p className="max-w-3xl text-lg leading-8 text-zinc-300">
          I completed a Bachelor of Information Technology, majoring in Cyber
          Security. This page highlights my academic pathway, grades, technical
          papers, and the areas of IT and cybersecurity I developed throughout
          the degree. I'm currently in the process of sharing some of the work done here at academia level. 
        </p>
      </section>

      <section className="mb-14 grid gap-4 md:grid-cols-4">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <p className="text-sm text-zinc-400">Major</p>
          <p className="mt-2 text-2xl font-bold">Cyber Security</p>
        </div>
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <p className="text-sm text-zinc-400">GPA</p>
          <p className="mt-2 text-2xl font-bold">3.8 / 4.0</p>
        </div>
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <p className="text-sm text-zinc-400">Credits</p>
          <p className="mt-2 text-2xl font-bold">360</p>
        </div>
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <p className="text-sm text-zinc-400">Completed</p>
          <p className="mt-2 text-2xl font-bold">2025</p>
        </div>
      </section>

      <section className="mb-14 rounded-2xl border border-cyan-900/60 bg-cyan-950/20 p-6">
        <h2 className="mb-3 text-2xl font-bold">Academic Highlights</h2>
        <ul className="space-y-2 text-zinc-300">
          <li>A+ in Incident Response and Digital Forensics</li>
          <li>A+ in Linux System Administration</li>
          <li>A+ in Information Security I</li>
          <li>
            A grades across Cloud Computing, Digital Forensics, Cryptography,
            Information Security II/III, Data Mining, Programming, and
            Capstone
          </li>
        </ul>
      </section>

      <section className="space-y-10">
        {groups.map((group) => (
          <div key={group.title}>
            <h2 className="mb-5 text-2xl font-bold">{group.title}</h2>
            <div className="grid gap-4">
              {group.items.map((paper) => (
                <article
                  key={paper.code}
                  className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 transition hover:border-cyan-700"
                >
                  <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                    <div>
                      <p className="text-sm font-semibold text-cyan-400">
                        {paper.code}
                      </p>
                      <h3 className="mt-1 text-xl font-bold">{paper.name}</h3>
                      <p className="mt-2 text-sm text-zinc-400">
                        {paper.credits} credits · Completed {paper.date}
                      </p>
                    </div>
                    <div className="rounded-xl border border-zinc-700 px-4 py-3 text-left md:text-center">
                      <p className="text-sm text-zinc-400">Result</p>
                      <p className="text-2xl font-bold text-white">
                        {paper.result}
                      </p>
                      <p className="text-xs text-zinc-500">{paper.range}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

