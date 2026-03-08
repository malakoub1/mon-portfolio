import { Helmet } from "react-helmet-async";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section className="grid gap-10 py-6">
      <Helmet>
        <title>Projets — Oubaha Malak</title>
        <meta
          name="description"
          content="Projets réalisés par Oubaha Malak en développement logiciel et technologies web."
        />
      </Helmet>

      <div className="rounded-[2rem] border bg-gradient-to-r from-pink-100 via-violet-100 to-blue-100 p-8 shadow-sm dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Projets
        </h1>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700 dark:text-slate-300">
          Voici quelques projets que j’ai réalisés dans le cadre de mes études
          et de ma pratique du développement logiciel.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.title}
            className="group rounded-3xl border p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">{p.title}</h2>

              {p.period && (
                <span className="text-sm text-muted-foreground">
                  {p.period}
                </span>
              )}
            </div>

            <p className="mt-3 text-muted-foreground leading-7">{p.summary}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border px-3 py-1 text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-6 flex gap-4">
              {p.repo && (
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border px-4 py-2 text-sm font-medium transition hover:bg-accent"
                >
                  Voir le code
                </a>
              )}

              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-neutral-800"
                >
                  Voir le projet
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
