'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Check } from 'lucide-react';

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
            <div className="flex flex-col items-center md:items-start gap-6">
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
                    </CardContent>
                </Card>
            </div>

            <div className="flex justify-center">
                 <Card className="w-full max-w-sm bg-black/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border-white/20 text-white">
                     <CardHeader className="p-0 mb-4">
                        <CardTitle className="font-headline text-2xl font-bold text-white">
                            Formas de Apoio para Empresas
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                        <ul className="space-y-3 text-white/90">
                            <li className="flex items-center gap-3"><Check className="h-5 w-5 text-accent"/>Ração</li>
                            <li className="flex items-center gap-3"><Check className="h-5 w-5 text-accent"/>Castração</li>
                            <li className="flex items-center gap-3"><Check className="h-5 w-5 text-accent"/>Apoio logístico</li>
                        </ul>
                        <div className="mt-6 flex justify-start">
                            <Button variant="link" asChild className="text-accent hover:text-accent/80 p-0 h-auto">
                                 <a href="https://wa.me/5511940344310?text=Quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20como%20minha%20empresa%20pode%20apoiar%20o%20Projeto%20Frederico" target="_blank" rel="noopener noreferrer">
                                    Fale conosco via WhatsApp
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
