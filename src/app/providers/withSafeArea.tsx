import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const withSafeArea = (Component: () => JSX.Element | null) => {
  return () => (
    <SafeAreaProvider>
      <Component />
    </SafeAreaProvider>
  );
};

export default withSafeArea;
