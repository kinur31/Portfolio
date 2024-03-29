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
import { useEffect, useState } from "react";
import TypingEffect from "./TypingEffect";
import { useRouter } from "next/navigation";

const Hero = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const phrases = ["a software developer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setText((prev) => prev + phrases[0][index]);
      setIndex((prev) => prev + 1);
    }, 100);

    return () => clearInterval(interval);
  }, [index]);

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
      className="py-24 h-[84vh] xl:pt-10 pt-4 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none"
    >
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-6">
          {/* text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-xl font-semibold tracking-[4px]">
              {/* <div className="text-md uppercase font-semibold mb-2 text-primary tracking-[4px]"> */}
              Hello There!
            </div>
            <h1 className="text-3xl font-bold md:text-4xl xl:text-5xl">
              I'm Rizky Noor
            </h1>
            {/* <h2 className="h1 mb-4">
              a Software Developer
            </h2> */}
            <TypingEffect />
            <p className="subtitle max-w-[600px] pt-2 xl:max-w-[500px] mx-auto xl:mx-0 text-justify">
              Excited about software development, with a collaborative mindset
              towards projects and a strong motivation to make meaningful
              contributions. Enthusiastic about exploring fresh opportunities
              and emerging technologies.
            </p>
            <div className="flex gap-y-3 gap-x-3 mx-auto xl:mx-0">
              <span className="font-bold text-primary">Find Me On </span>
              {/* socials */}
              <Socials
                containerStyles="flex gap-x-3 mx-auto xl:mx-0 mb-4"
                iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
              />
            </div>
            {/* buttons */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-22">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact me <Send size={18} />
                </Button>
              </Link>
              <Link
                href="https://drive.google.com/file/d/1cHED6KRoF5272HW_6oahHFpzSHbKWziy/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary" className="gap-x-2">
                  Download CV <Download size={18} />
                </Button>
              </Link>
            </div>
          </div>
          {/* image */}
          <div className="hidden xl:flex relative">
            {/* badge 1 */}
            <Badge
              containerStyles="absolute top-[24%] -left-[5rem]"
              icon={<RiBriefcase4Fill />}
              endCountNum={1}
              badgeText="Years of Experience"
            />
            {/* badge 2 */}
            <Badge
              containerStyles="absolute top-[80%] -left-[1rem]"
              icon={<RiTodoFill />}
              endCountNum={4}
              badgeText="Finished Projects"
            />
            {/* badge 3 */}
            <Badge
              containerStyles="absolute top-[55%] -right-8"
              icon={<RiTeamFill />}
              endCountNum={1}
              // endCountText="k"
              badgeText="Finished Projects"
            />
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
            <DevImg
              containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
              imgSrc="/hero/boy.png"
            />
          </div>
        </div>
        {/* icon */}
        <div
          className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce cursor-pointer"
          onClick={scrollToNextSection}
        >
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
