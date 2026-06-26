import { certifications } from "@/data/portfolio";

export default function CertificationsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 text-white">
      <section className="mb-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Certifications
        </p>
        <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
          Cloud and Cybersecurity Learning
        </h1>
        <p className="max-w-3xl text-lg leading-8 text-zinc-300">
          Alongside my degree, I completed industry-aligned certifications to
          strengthen my understanding of cloud computing, cloud security,
          network security, risk management, and security operations. 
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {certifications.map((cert) => (
          <article
            key={cert.title}
            className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6"
          >
            <p className="mb-2 text-sm font-semibold text-cyan-400">
              {cert.issuer}
            </p>
            <h2 className="text-2xl font-bold">{cert.title}</h2>
            <p className="mt-2 text-zinc-400">{cert.date}</p>
            <p className="mt-5 leading-7 text-zinc-300">{cert.description}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {cert.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-zinc-700 px-3 py-1 text-sm text-zinc-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

