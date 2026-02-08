import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "5511999999999"; // Substituir pelo número real
  const message = encodeURIComponent("Olá! Gostaria de saber mais sobre a restituição de ITBI.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 flex items-center gap-3 px-4 py-3 bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,40%)] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden sm:inline text-sm">Fale Conosco</span>
      
      {/* Pulse Animation */}
      <span className="absolute -inset-1 rounded-full bg-[hsl(142,70%,45%)]/30 animate-ping opacity-75" />
    </a>
  );
};

export default WhatsAppButton;
