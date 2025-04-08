
import React from 'react';
import { BookOpen, Award, Building, GraduationCap, Stethoscope, SquareCode } from 'lucide-react';

interface TimelineItemProps {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
  isLast?: boolean;
  delay: number;
}

const TimelineItem = ({ icon: Icon, title, subtitle, description, isLast = false, delay }: TimelineItemProps) => {
  return (
    <div className="relative pl-10 pb-10 animate-fade-in" style={{ animationDelay: `${delay}ms` }}>
      {!isLast && (
        <div className="absolute left-4 top-0 h-full w-0.5 bg-navy/20" style={{ transform: 'translateX(-50%)' }}></div>
      )}
      
      <div className="absolute left-4 top-0 h-8 w-8 rounded-full bg-navy flex items-center justify-center" style={{ transform: 'translateX(-50%)' }}>
        <Icon className="h-4 w-4 text-gold" />
      </div>
      
      <div>
        <h3 className="text-navy text-lg font-semibold mb-1">{title}</h3>
        <h4 className="text-gold text-sm font-medium mb-2">{subtitle}</h4>
        <p className="text-navy-light/80 text-sm">{description}</p>
      </div>
    </div>
  );
};

const TimelineSection = () => {
  const timelineItems = [
    {
      icon: GraduationCap,
      title: "Formação Médica",
      subtitle: "Universidade Federal de Goiás",
      description: "Graduação em Medicina com foco em cuidados urológicos"
    },
    {
      icon: Building,
      title: "Especialização Internacional",
      subtitle: "Hospital Clinic, Barcelona",
      description: "Especialização em Organização de Transplantes"
    },
    {
      icon: BookOpen,
      title: "Pós-Graduação",
      subtitle: "FIOCRUZ",
      description: "Pós-graduação em Saúde Pública"
    },
    {
      icon: Award,
      title: "Pioneirismo",
      subtitle: "Goiás",
      description: "Fundação da Central Estadual de Transplantes de Goiás"
    },
    {
      icon: Stethoscope,
      title: "Liderança Médica",
      subtitle: "Nacional",
      description: "Presidência da Federação Nacional dos Médicos"
    },
    {
      icon: SquareCode,
      title: "Atuação Atual",
      subtitle: "Brasília",
      description: "Foco em Uro-oncologia, Endourologia e Cirurgia Robótica"
    }
  ];

  return (
    <section id="formacao" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h5 className="text-navy/70 mb-2 tracking-wider text-sm">TRAJETÓRIA</h5>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Formação e Trajetória</h2>
          <p className="text-navy-light max-w-2xl mx-auto">
            Conheça a trajetória profissional e a formação acadêmica do Dr. Heder Murari Borba
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {timelineItems.map((item, index) => (
            <TimelineItem
              key={index}
              icon={item.icon}
              title={item.title}
              subtitle={item.subtitle}
              description={item.description}
              isLast={index === timelineItems.length - 1}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
