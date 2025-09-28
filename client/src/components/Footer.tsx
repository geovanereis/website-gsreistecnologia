import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Quem Somos', href: '#quem-somos' },
    { name: 'Contato', href: '#contato' }
  ];

  const services = [
    'Infraestrutura de TI',
    'Instalações Elétricas',
    'Manutenção de Computadores',
    'Desenvolvimento de Sistemas'
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card border-t border-card-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary" data-testid="text-footer-logo">
              G S Reis Tecnologia
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-footer-description">
              Soluções completas em tecnologia da informação para empresas de pequeno 
              e médio porte. Qualidade, confiabilidade e inovação em cada projeto.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-3">
              {[
                { icon: Facebook, name: 'Facebook' },
                { icon: Instagram, name: 'Instagram' },
                { icon: Linkedin, name: 'LinkedIn' }
              ].map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9 hover-elevate"
                    onClick={() => console.log(`${social.name} clicked`)}
                    data-testid={`link-social-${social.name.toLowerCase()}`}
                  >
                    <IconComponent className="h-4 w-4" />
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-card-foreground" data-testid="text-footer-links-title">
              Links Rápidos
            </h4>
            <nav className="space-y-2">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors hover-elevate px-2 py-1 rounded text-left"
                  data-testid={`link-footer-${link.name.toLowerCase().replace(' ', '-')}`}
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-card-foreground" data-testid="text-footer-services-title">
              Nossos Serviços
            </h4>
            <div className="space-y-2">
              {services.map((service, index) => (
                <div key={index} className="text-sm text-muted-foreground" data-testid={`text-footer-service-${index}`}>
                  {service}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-card-foreground" data-testid="text-footer-contact-title">
              Contato
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-muted-foreground" data-testid="text-footer-address">
                  Via Local D10, 265<br />
                  Aquiraz - CE<br />
                  CEP: 61700-000
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <div className="text-sm text-muted-foreground" data-testid="text-footer-phone">
                  (85) 99867-8538
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <div className="text-sm text-muted-foreground" data-testid="text-footer-email">
                  contato@gsreistecnologia.com.br
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground" data-testid="text-footer-copyright">
            © {currentYear} G S Reis Tecnologia. Todos os direitos reservados.
          </div>
          
          <div className="flex flex-wrap gap-6">
            {['Política de Privacidade', 'Termos de Serviço', 'Cookies'].map((item, index) => (
              <button
                key={index}
                onClick={() => console.log(`${item} clicked`)}
                className="text-sm text-muted-foreground hover:text-primary transition-colors hover-elevate px-2 py-1 rounded"
                data-testid={`link-footer-legal-${index}`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}