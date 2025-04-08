
import React from 'react';
import { Award, UserCheck, Globe, GraduationCap } from 'lucide-react';

const AboutFeature = ({ icon: Icon, title, description }: { 
  icon: React.ElementType; 
  title: string; 
  description: string;
}) => (
  <div className="flex items-start mb-6 animate-fade-in">
    <div className="bg-navy/10 p-3 rounded-full mr-4">
      <Icon className="h-6 w-6 text-navy" />
    </div>
    <div>
      <h3 className="font-medium text-navy mb-1">{title}</h3>
      <p className="text-navy-light/90 text-sm">{description}</p>
    </div>
  </div>
);

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-neutral-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-2/5 animate-fade-in-right">
            <div className="relative">
              <div className="bg-gold/20 absolute -top-6 -left-6 w-full h-full rounded-lg"></div>
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070"
                alt="Dr. Heder Murari Borba"
                className="relative z-10 rounded-lg shadow-xl"
              />
              <div className="bg-navy absolute -bottom-6 -right-6 p-4 rounded-lg shadow-lg z-20 animate-fade-in">
                <p className="text-white text-sm">Instituto Virtus</p>
                <p className="text-gold text-xs">Gestão e Inovação em Saúde LTDA</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-3/5 animate-fade-in-left">
            <h5 className="text-navy/70 mb-2 tracking-wider text-sm">CONHEÇA O MÉDICO</h5>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">Sobre Dr. Heder Murari Borba</h2>
            
            <p className="text-navy-light mb-6">
              Formado pela Universidade Federal de Goiás, com experiência em hospitais renomados como o Hospital Geral de Goiânia e a Santa Casa de Misericórdia de Goiás. Especializado em Organização de Transplantes pelo Hospital Clinic, em Barcelona, e pós-graduado em Saúde Pública pela FIOCRUZ.
            </p>
            <p className="text-navy-light mb-6">
              Em Goiás fundou a Central Estadual de Transplantes e coordenou o primeiro transplante de doador falecido no sistema público de Goiás. Ex-presidente da Federação Nacional dos Médicos e atuante no Conselho Nacional de Saúde, atualmente trabalha em Brasília, com foco em Uro-oncologia, Endourologia e Cirurgia Robótica.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <AboutFeature 
                icon={UserCheck} 
                title="Ampla Experiência" 
                description="Extensa experiência clínica e cirúrgica em urologia"
              />
              <AboutFeature 
                icon={Award} 
                title="Pioneirismo" 
                description="Pioneiro em transplantes no sistema público de Goiás"
              />
              <AboutFeature 
                icon={Globe} 
                title="Formação Internacional" 
                description="Especialização em Barcelona no Hospital Clinic"
              />
              <AboutFeature 
                icon={GraduationCap} 
                title="Liderança Médica" 
                description="Ex-presidente da Federação Nacional dos Médicos"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
