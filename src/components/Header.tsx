import { Button } from "@/components/ui/button";
import { Scale } from "lucide-react";

const Header = () => {
  const scrollToCalculator = () => {
    document.getElementById('calculadora')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
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

          {/* CTA Button */}
          <Button 
            onClick={scrollToCalculator}
            variant="success" 
            size="sm"
            className="text-sm md:text-base"
          >
            Calcular Agora
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
