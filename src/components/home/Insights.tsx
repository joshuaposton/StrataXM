import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export function Insights() {
  const insights = [
    {
      title: "The Future of Digital Transformation in 2025",
      excerpt: "Explore emerging trends and technologies shaping the next wave of digital innovation.",
      date: "April 2, 2025",
      href: "/insights/digital-transformation-2025"
    },
    {
      title: "Building Resilient Organizations in Uncertain Times",
      excerpt: "Strategies for developing adaptable and resilient business models in a rapidly changing environment.",
      date: "March 18, 2025",
      href: "/insights/building-resilient-organizations"
    },
    {
      title: "Data-Driven Decision Making: A Strategic Advantage",
      excerpt: "How leveraging data analytics can provide a competitive edge in today's market landscape.",
      date: "March 5, 2025",
      href: "/insights/data-driven-decision-making"
    }
  ];

  return (
    <section className='py-16 md:py-24'>
      <div className='container px-4 md:px-6 lg:px-8'>
        <div className='flex flex-col md:flex-row justify-between items-center mb-12 md:mb-16'>
          <div>
            <h2 className='text-3xl md:text-4xl font-bold tracking-tighter gradient-text mb-4'>Latest Insights</h2>
            <p className='text-xl text-muted-foreground max-w-2xl'>
              Thought leadership and industry perspectives from our experts.
            </p>
          </div>
          <Button variant='outline' className='mt-4 md:mt-0 border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6]/10' asChild>
            <Link href='/insights'>View All Insights</Link>
          </Button>
        </div>
        
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {insights.map((insight, index) => (
            <Card key={index} className='h-full flex flex-col hover:shadow-md transition-all duration-200 group'>
              <CardHeader>
                <CardTitle className='line-clamp-2 group-hover:text-[#4CD964] transition-colors'>{insight.title}</CardTitle>
              </CardHeader>
              <CardContent className='flex-1'>
                <p className='text-muted-foreground mb-2'>{insight.excerpt}</p>
                <p className='text-sm text-muted-foreground'>{insight.date}</p>
              </CardContent>
              <CardFooter>
                <Link 
                  href={insight.href}
                  className='inline-flex items-center text-sm font-medium text-[#3B82F6] hover:text-[#4CD964] transition-colors'
                >
                  Read more <ArrowRight className='ml-1 h-4 w-4' />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}