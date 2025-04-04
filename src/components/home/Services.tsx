import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BarChart3, Layers, Lightbulb, Target } from "lucide-react";
import Link from "next/link";

export function Services() {
  const services = [
    {
      title: "Strategic Consulting",
      description: "Expert guidance to navigate complex business challenges and identify growth opportunities.",
      icon: <Lightbulb className="h-10 w-10 text-[#4CD964]" />,
      href: "/services/consulting"
    },
    {
      title: "Data Analytics",
      description: "Transform raw data into actionable insights that drive informed decision-making.",
      icon: <BarChart3 className="h-10 w-10 text-[#3B82F6]" />,
      href: "/services/analytics"
    },
    {
      title: "Digital Transformation",
      description: "Modernize your operations and customer experiences through innovative digital solutions.",
      icon: <Layers className="h-10 w-10 text-[#4CD964]" />,
      href: "/services/transformation"
    },
    {
      title: "Performance Optimization",
      description: "Streamline processes and enhance efficiency to maximize organizational performance.",
      icon: <Target className="h-10 w-10 text-[#3B82F6]" />,
      href: "/services/optimization"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary/5">
      <div className="container px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-4 mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter gradient-text">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Comprehensive solutions tailored to your organization's unique needs and challenges.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-md transition-all duration-200 h-full border-t-4 border-t-transparent hover:border-t-[#4CD964]">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription>{service.description}</CardDescription>
                <Link 
                  href={service.href}
                  className="inline-flex items-center text-sm font-medium text-[#3B82F6] hover:text-[#4CD964] transition-colors"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}