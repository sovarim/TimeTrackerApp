import { Spacing } from '@/shared/theme';
import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { Typography } from './Typography';
import { hexToRgba } from '@/shared/lib/styles';

export type TagProps = ViewProps & {
  color: string;
};

export const Tag = ({ style, children, color, ...props }: TagProps) => {
  return (
    <View style={[styles.tag, { backgroundColor: hexToRgba(color, 0.15) }, style]} {...props}>
      <Typography variant='textSm' style={{ color }}>
        {children}
      </Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  tag: {
    paddingHorizontal: Spacing[2],
    paddingVertical: Spacing[1],
    borderRadius: 6,
  },
});
