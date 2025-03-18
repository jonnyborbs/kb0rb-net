
import React from 'react';
import { Radio, Signal, Globe, MessageSquare, ExternalLink, Mail } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const HeroSection = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section with Text and Image */}
      <section className="min-h-[60vh] flex items-center pt-20 pb-8 px-6 md:px-10">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-ham-muted text-ham-dark text-sm font-medium mb-4">
              <Signal className="w-4 h-4 mr-2" /> Amateur Radio Operator
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              I'm Jon <span className="text-primary">(KB0RB)</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl">
              Based in Vacaville, California, continuing a family tradition of HAM radio across generations.
            </p>
            
            <div className="flex space-x-4 pt-4">
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
          
          <div className="lg:col-span-5 rounded-xl overflow-hidden shadow-lg">
            <img 
              src="/lovable-uploads/3e8c97e4-9c43-4498-974a-ab7230098c6c.png" 
              alt="Jon (KB0RB) at his HAM radio station" 
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* Contact Section - Full Width */}
      <section className="w-full px-6 md:px-10 pb-16">
        <Card className="glassy-card overflow-hidden max-w-5xl mx-auto">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl font-semibold">Contact Details</CardTitle>
              <Radio className="h-5 w-5 text-primary" />
            </div>
            <CardDescription>Find me on the airwaves</CardDescription>
          </CardHeader>
          
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                  <Radio className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Amateur (Extra)</p>
                  <p className="font-medium">KB0RB</p>
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
              
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a 
                    href="mailto:qso@kb0rb.net" 
                    className="font-medium hover:text-primary flex items-center"
                  >
                    qso@kb0rb.net <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                  <ExternalLink className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">QRZ Profile</p>
                  <a 
                    href="https://www.qrz.com/db/kb0rb" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="font-medium hover:text-primary flex items-center"
                  >
                    KB0RB <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </div>
              
              <div>
                <div className="flex items-center mb-2">
                  <MessageSquare className="w-4 h-4 mr-2 text-muted-foreground" />
                  <span className="text-sm font-medium">Memberships</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  <a href="https://www.arrl.org" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">ARRL</a> • 
                  <a href="https://w6vvr.net" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"> Vaca Valley Radio Club</a> • 
                  <a href="https://www.sacvalleymesh.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"> Sac Valley Mesh</a>
                </p>
              </div>
            </div>
          </CardContent>
          
          <CardFooter className="bg-muted/50 py-3 flex justify-center">
            <p className="text-sm text-center w-full text-muted-foreground">
              I'm always looking to chat with new folks and learn new things!
            </p>
          </CardFooter>
        </Card>
      </section>
    </div>
  );
};

export default HeroSection;
