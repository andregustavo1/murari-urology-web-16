import React from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Footer = () => {
  const address = "SHLS Conjunto A Bloco B Térreo Loja 3, Edifício OHB, Asa Sul. CEP:70390-906";
  const phone = "(61) 4004-3101";

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${phone.replace(/[^0-9]/g, '')}`;
  };

  const handleAddressClick = () => {
    window.open(`https://www.google.com/maps/place/${encodeURIComponent(address)}`, '_blank');
  };

  return (
    <footer className="bg-navy-dark py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <img 
              src="/lovable-uploads/c7350964-54db-41c4-ab3b-4c2f25d45009.png" 
              alt="Dr. Heder Murari Borba" 
              className="h-20"
            />
          </div>
          
          <div>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-white/20 text-white hover:bg-white/10"
              onClick={scrollToTop}
            >
              <ArrowUp className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div>
            <h4 className="text-gold text-sm font-medium mb-4">Menu Rápido</h4>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-white/70 hover:text-gold text-sm transition-colors duration-300">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-white/70 hover:text-gold text-sm transition-colors duration-300">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#especialidades" className="text-white/70 hover:text-gold text-sm transition-colors duration-300">
                  Especialidades
                </a>
              </li>
              <li>
                <a href="#cirurgia-robotica" className="text-white/70 hover:text-gold text-sm transition-colors duration-300">
                  Cirurgia Robótica
                </a>
              </li>
              <li>
                <a href="#formacao" className="text-white/70 hover:text-gold text-sm transition-colors duration-300">
                  Formação
                </a>
              </li>
              <li>
                <a href="#contato" className="text-white/70 hover:text-gold text-sm transition-colors duration-300">
                  Contato
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-gold text-sm font-medium mb-4">Contato</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={handlePhoneClick} className="text-white/70 hover:text-gold text-sm transition-colors duration-300">
                  {phone}
                </button>
              </li>
              <li>
                <a href="mailto:drhederurologia@gmail.com" className="text-white/70 hover:text-gold text-sm transition-colors duration-300">
                  drhederurologia@gmail.com
                </a>
              </li>
              <li>
                <button onClick={handleAddressClick} className="text-white/70 hover:text-gold text-sm transition-colors duration-300 text-left">
                  {address}
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-gold text-sm font-medium mb-4">Instituição</h4>
            <p className="text-white/70 text-sm">
              Instituto Virtus, Gestão e Inovação em Saúde LTDA
            </p>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6">
          <p className="text-white/50 text-sm text-center">
            © 2025 Dr. Heder Murari Borba. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
