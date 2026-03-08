import { Helmet } from "react-helmet-async";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaDatabase,
} from "react-icons/fa";
import { SiSpringboot, SiMysql } from "react-icons/si";
const frontendSkills = [
  { name: "React", icon: <FaReact className="text-3xl" /> },
  { name: "JavaScript", icon: <FaJs className="text-3xl" /> },
  { name: "HTML", icon: <FaHtml5 className="text-3xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-3xl" /> },
];

const backendSkills = [
  { name: "JEE", icon: <FaJava className="text-3xl" /> },
  { name: "Spring Boot", icon: <SiSpringboot className="text-3xl" /> },
  { name: "MySQL", icon: <SiMysql className="text-3xl" /> },
  { name: "Oracle", icon: <FaDatabase className="text-3xl" /> },
  { name: "Base de données", icon: <FaDatabase className="text-3xl" /> },
];

function SkillCard({ name, icon }: { name: string; icon: React.ReactNode }) {
  return (
    <div className="group rounded-2xl border border-white/20 bg-white/70 p-5 shadow-sm backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-white/5">
      <div className="flex flex-col items-center gap-3 text-center">
        <div className="rounded-2xl bg-gradient-to-br from-pink-500/15 via-violet-500/15 to-sky-500/15 p-4 text-slate-800 dark:text-white">
          {icon}
        </div>
        <h3 className="text-base font-semibold tracking-wide">{name}</h3>
      </div>
    </div>
  );
}

export default function Competences() {
  return (
    <section className="grid gap-10">
      <Helmet>
        <title>Compétences — Oubaha Malak</title>
        <meta
          name="description"
          content="Compétences techniques de Oubaha Malak en développement front-end, back-end et bases de données."
        />
      </Helmet>

      <div className="overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-r from-pink-100 via-violet-100 to-sky-100 p-8 shadow-sm dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Mes compétences
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300 md:text-lg">
          Voici les technologies que j’utilise pour créer des applications web
          modernes, des interfaces interactives et des solutions back-end
          solides.
        </p>
      </div>

      <div className="grid gap-8">
        <div>
          <h2 className="mb-4 text-2xl font-bold tracking-tight">Front-end</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {frontendSkills.map((skill) => (
              <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-2xl font-bold tracking-tight">
            Back-end & Base de données
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {backendSkills.map((skill) => (
              <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
