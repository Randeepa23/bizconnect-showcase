import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Zap, Smartphone, Sparkles } from "lucide-react";
import aboutIllustration from "@/assets/about-illustration.jpg";

const About = () => {
  const features = [
    {
      icon: DollarSign,
      title: "Affordable Packages",
      description: "Budget-friendly solutions for every business size"
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Quick turnaround with reliable customer support"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "SEO-friendly and mobile-optimized websites"
    },
    {
      icon: Sparkles,
      title: "100% Custom",
      description: "Completely customized solutions for your needs"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Choose BizConnect
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Illustration */}
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="relative">
              <img 
                src={aboutIllustration} 
                alt="Professional web development illustration" 
                className="rounded-2xl shadow-elegant max-w-full h-auto"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-primary rounded-full opacity-20 animate-pulse"></div>
            </div>
          </div>
          
          {/* Text Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Hi, I'm Randeepa Ariyawansa, founder of BizConnect
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                I help businesses and individuals bring their ideas to life online. 
                A website is more than just design—it's your digital identity.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My mission is to create professional, responsive, and SEO-friendly websites that 
                attract customers and grow your business.
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-0 shadow-soft hover:shadow-glow transition-smooth hover:scale-105 group"
            >
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4 group-hover:scale-110 transition-smooth">
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;