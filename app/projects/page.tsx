"use client";
import { useState, useEffect, useRef } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

interface ProjectItem {
  image: string;
  category: string;
  name: string;
  description: string;
  link: string;
  github: string;
}

const ProjectData: ProjectItem[] = [
  {
    image: "/work/3.png",
    category: "reactJS",
    name: "EventIn",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "reactJS",
    name: "EventIn",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "laravel",
    name: "EventIn",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "reactJS",
    name: "EventIn",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "reactJS",
    name: "EventIn",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "reactJS",
    name: "EventIn",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    link: "/",
    github: "/",
  },
];

function getUniqueCategories(data: { category: string }[]): string[] {
  const uniqueCategoriesSet = new Set<string>();
  data.forEach((item) => uniqueCategoriesSet.add(item.category));
  const uniqueCategories = ["all projects"];
  uniqueCategoriesSet.forEach((category) => uniqueCategories.push(category));
  return uniqueCategories;
}

const Page = () => {
  const uniqueCategories = getUniqueCategories(ProjectData);
  const [categories, setCategories] = useState<string[]>(uniqueCategories);
  const [category, setCategory] = useState<string>("all projects");
  const firstTabRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Fokus pada tab pertama ketika komponen dimuat
    if (firstTabRef.current) {
      firstTabRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, []);

  const filteredProjects = ProjectData.filter((project) =>
    category === "all projects" ? project : project.category === category
  );

  return (
    <section className="min-h-screen pt-10">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-10 text-center mx-auto">
          My Projects
        </h2>
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <div className="overflow-x-auto">
            <TabsList className="flex whitespace-nowrap">
              {categories.map((cat, index) => (
                <TabsTrigger
                  onClick={() => setCategory(cat)}
                  value={cat}
                  key={index}
                  className={`capitalize py-2 px-4 min-w-[100px] lg:min-w-[152px] whitespace-nowrap ${
                    cat === "all projects" ? "w-[fit-content] md:w-[auto]" : ""
                  }`}
                  ref={index === 0 ? firstTabRef : null}
                >
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          <div
            className={`text-lg xl:mt-8 mx-auto grid ${
              filteredProjects.length < 3
                ? "grid-cols-1"
                : "grid-cols-3 lg:grid-cols-3"
            } gap-4`}
          >
            {filteredProjects.map((project, index) => (
              <TabsContent
                value={category}
                key={index}
                className="max-w-[400px] mx-auto"
              >
                <ProjectCard project={project} />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Page;
