'use client';

import * as React from 'react';
import Link from 'next/link';
import { PawPrintIcon } from '@/components/icons/paw-print';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-background/80 shadow-md backdrop-blur-sm" : "bg-transparent"
    )}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <PawPrintIcon className="h-6 w-6 text-primary" />
          <span className="font-headline text-xl font-bold text-primary">Projeto Frederico</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map(link => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary" prefetch={false}>
              {link.label}
            </Link>
          ))}
        </nav>
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
                    <span className="font-headline text-xl font-bold text-primary">Projeto Frederico</span>
                </Link>
                {NAV_LINKS.map(link => (
                    <Link key={link.href} href={link.href} className="text-lg font-medium text-foreground/80 transition-colors hover:text-primary" prefetch={false}>
                        {link.label}
                    </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
