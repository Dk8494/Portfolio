import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10 animate-glow-pulse" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
        <div className="space-y-4">
          <p className="text-muted-foreground text-lg tracking-wider uppercase animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Hi, I'm
          </p>
          <h1 className="text-6xl md:text-8xl font-bold gradient-text animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Devendra Kumar
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
            Data Analyst & AI/ML Enthusiast | CSE Student @ IIIT Sonepat
          </p>
          <p className="text-lg text-muted-foreground/80 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.7s' }}>
            Transforming complex data into actionable insights through Python, Machine Learning, and Advanced Analytics
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <Button 
            size="lg" 
            className="glow-effect group"
            onClick={() => scrollToSection('projects')}
          >
            View My Work
            <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => scrollToSection('contact')}
          >
            Get In Touch
          </Button>
        </div>

        <div className="flex items-center justify-center gap-6 pt-8 animate-fade-in" style={{ animationDelay: '1s' }}>
          <a href="https://github.com/Dk8494" target="_blank" rel="noopener noreferrer" 
             className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="h-6 w-6" />
          </a>
          <a href="https://linkedin.com/in/devendra-kumar-01956328a" target="_blank" rel="noopener noreferrer"
             className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="mailto:dk8494136@gmail.com"
             className="text-muted-foreground hover:text-primary transition-colors">
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>

      <button 
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
      >
        <ArrowDown className="h-6 w-6" />
      </button>
    </section>
  );
};

export default Hero;
