'use client';

import { useState, useEffect, useRef, CSSProperties } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
  transition?: string;
  initialStyle?: CSSProperties;
  finalStyle?: CSSProperties;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const {
    threshold = 0.1,
    triggerOnce = true,
    transition = 'opacity 700ms ease-in-out, transform 700ms ease-in-out',
    initialStyle = { opacity: 0, transform: 'translateY(30px)' },
    finalStyle = { opacity: 1, transform: 'translateY(0)' },
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (triggerOnce) {
              observer.unobserve(entry.target);
            }
          } else {
            if (!triggerOnce) {
              setIsVisible(false);
            }
          }
        });
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, threshold, triggerOnce]);

  const style: CSSProperties = {
    transition,
    ...(isVisible ? finalStyle : initialStyle),
  };

  return { ref, isVisible, style };
};
