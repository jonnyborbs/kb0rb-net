
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Signal, Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        scrolled ? 'py-3 blur-overlay' : 'py-5 bg-transparent'
      )}
    >
      <div className="page-container">
        <div className="content-container flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 text-primary font-semibold">
            <Signal className="w-5 h-5" />
            <span className={cn(
              'transition-all duration-300',
              scrolled ? 'text-base' : 'text-lg'
            )}>
              KB0RB
            </span>
          </Link>
          
          <div className="flex items-center space-x-4">
            {isMobile ? (
              <>
                <button
                  onClick={toggleMenu}
                  className="p-2 text-foreground hover:text-primary transition-colors"
                  aria-label={menuOpen ? "Close menu" : "Open menu"}
                >
                  {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
                
                {menuOpen && (
                  <div className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-md py-4 shadow-lg border-t border-border">
                    <nav className="flex flex-col items-center space-y-4 page-container">
                      <Link 
                        to="/" 
                        className="text-foreground/80 hover:text-primary transition-colors py-2"
                        onClick={() => setMenuOpen(false)}
                      >
                        Home
                      </Link>
                      <Link 
                        to="/equipment" 
                        className="text-foreground/80 hover:text-primary transition-colors py-2"
                        onClick={() => setMenuOpen(false)}
                      >
                        Equipment
                      </Link>
                      <Link 
                        to="/contact" 
                        className="text-foreground/80 hover:text-primary transition-colors py-2"
                        onClick={() => setMenuOpen(false)}
                      >
                        Contact
                      </Link>
                    </nav>
                  </div>
                )}
              </>
            ) : (
              <nav className="flex items-center space-x-8">
                <Link to="/" className="text-foreground/80 hover:text-primary transition-colors">
                  Home
                </Link>
                <Link to="/equipment" className="text-foreground/80 hover:text-primary transition-colors">
                  Equipment
                </Link>
                <Link to="/contact" className="text-foreground/80 hover:text-primary transition-colors">
                  Contact
                </Link>
              </nav>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
