import Link from 'next/link';
import { PawPrintIcon } from '@/components/icons/paw-print';
import { Shield } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row md:px-6">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <PawPrintIcon className="h-6 w-6" />
          <span className="font-headline text-lg font-semibold">Projeto Frederico</span>
        </Link>
        <div className="flex items-center gap-4 text-sm text-primary-foreground/80">
          <p>&copy; {currentYear} Projeto Frederico. Todos os direitos reservados.</p>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="/admin" aria-label="Painel Administrativo" prefetch={false}>
                  <Shield className="h-5 w-5 hover:text-primary-foreground" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Painel Administrativo</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="flex gap-4 text-sm">
          <Link href="#" className="hover:underline" prefetch={false}>
            Política de Privacidade
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Termos de Serviço
          </Link>
        </div>
      </div>
    </footer>
  );
}
