import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import testimonialIllustration from "@/assets/testimonial-illustration.jpg";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Real feedback from satisfied customers
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Testimonial Card */}
          <Card className="bg-gradient-card border-0 shadow-glow">
            <CardContent className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-6">
                <Quote className="h-8 w-8 text-primary-foreground" />
              </div>
              
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-accent fill-current" />
                ))}
              </div>
              
              <blockquote className="text-lg sm:text-xl text-foreground mb-6 leading-relaxed font-medium">
                "BizConnect built us a stylish and functional website that perfectly represents our café. 
                Customers love it and we've seen a significant increase in online orders!"
              </blockquote>
              
              <div className="border-t pt-4">
                <cite className="text-primary font-semibold text-lg">Rio Café</cite>
                <p className="text-muted-foreground text-sm mt-1">
                  Coffee Shop & Bakery
                </p>
              </div>
            </CardContent>
          </Card>
          
          {/* Testimonial Illustration */}
          <div className="flex justify-center">
            <div className="relative">
              <img 
                src={testimonialIllustration} 
                alt="Customer testimonial illustration" 
                className="rounded-2xl shadow-elegant max-w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-accent/20 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;