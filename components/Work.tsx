"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ProjectCard from "./ProjectCard";
import { ProjectData } from "../app/projects/projectData";

const Work = () => {
  return (
    <section
      id="project"
      className="flex flex-col items-center justify-center gap-3 h-full relative py-20"
    >
      <div className="container mx-auto flex flex-col xl:flex-row xl:items-start">
        <div className=" max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <Link href="/projects">
            <Button>All Projects</Button>
          </Link>
        </div>
        <div className="xl:max-w-[800px]">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
            }}
            spaceBetween={30}
            modules={[Pagination, Autoplay, Navigation]}
            autoplay={{ delay: 3500 }}
            pagination={{ clickable: true }}
            navigation={true}
          >
            {ProjectData.slice(0, 4).map((project, index) => (
              <SwiperSlide key={index}>
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
