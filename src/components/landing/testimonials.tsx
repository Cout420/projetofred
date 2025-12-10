'use client';

import * as React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    id: 'testimonial-1',
    name: 'Márcia Oliveira',
    text: "Passei por uma fase muito difícil e não tinha como comprar ração para meus dois cachorros. O Projeto Frederico foi minha salvação, eles me ajudaram com alimento e hoje meus bichinhos estão saudáveis e fortes. Não sei o que seria de nós sem eles.",
    rating: 5,
    imageId: 'testimonial-1',
  },
  {
    id: 'testimonial-2',
    name: 'Roberto Santos',
    text: "Eu sempre quis castrar os cães de rua do meu bairro, mas não tinha condições. Com o apoio do projeto, conseguimos castrar cinco animais. Finalmente alguém fazendo a diferença aqui em Arujá. A comunidade agradece!",
    rating: 5,
    imageId: 'testimonial-2',
  },
  {
    id: 'testimonial-3',
    name: 'Fernanda Lima',
    text: "O cuidado que eles têm com os animais de rua é emocionante. Eu doo ração sempre que posso e vejo o impacto direto do trabalho deles. A cidade precisava de uma iniciativa séria e comprometida como o Projeto Frederico.",
    rating: 5,
    imageId: 'testimonial-3',
  },
    {
    id: 'testimonial-4',
    name: 'José Pereira',
    text: "Minha cachorrinha foi resgatada pela equipe do Frederico, muito doente. Eles não só cuidaram dela, como me deram todo o suporte para a adoção. Hoje a Mel é a alegria da casa. Um trabalho que inspira respeito e gratidão.",
    rating: 5,
    imageId: 'testimonial-4',
  },
  {
    id: 'testimonial-7',
    name: 'Beatriz Almeida',
    text: 'Meu cachorro fugiu e eu estava desesperada. A rede de apoio do Projeto Frederico foi essencial para encontrá-lo. A mobilização deles é impressionante. Serei eternamente grata por terem trazido meu amigo de volta.',
    rating: 5,
    imageId: 'testimonial-7',
  },
  {
    id: 'testimonial-9',
    name: 'Thiago Gomes',
    text: 'O que mais me impressiona é a seriedade e a prestação de contas do projeto. A gente sabe exatamente para onde a nossa doação está indo. Isso me motiva a continuar ajudando a causa animal aqui em Arujá.',
    rating: 5,
    imageId: 'testimonial-9',
  },
  {
    id: 'testimonial-11',
    name: 'Marcos Rocha',
    text: 'A diferença no nosso bairro é visível. O número de animais abandonados diminuiu e os que ainda estão na rua são mais bem cuidados pela comunidade, graças à conscientização que o projeto promove. É uma transformação social.',
    rating: 5,
    imageId: 'testimonial-11',
  },
];

export default function Testimonials() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap());
    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const testimonialImages = PlaceHolderImages.filter(img => img.id.startsWith('testimonial-'));

  return (
    <section id="testimonials" className="bg-background py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-headline font-bold tracking-tighter text-primary sm:text-5xl">Relatos reais de amor e resgate</h2>
          </div>
        </div>
        <div className="py-12">
          <Carousel setApi={setApi} className="mx-auto w-full max-w-4xl">
            <CarouselContent>
              {testimonials.map((testimonial) => {
                const image = testimonialImages.find(img => img.id === testimonial.imageId);
                return (
                  <CarouselItem key={testimonial.id}>
                    <Card className="overflow-hidden shadow-lg">
                      <div className="grid md:grid-cols-3">
                        <div className="md:col-span-1">
                          {image && (
                            <Image
                              src={image.imageUrl}
                              alt={image.description}
                              width={400}
                              height={400}
                              className="aspect-square h-full w-full object-cover"
                              data-ai-hint={image.imageHint}
                            />
                          )}
                        </div>
                        <div className="md:col-span-2">
                          <CardContent className="flex h-full flex-col justify-center p-6 sm:p-8">
                            <div className="mb-4 flex">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star key={i} className={cn("h-5 w-5", i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "fill-muted stroke-muted-foreground")} />
                              ))}
                            </div>
                            <blockquote className="text-base md:text-lg font-medium italic text-foreground/90">
                              "{testimonial.text}"
                            </blockquote>
                            <p className="mt-4 font-headline text-lg font-semibold text-primary">
                              - {testimonial.name}
                            </p>
                          </CardContent>
                        </div>
                      </div>
                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
          <div className="mt-4 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => api?.scrollTo(i)}
                className={cn(
                  'h-2 w-2 rounded-full transition-all',
                  current === i ? 'w-4 bg-primary' : 'bg-primary/30'
                )}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
