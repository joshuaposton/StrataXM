import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      quote: "StrataXM's strategic guidance transformed our approach to digital innovation, resulting in a 40% increase in operational efficiency.",
      author: "Sarah Johnson",
      title: "CTO, TechVision Inc."
    },
    {
      quote: "Working with StrataXM has been a game-changer for our organization. Their insights and solutions have accelerated our growth trajectory.",
      author: "Michael Chen",
      title: "CEO, Nexus Group"
    },
    {
      quote: "The team at StrataXM delivered exceptional results that exceeded our expectations. Their expertise and dedication are unmatched.",
      author: "Emily Rodriguez",
      title: "COO, Elevate Solutions"
    }
  ];

  return (
    <section className='relative py-16 md:py-24 bg-gradient-to-r from-[#4CD964]/5 to-[#3B82F6]/5'>
      <div className='container px-4 md:px-6 lg:px-8'>
        <div className='flex flex-col items-center text-center space-y-4 mb-12 md:mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold tracking-tighter gradient-text'>Client Testimonials</h2>
          <p className='text-xl text-muted-foreground max-w-2xl'>
            Hear what our clients have to say about their experience working with StrataXM.
          </p>
        </div>
        
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {testimonials.map((testimonial, index) => (
            <Card key={index} className='h-full flex flex-col hover:shadow-md transition-all duration-200'>
              <CardContent className='pt-6 flex-1'>
                <Quote className='h-8 w-8 text-[#4CD964]/40 mb-4' />
                <p className='text-lg italic'>{testimonial.quote}</p>
              </CardContent>
              <CardFooter className='border-t pt-4'>
                <div>
                  <p className='font-medium'>{testimonial.author}</p>
                  <p className='text-sm text-muted-foreground'>{testimonial.title}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}