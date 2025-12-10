'use client';

import { useEffect, useState } from 'react';
import { Users, PawPrint, Syringe, Drumstick } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const stats = [
  {
    icon: Users,
    endValue: 50,
    label: 'Famílias Atendidas',
    suffix: '+',
  },
  {
    icon: PawPrint,
    endValue: 200,
    label: 'Animais Ajudados',
    suffix: '+',
  },
  {
    icon: Syringe,
    endValue: 150,
    label: 'Castrações e Vacinas',
    suffix: '+',
  },
  {
    icon: Drumstick,
    endValue: 800,
    label: 'Kg de Ração Doada',
    suffix: '+',
  },
];

const Counter = ({ endValue, suffix = '' }: { endValue: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const duration = 2000; // 2 seconds

  useEffect(() => {
    let start = 0;
    const end = endValue;
    if (start === end) return;

    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const current = Math.floor(progress * (end - start) + start);
      setCount(current);
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [endValue]);

  return (
    <span className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold text-accent drop-shadow-md">
      {count}
      {suffix}
    </span>
  );
};

export default function Impact() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="impact" className="bg-primary w-full py-20 md:py-28 lg:py-32">
      <div ref={ref} style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(20px)', transition: 'opacity 0.7s ease-out, transform 0.7s ease-out' }} className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-headline font-bold tracking-tighter text-primary-foreground sm:text-5xl">
              Nosso Impacto em Números
            </h2>
            <p className="max-w-[900px] text-primary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Cada número representa uma vida transformada e uma comunidade fortalecida pelo nosso trabalho conjunto.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-stretch gap-8 py-12 grid-cols-2 md:grid-cols-4 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-4 transition-transform duration-300 hover:scale-110">
              <div className="rounded-full bg-primary-foreground/10 p-5 text-accent">
                <stat.icon className="h-8 w-8 sm:h-10 sm:w-10" />
              </div>
              {isVisible && <Counter endValue={stat.endValue} suffix={stat.suffix} />}
              <p className="font-semibold text-base sm:text-lg text-primary-foreground/90">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
