import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PawPrintIcon } from '../icons/paw-print';
import { Eye, Heart, Sparkles, Check } from 'lucide-react';

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
    <section id="services" className="bg-background relative overflow-hidden py-12 md:py-24 lg:py-32 animate-fade-in-up">
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
        <div className="mx-auto grid max-w-5xl items-stretch gap-8 py-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card key={index} className="group relative flex flex-col overflow-hidden rounded-2xl bg-card text-card-foreground shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-accent/20">
              <div className="absolute top-0 h-1 w-full bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <CardHeader className="items-center text-center p-6">
                <div className="mb-4 rounded-full border-2 border-primary/10 bg-primary/5 p-4 text-primary transition-colors duration-300 group-hover:border-accent/20 group-hover:bg-accent/10 group-hover:text-accent">
                  <service.icon className="h-8 w-8" />
                </div>
                <CardTitle className="font-headline text-2xl text-primary">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col p-6 pt-0">
                {service.isList && Array.isArray(service.description) ? (
                  <ul className="flex-1 space-y-3 text-left text-sm text-muted-foreground">
                    {service.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="mt-1 h-4 w-4 flex-shrink-0 text-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <CardDescription className="flex-1 text-center">{service.description}</CardDescription>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
