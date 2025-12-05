import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { PawPrintIcon } from '../icons/paw-print';
import { ArrowRight } from 'lucide-react';

const conclusionImage1 = PlaceHolderImages.find(img => img.id === 'conclusion-1');
const conclusionImage2 = PlaceHolderImages.find(img => img.id === 'conclusion-2');

export default function Conclusion() {
  return (
    <section id="conclusion" className="bg-primary w-full py-20 md:py-28 lg:py-36 text-primary-foreground relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
            <h2 className="font-headline text-5xl md:text-6xl font-bold text-accent">
              Conclusão
            </h2>
            {conclusionImage2 && (
              <Card className="overflow-hidden rounded-3xl shadow-2xl w-full max-w-md transition-transform duration-300 hover:scale-105">
                <CardContent className="p-0">
                  <Image
                    src={conclusionImage2.imageUrl}
                    alt={conclusionImage2.description}
                    width={500}
                    height={350}
                    className="object-cover w-full aspect-[4/3]"
                    data-ai-hint={conclusionImage2.imageHint}
                  />
                </CardContent>
              </Card>
            )}
          </div>
          
          {/* Right Column */}
          <div className="relative flex flex-col items-center justify-center min-h-[500px]">
            {conclusionImage1 && (
                <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-10 -translate-y-1/4 translate-x-1/4">
                     <Image
                        src={conclusionImage1.imageUrl}
                        alt={conclusionImage1.description}
                        fill
                        className="object-contain"
                        data-ai-hint={conclusionImage1.imageHint}
                    />
                </div>
            )}
            
            <Card className="bg-card text-card-foreground p-8 rounded-3xl shadow-2xl max-w-lg z-10 relative">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                <div className="bg-accent rounded-full p-4 border-4 border-primary">
                    <PawPrintIcon className="h-10 w-10 text-accent-foreground" />
                </div>
              </div>
              <CardContent className="pt-12 text-center">
                <p className="mb-6 text-muted-foreground text-lg">
                  O Projeto Frederico não é apenas sobre animais, é sobre humanidade, respeito, solidariedade e transformação social.
                </p>
                <p className="text-muted-foreground text-lg">
                  Seu apoio pode salvar vidas, alimentar quem tem fome e fortalecer um ecossistema de cuidado permanente.
                </p>
                <Button size="lg" asChild className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90 transition-transform duration-300 hover:scale-105">
                    <a href="#contact">
                        ENTRE EM CONTATO
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                </Button>
              </CardContent>
            </Card>

             {conclusionImage1 && (
                 <div className="hidden lg:block absolute -right-20 -bottom-20 w-64 h-64 z-20">
                    <Card className="overflow-hidden rounded-3xl shadow-2xl w-full h-full transform rotate-12 transition-transform duration-300 hover:rotate-6 hover:scale-105">
                        <Image
                            src={conclusionImage1.imageUrl}
                            alt={conclusionImage1.description}
                            fill
                            className="object-cover"
                            data-ai-hint={conclusionImage1.imageHint}
                        />
                    </Card>
                </div>
             )}

          </div>
        </div>
      </div>
    </section>
  );
}
