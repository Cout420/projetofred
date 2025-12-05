import Link from 'next/link';
import { PawPrintIcon } from '@/components/icons/paw-print';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row md:px-6">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <PawPrintIcon className="h-6 w-6" />
          <span className="font-headline text-lg font-semibold">Projeto Frederico</span>
        </Link>
        <p className="text-sm text-primary-foreground/80">
          &copy; {currentYear} Projeto Frederico. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link href="#" className="text-sm hover:underline" prefetch={false}>
            Privacy Policy
          </Link>
          <Link href="#" className="text-sm hover:underline" prefetch={false}>
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
