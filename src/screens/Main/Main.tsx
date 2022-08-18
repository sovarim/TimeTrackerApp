import { Colors, Spacing, Styles } from '@/shared/theme';
import { ScreenView, TimeCard, Typography } from '@/shared/ui';
import { DotsIcon } from '@/shared/ui/icons';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';

const Main = () => {
  const stopwatchId = useRef<number | null>(null);
  const [seconds, setSecodns] = useState(0);

  const start = useCallback(() => {
    if (stopwatchId.current) {
      return;
    }
    stopwatchId.current = setInterval(() => {
      setSecodns((prev) => ++prev);
    }, 1000);
  }, []);

  const stop = useCallback(() => {
    if (stopwatchId.current) {
      clearInterval(stopwatchId.current);
      stopwatchId.current = null;
    }
  }, []);

  return (
    <ScreenView safeArea>
      <View style={styles.container}>
        <Typography variant='title'>Task</Typography>
        <DotsIcon color={Colors.blackGray} />
      </View>
      <TimeCard seconds={seconds} />
      <View style={{ marginTop: Spacing[4] }}>
        <Button title='Start stopwatch' onPress={start} />
      </View>
      <View style={{ marginTop: Spacing[4] }}>
        <Button title='Stop stopwatch' onPress={stop} />
      </View>
    </ScreenView>
  );
};

const styles = StyleSheet.create({
  container: {
    ...Styles.rowBetweenCenter,
    marginTop: Spacing[8],
    marginBottom: Spacing[6],
  },
});

export default Main;
