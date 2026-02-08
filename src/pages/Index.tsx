import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import LegalSection from "@/components/LegalSection";
import CalculatorSection from "@/components/CalculatorSection";
import BenefitsSection from "@/components/BenefitsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import BlogSection from "@/components/BlogSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen" style={{ background: 'var(--gradient-page)' }}>
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <LegalSection />
        <CalculatorSection />
        <BenefitsSection />
        <HowItWorksSection />
        <BlogSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
