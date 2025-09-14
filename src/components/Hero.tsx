import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import heroIllustration from "@/assets/hero-illustration.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Grow Your Business with a{" "}
              <span className="text-yellow-300">
                Professional Website!
              </span>
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed max-w-2xl">
              At BizConnect, we create modern, user-friendly, and affordable websites 
              that help your business stand out online.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-4 text-lg"
                asChild
              >
                <a href="mailto:avithariyawansa207@gmail.com?subject=Website%20Development%20Inquiry&body=Hi%20Randeepa,%0A%0AI'm%20interested%20in%20creating%20a%20website%20for%20my%20business.%20Please%20get%20in%20touch%20with%20me.%0A%0AThank%20you!">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-4 text-lg"
                asChild
              >
                <a href="#portfolio">
                  <Play className="mr-2 h-5 w-5" />
                  View Our Work
                </a>
              </Button>
            </div>
          </div>
          
          {/* Hero Illustration */}
          <div className="flex justify-center">
            <img 
              src={heroIllustration} 
              alt="Professional website development workspace" 
              className="rounded-2xl shadow-lg w-full max-w-md h-auto"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;