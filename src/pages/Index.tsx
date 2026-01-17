import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Target, BookOpen, AlertTriangle, ChevronRight, Users, Zap, Lock } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Target,
      title: "Level Assessment",
      description: "Discover your cybersecurity knowledge level with our adaptive quiz",
    },
    {
      icon: BookOpen,
      title: "Interactive Modules",
      description: "Learn at your own pace with content tailored to your skill level",
    },
    {
      icon: AlertTriangle,
      title: "Phishing Detection",
      description: "Practice identifying real-world phishing attempts in a safe environment",
    },
  ];

  const principles = [
    {
      icon: Users,
      title: "For Everyone",
      description: "No matter your background or technical knowledge",
    },
    {
      icon: Zap,
      title: "Easy to Understand",
      description: "Complex concepts explained simply and clearly",
    },
    {
      icon: Lock,
      title: "Self-Protection",
      description: "Practical skills you can apply immediately",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center hero-gradient grid-pattern overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        
        <div className="container mx-auto px-4 pt-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in-up">
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-sm text-primary font-medium">AI-Powered Threat Education</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up animate-delay-100">
              <span className="text-foreground">Detect the </span>
              <span className="text-gradient glow-text">RedFlag</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up animate-delay-200">
              Master cybersecurity through interactive learning. Protect yourself from 
              AI-powered phishing and social engineering attacks.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-300">
              <Link to="/quiz">
                <Button variant="hero" size="xl" className="group">
                  Assess Your Level
                  <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/modules">
                <Button variant="heroOutline" size="xl">
                  Explore Modules
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Animated background elements */}
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </section>

      {/* Features Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Your Path to Cyber Awareness
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Three powerful tools to transform you from potential target to cyber-aware defender
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group p-8 rounded-xl card-gradient border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Mission
              </h2>
              <p className="text-xl text-muted-foreground">
                Cybersecurity education that adapts to you
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {principles.map((principle, index) => (
                <div
                  key={principle.title}
                  className="text-center p-6"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-4">
                    <principle.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Strengthen Your Defenses?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Start with our free assessment quiz to discover your current security awareness level.
            </p>
            <Link to="/quiz">
              <Button variant="glow" size="xl">
                Take the Quiz Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
