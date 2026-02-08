import { ClipboardList, Search, UserCheck, Banknote } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: ClipboardList,
      step: "01",
      title: "Você informa os dados",
      description: "Preencha a calculadora com as informações da sua compra: valor da escritura e ITBI pago."
    },
    {
      icon: Search,
      step: "02",
      title: "A calculadora verifica",
      description: "Nosso sistema analisa automaticamente se há indícios de pagamento a maior."
    },
    {
      icon: UserCheck,
      step: "03",
      title: "Nossa equipe analisa",
      description: "Especialistas revisam seu caso com profundidade e confirmam a elegibilidade."
    },
    {
      icon: Banknote,
      step: "04",
      title: "Iniciamos a restituição",
      description: "Cuidamos de todo o processo para recuperar o que é seu por direito."
    }
  ];

  return (
    <section id="como-funciona" className="section-padding">
      <div className="container-wide mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
            Como funciona o processo?
          </h2>
          <p className="text-lg text-muted-foreground">
            Em apenas 4 passos simples, você pode recuperar o imposto pago a mais.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-24 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-primary via-secondary to-success" />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center">
                {/* Step Number Circle */}
                <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-6 shadow-primary">
                  <span className="text-xl font-bold text-primary-foreground">{step.step}</span>
                </div>
                
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-7 h-7 text-accent-foreground" />
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
