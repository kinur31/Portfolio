"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ProjectCard from "./ProjectCard";
import { projectsData } from "@/data/projects";

const Work = () => {
  return (
    <section
      id="project"
      className="flex flex-col items-center justify-center gap-3 h-full relative py-16 xl:py-24"
    >
      <div className="container mx-auto flex flex-col xl:flex-row xl:items-start gap-8">
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-8 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
            Explore a curated selection of full-stack platforms, mobile solutions,
            and healthcare information systems built with modern web technologies.
          </p>
          <Link href="/projects">
            <Button>View All Projects</Button>
          </Link>
        </div>
        <div className="w-full xl:max-w-[820px]">
          <Swiper
            className="h-[490px]"
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
            }}
            spaceBetween={24}
            modules={[Pagination, Autoplay, Navigation]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={true}
          >
            {projectsData.slice(0, 5).map((project) => (
              <SwiperSlide key={project.id} className="h-full pb-10">
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
