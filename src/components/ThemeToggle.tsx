
import React from 'react';
import { Moon } from 'lucide-react';
import { Toggle } from '@/components/ui/toggle';

// This component is now just a static dark mode indicator
const ThemeToggle = () => {
  return (
    <Toggle
      aria-label="Dark mode"
      className="rounded-full p-2 h-9 w-9"
      pressed={true}
      disabled={true}
    >
      <Moon className="h-[1.2rem] w-[1.2rem]" />
    </Toggle>
  );
};

export default ThemeToggle;
