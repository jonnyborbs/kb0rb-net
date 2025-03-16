
import React, { useRef, useEffect } from 'react';
import { Radio, Signal, Globe, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import useIntersectionObserver from '@/hooks/use-intersection-observer';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  
  const { observe } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "0px 0px -10% 0px"
  });

  useEffect(() => {
    if (titleRef.current) observe(titleRef.current);
    if (cardRef.current) observe(cardRef.current);
    if (subtitleRef.current) observe(subtitleRef.current);
  }, [observe]);

  return (
    <section 
      ref={heroRef}
      className="min-h-[85vh] flex items-center pt-20 pb-16 px-6 md:px-10"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-ham-muted text-ham-dark text-sm font-medium mb-4">
            <Signal className="w-4 h-4 mr-2" /> Amateur Radio Operator
          </div>
          
          <h1 
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight intersection-observer-trigger animate-fade-in-up"
            style={{ animationDelay: '100ms' }}
          >
            I'm Jon <span className="text-primary">(KO6HJJ)</span>
          </h1>
          
          <p 
            ref={subtitleRef}
            className="text-xl md:text-2xl text-foreground/80 max-w-2xl intersection-observer-trigger animate-fade-in-up"
            style={{ animationDelay: '200ms' }}
          >
            Based in Vacaville, California, continuing a family tradition of HAM radio across generations.
          </p>
          
          <div className="flex space-x-4 pt-4 intersection-observer-trigger animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <a 
              href="#about" 
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Learn More
            </a>
            <a 
              href="#equipment" 
              className="inline-flex h-10 items-center justify-center rounded-md border border-input hover:bg-accent hover:text-accent-foreground px-8 text-sm font-medium shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              My Equipment
            </a>
          </div>
        </div>
        
        <div
          ref={cardRef}
          className="intersection-observer-trigger animate-slide-in-right"
          style={{ animationDelay: '400ms' }}
        >
          <Card className="glassy-card overflow-hidden">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl font-semibold">Contact Details</CardTitle>
                <Radio className="h-5 w-5 text-primary" />
              </div>
              <CardDescription>Find me on the airwaves</CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                    <Radio className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Amateur (Extra)</p>
                    <p className="font-medium">KO6HJJ</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                    <Signal className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">GMRS</p>
                    <p className="font-medium">WSGQ342</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">DMR</p>
                    <p className="font-medium">3213970</p>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <div className="flex items-center mb-2">
                  <MessageSquare className="w-4 h-4 mr-2 text-muted-foreground" />
                  <span className="text-sm font-medium">Memberships</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  ARRL • Vaca Valley Radio Club • Sac Valley Mesh
                </p>
              </div>
            </CardContent>
            
            <CardFooter className="bg-muted/50 py-3">
              <p className="text-xs text-center w-full text-muted-foreground">
                I'm always looking to chat with new folks and learn new things!
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
