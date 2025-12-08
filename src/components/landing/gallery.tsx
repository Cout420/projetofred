'use client';

import * as React from 'react';
import Image from 'next/image';
import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

const galleryImages = PlaceHolderImages.filter(img => img.id.startsWith('gallery-'));

export default function Gallery() {
  const [selectedImage, setSelectedImage] = React.useState<ImagePlaceholder | null>(null);

  return (
    <section id="gallery" className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-headline font-bold tracking-tighter text-primary sm:text-5xl">Galeria de Fotos</h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Um vislumbre dos momentos alegres e das jornadas de sucesso dos nossos amigos peludos.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 pt-12 sm:grid-cols-3 md:grid-cols-4 lg:gap-8">
          <Dialog>
            {galleryImages.map((image, index) => (
              <DialogTrigger key={image.id} asChild onClick={() => setSelectedImage(image)}>
                <Card className="group overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-accent/50 cursor-pointer relative">
                  <CardContent className="p-0">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      width={400}
                      height={400}
                      className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-110"
                      data-ai-hint={image.imageHint}
                    />
                  </CardContent>
                  <div className="absolute bottom-1 right-2 text-white/40 text-xs font-mono pointer-events-none">
                    #{String(index + 1).padStart(3, '0')}
                  </div>
                </Card>
              </DialogTrigger>
            ))}
            {selectedImage && (
              <DialogContent className="max-w-3xl p-0">
                <Image
                  src={selectedImage.imageUrl}
                  alt={selectedImage.description}
                  width={1200}
                  height={1200}
                  className="h-auto w-full rounded-lg object-contain"
                  data-ai-hint={selectedImage.imageHint}
                />
              </DialogContent>
            )}
          </Dialog>
        </div>
      </div>
    </section>
  );
}
