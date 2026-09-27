import { Layout, Server, Smartphone } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const servicesData = [
  {
    icon: <Layout size={52} strokeWidth={1.5} />,
    title: "Full-Stack Web Development",
    description:
      "Crafting high-performance, accessible, and responsive web applications utilizing React.js, Next.js, Vue.js, Node.js, and Laravel with clean architectural boundaries.",
  },
  {
    icon: <Server size={52} strokeWidth={1.5} />,
    title: "Enterprise & Healthcare Systems",
    description:
      "Architecting resilient data models, mission-critical API fallbacks, zero-data-loss migrations, and hospital information modules compliant with regulatory standards.",
  },
  {
    icon: <Smartphone size={52} strokeWidth={1.5} />,
    title: "Mobile Solutions & Secure APIs",
    description:
      "Developing secure cross-platform mobile applications with Flutter (including CBT/Kiosk exam environments) connected to scalable RESTful backend services.",
  },
];

const Services = () => {
  return (
    <section
      id="service"
      className="flex flex-col items-center justify-center gap-3 h-full relative py-16 xl:py-24"
    >
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-20 text-center mx-auto">
          My Services
        </h2>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 justify-center gap-8">
          {servicesData.map((item, index) => (
            <Card
              className="w-full flex flex-col p-6 justify-between items-center text-center border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg bg-card/60"
              key={index}
            >
              <CardHeader className="text-primary flex justify-center items-center p-0 mb-6">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex justify-center items-center text-primary">
                  {item.icon}
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <CardTitle className="mb-3 text-xl font-bold">
                  {item.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
