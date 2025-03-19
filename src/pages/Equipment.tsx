
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EquipmentSection from '@/components/EquipmentSection';

const Equipment = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="page-container">
        <div className="content-container pt-24 pb-10">
          <h1 className="text-4xl font-bold mb-6">My Equipment</h1>
          <p className="text-xl text-foreground/80 mb-10">
            Here's a detailed look at the radio equipment I use for amateur radio operations.
          </p>
        </div>
        <EquipmentSection />
      </div>
      <Footer />
    </div>
  );
};

export default Equipment;
