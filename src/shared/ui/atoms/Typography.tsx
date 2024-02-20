import React, { PropsWithChildren } from 'react';
import { Text, TextProps } from 'react-native';
import { ThemeConfig, TypographyStyles, useTheme } from '@/shared/theme';

export type TypographyProps = PropsWithChildren<
  TextProps & {
    variant?: keyof typeof TypographyStyles;
    color?: keyof ThemeConfig['colors'];
  }
>;

export const Typography = ({
  style,
  variant = 'text',
  color = 'text',
  ...props
}: TypographyProps) => {
  const { theme } = useTheme();
  return (
    <Text
      style={[TypographyStyles[variant], { color: theme.colors?.[color] || color }, style]}
      {...props}
    />
  );
};
