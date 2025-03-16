
import React, { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Radio, Signal, Globe, Mail, ExternalLink } from 'lucide-react';
import useIntersectionObserver from '@/hooks/use-intersection-observer';

const Contact = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  
  const { observe } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "0px 0px -10% 0px"
  });

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    if (titleRef.current) observe(titleRef.current);
    if (cardRef.current) observe(cardRef.current);
  }, [observe]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20 px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <h1 
            ref={titleRef}
            className="text-4xl font-bold mb-6 intersection-observer-trigger animate-fade-in-up"
          >
            Contact Me
          </h1>
          <p className="text-xl text-foreground/80 mb-10 intersection-observer-trigger animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            I'm always looking to chat with new folks and learn new things. Here's how you can find me on the airwaves.
          </p>
          
          <div 
            ref={cardRef}
            className="intersection-observer-trigger animate-fade-in-up"
            style={{ animationDelay: '200ms' }}
          >
            <Card className="glassy-card overflow-hidden max-w-2xl mx-auto">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                      <Radio className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Amateur (Extra)</p>
                      <p className="font-medium text-xl">KB0RB</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                      <Signal className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">GMRS</p>
                      <p className="font-medium text-xl">WSGQ342</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                      <Globe className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">DMR</p>
                      <p className="font-medium text-xl">3213970</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a 
                        href="mailto:qso@kb0rb.net" 
                        className="font-medium text-xl hover:text-primary flex items-center"
                      >
                        qso@kb0rb.net <ExternalLink className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                      <ExternalLink className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">QRZ Profile</p>
                      <a 
                        href="https://www.qrz.com/db/kb0rb" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="font-medium text-xl hover:text-primary flex items-center"
                      >
                        KB0RB <ExternalLink className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  </div>
                  
                  <div className="pt-4 mt-4 border-t border-gray-100">
                    <h3 className="font-medium mb-3">Memberships</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                        ARRL
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                        Vaca Valley Radio Club
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                        Sac Valley Mesh
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
