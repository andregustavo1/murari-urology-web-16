
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "./ui/button";

export function ContactSection() {
  const address = "SHLS Conjunto A Bloco B Térreo Loja 3, Edifício OHB, Asa Sul. CEP:70390-906";
  const phone = "(61) 4004-3101";
  const email = "contato@hedermurari.com.br";
  
  const googleMapsUrl = `https://www.google.com/maps/place/${encodeURIComponent(address)}`;

  const handlePhoneClick = () => {
    window.location.href = `tel:${phone.replace(/[^0-9]/g, '')}`;
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  const handleAddressClick = () => {
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <section id="contato" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">
              Contato e Agendamento
            </h2>
            <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
              Entre em contato conosco para agendar sua consulta ou tirar dúvidas.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-4">
            <Button 
              variant="outline" 
              className="w-full flex items-center justify-start gap-2 py-6"
              onClick={handleAddressClick}
            >
              <MapPin className="h-5 w-5 text-primary" />
              <span className="text-left">{address}</span>
            </Button>
            <Button 
              variant="outline" 
              className="w-full flex items-center justify-start gap-2 py-6"
              onClick={handlePhoneClick}
            >
              <Phone className="h-5 w-5 text-primary" />
              <span>{phone}</span>
            </Button>
            <Button 
              variant="outline" 
              className="w-full flex items-center justify-start gap-2 py-6"
              onClick={handleEmailClick}
            >
              <Mail className="h-5 w-5 text-primary" />
              <span>{email}</span>
            </Button>
          </div>
          <div className="w-full mt-8">
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.4332084917424!2d-47.91591792374979!3d-15.799899384728792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3b1e89f63beb%3A0x9f0c6e7e8f5e1e7a!2sSHLS%20Conjunto%20A%20Bloco%20B%20T%C3%A9rreo%20Loja%203%2C%20Edif%C3%ADcio%20OHB%2C%20Asa%20Sul!5e0!3m2!1spt-BR!2sbr!4v1708988327981!5m2!1spt-BR!2sbr`}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
