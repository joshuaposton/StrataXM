import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Users, Zap, Shield } from "lucide-react";

export function Values() {
  const values = [
    {
      title: "Excellence",
      description: "We are committed to delivering exceptional quality and value in everything we do.",
      icon: <CheckCircle className="h-8 w-8 text-[#4CD964]" />
    },
    {
      title: "Collaboration",
      description: "We work closely with our clients, building partnerships based on trust and mutual success.",
      icon: <Users className="h-8 w-8 text-[#3B82F6]" />
    },
    {
      title: "Innovation",
      description: "We embrace creative thinking and cutting-edge approaches to solve complex challenges.",
      icon: <Zap className="h-8 w-8 text-[#4CD964]" />
    },
    {
      title: "Integrity",
      description: "We uphold the highest ethical standards and take responsibility for our actions and outcomes.",
      icon: <Shield className="h-8 w-8 text-[#3B82F6]" />
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-4 mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter gradient-text">Our Core Values</h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            The principles that guide our work and define our culture.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="text-center hover:shadow-md transition-all duration-200 group">
              <CardHeader className="pb-2">
                <div className="mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-200">{value.icon}</div>
                <CardTitle>{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{value.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}