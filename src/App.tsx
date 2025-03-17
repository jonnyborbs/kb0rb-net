
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import Equipment from "./pages/Equipment";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  // Force dark mode
  useEffect(() => {
    // Remove any existing theme classes
    document.documentElement.classList.remove('light');
    // Apply dark theme
    document.documentElement.classList.add('dark');
    
    // Override any stored theme with dark mode
    localStorage.setItem('kb0rb-theme', JSON.stringify('dark'));
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/equipment" element={<Equipment />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
