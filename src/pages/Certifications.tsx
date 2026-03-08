import { Helmet } from "react-helmet-async";
import { certifications } from "@/data/certifications";
import { useMemo, useState } from "react";
import CertificationCard from "@/components/CertificationCard";

export default function CertificationsPage() {
  const [q, setQ] = useState("");

  const list = useMemo(() => {
    return certifications
      .filter((c) =>
        [c.title, c.issuer, ...(c.tags ?? []), ...(c.skills ?? [])]
          .join(" ")
          .toLowerCase()
          .includes(q.toLowerCase()),
      )
      .sort((a, b) => b.issueDate.localeCompare(a.issueDate));
  }, [q]);

  return (
    <section className="grid gap-10 py-6">
      <Helmet>
        <title>Certifications — Oubaha Malak</title>
        <meta
          name="description"
          content="Certifications de Oubaha Malak en développement logiciel."
        />
      </Helmet>

      <div className="rounded-[2rem] border bg-gradient-to-r from-pink-100 via-violet-100 to-blue-100 p-8 shadow-sm">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Certifications
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-slate-700">
          Voici les certifications que j’ai obtenues pour renforcer mes
          compétences techniques et approfondir mes connaissances.
        </p>
      </div>

      <div className="flex items-center justify-between gap-4">
        <input
          placeholder="Filtrer (ex: Hibernate, Java)"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="w-72 rounded-xl border px-3 py-2"
          aria-label="Filtrer les certifications"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {list.map((c) => (
          <CertificationCard key={c.title + c.issueDate} c={c} />
        ))}
      </div>
    </section>
  );
}
