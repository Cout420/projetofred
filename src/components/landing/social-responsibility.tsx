import Image from 'next/image';
import { PawPrintIcon } from '../icons/paw-print';
import { ArrowRightCircle, Award, Megaphone, Star } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';

const benefits = [
    {
        icon: Award,
        text: 'Certificado oficial de caráter simbólico emitido pelo Projeto Frederico',
    },
    {
        icon: Megaphone,
        text: 'Divulgação institucional do apoio',
    },
    {
        icon: Star,
        text: 'Reconhecimento público em ações do Projeto Frederico',
    },
];

const image1 = PlaceHolderImages.find(img => img.id === 'social-1');

export default function SocialResponsibility() {
  return (
    <section id="social-responsibility" className="bg-secondary relative w-full overflow-hidden py-20 md:py-28 lg:py-36 text-foreground animate-fade-in-up">
       <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 w-1/4 skew-x-12 transform translate-x-1/2 bg-accent/80"
      />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-2 text-primary">
                <PawPrintIcon className="h-8 w-8" />
                <div>
                    <h3 className="font-headline text-2xl font-bold">Projeto Frederico</h3>
                    <p className="text-sm">Cuidar é um ato de amor.</p>
                </div>
            </div>

            <h4 className="font-headline text-xl font-semibold text-primary">Toda empresa parceira receberá:</h4>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-background border border-border shadow-md">
                   <ArrowRightCircle className="h-6 w-6 text-accent flex-shrink-0" />
                   <p className="text-sm font-medium text-foreground">{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-center justify-center space-y-8 text-center">
             <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
                <span className="whitespace-nowrap text-primary">Responsabilidade Social</span>
                <span className="block text-accent whitespace-nowrap">com a Causa Animal</span>
             </h2>
             <div className="w-full max-w-md lg:max-w-lg">
                {image1 && (
                     <Card className="overflow-hidden rounded-3xl shadow-2xl w-full transition-transform duration-300 hover:scale-105">
                        <CardContent className="p-0">
                            <Image
                                src={image1.imageUrl}
                                alt={image1.description}
                                width={600}
                                height={400}
                                className="object-cover w-full aspect-[3/2]"
                                data-ai-hint={image1.imageHint}
                            />
                        </CardContent>
                     </Card>
                )}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
