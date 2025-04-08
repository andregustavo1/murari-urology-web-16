
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Phone } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const phone = "5561991663932";
    const message = "Olá, gostaria de agendar uma consulta com o Dr. Heder Murari Borba.";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-header' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/c7350964-54db-41c4-ab3b-4c2f25d45009.png" 
            alt="Dr. Heder Murari Borba" 
            className="h-12 mr-3"
          />
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#inicio" className="text-white hover:text-gold transition-colors duration-300 text-sm">
            Início
          </a>
          <a href="#sobre" className="text-white hover:text-gold transition-colors duration-300 text-sm">
            Sobre
          </a>
          <a href="#especialidades" className="text-white hover:text-gold transition-colors duration-300 text-sm">
            Especialidades
          </a>
          <a href="#cirurgia-robotica" className="text-white hover:text-gold transition-colors duration-300 text-sm">
            Cirurgia Robótica
          </a>
          <a href="#formacao" className="text-white hover:text-gold transition-colors duration-300 text-sm">
            Formação
          </a>
          <a href="#contato" className="text-white hover:text-gold transition-colors duration-300 text-sm">
            Contato
          </a>
          <Button 
            className="bg-gold hover:bg-gold/90 text-navy font-medium transition-all duration-300 ml-4 px-4 py-2"
            onClick={handleWhatsAppClick}
          >
            <Phone className="w-4 h-4 mr-2" />
            Agendar Consulta
          </Button>
        </nav>
        
        <div className="md:hidden flex space-x-2">
          <Button 
            className="bg-gold hover:bg-gold/90 text-navy font-medium text-xs"
            size="sm"
            onClick={handleWhatsAppClick}
          >
            <Phone className="w-3 h-3 mr-1" />
            Agendar
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
