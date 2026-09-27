import { Project } from "@/types/project";

export const projectsData: Project[] = [
  {
    id: "cbt-mapp",
    name: "Aplikasi CBT MAPP",
    description:
      "Aplikasi proteksi menggunakan fitur kiosk untuk mengantisipasi siswa melakukan kecurangan saat melaksanakan CBT melalui handphone.",
    category: "mobile",
    image: "/work/cbt-mapp.png",
    link: "https://github.com/kinur31",
    githubUrl: "https://github.com/kinur31",
    technologies: ["Flutter", "Dart", "Kiosk Mode", "Mobile Security"],
    featured: true,
  },
  {
    id: "mapp-landing",
    name: "Landing Page MA Pesantren Majenang",
    description:
      "Halaman Website / Official Landing Page MA Pesantren Pembangunan Majenang.",
    category: "frontend",
    image: "/work/mapp-landing.png",
    link: "https://mappmajenang.com/",
    githubUrl: "https://github.com/kinur31",
    technologies: ["Vue.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
    featured: true,
  },
  {
    id: "pmbm",
    name: "Web Pendaftaran Siswa Baru (PMBM)",
    description:
      "Halaman untuk informasi dan pendaftaran siswa baru secara online di MA Pesantren Pembangunan Majenang.",
    category: "full-stack",
    image: "/work/pmbm.png",
    link: "https://pmbm.mappmajenang.com/",
    githubUrl: "https://github.com/kinur31",
    technologies: ["React.js", "Express.js", "MySQL", "Prisma ORM", "Tailwind CSS"],
    featured: true,
  },
  {
    id: "portfolio-web",
    name: "Portfolio Web",
    description:
      "Aplikasi web portofolio personal developer yang modern, responsive, performant, dan production-ready.",
    category: "frontend",
    image: "/work/portfolio-web.png",
    link: "https://rizky-noor.vercel.app/",
    githubUrl: "https://github.com/kinur31",
    technologies: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    featured: true,
  },
  {
    id: "groceria",
    name: "Online Grocery (Groceria)",
    description:
      "Aplikasi web untuk belanja bahan makanan online dengan manajemen stok secara real-time dan integrasi pemrosesan pembayaran.",
    category: "full-stack",
    image: "/work/groceria.png",
    link: "https://github.com/purwadhikafullstack/JCWD021002",
    githubUrl: "https://github.com/purwadhikafullstack/JCWD021002",
    technologies: [
      "React.js",
      "Express.js",
      "Midtrans",
      "MySQL",
      "Sequelize",
      "Firebase",
      "Redux",
      "RajaOngkir",
    ],
    featured: true,
  },
  {
    id: "pos-app",
    name: "Point of Sales (POS)",
    description:
      "Aplikasi web yang dirancang untuk transaksi point of sale, manajemen kasir, dan pelaporan keuangan ritel.",
    category: "full-stack",
    image: "/work/pos.png",
    link: "https://github.com/kinur31/Mini-Project-POS-FE",
    githubUrl: "https://github.com/kinur31/Mini-Project-POS-FE",
    technologies: ["React.js", "Express.js", "MySQL", "Sequelize", "Redux", "Tailwind CSS"],
    featured: false,
  },
  {
    id: "event-in",
    name: "Event Management Platform (Event.In)",
    description:
      "Aplikasi web untuk mengelola, menerbitkan tiket, dan menemukan acara dengan fitur interaktif.",
    category: "frontend",
    image: "/work/event-in.png",
    link: "https://github.com/andrianggoro21/mini-project",
    githubUrl: "https://github.com/andrianggoro21/mini-project",
    technologies: ["React.js", "Express.js", "MySQL", "Sequelize", "Redux", "Tailwind CSS"],
    featured: false,
  },
  {
    id: "sdi-online",
    name: "SDI Online Test",
    description:
      "Aplikasi web untuk mengidentifikasi dan memvisualisasikan hasil tes psikotes SDI secara dinamis.",
    category: "laravel",
    image: "/work/sdi-test.png",
    link: "https://github.com/kinur31",
    githubUrl: "https://github.com/kinur31",
    technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "HTML5 Canvas"],
    featured: true,
  },
];
