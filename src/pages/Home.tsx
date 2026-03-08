import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { certifications } from "@/data/certifications";
import { education } from "@/data/education";

export default function Home() {
  const featuredProjects = projects.slice(0, 1);
  const featuredCertifications = certifications.slice(0, 1);

  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    email: profile.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: profile.location,
    },
    sameAs: profile.socials.map((s) => s.href),
    alumniOf: education.map((e) => ({
      "@type": "CollegeOrUniversity",
      name: e.school,
    })),
    hasCredential: certifications.map((c) => ({
      "@type": "EducationalOccupationalCredential",
      name: c.title,
      recognizedBy: {
        "@type": "Organization",
        name: c.issuer,
      },
      validFrom: c.issueDate,
      validUntil: c.expiryDate,
      url: c.credentialUrl,
    })),
  };

  return (
    <section className="grid gap-12 py-6 md:py-10">
      <Helmet>
        <title>{profile.name} — Portfolio</title>
        <meta
          name="description"
          content="Portfolio de Oubaha Malak, développeuse full stack passionnée par le développement logiciel et les technologies web."
        />
        <script type="application/ld+json">
          {JSON.stringify(personLd)}
        </script>
      </Helmet>

      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            {profile.role}
          </p>

          <h1 className="mt-3 text-5xl font-black tracking-tight text-slate-900 dark:text-white md:text-6xl">
            {profile.name}
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300 md:text-xl">
            {profile.about}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="rounded-2xl bg-indigo-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-indigo-700"
            >
              Voir mes projets
            </Link>

            <a
              href={profile.socials[0].href}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border px-6 py-3 text-base font-semibold transition hover:bg-accent"
            >
              GitHub
            </a>

            <a
              href={profile.socials[1].href}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border px-6 py-3 text-base font-semibold transition hover:bg-accent"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] border bg-gradient-to-br from-pink-100 via-violet-100 to-blue-100 p-8 shadow-sm dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
          <h2 className="text-center text-2xl font-bold">
            Technologies principales
          </h2>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {profile.skills.slice(0, 6).map((skill) => (
              <div
                key={skill}
                className="rounded-2xl bg-white px-4 py-4 text-center text-sm font-semibold shadow-sm dark:bg-slate-800"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl border p-6 shadow-sm">
          <p className="text-sm text-muted-foreground">Localisation</p>
          <h3 className="mt-2 text-xl font-bold">{profile.location}</h3>
        </div>

        <div className="rounded-3xl border p-6 shadow-sm">
          <p className="text-sm text-muted-foreground">Formation</p>
          <h3 className="mt-2 text-xl font-bold">
            Licence Systèmes Informatiques Répartis
          </h3>
        </div>

        <div className="rounded-3xl border p-6 shadow-sm">
          <p className="text-sm text-muted-foreground">Objectif</p>
          <h3 className="mt-2 text-xl font-bold">
            Stage / opportunité en développement
          </h3>
        </div>
      </div>

      <div className="grid gap-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">
            Projet en avant
          </h2>
          <Link to="/projects" className="text-sm font-medium underline">
            Voir tous les projets
          </Link>
        </div>

        <div className="grid gap-6">
          {featuredProjects.map((project) => (
            <article
              key={project.title}
              className="rounded-3xl border p-6 shadow-sm"
            >
              <p className="text-sm text-muted-foreground">{project.period}</p>
              <h3 className="mt-2 text-2xl font-bold">{project.title}</h3>
              <p className="mt-3 max-w-3xl text-base leading-7 text-muted-foreground">
                {project.summary}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border px-3 py-1 text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {project.repo && (
                <div className="mt-5">
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium underline"
                  >
                    Voir le code
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border p-6 shadow-sm">
          <h2 className="text-2xl font-bold">Certification</h2>

          {featuredCertifications.map((certification) => (
            <div key={certification.title} className="mt-4">
              <h3 className="text-xl font-semibold">{certification.title}</h3>
              <p className="mt-2 text-muted-foreground">
                {certification.issuer} • {certification.issueDate}
              </p>

              {certification.credentialUrl && (
                <a
                  href={certification.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-block underline"
                >
                  Voir le certificat
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="rounded-3xl border bg-gradient-to-br from-slate-50 to-slate-100 p-6 shadow-sm dark:from-slate-900 dark:to-slate-800">
          <h2 className="text-2xl font-bold">Me contacter</h2>
          <p className="mt-3 leading-7 text-muted-foreground">
            Je suis ouverte aux opportunités de stage, aux collaborations et
            aux projets en développement web et logiciel.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="rounded-2xl bg-indigo-600 px-5 py-3 text-white transition hover:bg-indigo-700"
            >
              Page contact
            </Link>

            <a
              href={`mailto:${profile.email}`}
              className="rounded-2xl border px-5 py-3 transition hover:bg-white dark:hover:bg-slate-800"
            >
              Envoyer un email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}