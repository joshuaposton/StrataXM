import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative py-20 md:py-28 lg:py-32 overflow-hidden">
      <div className="container px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              <span className="gradient-text">Strategic Solutions</span> for Complex Challenges
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              StrataXM helps organizations navigate complexity and drive meaningful transformation through innovative strategies and solutions.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-gradient-to-r from-[#4CD964] to-[#3B82F6] hover:opacity-90 transition-opacity" asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6]/10" asChild>
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
    </section>
  );
}