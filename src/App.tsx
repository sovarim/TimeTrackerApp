import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '@shared/theme';

console.log(Colors.blue);

const App = () => {
  return (
    <View style={styles.root}>
      <Text>App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
