"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";
import { projectsData } from "@/data/projects";

const categories = [
  "all projects",
  "full-stack",
  "laravel",
  "frontend",
  "mobile",
  "system",
] as const;

type CategoryType = (typeof categories)[number];

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryType>("all projects");

  const filteredProjects = projectsData.filter((project) =>
    selectedCategory === "all projects"
      ? true
      : project.category === selectedCategory
  );

  return (
    <section className="min-h-screen pt-12 pb-24">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h1 className="section-title mb-4 mx-auto">
            My Projects
          </h1>
          <p className="subtitle max-w-lg mx-auto">
            A comprehensive showcase of web platforms, enterprise systems, and
            mobile applications developed with modern engineering standards.
          </p>
        </div>

        <Tabs
          defaultValue="all projects"
          value={selectedCategory}
          onValueChange={(val) => setSelectedCategory(val as CategoryType)}
          className="mb-16"
        >
          <div className="overflow-x-auto pb-2 mb-8 flex justify-center">
            <TabsList className="inline-flex h-auto p-1.5 rounded-xl border dark:border-border/40 bg-muted/50">
              {categories.map((cat) => (
                <TabsTrigger
                  key={cat}
                  value={cat}
                  className="capitalize py-2 px-4 text-xs sm:text-sm font-medium rounded-lg whitespace-nowrap"
                >
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value={selectedCategory}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <div key={project.id} className="h-full">
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-16 text-muted-foreground">
                No projects found in this category.
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProjectsPage;
