"use client";
import { forwardRef, Ref, useRef } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";

interface FormProps {
  className?: string;
}

const Form = forwardRef(
  ({ className }: FormProps, ref: Ref<HTMLDivElement>) => {
    return (
      <section id="contact-form" ref={ref} className={className}>
        <form action="" className="flex flex-col gap-y-4">
          <div className="relative flex items-center">
            <Input type="name" id="name" placeholder="Name"></Input>
            <User className="absolute right-6" size={20} />
          </div>
          <div className="relative flex items-center">
            <Input type="name" id="name" placeholder="Email"></Input>
            <MailIcon className="absolute right-6" size={20} />
          </div>
          <div className="relative flex items-center">
            <Textarea placeholder="Type Your Message Here" />
            <MessageSquare className="absolute top-4 right-6" />
          </div>
          <Button className="flex items-center gap-x-1 max-w-[166px]">
            Let's Talk
            <ArrowRightIcon size={20} />
          </Button>
        </form>
      </section>
    );
  }
);

export default Form;
