import { Helmet } from "react-helmet-async";
import { education } from "@/data/education";

function fmt(s?: string) {
  if (!s) return null;
  const [y, m] = s.split("-");
  return `${m}/${y}`;
}

export default function EducationPage() {
  return (
    <section className="grid gap-10 py-6">
      <Helmet>
        <title>Formations — Oubaha Malak</title>
        <meta
          name="description"
          content="Parcours académique de Oubaha Malak à la Faculté des Sciences et Techniques de Marrakech."
        />
      </Helmet>

      <div className="rounded-[2rem] border bg-gradient-to-r from-pink-100 via-violet-100 to-blue-100 p-8 shadow-sm dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Formations
        </h1>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700 dark:text-slate-300">
          Voici mon parcours académique à la Faculté des Sciences et Techniques
          de Marrakech, avec mes principales formations et quelques éléments
          clés de mon apprentissage.
        </p>
      </div>

      <div className="relative grid gap-6">
        <div className="absolute left-4 top-0 hidden h-full w-px bg-border md:block" />

        {education.map((e, index) => (
          <article
            key={`${e.school}-${e.degree}-${index}`}
            className="relative rounded-3xl border p-6 shadow-sm transition hover:shadow-md md:ml-10"
          >
            <div className="absolute -left-8 top-8 hidden h-4 w-4 rounded-full border-4 border-background bg-foreground md:block" />

            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                  {e.degree}
                </p>

                <h2 className="mt-1 text-2xl font-bold tracking-tight">
                  {e.field || e.degree}
                </h2>

                <p className="mt-2 text-base font-medium text-muted-foreground">
                  {e.school}
                  {e.location ? ` • ${e.location}` : ""}
                </p>
              </div>

              {(e.start || e.end) && (
                <div className="rounded-2xl border px-4 py-2 text-sm text-muted-foreground">
                  {fmt(e.start) ? fmt(e.start) : ""}
                  {fmt(e.start) || fmt(e.end) ? " — " : ""}
                  {fmt(e.end) ? fmt(e.end) : "Présent"}
                </div>
              )}
            </div>

            {e.courses?.length ? (
              <div className="mt-5">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  Cours clés
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {e.courses.map((course) => (
                    <span
                      key={course}
                      className="rounded-full border px-3 py-1 text-sm"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}

            {e.highlights?.length ? (
              <div className="mt-5">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  Points forts
                </h3>
                <ul className="mt-3 space-y-2 text-sm leading-7 text-muted-foreground">
                  {e.highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="mt-2 h-2 w-2 rounded-full bg-foreground/70" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
