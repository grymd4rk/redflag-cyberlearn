import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Flag, Shield } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/quiz", label: "Assessment" },
    { to: "/modules", label: "Modules" },
    { to: "/phishing-demo", label: "Phishing Demo" },
    { to: "/about", label: "About Us" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Flag className="h-8 w-8 text-primary transition-transform group-hover:scale-110" />
              <Shield className="h-4 w-4 text-primary absolute -bottom-1 -right-1" />
            </div>
            <span className="text-xl font-bold text-foreground">
              Red<span className="text-primary">Flag</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to}>
                <Button
                  variant={isActive(link.to) ? "secondary" : "ghost"}
                  className={isActive(link.to) ? "text-primary" : "text-muted-foreground hover:text-foreground"}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </div>

          <div className="hidden md:flex">
            <Link to="/quiz">
              <Button variant="hero" size="sm">
                Start Learning
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                >
                  <Button
                    variant={isActive(link.to) ? "secondary" : "ghost"}
                    className={`w-full justify-start ${isActive(link.to) ? "text-primary" : "text-muted-foreground"}`}
                  >
                    {link.label}
                  </Button>
                </Link>
              ))}
              <Link to="/quiz" onClick={() => setIsOpen(false)}>
                <Button variant="hero" className="w-full mt-2">
                  Start Learning
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
