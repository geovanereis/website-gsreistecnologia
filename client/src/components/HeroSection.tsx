import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import heroImage from '@assets/generated_images/Professional_IT_infrastructure_image_2dbcfd90.png';

interface HeroSectionProps {
  onContactClick?: () => void;
}

export default function HeroSection({ onContactClick }: HeroSectionProps) {
  const benefits = [
    'Suporte técnico especializado',
    'Orçamentos personalizados',
    'Atendimento para pequenas e médias empresas'
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative py-24 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Infraestrutura de TI moderna" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight" data-testid="text-hero-title">
                Soluções de{' '}
                <span className="text-primary">Informática</span>{' '}
                para sua Empresa
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-hero-description">
                Oferecemos serviços completos de infraestrutura de TI, instalações elétricas, 
                manutenção de computadores e desenvolvimento de sistemas. Soluções personalizadas 
                para empresas de pequeno e médio porte.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3" data-testid={`text-benefit-${index}`}>
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                onClick={onContactClick || (() => scrollToSection('#contato'))}
                className="bg-success hover:bg-success/90 text-success-foreground"
                data-testid="button-hero-primary-cta"
              >
                Solicitar Orçamento Gratuito
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('#servicos')}
                data-testid="button-hero-secondary-cta"
              >
                Conheça Nossos Serviços
              </Button>
            </div>
          </div>

          {/* Right side - could be used for additional content or kept minimal */}
          <div className="lg:block hidden">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-success/20 rounded-2xl transform rotate-6"></div>
              <div className="relative bg-card border border-card-border rounded-2xl p-8 space-y-6">
                <h3 className="text-xl font-semibold text-card-foreground">Por que escolher a G S Reis Tecnologia?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-muted-foreground">Mais de 10 anos de experiência no mercado</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-muted-foreground">Equipe certificada e especializada</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-muted-foreground">Suporte 24/7 para clientes corporativos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}