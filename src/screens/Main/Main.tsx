import { useTheme } from '@/shared/theme';
import { ScreenView, Typography } from '@/shared/ui';
import React from 'react';
import { Button } from 'react-native';

const Main = () => {
  const { toggleTheme } = useTheme();
  return (
    <ScreenView safeArea>
      <Typography variant='title'>Task</Typography>
      <Button title='Switch theme' onPress={toggleTheme} />
    </ScreenView>
  );
};

export default Main;
