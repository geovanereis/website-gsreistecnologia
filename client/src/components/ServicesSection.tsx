import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Server, Zap, Monitor, Code } from 'lucide-react';

interface ServicesSectionProps {
  onContactClick?: () => void;
}

interface Client {
  name: string;
  logo: string;
  link?: string;
  width?: number;
  height?: number;
}

export default function ServicesSection({ onContactClick }: ServicesSectionProps) {
  const services = [
    {
      icon: Server,
      title: 'Infraestrutura de TI',
      description: 'Planejamento, instalação e configuração de redes, servidores e sistemas de backup para garantir máxima disponibilidade e segurança.',
      features: [
        'Configuração de servidores',
        'Instalação de redes',
        'Sistemas de backup',
        'Segurança de dados'
      ]
    },
    {
      icon: Zap,
      title: 'Instalações Elétricas',
      description: 'Projetos elétricos especializados para data centers, escritórios e ambientes corporativos com foco em eficiência e segurança.',
      features: [
        'Projetos elétricos',
        'Cabeamento estruturado',
        'Sistemas de energia',
        'Certificação técnica'
      ]
    },
    {
      icon: Monitor,
      title: 'Manutenção de Computadores',
      description: 'Serviços preventivos e corretivos para garantir o funcionamento otimizado de toda sua infraestrutura de TI.',
      features: [
        'Manutenção preventiva',
        'Suporte técnico',
        'Upgrade de hardware',
        'Diagnóstico avançado'
      ]
    },
    {
      icon: Code,
      title: 'Desenvolvimento de Sistemas',
      description: 'Criação de sites institucionais, sistemas web personalizados e aplicações sob medida para suas necessidades específicas.',
      features: [
        'Sites institucionais',
        'Sistemas web',
        'Aplicações móveis',
        'Integração de APIs'
      ]
    }
  ];

  const clients: Client[] = [
    { name: 'Cliente A', logo: '/clients/client1.png', link: 'https://clientea.com', width: 140 },
    { name: 'Cliente B', logo: '/clients/client2.png', link: 'https://clienteb.com', width: 120 },
    { name: 'Cliente C', logo: '/clients/client3.png', link: 'https://clientec.com', width: 130, height: 60 },
    { name: 'Cliente D', logo: '/clients/client4.png', width: 120 },
    { name: 'Cliente E', logo: '/clients/client5.png', link: 'https://clientee.com', width: 140 }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section id="servicos" className="py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground" data-testid="text-services-title">
              Nossos Serviços
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-services-description">
              Oferecemos soluções completas em tecnologia da informação, com orçamentos personalizados 
              para atender às necessidades específicas de sua empresa.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="hover-elevate" data-testid={`card-service-${index}`}>
                  <CardHeader className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl" data-testid={`text-service-title-${index}`}>
                          {service.title}
                        </CardTitle>
                      </div>
                    </div>
                    <CardDescription className="text-base leading-relaxed" data-testid={`text-service-description-${index}`}>
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    {/* Features List */}
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2" data-testid={`text-service-feature-${index}-${featureIndex}`}>
                          <div className="h-1.5 w-1.5 bg-success rounded-full"></div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      onClick={onContactClick || scrollToContact}
                      className="w-full bg-success hover:bg-success/90 text-success-foreground"
                      data-testid={`button-service-cta-${index}`}
                    >
                      Solicitar Orçamento
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center bg-card border border-card-border rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-card-foreground mb-4" data-testid="text-services-cta-title">
              Precisa de uma Solução Personalizada?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto" data-testid="text-services-cta-description">
              Cada empresa tem necessidades únicas. Nossa equipe está pronta para desenvolver 
              uma solução sob medida que atenda perfeitamente aos seus requisitos.
            </p>
            <Button 
              size="lg"
              onClick={onContactClick || scrollToContact}
              className="bg-success hover:bg-success/90 text-success-foreground"
              data-testid="button-services-main-cta"
            >
              Fale com Nossos Especialistas
            </Button>
          </div>
        </div>
      </section>

      {/* Clients / Partners Section */}
      {/* <section id="clientes" className="py-24 bg-muted/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Nossos Clientes & Parceiros
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {clients.map((client, index) => {
              const logoStyle: React.CSSProperties = {
                width: client.width || 120,
                height: client.height || 'auto',
                objectFit: 'contain',
              };

              const logoImg = (
                <img
                  src={client.logo}
                  alt={client.name}
                  style={logoStyle}
                  className="transition-transform hover:scale-105 duration-200"
                />
              );

              return (
                <div key={index}>
                  {client.link ? (
                    <a href={client.link} target="_blank" rel="noopener noreferrer">
                      {logoImg}
                    </a>
                  ) : (
                    logoImg
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section> */}
    </>
  );
}
