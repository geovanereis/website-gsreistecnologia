import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    console.log('Form submitted:', formData);
    
    // //todo: remove mock submission - integrate with backend
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Solicitação enviada!",
        description: "Entraremos em contato em até 24 horas.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Endereço',
      content: 'Rua das Tecnologias, 123\nCentro - São Paulo, SP\nCEP: 01234-567'
    },
    {
      icon: Phone,
      title: 'Telefone',
      content: '(11) 99999-9999\n(11) 3333-4444'
    },
    {
      icon: Mail,
      title: 'E-mail',
      content: 'contato@techsolutions.com.br\norcamento@techsolutions.com.br'
    },
    {
      icon: Clock,
      title: 'Horário de Atendimento',
      content: 'Segunda a Sexta\n08:00 às 18:00\nSuporte 24/7 para clientes'
    }
  ];

  const services = [
    'Infraestrutura de TI',
    'Instalações Elétricas',
    'Manutenção de Computadores',
    'Desenvolvimento de Sistemas',
    'Consultoria em TI',
    'Outro'
  ];

  return (
    <section id="contato" className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground" data-testid="text-contact-title">
            Entre em Contato
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-contact-description">
            Solicite seu orçamento personalizado. Nossa equipe está pronta para atender 
            suas necessidades e oferecer a melhor solução em tecnologia.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle data-testid="text-form-title">Solicitar Orçamento</CardTitle>
                <CardDescription data-testid="text-form-description">
                  Preencha o formulário abaixo e entraremos em contato em até 24 horas.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Seu nome completo"
                        required
                        data-testid="input-name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="seu@email.com"
                        required
                        data-testid="input-email"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company">Empresa *</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        placeholder="Nome da sua empresa"
                        required
                        data-testid="input-company"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="(11) 99999-9999"
                        data-testid="input-phone"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Serviço de Interesse *</Label>
                    <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)} required>
                      <SelectTrigger data-testid="select-service">
                        <SelectValue placeholder="Selecione o serviço" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service, index) => (
                          <SelectItem key={index} value={service} data-testid={`option-service-${index}`}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Descreva suas necessidades ou dúvidas..."
                      rows={4}
                      data-testid="input-message"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-success hover:bg-success/90 text-success-foreground" 
                    disabled={isSubmitting}
                    data-testid="button-submit-form"
                  >
                    {isSubmitting ? 'Enviando...' : 'Solicitar Orçamento'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card key={index} className="hover-elevate" data-testid={`card-contact-info-${index}`}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground mb-2" data-testid={`text-contact-info-title-${index}`}>
                          {info.title}
                        </h3>
                        <div className="text-sm text-muted-foreground whitespace-pre-line" data-testid={`text-contact-info-content-${index}`}>
                          {info.content}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 text-center bg-card border border-card-border rounded-2xl p-8">
          <h3 className="text-xl font-semibold text-card-foreground mb-4" data-testid="text-contact-guarantee-title">
            Garantia de Resposta
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="text-contact-guarantee-description">
            Nos comprometemos a responder todas as solicitações de orçamento em até 24 horas úteis. 
            Para emergências, temos suporte disponível 24/7 para nossos clientes corporativos.
          </p>
        </div>
      </div>
    </section>
  );
}