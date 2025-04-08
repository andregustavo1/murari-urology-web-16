
import React from 'react';
import { Activity, Heart, Target, Shield, Baby } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

interface SpecialtyCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  delay: number;
}

const SpecialtyCard = ({ icon: Icon, title, description, delay }: SpecialtyCardProps) => {
  return (
    <Card className="card-hover bg-white shadow-md border-t-4 border-navy overflow-hidden animate-fade-in" style={{ animationDelay: `${delay}ms` }}>
      <CardContent className="p-6">
        <div className="bg-navy/10 inline-block p-3 rounded-full mb-4">
          <Icon className="h-6 w-6 text-navy" />
        </div>
        <h3 className="text-navy text-xl font-semibold mb-2">{title}</h3>
        <p className="text-navy-light/80 text-sm">{description}</p>
      </CardContent>
    </Card>
  );
};

const SpecialtiesSection = () => {
  const specialties = [
    {
      icon: Activity,
      title: "Urologia Geral",
      description: "Diagnóstico e tratamento de condições do trato urinário masculino e feminino."
    },
    {
      icon: Heart,
      title: "Andrologia",
      description: "Tratamento de disfunções sexuais e infertilidade masculina."
    },
    {
      icon: Target,
      title: "Endourologia",
      description: "Procedimentos minimamente invasivos para cálculos e obstruções."
    },
    {
      icon: Shield,
      title: "Urooncologia",
      description: "Tratamento especializado de cânceres urológicos com abordagem moderna."
    },
    {
      icon: Baby,
      title: "Urologia Infantil",
      description: "Cuidado com condições urológicas em crianças e adolescentes."
    }
  ];

  return (
    <section id="especialidades" className="py-24 bg-neutral-gray">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h5 className="text-navy/70 mb-2 tracking-wider text-sm">EXPERTISE</h5>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Áreas de Atuação</h2>
          <p className="text-navy-light max-w-2xl mx-auto">
            Excelência no diagnóstico e tratamento urológico com abordagens modernas e personalizadas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <SpecialtyCard
              key={index}
              icon={specialty.icon}
              title={specialty.title}
              description={specialty.description}
              delay={index * 100}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center animate-fade-in">
          <h3 className="text-2xl font-semibold text-navy mb-6">Doenças da Próstata</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md card-hover">
              <h4 className="text-navy font-medium mb-2">Hiperplasia Benigna</h4>
              <p className="text-navy-light/80 text-sm">Tratamentos clínicos e cirúrgicos modernos para aumento da próstata</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md card-hover">
              <h4 className="text-navy font-medium mb-2">Câncer de Próstata</h4>
              <p className="text-navy-light/80 text-sm">Diagnóstico precoce e abordagem personalizada com tecnologia avançada</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md card-hover">
              <h4 className="text-navy font-medium mb-2">Prostatites</h4>
              <p className="text-navy-light/80 text-sm">Tratamento das inflamações prostáticas com abordagem integral</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md card-hover">
              <h4 className="text-navy font-medium mb-2">Rastreio Preventivo</h4>
              <p className="text-navy-light/80 text-sm">Avaliação periódica para detecção precoce de alterações prostáticas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
