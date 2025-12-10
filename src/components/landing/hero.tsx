'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { PawPrintIcon } from '../icons/paw-print';
import { ArrowDown } from 'lucide-react';
import { Instagram } from 'lucide-react';

const heroImage = PlaceHolderImages.find(img => img.id === 'hero-1');

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
        
        <p className="mt-4 text-lg md:text-xl text-white/90 drop-shadow-md">
            Ninguém pode ser deixado para trás
        </p>

        <p className="mt-2 max-w-2xl text-base text-white/80 drop-shadow-md">
            Promovemos o bem-estar e a proteção animal com resgates, castração e apoio a famílias. Juntos, construímos uma comunidade mais solidária.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90 transition-transform duration-300 hover:scale-105 shadow-lg text-base">
                <a href="https://www.instagram.com/chameofrederico/" target="_blank" rel="noopener noreferrer">
                   <Instagram className="mr-2 h-6 w-6" /> Conheça nosso trabalho
                </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-accent bg-accent text-accent-foreground hover:bg-accent/90 transition-transform duration-300 hover:scale-105 shadow-lg text-base">
                <a href="https://wa.me/5511940344310?text=Quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Projeto%20Frederico" target="_blank" rel="noopener noreferrer">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 h-6 w-6"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        >
                        <path
                            d="M16.75 13.96c.25.13.41.2.52.28.18.13.28.24.38.37.1.13.18.28.22.44.04.16.05.33.02.51-.03.18-.1.35-.22.51-.12.16-.28.3-.48.43-.2.13-.44.24-.72.33-.28.09-.58.13-1.02.13-.53,0-1.1-.1-1.68-.29-.58-.19-1.14-.46-1.68-.79-.54-.33-1.04-.73-1.5-1.18-.46-.45-.87-.96-1.22-1.51-.35-.55-.63-1.12-.84-1.71s-.33-1.18-.33-1.75c0-.52.06-1.01.18-1.46.12-.45.3-.86.53-1.22.23-.36.5-.66.8-.88.3-.22.61-.36.92-.42.31-.06.59-.06.81,0,.22.06.41.14.58.26.17.12.3.26.39.43.09.17.14.33.14.48s-.03.29-.08.42c-.05.13-.13.25-.23.36-.1.11-.22.22-.35.31-.13.09-.28.18-.44.26-.16.08-.34.16-.54.24-.2.08-.37.17-.49.27-.12.1-.22.2-.29.29-.07.09-.12.18-.17.26-.05.08-.08.16-.11.25-.03.09-.04.17-.04.25,0,.08.01.16.03.23.02.07.05.14.08.2.03.06.08.13.13.19.05.06.11.12.19.19.33.33.7.61,1.1.84.4.23.83.42,1.28.56.09.03.18.05.28.07.1.02.2.03.3.03.1,0,.2,0,.3-.01s.2-.02.29-.04c.09-.02.18-.04.26-.08.08-.04.16-.08.23-.13.07-.05.14-.1.2-.16.13-.13.25-.23.36-.31s.22-.16.32-.24c.1-.08.18-.15.26-.21.08-.06.15-.12.21-.17.2-.17.43-.31.69-.41.26-.1.55-.1.85.01zM12,0C5.37,0,0,5.37,0,12s5.37,12,12,12,12-5.37,12-12S18.63,0,12,0zM19.09,16.5c-.21.21-.46.39-.75.54-.29.15-.6.27-.94.36-.34.09-.7.13-1.08.13-.7,0-1.42-.14-2.14-.41-.72-.27-1.41-.65-2.06-1.12s-1.25-1.03-1.8-1.64c-.55-.61-1.02-1.28-1.39-2-.37-.72-.56-1.47-.56-2.24,0-.78.16-1.53.48-2.22s.72-1.3,1.19-1.82c.47-.52.99-.93,1.55-1.23.56-.3,1.14-.46,1.73-.46.36,0,.7.05,1.02.14.32.09.61.22.86.38.25.16.46.34.64.55.18.21.31.45.39.71.08.26.09.52.05.77-.04.25-.13.5-.27.73-.14.23-.33.43-.55.6-.22.17-.48.3-.76.4-.28.1-.58.15-.88.15-.18,0-.36-.02-.53-.05-.17-.03-.34-.08-.5-.14-.16-.06-.31-.13-.46-.22-.15-.09-.28-.18-.41-.29-.1-.08-.18-.15-.24-.22-.06-.07-.12-.13-.16-.18-.13-.17-.24-.34-.33-.52-.09-.18-.14-.38-.14-.58,0-.24.05-.47.14-.68.09-.21.23-.4.4-.55.17-.15.37-.27.59-.36.22-.09.46-.14.71-.14.1,0,.21.01.31.03.1.02.2.05.29.08.09.03.18.07.26.12.08.05.15.1.22.16.07.06.13.12.19.18.06.06.11.12.15.18.04.06.08.11.11.16.03.05.05.1.07.15.02.05.03.1.03.16,0,.18-.04.36-.11.53s-.18.33-.31.48c-.06.06-.12.12-.19.18-.07.06-.15.12-.23.17-.08.05-.17.1-.26.15-.09.05-.18.09-.28.13-.1.04-.2.07-.31.1-.11.03-.22.05-.33.06-.2,0-.39-.03-.57-.08s-.36-.12-.52-.21c-.16-.09-.3-.19-.43-.3-.13-.11-.25-.23-.35-.35-.05-.06-.09-.12-.12-.18-.03-.06-.05-.12-.07-.18-.02-.06-.02-.12-.02-.19,0-.12.02-.24.07-.36.05-.12.11-.23.19-.33.08-.1.17-.19.28-.27.11-.08.24-.15.38-.21.28-.12.58-.17.89-.17.41,0,.8.08,1.15.23.35.15.67.36.93.63.26.27.46.58.59.92.13.34.2.7.2,1.08,0,.5-.11.98-.32,1.44s-.5.87-.85,1.24c-.35.37-.75.69-1.18.95s-.9.46-1.39.6c-.49.14-1,.22-1.51.22-.43,0-.85-.07-1.25-.21s-.77-.35-1.11-.59c-.34-.24-.65-.52-.91-.83-.26-.31-.49-.65-.67-1.02-.18-.37-.32-.77-.4-1.18-.08-.41-.13-.83-.13-1.25,0-.56.09-1.1.26-1.61.17-.51.42-1,.74-1.44.32-.44.71-.83,1.16-1.17.45-.34.96-.61,1.51-.81.55-.2,1.13-.3,1.73-.3.43,0,.85.07,1.24.2s.75.32,1.07.57c.32.25.59.54.81.87s.38.69.48,1.06c.04.1.07.2.09.3l.03.14z"
                            /></svg
                        > Fale Conosco
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
