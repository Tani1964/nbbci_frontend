import { createContext, useContext, useEffect, useState } from 'react';
import { useColorMode } from '@chakra-ui/react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const { colorMode, toggleColorMode, setColorMode } = useColorMode();
  const [isLoaded, setIsLoaded] = useState(false);

  // Initialize theme from localStorage on mount
  useEffect(() => {
    const savedColorMode = localStorage.getItem('chakra-ui-color-mode');
    if (savedColorMode && (savedColorMode === 'light' || savedColorMode === 'dark')) {
      setColorMode(savedColorMode);
    }
    setIsLoaded(true);
  }, [setColorMode]);

  // Persist theme preference to localStorage whenever it changes
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('chakra-ui-color-mode', colorMode);
      // Also update the HTML class for global CSS if needed
      if (colorMode === 'dark') {
        document.documentElement.classList.add('dark-mode');
      } else {
        document.documentElement.classList.remove('dark-mode');
      }
    }
  }, [colorMode, isLoaded]);

  const value = {
    colorMode,
    toggleColorMode,
    isDark: colorMode === 'dark',
    isLight: colorMode === 'light',
    isLoaded,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
