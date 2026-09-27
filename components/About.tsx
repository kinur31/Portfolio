"use client";

import DevImg from "./DevImg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Briefcase,
  Award,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";
import {
  personalInfo,
  experiences,
  educations,
  skillCategories,
  toolItems,
  certifications,
} from "@/data/profile";

const infoData = [
  { icon: <User2 size={20} />, text: personalInfo.name },
  { icon: <MailIcon size={20} />, text: personalInfo.email },
  { icon: <PhoneCall size={20} />, text: personalInfo.phone },
  { icon: <GraduationCap size={20} />, text: personalInfo.degree },
  { icon: <HomeIcon size={20} />, text: personalInfo.location },
];

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center gap-3 h-full relative py-16 xl:py-24"
    >
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-12 text-center mx-auto">
          About Me
        </h2>
        <div className="flex flex-col xl:flex-row items-center gap-x-12">
          {/* Developer Half-Body Portrait */}
          <div className="hidden xl:flex flex-1 relative justify-center items-center">
            {/* Background Shape Accent */}
            <div className="bg-about_shape_light dark:bg-about_shape_dark w-[480px] h-[480px] bg-no-repeat absolute -z-0 opacity-70" />
            {/* Elegant Half-Body Card */}
            <div className="relative w-[360px] h-[480px] rounded-3xl overflow-hidden border-2 border-border/60 dark:border-border/40 shadow-2xl z-10 bg-card">
              <Image
                src="/about/developer-half-body.jpg"
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 360px"
                className="object-cover object-center hover:scale-105 transition-transform duration-500"
                alt="Rizky Noor Ichwanudin"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white z-20">
                <p className="text-xs uppercase font-semibold tracking-wider text-primary">
                  Full-Stack Developer
                </p>
                <p className="text-base font-bold text-white">Rizky Noor Ichwanudin</p>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex-1 w-full">
            <Tabs defaultValue="experience" className="w-full">
              <TabsList className="w-full grid grid-cols-2 md:grid-cols-4 max-w-[560px] border dark:border-border/40 p-1 rounded-xl">
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="skills">Skills & Tools</TabsTrigger>
                <TabsTrigger value="personal-info">Profile</TabsTrigger>
              </TabsList>

              {/* Tabs Content */}
              <div className="text-base mt-8 xl:mt-8">
                {/* Experience */}
                <TabsContent value="experience">
                  <div className="space-y-6">
                    <div className="flex items-center gap-x-3 text-primary text-xl font-bold">
                      <Briefcase size={24} />
                      <h3>Professional Work Experience</h3>
                    </div>
                    <div className="flex flex-col gap-y-6 max-h-[460px] overflow-y-auto pr-3">
                      {experiences.map((exp) => (
                        <div
                          key={exp.id}
                          className="flex gap-x-6 p-4 rounded-xl border border-border/50 bg-card/60 hover:border-primary/50 transition-colors"
                        >
                          <div className="h-full w-[2px] bg-primary/40 relative mt-1">
                            <div className="h-3 w-3 rounded-full bg-primary absolute -left-[5px] top-0"></div>
                          </div>
                          <div className="space-y-2 flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                              <h4 className="font-bold text-lg text-foreground">
                                {exp.role}
                              </h4>
                              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary w-fit">
                                {exp.period}
                              </span>
                            </div>
                            <div className="text-sm font-medium text-muted-foreground">
                              {exp.company} &bull; {exp.location}
                            </div>
                            <ul className="list-disc list-outside pl-4 space-y-1 text-sm text-foreground/80 pt-1">
                              {exp.highlights.slice(0, 3).map((item, idx) => (
                                <li key={idx} className="leading-snug">
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                {/* Education & Certifications */}
                <TabsContent value="education">
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <div className="flex items-center gap-x-3 text-primary text-xl font-bold">
                        <GraduationCap size={24} />
                        <h3>Education</h3>
                      </div>
                      <div className="grid gap-4">
                        {educations.map((edu) => (
                          <div
                            key={edu.id}
                            className="p-5 rounded-xl border border-border/50 bg-card/60"
                          >
                            <div className="flex justify-between items-start gap-2 mb-1">
                              <h4 className="font-bold text-lg text-foreground">
                                {edu.institution}
                              </h4>
                              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                                {edu.period}
                              </span>
                            </div>
                            <p className="font-medium text-primary text-sm mb-1">
                              {edu.degree}
                            </p>
                            {edu.gpa && (
                              <p className="text-xs text-muted-foreground font-semibold">
                                GPA: {edu.gpa}
                              </p>
                            )}
                            {edu.description && (
                              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                                {edu.description}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4 pt-2">
                      <div className="flex items-center gap-x-3 text-primary text-lg font-bold">
                        <Award size={22} />
                        <h4>Licenses & Certifications</h4>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {certifications.map((cert, index) => (
                          <div
                            key={index}
                            className="p-4 rounded-lg border border-border/40 bg-card/40 flex items-start gap-3"
                          >
                            <CheckCircle2 size={18} className="text-primary mt-0.5 shrink-0" />
                            <div>
                              <div className="font-semibold text-sm text-foreground">
                                {cert.title}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {cert.issuer} &bull; {cert.year}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Skills & Tools */}
                <TabsContent value="skills">
                  <div className="space-y-6">
                    <div className="grid gap-4">
                      {skillCategories.map((cat, idx) => (
                        <div key={idx} className="space-y-2">
                          <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                            {cat.category}
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {cat.skills.map((skill, sIdx) => (
                              <span
                                key={sIdx}
                                className="px-3 py-1.5 rounded-lg text-xs font-medium bg-secondary text-secondary-foreground border border-border/30 hover:border-primary/60 transition-colors"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-border/50">
                      <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                        Everyday Tools
                      </h4>
                      <div className="flex flex-wrap gap-4 items-center">
                        {toolItems.map((tool, index) => (
                          <div
                            key={index}
                            className="group relative flex flex-col items-center p-2 rounded-lg bg-card/60 border border-border/40 hover:border-primary/50 transition-all hover:scale-105"
                          >
                            <Image
                              src={tool.imgPath}
                              width={40}
                              height={40}
                              alt={tool.name}
                              className="object-contain"
                            />
                            <span className="text-[11px] font-medium text-muted-foreground mt-1">
                              {tool.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Personal Profile (NO Date of Birth) */}
                <TabsContent value="personal-info">
                  <div className="space-y-6">
                    <div>
                      <h3 className="h3 mb-2">Full-Stack Web & Mobile Engineer</h3>
                      <p className="subtitle max-w-xl leading-relaxed mb-6">
                        Passionate about writing clean, maintainable, scalable code
                        and architecting robust data models for mission-critical
                        platforms.
                      </p>
                    </div>

                    {/* Icons Profile (Filtered - No Birth Date) */}
                    <div className="grid sm:grid-cols-2 gap-4 gap-x-8 mb-6">
                      {infoData.map((item, index) => (
                        <div
                          className="flex items-center gap-x-4 p-3 rounded-lg border border-border/40 bg-card/40"
                          key={index}
                        >
                          <div className="text-primary p-2 rounded-md bg-primary/10">
                            {item.icon}
                          </div>
                          <div className="text-sm font-medium text-foreground truncate">
                            {item.text}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Language Skills */}
                    <div className="p-4 rounded-xl border border-border/50 bg-card/60">
                      <div className="text-xs uppercase font-semibold text-primary mb-1">
                        Language Proficiency
                      </div>
                      <div className="text-sm font-medium text-foreground">
                        Indonesian (Native) &bull; English (Professional Working Proficiency)
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
