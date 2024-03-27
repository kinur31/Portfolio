import { GanttChartSquare, Blocks, Gem } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const servicesData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "Web Design",
    description:
      "I create visually stunning websites that align with your brand identity and engage your audience. From sleek designs to user-friendly interfaces, I ensure your online presence stands out.",
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "Web Development",
    description:
      "Leveraging Node.js and TypeScript, I build dynamic web applications that are robust and scalable. With a focus on performance, I develop backend solutions to handle complex data processing seamlessly.",
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "Full-stack App Development",
    description:
      "From ideation to deployment, I provide full-stack development services, covering both frontend and backend. Using Node.js for the backend, I create scalable APIs and implement business logic. On the frontend, I utilize modern JavaScript frameworks like React.js to deliver exceptional user experiences.",
  },
];

const Services = () => {
  return (
    <section
      id="service"
      className="flex flex-col items-center justify-center gap-3 h-full relative py-20"
    >
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
          My Services
        </h2>
        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {servicesData.map((item, index) => (
            <Card
              className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative"
              key={index}
            >
              <CardHeader className="text-primary absolute -top-[60px]">
                <div className="w-[140px] h-[80px] bg-blue-100 dark:bg-background flex justify-center items-center">
                  {item.icon}
                </div>
              </CardHeader>
              <CardContent className="text-center my-auto">
                <CardTitle className="mb-4">{item.title}</CardTitle>
                <CardDescription className="mb-4">
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
