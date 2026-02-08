import { Scale, FileCheck, Gavel } from "lucide-react";

const LegalSection = () => {
  const legalPoints = [
    {
      icon: FileCheck,
      title: "Valor real da transação",
      description: "O ITBI deve ser calculado com base no valor efetivamente pago na compra, conforme consta na escritura."
    },
    {
      icon: Scale,
      title: "Valor de referência inválido",
      description: "O município não pode impor um \"valor de referência\" arbitrário como base de cálculo do imposto."
    },
    {
      icon: Gavel,
      title: "Direito à restituição",
      description: "Se você pagou ITBI acima do valor correto, tem direito à devolução da diferença."
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-wide mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <div>
            <div className="badge-legal mb-6">
              <Gavel className="w-4 h-4" />
              <span>Decisão do Superior Tribunal de Justiça</span>
            </div>
            
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-6">
              A Justiça já decidiu a favor do contribuinte
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              O Superior Tribunal de Justiça (STJ) firmou entendimento claro sobre a cobrança do ITBI, 
              protegendo os direitos dos compradores de imóveis em todo o Brasil.
            </p>

            <div className="space-y-6">
              {legalPoints.map((point, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center">
                    <point.icon className="w-6 h-6 text-success" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {point.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Visual Card */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl" />
            <div className="relative bg-card rounded-3xl p-8 md:p-10 border border-border shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Scale className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Tribunal Superior</p>
                  <p className="font-semibold text-foreground">STJ - Tema 1.113</p>
                </div>
              </div>

              <blockquote className="text-lg text-foreground leading-relaxed mb-6 border-l-4 border-primary pl-4">
                "A base de cálculo do ITBI é o valor do imóvel transmitido em condições normais de mercado, 
                não estando vinculada à base de cálculo do IPTU."
              </blockquote>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                <span>Decisão vinculante para todos os municípios</span>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 p-4 rounded-xl bg-muted/50 border border-border">
          <p className="text-sm text-muted-foreground text-center">
            ⚠️ <strong>Importante:</strong> Cada caso possui particularidades. O resultado da calculadora é estimativo 
            e não constitui parecer jurídico. A confirmação do direito depende de análise técnica individualizada.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LegalSection;
