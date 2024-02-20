import React from 'react';
import { Spacing } from '@/shared/theme';
import { StyleSheet, View, ViewProps } from 'react-native';

export type ViewSpacingProps = ViewProps & {
  spacing: keyof typeof Spacing;
};

export const ViewSpacing = ({
  spacing: ownerSpacing,
  style,
  children: ownerChildren,
  ...props
}: ViewSpacingProps) => {
  const spacing = Spacing[ownerSpacing];
  const children = React.Children.map(ownerChildren, (child) => {
    return (
      <View
        style={{
          paddingLeft: spacing,
          paddingTop: spacing,
        }}
      >
        {child}
      </View>
    );
  });

  return (
    <View
      style={[
        styles.root,
        {
          marginLeft: -spacing,
          marginTop: -spacing,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
  },
});
