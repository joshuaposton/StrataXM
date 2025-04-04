
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BarChart3, Layers, Lightbulb, Target, Workflow, Database, Users, Zap } from "lucide-react";
import Link from "next/link";

export function Services() {
  const services = [
    {
      title: "Program Design & Strategy",
      description: "Comprehensive evaluation and strategic planning for your experience management initiatives.",
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
      href: "/services/program-design",
      features: [
        "Platform evaluation and roadmap development",
        "Advanced data architecture and journey mapping",
        "Governance and change management planning"
      ]
    },
    {
      title: "Implementation & Integration",
      description: "Seamless execution and integration of experience management solutions across your organization.",
      icon: <Workflow className="h-10 w-10 text-primary" />,
      href: "/services/implementation",
      features: [
        "Full-service Qualtrics builds",
        "Custom workflows and system integrations",
        "Feedback capture across all channels"
      ]
    },
    {
      title: "Optimization & Expansion",
      description: "Enhance and scale your experience management programs for maximum impact and ROI.",
      icon: <Target className="h-10 w-10 text-primary" />,
      href: "/services/optimization",
      features: [
        "Program enhancements and scaling strategies",
        "XM Center of Excellence setup",
        "Hands-on enablement and ongoing support"
      ]
    },
    {
      title: "Real-Time Experience Activation",
      description: "Transform data into actionable insights and personalized experiences that drive business results.",
      icon: <Zap className="h-10 w-10 text-primary" />,
      href: "/services/experience-activation",
      features: [
        "Unify data into a single customer view",
        "Surface insights and automate actions",
        "Orchestrate personalized experiences at key journey moments"
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="container px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-4 mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Comprehensive experience management solutions tailored to your organization's unique needs and challenges.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-md transition-all duration-200 h-full">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <CardDescription className="text-base">{service.description}</CardDescription>
                
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <div className="mr-2 mt-1 flex-shrink-0">
                        <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-sm text-muted-foreground">{feature}</p>
                    </div>
                  ))}
                </div>
                
                <Link 
                  href={service.href}
                  className="inline-flex items-center text-sm font-medium text-primary group-hover:underline"
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
