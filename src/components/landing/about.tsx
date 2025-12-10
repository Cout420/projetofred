import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const aboutImage = PlaceHolderImages.find(img => img.id === 'about-1');

export default function About() {
  return (
    <section id="about" className="bg-secondary relative overflow-hidden py-12 md:py-24 lg:py-32">
       <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-1/4 -skew-x-12 transform -translate-x-1/2 bg-accent/80"
      />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid items-center gap-10 md:grid-cols-2 lg:gap-16">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
              Quem somos?
            </h2>
            <p className="max-w-[600px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto md:mx-0">
              O Projeto Frederico nasceu do compromisso com a causa animal e da certeza de que toda vida merece proteção, cuidado e dignidade. Atuamos no resgate, acolhimento, orientação, castração, e doação de alimentos para animais comunitários, ou pertencentes a famílias de baixa renda.
            </p>
            <div className="flex justify-center md:justify-start">
                <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90 transition-transform duration-300 hover:scale-105">
                    <a href="https://www.instagram.com/chameofrederico/" target="_blank" rel="noopener noreferrer">Saiba mais</a>
                </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <Card className="overflow-hidden rounded-xl shadow-2xl transition-transform duration-300 hover:scale-105 hover:shadow-accent/20">
              <CardContent className="p-0">
                {aboutImage && (
                  <Image
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    width={600}
                    height={600}
                    className="aspect-square w-full object-cover"
                    data-ai-hint={aboutImage.imageHint}
                  />
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
