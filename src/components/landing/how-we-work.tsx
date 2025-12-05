import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Heart } from 'lucide-react';

const howWeWorkImage = PlaceHolderImages.find(img => img.id === 'how-we-work-1');
const howWeWorkBgImage = PlaceHolderImages.find(img => img.id === 'how-we-work-bg');

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="relative w-full py-24 md:py-32 lg:py-40 flex items-center justify-center text-white">
        {howWeWorkBgImage && (
            <Image
                src={howWeWorkBgImage.imageUrl}
                alt={howWeWorkBgImage.description}
                fill
                className="object-cover object-center"
                data-ai-hint={howWeWorkBgImage.imageHint}
            />
        )}
        <div className="absolute inset-0 bg-black/60" />

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
          <div className="flex justify-center">
            <Card className="w-full max-w-xl bg-black/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border-white/20 text-white">
                <CardHeader className="p-0 mb-4 text-center md:text-left">
                    <CardTitle className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                        Como empresas podem ajudar essa INICIATIVA?
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                    <CardDescription className="max-w-[600px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center md:text-left">
                        O Projeto Frederico recebe doações de pessoas físicas e preferencialmente de pessoas jurídicas, com certificação oficial de parceria social e divulgação institucional.
                    </CardDescription>
                    <div className="flex justify-center md:justify-start mt-6">
                        <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90 transition-transform duration-300 hover:scale-105">
                            <a href="#contact">
                            <Heart className="mr-2 h-4 w-4" /> As empresas podem apoiar de 3 formas
                            </a>
                        </Button>
                    </div>
                </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
