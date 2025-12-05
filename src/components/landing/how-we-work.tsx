import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Heart } from 'lucide-react';

const howWeWorkImage = PlaceHolderImages.find(img => img.id === 'how-we-work-1');

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="bg-background relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 w-1/4 skew-x-12 transform translate-x-1/2 bg-accent/80"
      />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid items-center gap-10 md:grid-cols-2 lg:gap-16">
          <div className="flex justify-center md:order-last">
            <Card className="overflow-hidden rounded-xl shadow-2xl transition-transform duration-300 hover:scale-105 hover:shadow-accent/20">
              <CardContent className="p-0">
                {howWeWorkImage && (
                  <Image
                    src={howWeWorkImage.imageUrl}
                    alt={howWeWorkImage.description}
                    width={600}
                    height={600}
                    className="aspect-square w-full object-cover"
                    data-ai-hint={howWeWorkImage.imageHint}
                  />
                )}
              </CardContent>
            </Card>
          </div>
          <div className="space-y-4 text-center md:text-left">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
              Como atuamos?
            </h2>
            <p className="max-w-[600px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Nossa atuação é pautada na transparência e no amor. Cada resgate, cada campanha de castração e cada doação de alimento é realizada com o máximo de cuidado e responsabilidade, buscando sempre o melhor para os animais e para a comunidade.
            </p>
            <div className="flex justify-center md:justify-start">
              <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90 transition-transform duration-300 hover:scale-105">
                <a href="#contact">
                  <Heart className="mr-2 h-4 w-4" /> Doe agora
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
