import '@/shared/config/i18next.config';

import React from 'react';
import { StyleSheet, View } from 'react-native';
import withProviders from './providers/withProviders';
import RootNavigation from '@/navigation/RootNavigation';

const App = () => {
  return (
    <View style={styles.root}>
      <RootNavigation />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default withProviders(App);
