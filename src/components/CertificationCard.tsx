import type { Certification } from "@/data/certifications";
import clsx from "clsx";

function mmYYYY(s: string) {
  const [y, m] = s.split("-");
  return `${m}/${y}`;
}

export default function CertificationCard({ c }: { c: Certification }) {
  const isExpired = c.status === "expired";

  return (
    <article
      className={clsx(
        "rounded-3xl border p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg",
        isExpired && "opacity-80",
      )}
    >
      {c.image && (
        <div className="flex justify-center">
          <img
            src={c.image}
            alt={c.imageAlt ?? c.title}
            loading="lazy"
            className="mb-5 h-40 w-40 rounded-xl border bg-white p-2 object-contain"
          />
        </div>
      )}

      <h3 className="text-xl font-bold">{c.title}</h3>

      <p className="mt-2 text-sm text-muted-foreground">
        {c.issuer} • {mmYYYY(c.issueDate)}
      </p>

      {c.skills?.length ? (
        <p className="mt-3 text-sm">
          <span className="font-semibold">Compétences :</span>{" "}
          {c.skills.join(", ")}
        </p>
      ) : null}

      <div className="mt-5 flex items-center gap-4 text-sm">
        {c.credentialUrl && (
          <a
            className="rounded-xl border px-4 py-2 font-medium transition hover:bg-accent"
            href={c.credentialUrl}
            target="_blank"
            rel="noreferrer"
          >
            Voir le certificat
          </a>
        )}

        {isExpired && <span>Expirée</span>}
        {c.status === "revoked" && <span>Révoquée</span>}
      </div>
    </article>
  );
}
