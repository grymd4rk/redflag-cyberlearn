import { Link } from "react-router-dom";
import { Flag, Shield, Mail, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="relative">
                <Flag className="h-8 w-8 text-primary" />
                <Shield className="h-4 w-4 text-primary absolute -bottom-1 -right-1" />
              </div>
              <span className="text-xl font-bold text-foreground">
                Red<span className="text-primary">Flag</span>
              </span>
            </Link>
            <p className="text-muted-foreground max-w-md">
              Empowering everyone to defend against AI-powered cyber threats through 
              interactive, level-based learning. Your security journey starts here.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/quiz" className="text-muted-foreground hover:text-primary transition-colors">
                  Take Assessment
                </Link>
              </li>
              <li>
                <Link to="/modules" className="text-muted-foreground hover:text-primary transition-colors">
                  Learning Modules
                </Link>
              </li>
              <li>
                <Link to="/phishing-demo" className="text-muted-foreground hover:text-primary transition-colors">
                  Phishing Demo
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} RedFlag. All rights reserved. Stay vigilant, stay secure.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
