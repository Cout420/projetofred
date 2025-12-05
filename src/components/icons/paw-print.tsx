import type { SVGProps } from 'react';
import { cn } from '@/lib/utils';

export function PawPrintIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('lucide lucide-paw-print', props.className)}
    >
      <circle cx="11" cy="4" r="2" />
      <circle cx="18" cy="8" r="2" />
      <circle cx="4" cy="8" r="2" />
      <path d="M9.87 7.5a3.5 3.5 0 0 1 5.26 0" />
      <path d="M17.5 14.5a7.5 7.5 0 0 0-11 0" />
    </svg>
  );
}
