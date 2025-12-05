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
    name: 'Maria & Bento',
    text: "Projeto Frederico transformed our chaotic puppy into a well-behaved member of the family. The positive reinforcement techniques worked wonders. We couldn't be happier!",
    rating: 5,
    imageId: 'testimonial-1',
  },
  {
    id: 'testimonial-2',
    name: 'João & Luna',
    text: "The behavioral consultation was a game-changer for our anxious rescue, Luna. The trainers were so patient and knowledgeable. Luna is now a much more confident and happy dog.",
    rating: 5,
    imageId: 'testimonial-2',
  },
  {
    id: 'testimonial-3',
    name: 'Ana & Thor',
    text: "We enrolled Thor in the advanced obedience class, and the results are incredible. His recall is flawless, and our walks are so much more enjoyable. Highly recommend!",
    rating: 5,
    imageId: 'testimonial-3',
  },
    {
    id: 'testimonial-4',
    name: 'Pedro & Pipoca',
    text: "The puppy foundation course was the best decision we made for Pipoca. It provided the perfect start for her training and socialization. The trainers are amazing!",
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
            <h2 className="text-3xl font-headline font-bold tracking-tighter text-primary sm:text-5xl">Words From Our Pack</h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              See what fellow dog lovers are saying about their experience with Projeto Frederico.
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
