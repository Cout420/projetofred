'use client';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, HeartHandshake, Truck } from 'lucide-react';
import { PawPrintIcon } from '../icons/paw-print';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const partnershipTiers = [
  {
    icon: PawPrintIcon,
    title: 'Ração',
    subtitle: '(Pacotes de 10KG)',
    description: 'Garanta a alimentação dos nossos resgatados. Sua doação de ração é vital para a saúde e recuperação deles.',
    items: [
      { level: 'Protetor Bronze', detail: 'Até 5 sacos' },
      { level: 'Protetor Prata', detail: 'De 6 a 10 sacos' },
      { level: 'Protetor Ouro', detail: 'Acima de 11 sacos' },
    ],
    footer: 'Doação preferencialmente mensal',
  },
  {
    icon: HeartHandshake,
    title: 'Castração',
    subtitle: 'Controle populacional e prevenção',
    description: 'Ajude a custear castrações, uma ação essencial para a saúde pública e o bem-estar animal. Valor médio: R$ 158,70',
    items: [
      { level: 'Protetor Bronze', detail: 'Até 5 castrações' },
      { level: 'Protetor Prata', detail: 'De 6 a 10 castrações' },
      { level: 'Protetor Ouro', detail: 'A partir de 11 castrações' },
    ],
    footer: 'Doação preferencialmente mensal',
  },
  {
    icon: Truck,
    title: 'Apoio Logístico',
    subtitle: 'Suporte para resgates e transporte',
    description: 'Financeie o profissional que dirige nosso veículo de resgate, garantindo que possamos chegar onde a ajuda é necessária.',
    items: [
      { level: 'Recursos Financeiros', detail: 'Auxilio no custeio do profissional que realizará os resgates' },
      { level: 'Atuação', detail: 'Segunda a sexta-feira' },
      { level: 'Impacto', detail: 'Viabiliza todos os resgates' },
    ],
    footer: null,
  },
];

export default function Partnership() {
  const { ref, style } = useScrollAnimation();

  return (
    <section id="partnership" className="bg-primary w-full py-20 md:py-28 lg:py-36">
      <div ref={ref} style={style} className="container mx-auto px-4 md:px-6 transition-all duration-700">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
             <div className="inline-block rounded-lg bg-primary-foreground/10 px-3 py-1 text-sm text-primary-foreground">Nossos Parceiros</div>
            <h2 className="text-3xl font-headline font-bold tracking-tighter text-primary-foreground sm:text-5xl">
              Qual o retorno para sua empresa?
            </h2>
            <p className="max-w-[900px] text-primary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Ao apoiar o Projeto Frederico, sua empresa se torna uma parceira na proteção animal, ganhando reconhecimento e fortalecendo sua imagem institucional.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-7xl items-stretch gap-8 py-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {partnershipTiers.map((tier) => (
            <Card key={tier.title} className="flex flex-col rounded-2xl bg-card text-card-foreground shadow-2xl transition-all duration-500 hover:!scale-105 hover:shadow-accent/20 border-t-4 border-accent/20">
              <CardHeader className="items-center text-center p-6">
                <div className="mb-4 rounded-full bg-accent/10 p-4 text-accent transition-transform duration-300 group-hover:scale-110">
                  <tier.icon className="h-10 w-10" />
                </div>
                <CardTitle className="font-headline text-3xl text-primary">{tier.title}</CardTitle>
                {tier.subtitle && <p className="text-muted-foreground mt-1 text-sm">{tier.subtitle}</p>}
              </CardHeader>
              <CardContent className="flex flex-1 flex-col justify-between p-6 pt-0">
                <div>
                  <p className="mb-6 text-center text-sm text-muted-foreground">{tier.description}</p>
                  <ul className="space-y-4">
                    {tier.items.map((item) => (
                      <li key={item.level} className="flex items-start gap-3">
                        <div className="mt-1">
                          <Award className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <p className="font-semibold text-primary">{item.level}</p>
                          {item.detail && <p className="text-sm text-muted-foreground">{item.detail}</p>}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {tier.footer && (
                  <CardFooter className="p-0 pt-6 justify-center mt-auto">
                    <p className="text-xs italic text-muted-foreground">* {tier.footer}</p>
                  </CardFooter>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
