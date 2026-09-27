export interface Project {
  id: string;
  name: string;
  description: string;
  category: "all projects" | "full-stack" | "laravel" | "frontend" | "mobile" | "system";
  image: string;
  link: string;
  githubUrl?: string;
  technologies: string[];
  featured?: boolean;
}
