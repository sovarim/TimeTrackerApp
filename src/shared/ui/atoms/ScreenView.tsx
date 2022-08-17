import { Spacing, Styles, useTheme } from '@/shared/theme';
import React, { PropsWithChildren } from 'react';
import { View, ViewProps } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export type ScreenViewProps = PropsWithChildren<
  ViewProps & {
    safeArea?: boolean;
    fullHeight?: boolean;
  }
>;

export const ScreenView = ({
  safeArea,
  children,
  fullHeight = true,
  style,
  ...props
}: ScreenViewProps) => {
  const ViewComponent = safeArea ? SafeAreaView : View;
  const { theme } = useTheme();
  return (
    <ViewComponent
      style={[
        fullHeight ? Styles.flex : undefined,
        { backgroundColor: theme.colors.background, padding: Spacing[4] },
        style,
      ]}
      {...props}
    >
      {children}
    </ViewComponent>
  );
};
