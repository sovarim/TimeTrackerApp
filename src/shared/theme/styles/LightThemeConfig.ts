import { Colors } from './Colors';
import { ThemeConfig } from './ThemeConfig.type';

export const LightThemeConfig: ThemeConfig = {
  name: 'light',
  colors: {
    background: Colors.lightGray,
    background2: Colors.white,
    text: Colors.black,
    text2: Colors.lightGray,
    inverseBackground: Colors.black,
    inactive: Colors.blackGray,
  },
};
