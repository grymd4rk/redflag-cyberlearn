import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Shield, Users, Target, Heart, Zap, BookOpen, 
  Flag, Lock, Eye, ArrowRight, ChevronRight
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Users,
      title: "For Everyone",
      description: "Cybersecurity shouldn't be exclusive to tech experts. We design our content to be accessible to anyone, regardless of their technical background."
    },
    {
      icon: BookOpen,
      title: "Easy to Understand",
      description: "Complex security concepts explained in plain language. No jargon, no confusion—just clear, actionable knowledge."
    },
    {
      icon: Target,
      title: "Level-Based Learning",
      description: "Whether you're a complete beginner or a seasoned professional, our modular approach meets you where you are."
    },
    {
      icon: Lock,
      title: "Self-Protection",
      description: "We don't just teach theory—we give you practical skills you can apply immediately to protect yourself and your organization."
    },
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Founder & CEO",
      bio: "Former cybersecurity researcher with 15 years of experience in threat intelligence."
    },
    {
      name: "Marcus Williams",
      role: "Head of Content",
      bio: "Educational designer specializing in making complex topics accessible to everyone."
    },
    {
      name: "Elena Rodriguez",
      role: "Lead Security Engineer",
      bio: "Expert in AI-powered threats and defensive technologies."
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <Flag className="h-4 w-4 text-primary" />
              <span className="text-sm text-primary font-medium">Our Story</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Making Cybersecurity
              <span className="text-gradient block">Accessible to Everyone</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              RedFlag was founded with a simple belief: in an age of AI-powered threats, 
              everyone deserves the knowledge to protect themselves.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  As artificial intelligence transforms the threat landscape, traditional security 
                  awareness training is no longer enough. Phishing emails that were once easy to 
                  spot are now crafted by AI with perfect grammar and convincing personalization.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  RedFlag exists to bridge this gap. We combine cutting-edge threat intelligence 
                  with proven educational methodologies to create interactive learning experiences 
                  that actually work.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our goal isn't just to inform—it's to transform. Every person who completes 
                  our training becomes a human firewall, capable of recognizing and reporting 
                  threats that would otherwise slip through.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="card-gradient border border-border rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">50K+</div>
                  <div className="text-muted-foreground text-sm">Users Trained</div>
                </div>
                <div className="card-gradient border border-border rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">94%</div>
                  <div className="text-muted-foreground text-sm">Detection Rate Improvement</div>
                </div>
                <div className="card-gradient border border-border rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">200+</div>
                  <div className="text-muted-foreground text-sm">Organizations Protected</div>
                </div>
                <div className="card-gradient border border-border rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">3</div>
                  <div className="text-muted-foreground text-sm">Skill Levels Supported</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Values</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                The principles that guide everything we create
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="group p-8 rounded-xl card-gradient border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Team</h2>
              <p className="text-muted-foreground text-lg">
                Security experts and educators united by a common purpose
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="text-center p-6 rounded-xl card-gradient border border-border"
                >
                  <div className="w-24 h-24 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary text-sm mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why AI Threats Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Focus on AI Threats?
              </h2>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-secondary/50 border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Eye className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Harder to Detect</h3>
                    <p className="text-muted-foreground">
                      AI eliminates the grammar mistakes and awkward phrasing that once made phishing 
                      easy to spot. These attacks look and sound completely natural.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-secondary/50 border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Personalized at Scale</h3>
                    <p className="text-muted-foreground">
                      AI can generate thousands of unique, personalized attacks in minutes, each 
                      tailored to the individual target using publicly available information.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-secondary/50 border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Heart className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Emotionally Manipulative</h3>
                    <p className="text-muted-foreground">
                      AI can analyze social media and craft messages that exploit personal 
                      relationships, interests, and emotional triggers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Join the Fight?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Start your cybersecurity journey today and become part of the solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/quiz">
                <Button variant="hero" size="lg">
                  Take the Assessment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/modules">
                <Button variant="heroOutline" size="lg">
                  Explore Modules
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
