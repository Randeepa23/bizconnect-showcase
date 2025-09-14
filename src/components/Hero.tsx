import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import heroIllustration from "@/assets/hero-illustration.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in">
          Grow Your Business with a 
          <span className="block bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
            Professional Website!
          </span>
        </h1>
        
        <p className="text-lg sm:text-xl lg:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in">
          At BizConnect, we create modern, user-friendly, and affordable websites 
          that help your business stand out online.
        </p>
        
        <div className="flex flex-col items-center space-y-8">
          <Button 
            size="lg" 
            variant="secondary"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4 text-lg rounded-lg shadow-glow hover:shadow-soft transition-smooth group animate-scale-in"
            asChild
          >
            <a href="mailto:avithariyawansa207@gmail.com?subject=Website%20Development%20Inquiry&body=Hi%20Randeepa,%0A%0AI'm%20interested%20in%20creating%20a%20website%20for%20my%20business.%20Please%20get%20in%20touch%20with%20me.%0A%0AThank%20you!">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
            </a>
          </Button>
          
          {/* Hero Illustration */}
          <div className="relative mt-12 max-w-2xl mx-auto">
            <img 
              src={heroIllustration} 
              alt="Professional website development workspace" 
              className="rounded-2xl shadow-elegant w-full h-auto animate-fade-in"
            />
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-primary rounded-full opacity-30 animate-pulse"></div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary-foreground/70 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;