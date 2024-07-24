import g1 from "@assets/images/team/girl1.avif";
import g2 from "@assets/images/team/girl2.avif";
import g3 from "@assets/images/team/girl4.avif";
import r1 from "@assets/images/team/random.avif";
import r2 from "@assets/images/team/random2.avif";
import r3 from "@assets/images/team/random3.avif";
import r5 from "@assets/images/team/random5.avif";

interface TeamProps {
  name: string;
  position: string;
  image: ImageMetadata;
  link?: string;
}
export const team: TeamProps[] = [
  {
    name: "Juan Pérez",
    position: "Desarrollador",
    image: r1,
    link: "https://example.com/juan",
  },
  {
    name: "María García",
    position: "UX/UI Designer",
    image: g3,
  },
  {
    name: "Luis Hernández",
    position: "Administrador de Sistemas",
    image: r3,
    link: "https://example.com/luis",
  },
  {
    name: "Ana Martínez",
    position: "Desarrolladora Frontend",
    image: g2,
  },
  {
    name: "Carlos López",
    position: "Ingeniero de DevOps",
    image: r2,
    link: "https://example.com/carlos",
  },
  {
    name: "Patricia González",
    position: "Especialista en Seguridad",
    image: g1,
  },
  {
    name: "José Ramírez",
    position: "Gerente de Proyecto",
    image: r5,
    link: "https://example.com/jose",
  },
];

export const articles = 6;

function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString(undefined, options);
}

export { formatDate };
