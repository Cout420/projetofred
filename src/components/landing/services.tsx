import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PawPrintIcon } from '../icons/paw-print';
import { Eye, Heart, Sparkles, Check } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: PawPrintIcon,
    title: 'Missão',
    description: 'Promover bem-estar e proteção animal por meio de resgates responsáveis, orientações educativas, doação de ração e incentivo a castração, garantindo dignidade aos animais e contribuindo para uma cidade mais humana, consciente e solidária.',
    isList: false,
  },
  {
    icon: Eye,
    title: 'Visão',
    description: 'Ser referência regional em políticas de cuidado, prevenção e proteção animal, tornando-se um modelo sustentável de parceria entre sociedade civil, poder público, empresas e protetores independentes, reduzindo abandono, fome e sofrimento animal.',
    isList: false,
  },
  {
    icon: Heart,
    title: 'Valores',
    description: [
        'Respeito à vida',
        'Compromisso animal',
        'Solidariedade',
        'Bem-estar animal',
        'Responsabilidade compartilhada'
    ],
    isList: true,
  },
  {
    icon: Sparkles,
    title: 'Propósito',
    description: [
      'Reduzir o abandono, maus-tratos e superpopulação de animais',
      'Incentivar a castração como política pública de saúde',
      'Apoiar famílias em situação de vulnerabilidade',
      'Promover o bem-estar e proteção aos animais em situação de rua',
    ],
    isList: true,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-background relative overflow-hidden">
       <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 w-1/4 skew-x-12 transform translate-x-1/2 bg-accent/10"
      />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-headline font-bold tracking-tighter text-primary sm:text-5xl">Nossos Pilares</h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Conheça a base que sustenta o nosso projeto e o amor que nos move.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-stretch gap-6 py-12 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-4">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col text-center shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl bg-card">
              <CardHeader className="items-center">
                <div className="mb-4 rounded-full bg-primary p-4 text-primary-foreground">
                  <service.icon className="h-8 w-8" />
                </div>
                <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col justify-between p-4 pt-0">
                {service.isList && Array.isArray(service.description) ? (
                  <div className="text-left space-y-2 text-sm text-muted-foreground">
                    {service.description.map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <CardDescription>{service.description}</CardDescription>
                )}
                 <div className="mt-4">
                    <Button variant="link" asChild className="text-accent">
                        <Link href="#contact">Fale Conosco</Link>
                    </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
