import React, { ReactNode } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const withSafeArea = (component: () => ReactNode) => {
  return () => <SafeAreaProvider>{component()}</SafeAreaProvider>;
};

export default withSafeArea;
