"use client";

import Form from "@/components/Form";
import { MailIcon, HomeIcon, PhoneCall } from "lucide-react";
import { RiArrowDownSLine } from "react-icons/ri";
import { useRef } from "react";
import { personalInfo } from "@/data/profile";

const ContactPage = () => {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    if (formRef.current) {
      const formTopOffset = formRef.current.offsetTop;
      const windowHeight = window.innerHeight;
      const scrollToPosition = formTopOffset - windowHeight / 4.5;
      window.scrollTo({ top: scrollToPosition, behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen pt-12 pb-24">
      <div className="container mx-auto">
        <div className="grid xl:grid-cols-2 pt-6 xl:h-[420px] mb-8 xl:mb-20">
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg font-semibold mb-3">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Get In Touch
            </div>
            <h1 className="h1 max-w-md mb-6 leading-tight">
              Let&apos;s Build Something Great Together.
            </h1>
            <p className="subtitle max-w-[480px] leading-relaxed">
              Have a project in mind, need full-stack architectural advice, or
              looking to expand your engineering team? Feel free to reach out
              via email, phone, or the contact form below.
            </p>
          </div>
          <div className="hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat" />
        </div>

        <div className="grid xl:grid-cols-2 gap-12 mb-20 xl:mb-28">
          <div className="flex flex-col gap-y-6 text-base xl:text-lg justify-center">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-x-6 p-4 rounded-xl border border-border/40 bg-card/40 hover:border-primary/60 transition-colors group"
            >
              <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                <MailIcon size={22} />
              </div>
              <div>
                <div className="text-xs text-muted-foreground uppercase font-semibold">
                  Email Me
                </div>
                <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                  {personalInfo.email}
                </div>
              </div>
            </a>

            <div className="flex items-center gap-x-6 p-4 rounded-xl border border-border/40 bg-card/40">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <HomeIcon size={22} />
              </div>
              <div>
                <div className="text-xs text-muted-foreground uppercase font-semibold">
                  Location
                </div>
                <div className="font-medium text-foreground">
                  {personalInfo.location}
                </div>
              </div>
            </div>

            <a
              href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, "")}`}
              className="flex items-center gap-x-6 p-4 rounded-xl border border-border/40 bg-card/40 hover:border-primary/60 transition-colors group"
            >
              <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                <PhoneCall size={22} />
              </div>
              <div>
                <div className="text-xs text-muted-foreground uppercase font-semibold">
                  Call / WhatsApp
                </div>
                <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                  {personalInfo.phone}
                </div>
              </div>
            </a>
          </div>

          <div className="relative">
            <button
              type="button"
              aria-label="Scroll to contact form"
              className="hidden md:flex absolute -top-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
              onClick={scrollToForm}
            >
              <RiArrowDownSLine className="text-3xl text-primary" />
            </button>
            <div ref={formRef}>
              <Form />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
