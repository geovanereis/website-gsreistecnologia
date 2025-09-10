import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Users, Clock, Star } from 'lucide-react';
import teamImage from '@assets/generated_images/IT_team_working_together_f9ea3af9.png';

export default function AboutSection() {
  const stats = [
    { icon: Users, value: '500+', label: 'Clientes Atendidos' },
    { icon: Clock, value: '10+', label: 'Anos de Experiência' },
    { icon: Award, value: '15+', label: 'Certificações Técnicas' },
    { icon: Star, value: '4.9', label: 'Avaliação dos Clientes' }
  ];

  const values = [
    {
      title: 'Excelência Técnica',
      description: 'Nossa equipe é formada por profissionais certificados e com vasta experiência em tecnologia.'
    },
    {
      title: 'Compromisso',
      description: 'Estabelecemos parcerias duradouras, oferecendo suporte contínuo e soluções confiáveis.'
    },
    {
      title: 'Inovação',
      description: 'Utilizamos as mais modernas tecnologias para garantir que sua empresa esteja sempre à frente.'
    }
  ];

  return (
    <section id="quem-somos" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground" data-testid="text-about-title">
            Quem Somos
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-about-subtitle">
            Uma empresa especializada em soluções de TI, comprometida em oferecer 
            serviços de qualidade para pequenas e médias empresas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground" data-testid="text-about-story-title">
                Nossa História
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p data-testid="text-about-story-1">
                  Fundada em 2014, a TechSolutions nasceu da necessidade de oferecer serviços 
                  de tecnologia especializados para empresas que buscam soluções confiáveis 
                  e personalizadas.
                </p>
                <p data-testid="text-about-story-2">
                  Ao longo dos anos, desenvolvemos expertise em infraestrutura de TI, 
                  instalações elétricas e desenvolvimento de sistemas, sempre priorizando 
                  a qualidade e a satisfação dos nossos clientes.
                </p>
                <p data-testid="text-about-story-3">
                  Hoje, somos referência no mercado regional, atendendo empresas de diversos 
                  segmentos com soluções que impulsionam o crescimento e a eficiência operacional.
                </p>
              </div>
            </div>

            {/* Mission/Values */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground" data-testid="text-about-values-title">
                Nossos Valores
              </h3>
              <div className="space-y-4">
                {values.map((value, index) => (
                  <div key={index} className="flex gap-4" data-testid={`text-about-value-${index}`}>
                    <div className="h-2 w-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">{value.title}</h4>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img 
                src={teamImage} 
                alt="Equipe TechSolutions trabalhando" 
                className="w-full h-auto object-cover"
                data-testid="img-about-team"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6">
              <Card className="bg-card border-card-border">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 bg-success rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-card-foreground">Equipe Disponível 24/7</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="text-center hover-elevate" data-testid={`card-stat-${index}`}>
                <CardContent className="p-6 space-y-3">
                  <div className="mx-auto h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground" data-testid={`text-stat-value-${index}`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground" data-testid={`text-stat-label-${index}`}>
                      {stat.label}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-foreground mb-6" data-testid="text-about-certifications-title">
            Certificações e Parcerias
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {/* //todo: remove mock certifications */}
            {['Microsoft Partner', 'Cisco Certified', 'ISO 9001', 'CompTIA Certified'].map((cert, index) => (
              <Badge key={index} variant="secondary" className="px-4 py-2" data-testid={`badge-certification-${index}`}>
                {cert}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}