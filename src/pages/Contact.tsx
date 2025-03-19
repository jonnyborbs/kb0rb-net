
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Radio, Signal, Globe, ExternalLink, Mail } from 'lucide-react';

const Contact = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="page-container">
        <main className="content-container pt-24 pb-20">
          <h1 
            className="text-4xl font-bold mb-6"
          >
            Contact Me
          </h1>
          <p className="text-xl text-foreground/80 mb-10">
            I'm always looking to chat with new folks and learn new things. Here's how you can find me on the airwaves.
          </p>
          
          <div>
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
                  
                  <div className="pt-4 mt-4 border-t border-gray-100 dark:border-gray-800">
                    <h3 className="font-medium mb-3">Memberships</h3>
                    <div className="flex flex-wrap gap-2">
                      <a 
                        href="https://www.arrl.org" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm hover:bg-primary/20 transition-colors"
                      >
                        ARRL
                      </a>
                      <a 
                        href="https://w6vvr.net" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm hover:bg-primary/20 transition-colors"
                      >
                        Vaca Valley Radio Club
                      </a>
                      <a 
                        href="https://www.sacvalleymesh.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm hover:bg-primary/20 transition-colors"
                      >
                        Sac Valley Mesh
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
