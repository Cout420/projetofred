import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PawPrintIcon } from '../icons/paw-print';
import { Eye, Heart, Sparkles } from 'lucide-react';

const services = [
  {
    icon: PawPrintIcon,
    title: 'Missão',
    description: 'Promover bem-estar e proteção animal por meio de resgates responsáveis, orientações educativas, doação de ração e incentivo a castração, garantindo dignidade aos animais e contribuindo para uma cidade mais humana, consciente e solidária.',
  },
  {
    icon: Eye,
    title: 'Visão',
    description: 'Ser referência regional em políticas de cuidado, prevenção e proteção animal, tornando-se um modelo sustentável de parceria entre sociedade civil, poder público, empresas e protetores independentes, reduzindo abandono, fome e sofrimento animal.',
  },
  {
    icon: Heart,
    title: 'Behavioral Consultation',
    description: 'Tackle specific behavioral issues like anxiety, aggression, or fear with a personalized one-on-one plan.',
  },
  {
    icon: Sparkles,
    title: 'Canine Good Citizen',
    description: 'Prepare your dog for the AKC Canine Good Citizen test, a certification of their good manners at home and in the community.',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-secondary relative overflow-hidden">
       <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-1/4 -skew-x-12 transform -translate-x-1/2 bg-accent/50"
      />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-headline font-bold tracking-tighter text-primary sm:text-5xl">Our Training Services</h2>
            <p className="max-w-[900px] text-secondary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We offer a range of services tailored to meet the unique needs of your dog at any stage of life.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-4">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col text-center shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl bg-background/50 backdrop-blur-sm">
              <CardHeader className="items-center">
                <div className="mb-4 rounded-full bg-primary p-4 text-primary-foreground">
                  <service.icon className="h-8 w-8" />
                </div>
                <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col justify-between">
                <CardDescription>{service.description}</CardDescription>
                <Button variant="link" asChild className="mt-4">
                  <a href="#contact">Learn More</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
