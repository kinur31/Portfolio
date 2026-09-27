import {
  PersonalInfo,
  ExperienceItem,
  EducationItem,
  SkillCategory,
  ToolItem,
  CertificationItem,
} from "@/types/profile";

export const personalInfo: PersonalInfo = {
  name: "Rizky Noor Ichwanudin",
  title: "Full-Stack Developer",
  subtitle: "Laravel, PHP & Modern JavaScript (React/Vue/Next.js)",
  email: "rizky.noor.ichwanudin@gmail.com",
  location: "Cilacap, Jawa Tengah, Indonesia",
  degree: "Bachelor of Computer Science (S.Kom)",
  phone: "+62 821-3030-2343",
  cvPath: "/cv/CV-Rizky-Noor-Ichwanudin.pdf",
  linkedinUrl: "https://www.linkedin.com/in/rizky-noor-ichwanudin",
  githubUrl: "https://github.com/kinur31",
  gitlabUrl: "https://gitlab.com/kinur31",
  portfolioUrl: "https://rizky-noor.vercel.app/",
  summary:
    "Results-driven Full-Stack Developer with a proven track record of building scalable web applications and optimizing complex data systems. Expertise in modern front-end frameworks (Vue.js, React.js, Next.js) and robust back-end architectures (Laravel, Node.js). Passionate about writing clean, maintainable code and heavily leveraging AI coding workflows to accelerate development cycles and solve complex architectural challenges.",
};

export const experiences: ExperienceItem[] = [
  {
    id: "rotinsulu",
    company: "Rumah Sakit Paru Dr. H.A. Rotinsulu",
    role: "Full-Stack Developer",
    location: "Bandung, West Java",
    period: "September 2026 – Present",
    highlights: [
      "Engineered new core modules: Developed and deployed a comprehensive Ultrasound (USG) Results Module from scratch, designing database schema and enabling historical patient tracking via Medical Record IDs.",
      "Architected robust data integrations: Developed a resilient laboratory result data model with API fallback mechanism, ensuring seamless data retrieval from both internal databases and external services via Order Numbers (ONO).",
      "Optimized Electronic Medical Records (RME): Modernized RME and inpatient Early Warning System (EWS) by refactoring UI components and implementing dynamic data population.",
      "Streamlined clinical workflows: Enhanced external document upload capabilities, refined pharmacy notification templates, and automated PDF generation for patient resumes directly from database.",
      "Ensured system compliance: Conducted rigorous functional testing for critical third-party integrations, including ASPI payment gateway.",
    ],
  },
  {
    id: "ma-pesantren",
    company: "MA Pesantren Pembangunan Majenang",
    role: "Full-Stack Developer (Project-Based)",
    location: "Majenang, Central Java",
    period: "August 2024 – August 2026",
    highlights: [
      "Developed Web Platforms: Architected and deployed student admission system (PMB) and official school landing page utilizing React.js, Vue.js, TypeScript, Tailwind CSS, Prisma ORM, and MySQL.",
      "Engineered Mobile Security Solutions: Built mobile examination security app (CBT/Kiosk mode) across Android, iOS, and Web using Flutter to ensure exam integrity.",
      "Maintained Core Systems: Performed system maintenance and bug fixing for web-based student administration system (E-SOP).",
      "Managed IT Infrastructure: Administered local servers and database systems for Computer-Based Testing (CBT).",
    ],
  },
  {
    id: "rsu-raffa",
    company: "Rumah Sakit Umum Raffa Majenang",
    role: "Information Technology Specialist",
    location: "Majenang, Central Java",
    period: "November 2021 – June 2023",
    highlights: [
      "Drove digital transformation: Executed zero-data-loss migration of patient records, pharmacy inventories, and financial data from legacy SIMRS Desktop to modern web-based SIMRS-GOS.",
      "Achieved compliance standards: Spearheaded IT infrastructure optimizations, ensuring hospital met strict medical compliance to achieve Plenary Accreditation (Akreditasi Paripurna).",
      "Managed CI/CD deployments: Handled deployment lifecycle of SIMRS-GOS system, testing vendor updates in Development before staging and production.",
      "Accelerated data reporting: Optimized complex SQL queries to significantly speed up processing and delivery of operational and managerial hospital reports.",
    ],
  },
  {
    id: "campus-data-media",
    company: "Campus Data Media",
    role: "Web Developer Intern",
    location: "Semarang, Central Java",
    period: "January 2020 – February 2020",
    highlights: [
      "Developed core features for web-based SDI psychological test application using Laravel and JavaScript.",
      "Implemented dynamic data visualization for test results using JavaScript Canvas to present interactive score reports.",
    ],
  },
  {
    id: "udinus-assistant",
    company: "Universitas Dian Nuswantoro",
    role: "Computer Lab Assistant",
    location: "Semarang, Central Java",
    period: "March 2020",
    highlights: [
      "Collaborated with Head of Laboratory to configure hardware and software infrastructure, providing real-time technical troubleshooting for students during practicum sessions.",
    ],
  },
];

export const educations: EducationItem[] = [
  {
    id: "udinus",
    institution: "Universitas Dian Nuswantoro",
    degree: "Bachelor of Computer Science (S.Kom) in Informatics Engineering",
    period: "2017 – 2021",
    gpa: "3.34 / 4.00",
    description:
      "Comprehensive education in software engineering, database systems, algorithm optimization, and web application architecture.",
  },
  {
    id: "purwadhika",
    institution: "Purwadhika Digital Technology School",
    degree: "Full Stack Web Development Bootcamp",
    period: "2023 – 2024",
    description:
      "Intensive practical training focusing on modern full-stack ecosystem: React, Next.js, Node.js, Express, ORM, RESTful API design, and agile development.",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    skills: ["Vue.js", "React.js", "Next.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3"],
  },
  {
    category: "Backend & Cloud",
    skills: ["PHP", "Laravel", "Node.js", "Express.js", "RESTful APIs", "Firebase"],
  },
  {
    category: "Databases & ORM",
    skills: ["PostgreSQL", "MySQL", "Prisma ORM", "Sequelize", "SQL Optimization"],
  },
  {
    category: "Mobile & Other Languages",
    skills: ["Flutter", "Dart", "JavaScript", "Python"],
  },
  {
    category: "Tools, AI & Methodologies",
    skills: ["Agentic AI Workflows", "Git / GitHub", "Postman", "CI/CD", "Agile / Scrum", "Jira"],
  },
];

export const toolItems: ToolItem[] = [
  { name: "VS Code", imgPath: "/about/vscode.svg" },
  { name: "GitHub", imgPath: "/about/github.svg" },
  { name: "Postman", imgPath: "/about/postman.svg" },
  { name: "Jira", imgPath: "/about/jira.svg" },
  { name: "Figma", imgPath: "/about/figma.svg" },
];

export const certifications: CertificationItem[] = [
  {
    title: "Full Stack Web Development",
    issuer: "Purwadhika Digital Technology School",
    year: "2024",
  },
  {
    title: "JavaScript (Basic), React (Basic), SQL (Basic)",
    issuer: "HackerRank",
    year: "2024",
  },
];
