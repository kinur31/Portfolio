"use client";
import DevImg from "./DevImg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

// Define interfaces
interface QualificationItem {
  title: string;
  data: (EducationItem | ExperienceItem | SkillItem | ToolItem)[];
} 

interface EducationItem {
  education: string;
  qualification: string;
  years: string;
}

interface ExperienceItem {
  company: string;
  role: string;
  years: string;
}

interface SkillItem {
  name: string;
}

interface ToolItem {
  imgPath: string;
  name: string;
}

const infoData = [
  { icon: <User2 size={20} />, text: "Rizky Noor Ichwanudin" },
  { icon: <PhoneCall size={20} />, text: "+62 821-3030-2343" },
  { icon: <MailIcon size={20} />, text: "rizky.noor.ichwanudin@gmail.com" },
  { icon: <Calendar size={20} />, text: "October 04, 1998" },
  { icon: <GraduationCap size={20} />, text: "Bachelor of Computer Science" },
  { icon: <HomeIcon size={20} />, text: "53256, Central Java, Cilacap" },
];

const qualificationData: QualificationItem[] = [
  {
    title: "education",
    data: [
      {
        education: "Purwadhika Digital Technology School",
        qualification: "Fullstack Web Development Bootcamp",
        years: "2023 - 2024",
      },
      {
        education: "Dian Nuswantoro University",
        qualification: "Bachelor of Computer Science",
        years: "2017 - 2021",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "Raffa Majenang General Hospital",
        role: "IT Support",
        years: "2021 - 2023",
      },
      {
        company: "Dian Nuswantoro University",
        role: "Laboratory Assistant",
        years: "2019 - 2019",
      },
      {
        company: "PT. Data Campus Media",
        role: "Internship",
        years: "2019 - 2019",
      },
    ],
  },
];

const skillData: QualificationItem[] = [
  {
    title: "skills",
    data: [
      { name: "Javascript, Typescript, React JS" },
      { name: "Node JS, Express JS, Rest API" },
      { name: "HTML, CSS, Tailwind, Chakra UI" },
      { name: "Git, MySQL, ORM, Redux, Jira" },
    ],
  },
  {
    title: "tools",
    data: [
      { imgPath: "/about/jira.svg", name: "Jira" },
      { imgPath: "/about/github.svg", name: "Github" },
      { imgPath: "/about/vscode.svg", name: "Visual Studio Code" },
      { imgPath: "/about/postman.svg", name: "Postman" },
    ],
  },
];

const getData = (
  arr: QualificationItem[],
  title: string
): QualificationItem | undefined => {
  return arr.find((item) => item.title === title);
};

const About = () => {
  const experienceData = getData(qualificationData, "experience");
  const educationData = getData(qualificationData, "education");
  const skillDataItem = getData(skillData, "skills");
  const toolData = getData(skillData, "tools");
  const [tooltipTexts, setTooltipTexts] = useState<string[]>(
    Array(toolData?.data.length).fill("")
  );

  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center gap-3 h-full relative py-35 xl:py-20"
    >
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-4 text-center mx-auto">
          About Me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* Image */}
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[475px] h-[475px] bg-no-repeat relative"
              imgSrc="/about/cat.png"
            />
          </div>
          {/* Tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal-info">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="personal-info"
                >
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualification"
                >
                  Qualification
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              {/* Tabs Content */}
              <div className="text-lg mt-12 xl:mt-8">
                {/* Personal */}
                <TabsContent value="personal-info">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">Providing good quality service</h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      With a focus on excellence and a commitment to quality
                      service, I bring a wealth of expertise honed over years of
                      dedicated practice.
                    </p>
                    {/* Icons */}
                    <div className="grid xl:grid-cols-2 gap-4 gap-x-12 mb-12">
                      {infoData.map((item, index) => (
                        <div
                          className="flex items-center gap-x-4 mx-auto xl:mx-0"
                          key={index}
                        >
                          <div className="text-primary">{item.icon}</div>
                          <div>{item.text}</div>
                        </div>
                      ))}
                    </div>
                    {/* Language */}
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language Skill</div>
                      <div className="border-b border-border"></div>
                      <div>English, Indonesia</div>
                    </div>
                  </div>
                </TabsContent>
                {/* Qualification */}
                <TabsContent value="qualification">
                  <div>
                    <h3 className="h3 mb-4 text-center xl:text-left">
                      My Awesome Journey
                    </h3>
                    <div className="grid md:grid-cols-2">
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {experienceData?.title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {experienceData?.data.map((item, index) => {
                            const expItem = item as ExperienceItem;
                            return (
                              <div className="flex gap-x-8 group" key={index}>
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className="h-[11px] w-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                </div>
                                <div>
                                  <div className="font-semibold text-xl leading-none mb-2">
                                    {expItem.company}
                                  </div>
                                  <div className="text-lg leading-none text-muted-foreground mb-4">
                                    {expItem.role}
                                  </div>
                                  <div className="text-base font-medium">
                                    {expItem.years}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">
                            {educationData?.title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {educationData?.data.map((item, index) => {
                            const eduItem = item as EducationItem;
                            return (
                              <div className="flex gap-x-8 group" key={index}>
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className="h-[11px] w-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                </div>
                                <div>
                                  <div className="font-semibold text-xl leading-none mb-2">
                                    {eduItem.education}
                                  </div>
                                  <div className="text-lg leading-none text-muted-foreground mb-4">
                                    {eduItem.qualification}
                                  </div>
                                  <div className="text-base font-medium">
                                    {eduItem.years}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">What I Use Everyday</h3>
                    <div className="mb-8">
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border mb-4"></div>
                      {skillDataItem?.data.map((item, index) => {
                        const { name } = item as SkillItem;
                        return (
                          <div
                            className="w-2/4 text-center xl:text-left mx-auto xl:mx-0"
                            key={index}
                          >
                            <div className="font-medium">{name}</div>
                          </div>
                        );
                      })}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2 xl:text-left">
                        Tools
                      </h4>
                      <div className="border-b border-border mb-4"></div>
                      <div className="flex gap-x-8 justify-center xl:justify-start">
                        {toolData?.data.map((item, index) => {
                          const { imgPath, name } = item as ToolItem;

                          return (
                            <div
                              className="relative"
                              key={index}
                              onMouseEnter={() => {
                                const updatedTooltipTexts = [...tooltipTexts];
                                updatedTooltipTexts[index] = name;
                                setTooltipTexts(updatedTooltipTexts);
                              }}
                              onMouseLeave={() => {
                                const updatedTooltipTexts = [...tooltipTexts];
                                updatedTooltipTexts[index] = "";
                                setTooltipTexts(updatedTooltipTexts);
                              }}
                            >
                              {tooltipTexts[index] && (
                                <div className="tooltip bg-gray-800 text-white text-xs rounded py-1 px-2 absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-full">
                                  {tooltipTexts[index]}
                                </div>
                              )}
                              <img
                                src={imgPath}
                                width={48}
                                height={48}
                                alt={`Tool ${index + 1}`}
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
