import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { image, name, description, link, githubUrl, category, technologies } =
    project;

  return (
    <Card className="group overflow-hidden relative flex flex-col justify-between h-full border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg">
      <div>
        <CardHeader className="p-0">
          <div className="relative w-full h-[220px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 overflow-hidden">
            <Image
              className={`${
                category === "mobile"
                  ? "object-contain p-2"
                  : "object-cover object-top"
              } group-hover:scale-105 transition-transform duration-300`}
              src={image}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt={`Screenshot of ${name}`}
            />
            {/* Quick Action Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
              {link && link !== "#" && (
                <Link
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View live demo of ${name}`}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground w-11 h-11 rounded-full flex justify-center items-center shadow-lg transition-transform hover:scale-110"
                >
                  <ExternalLink size={20} />
                </Link>
              )}
              {githubUrl && githubUrl !== "#" && (
                <Link
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View source code of ${name}`}
                  className="bg-secondary hover:bg-secondary/80 text-secondary-foreground w-11 h-11 rounded-full flex justify-center items-center shadow-lg transition-transform hover:scale-110"
                >
                  <Github size={20} />
                </Link>
              )}
            </div>
            <Badge className="uppercase text-xs font-semibold absolute top-3 left-3 shadow">
              {category}
            </Badge>
          </div>
        </CardHeader>
        <div className="p-5">
          <h4 className="font-bold text-lg leading-tight mb-2 group-hover:text-primary transition-colors">
            {name}
          </h4>
          <p className="text-muted-foreground text-sm line-clamp-3 mb-4 leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      <div className="px-5 pb-5 pt-0">
        <div className="flex flex-wrap gap-1.5 border-t border-border/40 pt-3">
          {technologies.slice(0, 4).map((tech, index) => (
            <span
              key={index}
              className="text-[11px] font-medium px-2 py-0.5 rounded bg-muted text-muted-foreground"
            >
              {tech}
            </span>
          ))}
          {technologies.length > 4 && (
            <span className="text-[11px] font-medium px-1.5 py-0.5 rounded bg-muted text-muted-foreground">
              +{technologies.length - 4}
            </span>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
