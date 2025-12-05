import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const aboutImage = PlaceHolderImages.find(img => img.id === 'about-1');

export default function About() {
  return (
    <section id="about" className="bg-background relative overflow-hidden">
       <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 w-1/4 -skew-x-12 transform translate-x-1/2 bg-accent/20"
      />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid items-center gap-10 md:grid-cols-2 lg:gap-16">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
              The Story Behind Projeto Frederico
            </h2>
            <p className="max-w-[600px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Projeto Frederico was born from a deep love for dogs and a passion for understanding their behavior. Our mission is to foster a stronger bond between dogs and their owners through positive reinforcement and compassionate training methods. We believe every dog deserves a happy and well-behaved life.
            </p>
            <div className="flex justify-center md:justify-start">
                <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90 transition-transform duration-300 hover:scale-105">
                    <a href="#contact">Meet the Team</a>
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
