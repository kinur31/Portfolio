"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";
import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";
import TypingEffect from "./TypingEffect";
import { personalInfo } from "@/data/profile";

const Hero = () => {
  const scrollToNextSection = () => {
    const section = document.getElementById("about");
    if (section) {
      const sectionMiddle = section.offsetTop + section.clientHeight / 6;
      const scrollToPosition = sectionMiddle - window.innerHeight / 4;
      window.scrollTo({
        top: scrollToPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="py-16 md:py-24 xl:pt-10 pt-4 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none"
    >
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-6">
          {/* text */}
          <div className="flex max-w-[640px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-lg md:text-xl font-semibold tracking-[3px] text-primary uppercase mb-2">
              Hello, I&apos;m
            </div>
            <h1 className="text-3xl font-extrabold md:text-5xl xl:text-5xl leading-tight mb-2">
              {personalInfo.name}
            </h1>
            <TypingEffect />
            <p className="subtitle max-w-[600px] pt-3 xl:max-w-[540px] mx-auto xl:mx-0 text-muted-foreground leading-relaxed">
              {personalInfo.summary}
            </p>
            <div className="flex items-center gap-x-3 mx-auto xl:mx-0 mb-4">
              <span className="font-semibold text-primary">Connect:</span>
              <Socials
                containerStyles="flex gap-x-3"
                iconsStyles="text-foreground text-[22px] hover:text-primary transition-colors"
              />
            </div>
            {/* buttons */}
            <div className="flex flex-col gap-y-3 sm:flex-row gap-x-3 mx-auto xl:mx-0 mb-12 xl:mb-20">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact Me <Send size={18} />
                </Button>
              </Link>
              <a
                href={personalInfo.cvPath}
                download="CV-Rizky-Noor-Ichwanudin.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary" className="gap-x-2 w-full sm:w-auto">
                  Download CV <Download size={18} />
                </Button>
              </a>
            </div>
          </div>
          {/* image & badges */}
          <div className="hidden xl:flex relative">
            {/* badge 1 */}
            <Badge
              containerStyles="absolute top-[18%] -left-[4.5rem]"
              icon={<RiBriefcase4Fill />}
              endCountNum={4}
              endCountText="+"
              badgeText="Years Experience"
            />
            {/* badge 2 */}
            <Badge
              containerStyles="absolute top-[80%] -left-[1rem]"
              icon={<RiTodoFill />}
              endCountNum={8}
              endCountText="+"
              badgeText="Finished Projects"
            />
            {/* badge 3 */}
            <Badge
              containerStyles="absolute top-[54%] -right-2"
              icon={<RiTeamFill />}
              endCountNum={100}
              endCountText="%"
              badgeText="Client Satisfaction"
            />
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
            <DevImg
              containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
              imgSrc="/hero/boy.png"
            />
          </div>
        </div>
        {/* scroll indicator button */}
        <button
          type="button"
          aria-label="Scroll down to About section"
          className="hidden md:flex absolute left-2/4 bottom-12 xl:bottom-8 animate-bounce cursor-pointer p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
          onClick={scrollToNextSection}
        >
          <RiArrowDownSLine className="text-3xl text-primary" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
