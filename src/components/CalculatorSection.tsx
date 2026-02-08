import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calculator, CheckCircle, XCircle, ArrowRight, Loader2 } from "lucide-react";

interface FormData {
  valorEscritura: string;
  valorItbiPago: string;
  municipio: string;
  anoCcompra: string;
}

interface CalculationResult {
  isEligible: boolean;
  itbiCorreto: number;
  itbiPago: number;
  diferenca: number;
}

interface LeadFormData {
  nome: string;
  email: string;
  whatsapp: string;
}

const CalculatorSection = () => {
  const [formData, setFormData] = useState<FormData>({
    valorEscritura: "",
    valorItbiPago: "",
    municipio: "",
    anoCcompra: "",
  });
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadData, setLeadData] = useState<LeadFormData>({
    nome: "",
    email: "",
    whatsapp: "",
  });
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  const formatCurrency = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    const amount = parseInt(numbers) / 100;
    return amount.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  const parseCurrency = (value: string) => {
    return parseFloat(value.replace(/\D/g, "")) / 100 || 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    if (name === "valorEscritura" || name === "valorItbiPago") {
      setFormData((prev) => ({
        ...prev,
        [name]: formatCurrency(value),
      }));
    } else if (name === "anoCcompra") {
      const numericValue = value.replace(/\D/g, "").slice(0, 4);
      setFormData((prev) => ({
        ...prev,
        [name]: numericValue,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleCalculate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsCalculating(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const valorEscritura = parseCurrency(formData.valorEscritura);
    const valorItbiPago = parseCurrency(formData.valorItbiPago);
    const aliquota = 0.03; // 3% padrão
    const itbiCorreto = valorEscritura * aliquota;
    const diferenca = valorItbiPago - itbiCorreto;
    const isEligible = diferenca > 0;

    setResult({
      isEligible,
      itbiCorreto,
      itbiPago: valorItbiPago,
      diferenca,
    });

    if (isEligible) {
      setShowLeadForm(true);
    }

    setIsCalculating(false);
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would send the lead data to your backend
    console.log("Lead captured:", { ...leadData, ...formData, result });
    setLeadSubmitted(true);
  };

  const handleLeadInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLeadData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const formatWhatsapp = (value: string) => {
    const numbers = value.replace(/\D/g, "").slice(0, 11);
    if (numbers.length <= 2) return numbers;
    if (numbers.length <= 7) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`;
  };

  const resetCalculator = () => {
    setFormData({
      valorEscritura: "",
      valorItbiPago: "",
      municipio: "",
      anoCcompra: "",
    });
    setResult(null);
    setShowLeadForm(false);
    setLeadSubmitted(false);
    setLeadData({
      nome: "",
      email: "",
      whatsapp: "",
    });
  };

  return (
    <section id="calculadora" className="section-padding bg-gradient-to-b from-card to-background">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 text-success text-sm font-medium mb-4">
            <Calculator className="w-4 h-4" />
            <span>Calculadora Gratuita</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
            Verifique se você pagou ITBI a mais
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Preencha os dados abaixo e descubra em segundos se você tem direito à restituição.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="card-elevated p-6 md:p-10">
          {!result ? (
            <form onSubmit={handleCalculate} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Valor da Escritura */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Valor do imóvel na escritura
                  </label>
                  <input
                    type="text"
                    name="valorEscritura"
                    value={formData.valorEscritura}
                    onChange={handleInputChange}
                    placeholder="R$ 0,00"
                    className="input-styled"
                    required
                  />
                </div>

                {/* Valor do ITBI Pago */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Valor total de ITBI pago
                  </label>
                  <input
                    type="text"
                    name="valorItbiPago"
                    value={formData.valorItbiPago}
                    onChange={handleInputChange}
                    placeholder="R$ 0,00"
                    className="input-styled"
                    required
                  />
                </div>

                {/* Município */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Município da compra
                  </label>
                  <input
                    type="text"
                    name="municipio"
                    value={formData.municipio}
                    onChange={handleInputChange}
                    placeholder="Ex: São Paulo"
                    className="input-styled"
                    required
                  />
                </div>

                {/* Ano da Compra */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Ano da compra
                  </label>
                  <input
                    type="text"
                    name="anoCcompra"
                    value={formData.anoCcompra}
                    onChange={handleInputChange}
                    placeholder="Ex: 2023"
                    className="input-styled"
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                variant="hero"
                size="xl"
                className="w-full"
                disabled={isCalculating}
              >
                {isCalculating ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Analisando...
                  </>
                ) : (
                  <>
                    Analisar agora
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                * Cálculo baseado na alíquota padrão de 3%. A alíquota pode variar por município.
              </p>
            </form>
          ) : (
            <div className="animate-scale-in">
              {/* Result Display */}
              <div className={`p-6 md:p-8 rounded-2xl mb-8 ${
                result.isEligible 
                  ? "bg-success/10 border-2 border-success/30" 
                  : "bg-muted border-2 border-border"
              }`}>
                <div className="flex items-start gap-4">
                  {result.isEligible ? (
                    <div className="w-14 h-14 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-7 h-7 text-success" />
                    </div>
                  ) : (
                    <div className="w-14 h-14 rounded-full bg-muted-foreground/20 flex items-center justify-center flex-shrink-0">
                      <XCircle className="w-7 h-7 text-muted-foreground" />
                    </div>
                  )}
                  <div>
                    <h3 className={`text-xl md:text-2xl font-bold mb-2 ${
                      result.isEligible ? "text-success" : "text-foreground"
                    }`}>
                      {result.isEligible 
                        ? "✅ Há indícios de pagamento a maior!" 
                        : "❌ Não foram identificados indícios de pagamento a maior"}
                    </h3>
                    <p className="text-muted-foreground">
                      {result.isEligible
                        ? "Com base nos dados informados, você pode ter pago ITBI acima do valor devido."
                        : "Com base nos dados informados, o valor pago parece estar dentro do esperado."}
                    </p>
                  </div>
                </div>

                {/* Values Breakdown */}
                <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-border">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-1">ITBI Pago</p>
                    <p className="text-lg font-bold text-foreground">
                      {result.itbiPago.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-1">ITBI Estimado (3%)</p>
                    <p className="text-lg font-bold text-foreground">
                      {result.itbiCorreto.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-1">Diferença</p>
                    <p className={`text-lg font-bold ${result.isEligible ? "text-success" : "text-foreground"}`}>
                      {result.diferenca.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                    </p>
                  </div>
                </div>
              </div>

              {/* Lead Form or Retry */}
              {result.isEligible && showLeadForm && !leadSubmitted ? (
                <div className="animate-fade-up">
                  <div className="bg-accent/50 rounded-xl p-4 mb-6">
                    <p className="text-foreground text-center">
                      🎉 Identificamos indícios de pagamento indevido. Nossa equipe pode analisar seu caso com mais profundidade.
                    </p>
                  </div>

                  <form onSubmit={handleLeadSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Seu nome completo
                      </label>
                      <input
                        type="text"
                        name="nome"
                        value={leadData.nome}
                        onChange={handleLeadInputChange}
                        placeholder="Digite seu nome"
                        className="input-styled"
                        required
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          E-mail
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={leadData.email}
                          onChange={handleLeadInputChange}
                          placeholder="seu@email.com"
                          className="input-styled"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          WhatsApp
                        </label>
                        <input
                          type="tel"
                          name="whatsapp"
                          value={formatWhatsapp(leadData.whatsapp)}
                          onChange={(e) => setLeadData(prev => ({ ...prev, whatsapp: e.target.value }))}
                          placeholder="(11) 99999-9999"
                          className="input-styled"
                          required
                        />
                      </div>
                    </div>
                    <Button type="submit" variant="hero" size="xl" className="w-full">
                      Quero recuperar meu dinheiro
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </form>
                </div>
              ) : leadSubmitted ? (
                <div className="text-center animate-scale-in">
                  <div className="w-20 h-20 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-success" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    Recebemos seus dados!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Nossa equipe entrará em contato em breve para analisar seu caso com mais detalhes.
                  </p>
                  <Button onClick={resetCalculator} variant="outline" size="lg">
                    Fazer nova simulação
                  </Button>
                </div>
              ) : (
                <div className="text-center">
                  <p className="text-muted-foreground mb-6">
                    Caso acredite que há algum erro nos dados, você pode refazer a simulação.
                  </p>
                  <Button onClick={resetCalculator} variant="outline" size="lg">
                    Fazer nova simulação
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Trust Note */}
        <p className="text-sm text-muted-foreground text-center mt-6">
          🔒 Seus dados estão seguros e não serão compartilhados com terceiros.
        </p>
      </div>
    </section>
  );
};

export default CalculatorSection;
