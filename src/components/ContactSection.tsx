
import React from 'react';
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from 'lucide-react';

interface ContactInfoProps {
  icon: React.ElementType;
  title: string;
  content: React.ReactNode;
  delay: number;
}

const ContactInfo = ({ icon: Icon, title, content, delay }: ContactInfoProps) => {
  return (
    <div className="flex items-start mb-8 animate-fade-in" style={{ animationDelay: `${delay}ms` }}>
      <div className="bg-navy/10 p-3 rounded-full mr-4">
        <Icon className="h-5 w-5 text-navy" />
      </div>
      <div>
        <h3 className="font-medium text-navy mb-1">{title}</h3>
        <div className="text-navy-light/80">{content}</div>
      </div>
    </div>
  );
};

const ContactSection = () => {
  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const phone = "5561991663932";
    const message = "Olá, gostaria de agendar uma consulta com o Dr. Heder Murari Borba.";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
  };

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = "mailto:drhederurologia@gmail.com";
  };

  const handlePhoneClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = "tel:+5561991663932";
  };

  return (
    <section id="contato" className="py-24 bg-neutral-gray">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h5 className="text-navy/70 mb-2 tracking-wider text-sm">FALE CONOSCO</h5>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Contato e Agendamento</h2>
          <p className="text-navy-light max-w-2xl mx-auto">
            Agende sua consulta e cuide da sua saúde com o atendimento especializado do Dr. Heder Murari Borba
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2 animate-fade-in-right">
            <ContactInfo 
              icon={Phone} 
              title="Telefone para Agendamento" 
              content={
                <a 
                  href="tel:+5561991663932" 
                  className="text-navy-light hover:text-navy transition-colors duration-300"
                  onClick={handlePhoneClick}
                >
                  (61) 99166-3932
                </a>
              }
              delay={100}
            />
            
            <ContactInfo 
              icon={Mail} 
              title="E-mail" 
              content={
                <a 
                  href="mailto:drhederurologia@gmail.com" 
                  className="text-navy-light hover:text-navy transition-colors duration-300"
                  onClick={handleEmailClick}
                >
                  drhederurologia@gmail.com
                </a>
              }
              delay={200}
            />
            
            <ContactInfo 
              icon={MapPin} 
              title="Local de Atendimento" 
              content={
                <div>
                  <p>Instituto Virtus</p>
                  <p className="text-sm mt-1">Brasília/DF</p>
                </div>
              }
              delay={300}
            />
            
            <ContactInfo 
              icon={Clock} 
              title="Horários de Atendimento" 
              content={
                <div>
                  <p>Segunda à Sexta: 8h às 18h</p>
                  <p className="text-sm mt-1">Consultas mediante agendamento prévio</p>
                </div>
              }
              delay={400}
            />
            
            <div className="mt-10 animate-fade-in" style={{ animationDelay: "500ms" }}>
              <Button 
                className="bg-navy hover:bg-navy-light text-white font-medium transition-all duration-300"
                size="lg"
                onClick={handleWhatsAppClick}
              >
                Agendar Consulta
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 animate-fade-in-left">
            <div className="relative h-full min-h-[400px]">
              <div className="bg-gold/20 absolute -top-6 -left-6 w-full h-full rounded-lg"></div>
              <img
                src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?q=80&w=2071"
                alt="Consultório Dr. Heder Murari Borba"
                className="relative z-10 rounded-lg shadow-xl h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
