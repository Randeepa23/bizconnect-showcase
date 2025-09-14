import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import heroIllustration from "@/assets/hero-illustration.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Modern Gradient */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-primary rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-24 h-24 bg-accent/30 rounded-full animate-bounce"></div>
      <div className="absolute top-1/2 left-10 w-16 h-16 bg-primary/20 rounded-full animate-ping"></div>
      
      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content - Left Side */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-primary-foreground leading-tight animate-fade-in drop-shadow-lg">
                Grow Your Business with a{" "}
                <span className="bg-gradient-to-r from-accent via-accent/90 to-accent/70 bg-clip-text text-transparent animate-pulse font-black drop-shadow-lg">
                  Professional Website!
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl lg:text-3xl text-primary-foreground font-semibold leading-relaxed max-w-2xl animate-fade-in drop-shadow-md bg-black/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                At BizConnect, we create modern, user-friendly, and affordable websites 
                that help your business stand out online.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-scale-in">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4 text-lg rounded-xl shadow-glow hover:shadow-soft hover:scale-105 transition-all duration-300 group"
                asChild
              >
                <a href="mailto:avithariyawansa207@gmail.com?subject=Website%20Development%20Inquiry&body=Hi%20Randeepa,%0A%0AI'm%20interested%20in%20creating%20a%20website%20for%20my%20business.%20Please%20get%20in%20touch%20with%20me.%0A%0AThank%20you!">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
                </a>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8 py-4 text-lg rounded-xl backdrop-blur-sm hover:scale-105 transition-all duration-300 group"
                asChild
              >
                <a href="#portfolio">
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-smooth" />
                  View Our Work
                </a>
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-primary-foreground/80 text-sm animate-fade-in">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <span>Fast Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <span>SEO Optimized</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <span>Mobile Responsive</span>
              </div>
            </div>
          </div>
          
          {/* Hero Illustration - Right Side */}
          <div className="relative animate-fade-in">
            <div className="relative">
              <img 
                src={heroIllustration} 
                alt="Professional website development workspace showcasing modern design" 
                className="rounded-3xl shadow-soft w-full h-auto transform hover:scale-105 transition-all duration-500"
              />
              
              {/* Floating Card Elements */}
              <div className="absolute -top-6 -left-6 bg-card/90 backdrop-blur-md rounded-2xl p-4 shadow-glow animate-bounce">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-foreground">Live Website</span>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-card/90 backdrop-blur-md rounded-2xl p-4 shadow-glow animate-pulse">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">100%</div>
                  <div className="text-xs text-muted-foreground">Satisfaction</div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-primary rounded-full opacity-30 animate-ping"></div>
              <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-accent/40 rounded-full animate-bounce"></div>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary-foreground/70 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-xs uppercase tracking-wider">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;