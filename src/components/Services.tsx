import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor, ShoppingCart, Search, Settings } from "lucide-react";
import servicesIllustration from "@/assets/services-illustration.jpg";

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: "Website Design & Development",
      description: "Beautiful and responsive websites designed to engage visitors and convert them into customers."
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Solutions",
      description: "Online stores that are simple to manage and designed to maximize sales and customer satisfaction."
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Be discoverable on Google with professionally optimized websites that rank higher in search results."
    },
    {
      icon: Settings,
      title: "Website Maintenance",
      description: "Keep your website secure, updated, and running smoothly with our ongoing maintenance services."
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive web solutions to help your business succeed online
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card 
                  key={index} 
                  className="bg-gradient-card border-0 shadow-soft hover:shadow-glow transition-smooth hover:scale-105 group overflow-hidden"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-4">
                      <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-primary rounded-lg group-hover:scale-110 transition-smooth">
                        <service.icon className="h-7 w-7 text-primary-foreground" />
                      </div>
                      <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-smooth">
                        {service.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Services Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src={servicesIllustration} 
                alt="Web development services illustration" 
                className="rounded-2xl shadow-elegant max-w-full h-auto"
              />
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-primary rounded-full opacity-30 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;