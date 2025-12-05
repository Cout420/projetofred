import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { PawPrintIcon } from '../icons/paw-print';
import { ArrowDown } from 'lucide-react';

const heroImage = PlaceHolderImages.find(img => img.id === 'hero-1');

export default function Hero() {
  return (
    <section id="hero" className="relative h-[90vh] w-full min-h-[600px] flex items-center justify-center text-white">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover object-center"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      <div className="relative container mx-auto px-4 md:px-6 z-10 flex flex-col items-center text-center">
        <Card className="max-w-2xl bg-black/50 backdrop-blur-sm border-white/20 text-white animate-fade-in-up">
            <CardHeader className="items-center">
                <PawPrintIcon className="h-12 w-12 text-accent mb-4"/>
                <CardTitle className="font-headline text-4xl md:text-6xl tracking-tight">
                    Projeto Frederico
                </CardTitle>
                <CardDescription className="text-lg md:text-xl text-white/80 pt-2">
                    Building Bonds, One Paw at a Time
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <p className="md:text-lg">
                    Discover the joy of a well-behaved companion. Our expert training methods are designed to bring out the best in your dog, creating a harmonious relationship for years to come.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90 transition-transform duration-300 hover:scale-105">
                        <a href="#services">Our Services</a>
                    </Button>
                    <Button size="lg" variant="outline" asChild className="border-accent bg-accent text-accent-foreground hover:bg-accent/90 transition-transform duration-300 hover:scale-105">
                        <a href="#contact">Book a Consultation</a>
                    </Button>
                </div>
            </CardContent>
        </Card>
        <a href="#about" className="absolute bottom-10 animate-bounce" aria-label="Scroll down">
          <ArrowDown className="h-8 w-8 text-white/70"/>
        </a>
      </div>
    </section>
  );
}
