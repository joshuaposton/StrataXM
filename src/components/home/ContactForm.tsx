
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, CheckCircle } from "lucide-react";

export function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: "",
        email: "",
        company: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-[#4CD964]/5 to-[#3B82F6]/5">
      <div className="container px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Get in Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Ready to discuss how StrataXM can help transform your business? Reach out to us today.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Card className="border border-border/40 shadow-sm">
            {isSubmitted ? (
              <CardContent className="pt-6 flex flex-col items-center text-center space-y-4">
                <CheckCircle className="h-16 w-16 text-primary mb-2" />
                <CardTitle className="text-2xl">Thank You!</CardTitle>
                <p className="text-muted-foreground">
                  Your message has been sent successfully. We'll get back to you shortly.
                </p>
                <Button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4"
                >
                  Send Another Message
                </Button>
              </CardContent>
            ) : (
              <>
                <CardHeader>
                  <CardTitle className="text-xl">Contact Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Full Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium">
                        Company
                      </label>
                      <Input
                        id="company"
                        name="company"
                        value={formState.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        rows={5}
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-[#4CD964] to-[#3B82F6] hover:opacity-90 transition-opacity"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          Send Message <Send className="ml-2 h-4 w-4" />
                        </span>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
}
