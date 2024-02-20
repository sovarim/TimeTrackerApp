import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { ColorSchemeName, StatusBar, StatusBarStyle, useColorScheme } from 'react-native';
import { DarkThemeConfig, LightThemeConfig, ThemeConfig } from '../styles';
import { useUserSettings } from '@/shared/db/userSettings/lib';
import { ThemeValue } from '@/shared/db/userSettings/model';

export type ThemeContext = {
  theme: ThemeConfig;
};

export const ThemeContext = createContext<ThemeContext>({} as ThemeContext);

const themeMap = {
  dark: DarkThemeConfig,
  light: LightThemeConfig,
};

const defineThemeConfig = (colorScheme: ColorSchemeName, theme: ThemeValue) => {
  if (theme === 'system' && colorScheme) {
    return themeMap[colorScheme];
  }
  return themeMap[theme as Exclude<ThemeValue, 'system'>];
};

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const colorScheme = useColorScheme();
  const { theme } = useUserSettings();
  const [themeConfig, setThemeConfig] = useState(() => defineThemeConfig(colorScheme, theme));

  useEffect(() => {
    setThemeConfig(defineThemeConfig(colorScheme, theme));
  }, [colorScheme, theme]);

  const value = useMemo<ThemeContext>(() => {
    return {
      theme: themeConfig,
    };
  }, [themeConfig]);

  const barStyle = useMemo<StatusBarStyle>(() => {
    if (themeConfig.name === 'dark') {
      return 'light-content';
    }
    return 'dark-content';
  }, [themeConfig]);

  return (
    <ThemeContext.Provider value={value}>
      <StatusBar translucent backgroundColor='transparent' barStyle={barStyle} />
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const theme = useContext(ThemeContext);
  return theme;
};
