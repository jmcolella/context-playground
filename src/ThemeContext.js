import React, {
  createContext,
  useContext,
  useMemo,
  useState
} from 'react';

const ThemeContext = createContext();

const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('Must be wrapped within a ThemeContextProvider');
  }

  const toggleTheme = () => {
    context.setTheme(context.theme === 'light' ? 'dark' : 'light');
  }

  return {
    ...context,
    setTheme: toggleTheme,
  };
};

function ThemeContextProvider(props) {
  const [theme, setTheme] = useState('light');

  const value = useMemo(() => ({
    theme,
    setTheme
  }), [theme]);

  return (
    <ThemeContext.Provider value={value} {...props} />
  );
}

export { ThemeContextProvider, useThemeContext };

