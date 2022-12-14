import 'react-native-get-random-values';
import '@/shared/config/i18next.config';

import React from 'react';
import withProviders from './providers/withProviders';
import RootNavigation from '@/navigation/RootNavigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Styles } from '@/shared/theme';

const App = () => {
  return (
    <GestureHandlerRootView style={Styles.flex}>
      <RootNavigation />
    </GestureHandlerRootView>
  );
};

export default withProviders(App);
