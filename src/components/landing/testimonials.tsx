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
    name: 'Juliana & Max',
    text: "O trabalho do Projeto Frederico é simplesmente incrível. Eles nos ajudaram a encontrar o Max, um vira-lata que hoje é a alegria da casa. Um alívio saber que temos gente assim aqui em Arujá.",
    rating: 5,
    imageId: 'testimonial-1',
  },
  {
    id: 'testimonial-2',
    name: 'Carlos & Belinha',
    text: "Minha cachorrinha Belinha foi resgatada e cuidada por eles. A dedicação e o amor que eles têm pelos animais é algo raro de se ver. Sou muito grato por todo o suporte que nos deram.",
    rating: 5,
    imageId: 'testimonial-2',
  },
  {
    id: 'testimonial-3',
    name: 'Fernanda & Zeca',
    text: "Apoio o projeto com doações mensais e vejo de perto a diferença que fazem na vida de tantos animais aqui na nossa cidade. É um trabalho sério e muito necessário. Recomendo a todos que ajudem!",
    rating: 5,
    imageId: 'testimonial-3',
  },
    {
    id: 'testimonial-4',
    name: 'Ricardo & Teca',
    text: "Graças à orientação do Projeto Frederico, conseguimos castrar a Teca e outros cães da nossa rua. O impacto positivo na comunidade é notável. Eles são verdadeiros anjos da guarda dos animais.",
    rating: 5,
    imageId: 'testimonial-4',
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
    <section id="testimonials" className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-headline font-bold tracking-tighter text-primary sm:text-5xl">Depoimentos de quem apoia</h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Veja o que os amantes de animais estão dizendo sobre a experiência com o Projeto Frederico.
            </p>
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
                            <blockquote className="text-lg font-medium italic text-foreground/90">
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
