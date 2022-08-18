import { getNumberForTime } from '@/shared/lib/time';
import { Spacing, Styles } from '@/shared/theme';
import { WithoutChildren } from '@/shared/types';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Paper, PaperProps, Typography } from '../atoms';
import { MonitorIcon, RightArrowIcon } from '../icons';

export type TimeCardProps = WithoutChildren<PaperProps> & {
  hours?: number;
  minutes?: number;
  seconds?: number;
};

export const TimeCard = ({ hours = 0, seconds = 0, minutes = 0, ...props }: TimeCardProps) => {
  return (
    <Paper style={styles.root} {...props}>
      <View style={Styles.rowBetweenCenter}>
        <Typography variant='bigText3' color='inverseBackground'>
          {getNumberForTime(hours)}:{getNumberForTime(minutes)}:{getNumberForTime(seconds)}
        </Typography>
        <RightArrowIcon />
      </View>
      <View style={styles.viewLower}>
        <MonitorIcon color='purple' size={16} />
        <Typography style={styles.textLower}>Rasion Project</Typography>
      </View>
    </Paper>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingVertical: 24,
  },
  viewLower: {
    flexDirection: 'row',
    marginTop: Spacing[6],
    alignItems: 'center',
  },
  textLower: {
    marginLeft: Spacing[3],
  },
});
