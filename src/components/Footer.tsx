
import React from 'react';
import { Link } from 'react-router-dom';
import { Radio, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-100 py-12 mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-6 md:mb-0">
            <Radio className="w-5 h-5 text-primary" />
            <span className="font-semibold text-lg">KO6HJJ</span>
          </div>
          
          <div className="flex space-x-10 mb-6 md:mb-0">
            <Link to="/" className="text-foreground/70 hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/equipment" className="text-foreground/70 hover:text-primary transition-colors">
              Equipment
            </Link>
            <Link to="/contact" className="text-foreground/70 hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
          
          <div className="text-sm text-foreground/50">
            © {currentYear} Jon / KO6HJJ
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-100 text-center text-sm text-foreground/50">
          <p>ARRL Member • Vaca Valley Radio Club • Sac Valley Mesh</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
