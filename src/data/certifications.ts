export type Certification = {
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  skills?: string[];
  tags?: string[];
  image?: string;
  imageAlt?: string;
  status?: "active" | "expired" | "revoked";
};

export const certifications: Certification[] = [
  {
    title: "Hibernate & JPA",
    issuer: "MLIAEdu",
    issueDate: "2026-03",
    credentialUrl:
      "https://mliaedu.toubkalit.com/verify-certificate/28-9abdc519-9ac1-457d-b530-c30caf3bea9d-326461",
    skills: ["Hibernate", "JPA", "Java"],
    tags: ["Backend", "ORM"],
    image: "/certs/hibernate-jpa.jpg",
    imageAlt: "Certificat Hibernate JPA",
    status: "active",
  },
   {
    title: "Développement Front-End moderne avec React",
    issuer: "MLIAEdu",
    issueDate: "2026-03",
    credentialUrl:
      "https://mliaedu.toubkalit.com/verify-certificate/26-9abdc519-9ac1-457d-b530-c30caf3bea9d-221863",
    skills: ["React", "JavaScript", "HTML", "CSS"],
    tags: ["Frontend", "React"],
    image: "/certs/react.jpg",
    imageAlt: "Certificat Développement Front-End moderne avec React",
    status: "active",
  },
];
