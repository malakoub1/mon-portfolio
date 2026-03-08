import { Helmet } from "react-helmet-async";
import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section className="grid gap-10 py-6">
      <Helmet>
        <title>Contact — Oubaha Malak</title>
        <meta
          name="description"
          content="Contactez Oubaha Malak pour une opportunité de stage ou une collaboration."
        />
      </Helmet>

      {/* Hero */}
      <div className="rounded-[2rem] border bg-gradient-to-r from-pink-100 via-violet-100 to-blue-100 p-8 shadow-sm">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Contact
        </h1>

        <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-700">
          Je suis ouverte aux opportunités de stage, aux collaborations et aux
          projets en développement web et logiciel. N’hésitez pas à me contacter
          par email ou via mes réseaux professionnels.
        </p>
      </div>

      {/* Contact + Réseaux */}
      <div className="grid gap-6 md:grid-cols-2">
        <article className="rounded-3xl border p-6 shadow-sm">
          <h2 className="text-2xl font-bold">Mes coordonnées</h2>

          <div className="mt-6 space-y-5">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Nom</p>
              <p className="mt-1 text-lg font-semibold">{profile.name}</p>
            </div>

            <div>
              <p className="text-sm font-medium text-muted-foreground">Email</p>
              <a
                href={`mailto:${profile.email}`}
                className="mt-1 inline-block text-lg font-medium underline"
              >
                {profile.email}
              </a>
            </div>

            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Localisation
              </p>
              <p className="mt-1 text-lg font-semibold">{profile.location}</p>
            </div>

            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Profil
              </p>
              <p className="mt-1 text-lg font-semibold">{profile.role}</p>
            </div>
          </div>
        </article>

        <article className="rounded-3xl border p-6 shadow-sm">
          <h2 className="text-2xl font-bold">Réseaux professionnels</h2>

          <div className="mt-6 space-y-5">
            {profile.socials.map((social) => (
              <div key={social.label}>
                <p className="text-sm font-medium text-muted-foreground">
                  {social.label}
                </p>

                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 inline-block break-all text-base font-medium underline"
                >
                  {social.href}
                </a>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-2xl bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
            >
              M’envoyer un email
            </a>

            <a
              href={profile.socials[1].href}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border px-5 py-3 text-sm font-semibold transition hover:bg-accent"
            >
              Voir mon LinkedIn
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
