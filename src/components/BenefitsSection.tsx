import { Zap, Scale, FileCheck, Eye, Shield, HeartHandshake } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Análise rápida e gratuita",
      description: "Descubra em minutos se você tem direito à restituição, sem nenhum custo inicial."
    },
    {
      icon: Scale,
      title: "Baseado em decisões do STJ",
      description: "Nossa atuação é fundamentada em jurisprudência consolidada do Superior Tribunal de Justiça."
    },
    {
      icon: FileCheck,
      title: "Processo simples e sem burocracia",
      description: "Cuidamos de toda a documentação e procedimentos para você."
    },
    {
      icon: HeartHandshake,
      title: "Atuação extrajudicial e judicial",
      description: "Buscamos a restituição de forma administrativa, recorrendo à Justiça quando necessário."
    },
    {
      icon: Eye,
      title: "Transparência total",
      description: "Você acompanha cada etapa do processo e só paga se recuperar seu dinheiro."
    },
    {
      icon: Shield,
      title: "Seus dados protegidos",
      description: "Todas as suas informações são tratadas com total sigilo e segurança."
    }
  ];

  return (
    <section id="beneficios" className="section-padding bg-card/50 backdrop-blur-sm">
      <div className="container-wide mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
            Por que escolher nossa consultoria?
          </h2>
          <p className="text-lg text-muted-foreground">
            Oferecemos um serviço completo, seguro e orientado a resultados.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group p-6 rounded-2xl bg-background border border-border hover:border-success/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center mb-4 group-hover:bg-success/20 transition-colors">
                <benefit.icon className="w-6 h-6 text-success" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
