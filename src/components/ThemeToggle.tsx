
import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Toggle } from '@/components/ui/toggle';
import { useLocalStorage } from '@/hooks/use-local-storage';

const ThemeToggle = () => {
  const [theme, setTheme] = useLocalStorage<'light' | 'dark'>(
    'kb0rb-theme',
    'light'
  );

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Toggle
      aria-label="Toggle theme"
      className="rounded-full p-2 h-9 w-9"
      pressed={theme === 'dark'}
      onPressedChange={toggleTheme}
    >
      {theme === 'dark' ? (
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      )}
    </Toggle>
  );
};

export default ThemeToggle;
