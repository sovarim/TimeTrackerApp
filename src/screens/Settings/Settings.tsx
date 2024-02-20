import React from 'react';
import { ScreenView, Typography } from '@/shared/ui';
import { useUserSettings } from '@/shared/db/userSettings/lib';
import { TouchableOpacity } from 'react-native';

export const Settings = () => {
  const userSettings = useUserSettings();

  return (
    <ScreenView>
      <TouchableOpacity onPress={() => userSettings.update({ theme: 'system' })}>
        <Typography>Системная</Typography>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => userSettings.update({ theme: 'dark' })}>
        <Typography>Темная</Typography>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => userSettings.update({ theme: 'light' })}>
        <Typography>Светлая</Typography>
      </TouchableOpacity>
    </ScreenView>
  );
};
