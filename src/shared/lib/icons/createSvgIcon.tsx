import React, { ReactNode, useMemo } from 'react';
import { Colors } from '@shared/theme';
import Svg from 'react-native-svg';

export type SvgIconProps = {
  size?: number;
  color?: string;
};

const createSvgIcon = (jsxPath: ReactNode) => {
  return ({ color = Colors.black, size = 24 }: SvgIconProps) => {
    const transformedJsxPath = useMemo(() => {
      let _jsxPathClone = null;
      if (React.isValidElement(jsxPath)) {
        _jsxPathClone = React.cloneElement(jsxPath);
      }
      if (React.isValidElement(_jsxPathClone?.props.children?.[0])) {
        return React.Children.map(_jsxPathClone?.props.children, (child) => {
          return React.cloneElement(child, {
            ...((child.props?.fill && {
              fill: color,
            }) as {}),
            ...((child.props?.stroke && {
              stroke: color,
            }) as {}),
          });
        });
      } else if (React.isValidElement(_jsxPathClone)) {
        return React.cloneElement(_jsxPathClone, {
          ...((_jsxPathClone.props?.fill && {
            fill: color,
          }) as {}),
          ...((_jsxPathClone.props?.stroke && {
            stroke: color,
          }) as {}),
        });
      }
      return null;
    }, [color]);

    return (
      <Svg width={size} height={size} viewBox='0 0 24 24' color={color}>
        {transformedJsxPath}
      </Svg>
    );
  };
};

export default createSvgIcon;
