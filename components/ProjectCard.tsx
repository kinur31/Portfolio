import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Link2Icon } from "lucide-react";

interface ProjectCardProps {
  project: {
    image: string;
    name: string;
    description: string;
    link: string;
    category: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { image, name, description, link, category } = project;

  return (
    <Card className="group overflow-hidden relative">
      <CardHeader className="p-0">
        <div className="relative w-full h-[300px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden">
          <Image
            className="absolute bottom-0 shadow-2xl"
            src={image}
            width={247}
            height={250}
            alt=""
            priority
          />
          <div>
            {link !== "" && link !== "#" ? (
              <Link
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
              >
                <Link2Icon className="text-white" />
              </Link>
            ) : null}
          </div>
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5">
          {category}
        </Badge>
        <h4 className="h4 mb-1 font-bold">{name}</h4>
        <p className="text-muted-foreground text-lg">{description}</p>{" "}
      </div>
    </Card>
  );
};

export default ProjectCard;
