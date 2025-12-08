'use client';

import * as React from 'react';
import Link from 'next/link';
import { PawPrintIcon } from '@/components/icons/paw-print';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { href: '#about', label: 'Sobre' },
  { href: '#gallery', label: 'Galeria' },
  { href: '#testimonials', label: 'Depoimentos' },
  { href: '#contact', label: 'Contato' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-background/80 shadow-md backdrop-blur-sm" : "bg-transparent"
    )}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <PawPrintIcon className="h-6 w-6 text-primary" />
          <span className="font-headline text-xl font-bold">
            <span className="text-accent">Projeto</span> <span className="text-primary">Frederico</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map(link => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary" prefetch={false}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex">
           <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 transition-transform duration-300 hover:scale-105">
                <a href="https://wa.me/5511940344310?text=Quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Projeto%20Frederico" target="_blank" rel="noopener noreferrer">Fale Conosco</a>
            </Button>
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-4 p-4">
                <Link href="#" className="flex items-center gap-2" prefetch={false}>
                    <PawPrintIcon className="h-6 w-6 text-primary" />
                    <span className="font-headline text-xl font-bold">
                        <span className="text-accent">Projeto</span> <span className="text-primary">Frederico</span>
                    </span>
                </Link>
                {NAV_LINKS.map(link => (
                    <Link key={link.href} href={link.href} className="text-lg font-medium text-foreground/80 transition-colors hover:text-primary" prefetch={false}>
                        {link.label}
                    </Link>
                ))}
                 <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 transition-transform duration-300 hover:scale-105">
                    <a href="https://wa.me/5511940344310?text=Quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Projeto%20Frederico" target="_blank" rel="noopener noreferrer">Fale Conosco</a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
