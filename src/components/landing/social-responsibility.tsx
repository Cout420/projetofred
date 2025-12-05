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
const image2 = PlaceHolderImages.find(img => img.id === 'social-2');

export default function SocialResponsibility() {
  return (
    <section id="social-responsibility" className="bg-accent w-full py-20 md:py-28 lg:py-36 text-accent-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-2">
                <PawPrintIcon className="h-8 w-8" />
                <div>
                    <h3 className="font-headline text-2xl font-bold">Projeto Frederico</h3>
                    <p className="text-sm">Cuidar é um ato de amor.</p>
                </div>
            </div>

            <h4 className="font-headline text-xl font-semibold">Toda empresa parceira receberá:</h4>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-full bg-primary/20 border border-primary/30 shadow-md">
                   <ArrowRightCircle className="h-6 w-6 text-primary-foreground flex-shrink-0" />
                   <p className="text-sm font-medium">{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
             <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-center md:text-left">
                Responsabilidade Social
                <span className="block text-primary">com a Causa Animal</span>
             </h2>
             <div className="relative h-[400px] flex flex-col justify-center items-center gap-4">
                {image1 && (
                     <Card className="overflow-hidden rounded-3xl shadow-2xl w-[80%] -mb-20 z-10 transform -rotate-3 hover:rotate-0 hover:scale-105 transition-transform duration-300">
                        <CardContent className="p-0">
                            <Image
                                src={image1.imageUrl}
                                alt={image1.description}
                                width={500}
                                height={300}
                                className="object-cover"
                                data-ai-hint={image1.imageHint}
                            />
                        </CardContent>
                     </Card>
                )}
                 {image2 && (
                     <Card className="overflow-hidden rounded-3xl shadow-2xl w-[90%] transform rotate-2 hover:rotate-0 hover:scale-105 transition-transform duration-300">
                        <CardContent className="p-0">
                            <Image
                                src={image2.imageUrl}
                                alt={image2.description}
                                width={600}
                                height={400}
                                className="object-cover"
                                data-ai-hint={image2.imageHint}
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
