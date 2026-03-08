export type Project = {
  title: string;
  period?: string;
  tags: string[];
  summary: string;
  link?: string;
  repo?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    title: "Pharmacie App",
    period: "2026",
    tags: ["Java Swing", "MySQL", "JDBC", "NetBeans"],
    summary:
      "Application desktop permettant de faciliter la gestion d'une pharmacie à travers une interface simple et intuitive.",
    repo: "https://github.com/malakoub1/Pharmacie-App.git",
  },
];
