import { ThemeProvider } from '@/shared/theme';
import React, { ReactNode } from 'react';

const withTheme = (component: () => ReactNode) => () => {
  return <ThemeProvider>{component()}</ThemeProvider>;
};

export default withTheme;
