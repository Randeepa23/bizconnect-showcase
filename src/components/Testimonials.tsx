import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Real feedback from satisfied customers
          </p>
        </div>
        
        <Card className="bg-gradient-card border-0 shadow-glow max-w-2xl mx-auto">
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
      </div>
    </section>
  );
};

export default Testimonials;