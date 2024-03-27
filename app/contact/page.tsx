"use client"
import Form from "@/components/Form";
import { MailIcon, HomeIcon, PhoneCall } from "lucide-react";
import { RiArrowDownSLine } from "react-icons/ri";
import { useRef } from "react";

const Contact = () => {
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
    <section>
      <div className="container mx-auto">
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Say Hello
            </div>
            <h1 className="h1 max-w-md mb-8">Let's Work Together.</h1>
            <p className="subtitle max-w-[400px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Quisquam esse laborum iste necessitatibus cupiditate, officiis
              reiciendis saepe modi alias doloremque atque reprehenderit sint
              voluptatem ad ex debitis, dolore vel ratione!
            </p>
          </div>
          <div className="hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat" />
        </div>
        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
          <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className="text-primary" />
              <div>rizky.noor.ichwanudin@gmail.com</div>
            </div>
            <div className="flex items-center gap-x-8">
              <HomeIcon size={18} className="text-primary" />
              <div>53256, Central Java, Cilacap</div>
            </div>
            <div className="flex items-center gap-x-8">
              <PhoneCall size={18} className="text-primary" />
              <div>+62 821 3030 2343</div>
            </div>
          </div>
          <div
            className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce cursor-pointer"
            onClick={scrollToForm}
          >
            <RiArrowDownSLine className="text-3xl text-primary" />
          </div>
          <Form ref={formRef} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
