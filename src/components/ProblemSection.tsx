import { AlertTriangle, TrendingUp, Eye } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: TrendingUp,
      title: "Cobrança acima do valor real",
      description: "O ITBI é frequentemente calculado sobre um \"valor de referência\" arbitrário definido pelo município, e não sobre o valor que você realmente pagou pelo imóvel."
    },
    {
      icon: Eye,
      title: "Pagamento sem questionamento",
      description: "Por desconhecimento ou urgência em registrar o imóvel, muitos compradores pagam o imposto sem conferir se o cálculo está correto."
    },
    {
      icon: AlertTriangle,
      title: "Perda financeira silenciosa",
      description: "Essa diferença pode representar milhares de reais que você pagou a mais — um dinheiro que pode ser seu de volta."
    }
  ];

  return (
    <section id="problema" className="section-padding bg-card/50 backdrop-blur-sm">
      <div className="container-wide mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
            Você pode ter pago imposto a mais 
            <span className="text-destructive"> sem saber</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Entenda por que milhares de brasileiros têm direito à restituição do ITBI
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="group p-6 md:p-8 rounded-2xl bg-background border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-destructive/10 flex items-center justify-center mb-6 group-hover:bg-destructive/20 transition-colors">
                <problem.icon className="w-7 h-7 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {problem.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        {/* Highlight Box */}
        <div className="mt-12 p-6 md:p-8 rounded-2xl bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/20 text-center">
          <p className="text-lg md:text-xl text-foreground font-medium">
            💡 A boa notícia? <span className="text-primary">A Justiça já reconheceu esse direito.</span> E você pode verificar agora mesmo se tem valores a receber.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
