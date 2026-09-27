import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 xl:py-28 bg-tertiary dark:bg-secondary/40">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="h2 max-w-2xl mb-4 leading-tight">
            Prepared to turn your vision into high-performance software?
          </h2>
          <p className="subtitle max-w-xl mb-8">
            Whether you need a modern web application, mobile solution, or system
            architecture review, I&apos;m ready to collaborate.
          </p>
          <Link href="/contact">
            <Button size="lg" className="gap-x-2">
              Contact Me <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
