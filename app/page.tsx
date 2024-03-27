// components
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
      <Hero />
      <About/>
      <Services/>
      <Work/>
      <Contact/>
      </div>
    </main>
  );
}
