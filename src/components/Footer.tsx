import { Scale } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12 px-4 md:px-8">
      <div className="container-wide mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-foreground/20 to-secondary/30 flex items-center justify-center">
              <Scale className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg text-primary-foreground">
              Restituição ITBI
            </span>
          </div>

          {/* Legal Text */}
          <div className="text-center md:text-right">
            <p className="text-sm text-primary-foreground/60 max-w-md">
              Este serviço é informativo e não substitui orientação jurídica profissional. 
              Resultados passados não garantem resultados futuros.
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} Consultoria de Restituição ITBI. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
