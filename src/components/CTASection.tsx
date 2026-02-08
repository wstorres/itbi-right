import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock } from "lucide-react";

const CTASection = () => {
  const scrollToCalculator = () => {
    document.getElementById('calculadora')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section-padding bg-gradient-to-br from-primary via-primary to-secondary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-success/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />
      
      <div className="container-narrow mx-auto relative z-10 text-center">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
          Não deixe dinheiro parado com o município
        </h2>
        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8">
          Verifique agora se você tem direito à restituição do ITBI. É rápido, gratuito e pode representar milhares de reais de volta para você.
        </p>
        
        <Button 
          onClick={scrollToCalculator}
          variant="hero" 
          size="xl"
          className="bg-success text-success-foreground hover:bg-success/90 shadow-lg"
        >
          Calcular gratuitamente
          <ArrowRight className="w-5 h-5" />
        </Button>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 mt-8 text-sm text-primary-foreground/70">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5" />
            <span>Dados 100% seguros</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            <span>Resultado em 2 minutos</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
