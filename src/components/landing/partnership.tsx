import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

const partnershipTiers = [
  {
    title: 'Ração',
    subtitle: '(Pacote de 10KG)',
    description: null,
    items: [
      { level: 'Protetor Bronze', detail: 'Até 5 sacos de 10kg' },
      { level: 'Protetor Prata', detail: 'De 6 a 10 sacos de 10kg' },
      { level: 'Protetor Ouro', detail: 'Acima de 11 sacos de 10kg' },
    ],
    footer: 'Doação preferencialmente mensal',
  },
  {
    title: 'Castração',
    subtitle: null,
    description: 'Valor médio da castração em empresas parceiras do Projeto Frederico: R$ 158,70',
    items: [
      { level: 'Protetor Bronze', detail: 'Até 5 Castrações' },
      { level: 'Protetor Prata', detail: 'De 6 a 10 Castrações' },
      { level: 'Protetor Ouro', detail: 'A partir de 11 Castrações' },
    ],
    footer: 'Doação preferencialmente mensal',
  },
  {
    title: 'Apoio Logístico',
    subtitle: null,
    description: 'A empresa pode financiar o profissional que auxilia nos resgates:',
    items: [
      { level: 'Motorista do veículo oficial do projeto', detail: null },
      { level: 'Atuação de segunda a sexta-feira', detail: null },
      { level: 'Salário médio', detail: 'R$ 2.100,00 + encargos' },
    ],
    footer: null,
  },
];

export default function Partnership() {
  return (
    <section id="partnership" className="bg-primary w-full py-20 md:py-28 lg:py-36">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-headline font-bold tracking-tighter text-primary-foreground sm:text-5xl">
              Qual o retorno para sua empresa?
            </h2>
            <p className="max-w-[900px] text-primary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Ao apoiar o Projeto Frederico, sua empresa se torna uma parceira na proteção animal, ganhando reconhecimento e fortalecendo sua imagem institucional.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-7xl items-stretch gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
          {partnershipTiers.map((tier) => (
            <Card key={tier.title} className="flex flex-col rounded-2xl bg-card text-card-foreground shadow-2xl transition-transform duration-300 hover:scale-105">
                <CardHeader className="items-center pb-4">
                    <div className="relative mb-[-30px] z-10">
                        <CheckCircle2 className="h-16 w-16 text-accent fill-white"/>
                    </div>
                </CardHeader>
              <CardContent className="flex flex-1 flex-col justify-between pt-10">
                <div className="text-center">
                    <CardTitle className="font-headline text-3xl text-accent">{tier.title}</CardTitle>
                    {tier.subtitle && <p className="text-muted-foreground mt-1">{tier.subtitle}</p>}
                </div>

                <div className="my-6 text-left">
                  {tier.description && <p className="mb-4 text-sm text-foreground/90">{tier.description}</p>}
                  <ul className="space-y-4">
                    {tier.items.map((item) => (
                      <li key={item.level} className="flex items-start gap-3">
                        <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                        <div>
                          <p className="font-semibold text-primary">{item.level}</p>
                          {item.detail && <p className="text-sm text-muted-foreground">{item.detail}</p>}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {tier.footer && (
                  <CardFooter className="p-0 pt-4 justify-center">
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
