export type Education = {
  school: string;
  degree: string;
  field?: string;
  location?: string;
  start?: string;
  end?: string;
  gpa?: string;
  courses?: string[];
  highlights?: string[];
};

export const education: Education[] = [
  {
    school: "Faculté des Sciences et Techniques de Marrakech",
    degree: "Licence",
    field: "Systèmes Informatiques Répartis",
    location: "Marrakech",
    start: "2025-09",
    end: "2026-06",
    highlights: [
      "Formation orientée systèmes, réseaux et informatique répartie",
      "Développement de compétences en conception et développement logiciel",
    ],
  },
  {
    school: "Faculté des Sciences et Techniques de Marrakech",
    degree: "DEUST",
    field: "MIPC (Mathématiques, Informatique, Physique, Chimie)",
    location: "Marrakech",
    highlights: [
      "Base solide en mathématiques, informatique, physique et chimie",
      "Formation scientifique pluridisciplinaire suivie au sein de la FSTG",
    ],
  },
];
