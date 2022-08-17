import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { ColorSchemeName, useColorScheme } from 'react-native';
import { DarkThemeConfig, LightThemeConfig, ThemeConfig } from '../styles';

export type ThemeContext = {
  toggleTheme: () => void;
  theme: ThemeConfig;
};

export const ThemeContext = createContext<ThemeContext>({} as ThemeContext);

const _defineThemeConfig = (colorScheme: ColorSchemeName, inverse?: boolean) => {
  switch (colorScheme) {
    case 'dark':
      return inverse ? LightThemeConfig : DarkThemeConfig;
    default:
      return inverse ? DarkThemeConfig : LightThemeConfig;
  }
};

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const colorScheme = useColorScheme();
  const [themeConfig, setThemeConfig] = useState(_defineThemeConfig(colorScheme));

  const toggleTheme = useCallback(() => {
    setThemeConfig((prev) => _defineThemeConfig(prev.name, true));
  }, []);

  const value = useMemo<ThemeContext>(() => {
    return {
      toggleTheme,
      theme: themeConfig,
    };
  }, [themeConfig, toggleTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const theme = useContext(ThemeContext);
  return theme;
};
