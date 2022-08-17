import { Colors } from './Colors';
import { ThemeConfig } from './ThemeConfig.type';

export const DarkThemeConfig: ThemeConfig = {
  name: 'dark',
  colors: {
    background: Colors.black,
    background2: Colors.black2,
    text: Colors.white,
    text2: Colors.lightGray,
    inverseBackground: Colors.white,
    inactive: Colors.blackGray,
  },
};
