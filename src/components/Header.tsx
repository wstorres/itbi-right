import { Button } from "@/components/ui/button";
import { Scale, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const menuItems = [
    { label: "Início", action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
    { label: "O Problema", action: () => scrollToSection('problema') },
    { label: "Base Legal", action: () => scrollToSection('base-legal') },
    { label: "Calculadora", action: () => scrollToSection('calculadora') },
    { label: "Benefícios", action: () => scrollToSection('beneficios') },
    { label: "Como Funciona", action: () => scrollToSection('como-funciona') },
    { label: "Blog", action: () => scrollToSection('blog'), highlight: true },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-lg border-b border-border">
      <div className="container-wide mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Scale className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg md:text-xl text-foreground">
              Restituição ITBI
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={item.action}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  item.highlight 
                    ? 'text-success hover:bg-success/10' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection('calculadora')}
              variant="success" 
              size="sm"
              className="text-sm"
            >
              Calcular Agora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-foreground hover:bg-accent/50 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-2">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={item.action}
                  className={`px-4 py-3 text-left text-sm font-medium rounded-lg transition-colors ${
                    item.highlight 
                      ? 'text-success hover:bg-success/10' 
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection('calculadora')}
                variant="success" 
                size="sm"
                className="mt-2 w-full"
              >
                Calcular Agora
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
