import React from 'react';
import { Paper, Tag, Typography, ViewSpacing } from '@/shared/ui';
import { StyleSheet, View } from 'react-native';
import { Colors, Spacing, Styles, useTheme } from '@/shared/theme';
import { UserIcon, PauseIcon } from '@/shared/ui/icons';

export const TaskListItem = () => {
  const { theme } = useTheme();

  return (
    <Paper style={[{ marginTop: Spacing[4] }, styles.root]}>
      <View style={styles.iconWrapper}>
        <UserIcon color={Colors.white} />
      </View>
      <View style={styles.detailsWrapper}>
        <View style={styles.detailsBlock}>
          <Typography variant='textSmMedium'>UI Design</Typography>
          <Typography variant='textXs' style={{ color: Colors.gray2 }}>
            00:42:21
          </Typography>
        </View>
        <View style={[styles.detailsBlock, { paddingTop: Spacing[2] }]}>
          <ViewSpacing spacing={2} style={styles.tagsWrapper}>
            <Tag color='#FD5B71'>Work</Tag>
            <Tag color='#FFA656'>Coding</Tag>
          </ViewSpacing>
          <PauseIcon color={theme.colors.inactive} />
        </View>
      </View>
    </Paper>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
  },
  iconWrapper: {
    width: 44,
    height: 44,
    borderRadius: 44,
    backgroundColor: Colors.purple,
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailsWrapper: {
    flex: 1,
    paddingLeft: 16,
  },
  detailsBlock: {
    ...Styles.rowBetweenCenter,
  },
  tagsWrapper: {
    maxWidth: '90%',
    flexBasis: '90%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
