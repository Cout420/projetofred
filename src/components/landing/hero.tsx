import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { PawPrintIcon } from '../icons/paw-print';
import { ArrowDown } from 'lucide-react';
import { Instagram } from 'lucide-react';

const heroImage = PlaceHolderImages.find(img => img.id === 'hero-1');

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path><path d="m14.2 10.5 3.4 3.4M1.5 22.5 8 16"></path></svg>
  );

export default function Hero() {
  return (
    <section id="hero" className="relative h-[90vh] w-full min-h-[700px] flex items-center justify-center text-white">
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
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
      <div className="relative container mx-auto px-4 md:px-6 z-10 flex flex-col items-center text-center animate-fade-in-up">
        
        <PawPrintIcon className="h-14 w-14 text-accent mb-4"/>
        
        <h1 className="font-headline text-5xl md:text-7xl tracking-tight font-bold text-white drop-shadow-lg">
            Projeto Frederico
        </h1>
        
        <p className="text-lg md:text-xl text-white/90 mt-2 drop-shadow-md">
            Ninguém pode ser deixado para trás
        </p>

        <p className="text-base text-white/80 max-w-2xl mt-4 drop-shadow-md">
            Promovemos o bem-estar e a proteção animal com resgates, castração e apoio a famílias. Juntos, construímos uma comunidade mais solidária.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90 transition-transform duration-300 hover:scale-105 shadow-lg">
                <a href="https://www.instagram.com/chameofrederico/" target="_blank" rel="noopener noreferrer">
                   <Instagram className="mr-2 h-5 w-5" /> Conheça nosso projeto
                </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-accent bg-accent text-accent-foreground hover:bg-accent/90 transition-transform duration-300 hover:scale-105 shadow-lg">
                <a href="https://wa.me/5511940344310?text=Quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Projeto%20Frederico" target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon className="mr-2 h-5 w-5" /> Fale Conosco
                </a>
            </Button>
        </div>

        <a href="#about" className="absolute -bottom-16 animate-bounce" aria-label="Scroll down">
          <ArrowDown className="h-8 w-8 text-white/80 hover:text-white transition-colors"/>
        </a>
      </div>
    </section>
  );
}
