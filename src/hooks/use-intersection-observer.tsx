
import { useEffect, useState, useRef } from 'react';

interface IntersectionOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  triggerOnce?: boolean;
}

export function useIntersectionObserver({
  root = null,
  rootMargin = '0px',
  threshold = 0.1,
  triggerOnce = true
}: IntersectionOptions = {}) {
  const [entries, setEntries] = useState<IntersectionObserverEntry[]>([]);
  const [elements, setElements] = useState<Element[]>([]);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (observedEntries) => {
        observedEntries.forEach(entry => {
          if (entry.isIntersecting && triggerOnce) {
            observer.current?.unobserve(entry.target);
          }
        });
        setEntries(observedEntries);
      },
      { root, rootMargin, threshold }
    );

    return () => observer.current?.disconnect();
  }, [root, rootMargin, threshold, triggerOnce]);

  useEffect(() => {
    const currentObserver = observer.current;
    
    // Add newly observed elements
    elements.forEach(element => currentObserver?.observe(element));
    
    return () => {
      elements.forEach(element => currentObserver?.unobserve(element));
    };
  }, [elements]);

  const observe = (element: Element) => {
    if (element && !elements.includes(element)) {
      setElements(prev => [...prev, element]);
    }
  };

  const unobserve = (element: Element) => {
    if (element) {
      observer.current?.unobserve(element);
      setElements(prev => prev.filter(el => el !== element));
    }
  };

  return { observe, unobserve, entries };
}

export default useIntersectionObserver;
