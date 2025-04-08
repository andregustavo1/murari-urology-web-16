
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from 'lucide-react';

const CTASection = () => {
  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const phone = "5561991663932";
    const message = "Olá, gostaria de agendar uma consulta com o Dr. Heder Murari Borba.";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section className="py-24 bg-navy relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-navy-dark opacity-50"></div>
        <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1576671081837-49000212a370?q=80&w=1998')] bg-cover bg-center opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gold mb-4">Cuidado Urológico de Excelência</h2>
          <p className="text-white/90 text-lg mb-10">
            Agende sua consulta e conte com o atendimento especializado do Dr. Heder Murari Borba.
            Tratamentos avançados com foco em resultados e qualidade de vida.
          </p>
          
          <Button 
            className="bg-gold hover:bg-gold/90 text-navy font-medium transition-all duration-300 px-8 py-6 text-lg"
            onClick={handleWhatsAppClick}
          >
            Agendar Consulta
            <ArrowUpRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
