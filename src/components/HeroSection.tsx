
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const phone = "5561991663932";
    const message = "Olá, gostaria de agendar uma consulta com o Dr. Heder Murari Borba.";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-gradient-to-b from-navy to-navy-dark pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-navy opacity-70"></div>
        <div className="w-full h-full bg-[url('/lovable-uploads/16478f91-3bee-44b3-baa9-50735d4aec46.png')] bg-cover bg-center opacity-60"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <h5 className="text-gold mb-4 tracking-wider font-light">MÉDICO UROLOGISTA</h5>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Dr. Heder Murari Borba</h1>
          <h2 className="text-xl md:text-2xl font-light text-white/90 mb-6">
            Urologia de Excelência com Tecnologia Avançada
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Especialista em Cirurgia Robótica e tratamentos urológicos avançados
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="bg-gold hover:bg-gold/90 text-navy font-medium transition-all duration-300 px-8 py-6"
              onClick={handleWhatsAppClick}
            >
              Agendar Consulta
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white bg-transparent hover:bg-white/10 transition-all duration-300 px-8 py-6"
              onClick={() => scrollToSection('especialidades')}
            >
              Conhecer Especialidades
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-white hover:text-gold rounded-full"
          onClick={() => scrollToSection('sobre')}
        >
          <ChevronDown className="h-6 w-6" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
