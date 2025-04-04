import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-16 md:py-24 gradient-bg text-white">
      <div className="container px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl">
            Partner with StrataXM to unlock new opportunities and drive sustainable growth for your organization.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-[#3B82F6] hover:bg-white/90" asChild>
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
