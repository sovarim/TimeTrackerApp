import { ThemeProvider } from '@/shared/theme';
import React from 'react';

const withTheme = (Component: () => JSX.Element | null) => () => {
  return (
    <ThemeProvider>
      <Component />
    </ThemeProvider>
  );
};

export default withTheme;
