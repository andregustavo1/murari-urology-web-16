
import React from 'react';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BenefitProps {
  title: string;
  description: string;
  delay: number;
}

const Benefit = ({ title, description, delay }: BenefitProps) => {
  return (
    <div className="flex items-start animate-fade-in" style={{ animationDelay: `${delay}ms` }}>
      <CheckCircle2 className="h-6 w-6 text-gold mr-3 flex-shrink-0 mt-1" />
      <div>
        <h4 className="text-white text-lg font-medium mb-1">{title}</h4>
        <p className="text-white/80 text-sm">{description}</p>
      </div>
    </div>
  );
};

const RoboticSurgerySection = () => {
  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const phone = "5561991663932";
    const message = "Olá, gostaria de obter mais informações sobre cirurgia robótica com o Dr. Heder Murari Borba.";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="cirurgia-robotica" className="py-24 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=2032')] bg-cover bg-center opacity-10"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 animate-fade-in-right">
            <h5 className="text-gold mb-2 tracking-wider text-sm">TECNOLOGIA DE PONTA</h5>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Cirurgia Robótica</h2>
            <h3 className="text-xl text-gold/90 mb-4">Inovadora, Precisa e Eficiente</h3>
            
            <p className="text-white/90 mb-8">
              A cirurgia robótica permite a realização de procedimentos complexos com precisão ampliada e controle absoluto dos movimentos. Essa tecnologia avançada proporciona uma visão tridimensional detalhada, oferecendo ao cirurgião a capacidade de operar em áreas delicadas com segurança e eficiência incomparáveis.
            </p>
            
            <div className="grid grid-cols-1 gap-6 mb-8">
              <Benefit 
                title="Maior Precisão" 
                description="Movimentos exatos e controlados durante todo o procedimento"
                delay={100}
              />
              <Benefit 
                title="Recuperação Rápida" 
                description="Menor tempo de internação e retorno mais rápido às atividades"
                delay={200}
              />
              <Benefit 
                title="Menos Dor" 
                description="Procedimento minimamente invasivo reduz desconforto pós-operatório"
                delay={300}
              />
              <Benefit 
                title="Resultados Superiores" 
                description="Melhores desfechos clínicos e estéticos para maior qualidade de vida"
                delay={400}
              />
            </div>
            
            <Button 
              className="bg-gold hover:bg-gold/90 text-navy font-medium transition-all duration-300"
              onClick={handleWhatsAppClick}
            >
              Consultar Disponibilidade
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="lg:w-1/2 animate-fade-in-left">
            <div className="relative">
              <div className="bg-gold/30 absolute -top-6 -right-6 w-full h-full rounded-lg"></div>
              <img
                src="/lovable-uploads/17872b92-5a33-4fd7-b700-d81c065d6832.png"
                alt="Cirurgia Robótica"
                className="relative z-10 rounded-lg shadow-xl max-h-[500px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoboticSurgerySection;
