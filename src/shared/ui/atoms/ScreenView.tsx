import { LightThemeConfig, Spacings, Styles } from '@/shared/theme';
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
  return (
    <ViewComponent
      style={[
        fullHeight ? Styles.flex : undefined,
        { backgroundColor: LightThemeConfig.background, padding: Spacings[4] },
        style,
      ]}
      {...props}
    >
      {children}
    </ViewComponent>
  );
};
