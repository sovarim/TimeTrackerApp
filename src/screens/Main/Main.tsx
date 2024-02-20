import { Colors, Spacing, Styles } from '@/shared/theme';
import { ScreenView, TimeCard, Typography } from '@/shared/ui';
import { DotsIcon } from '@/shared/ui/icons';
import React, { useEffect } from 'react';
import { AppState, Pressable, StyleSheet, View } from 'react-native';
import { TaskListItem } from '@/entities/task/ui';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';

const Main = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();

  useEffect(() => {
    const listener = AppState.addEventListener('change', (appState) => {
      console.log(appState);
    });
    return () => listener.remove();
  }, []);

  return (
    <ScreenView safeArea>
      <View style={styles.container}>
        <Typography variant='title'>{t('Task')}</Typography>
        <Pressable onPress={() => navigation.navigate('Settings')}>
          <DotsIcon color={Colors.blackGray} />
        </Pressable>
      </View>
      <TimeCard seconds={12} minutes={30} hours={0} />
      <TaskListItem />
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
