import React from 'react';
import { Shape, Spacing, useTheme } from '@/shared/theme';
import { StyleSheet, View, ViewProps } from 'react-native';

export type PaperProps = ViewProps;

export const Paper = ({ style, ...props }: PaperProps) => {
  const { theme } = useTheme();
  return (
    <View style={[styles.root, { backgroundColor: theme.colors.background2 }, style]} {...props} />
  );
};

const styles = StyleSheet.create({
  root: {
    borderRadius: Shape.borderRadius,
    padding: Spacing[4],
  },
});
