import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, CheckCircle } from "lucide-react";

const HeroSection = () => {
  const scrollToCalculator = () => {
    document.getElementById('calculadora')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-secondary/10" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />

      <div className="container-wide mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6 animate-fade-up">
            <Shield className="w-4 h-4" />
            <span>Baseado em decisões do STJ</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Descubra em{' '}
            <span className="text-gradient">2 minutos</span>
            {' '}se você pagou ITBI a mais na compra do seu imóvel
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Milhares de compradores pagaram imposto indevido. A Justiça já decidiu: 
            <span className="text-foreground font-medium"> você pode ter direito à restituição.</span>
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Button 
              onClick={scrollToCalculator}
              variant="hero" 
              size="xl"
              className="w-full sm:w-auto"
            >
              Calcular agora gratuitamente
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm text-muted-foreground animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-success" />
              <span>100% Gratuito</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-success" />
              <span>Resultado em 2 minutos</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-success" />
              <span>Seus dados estão seguros</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
