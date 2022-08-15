import { createSvgIcon } from '@shared/lib/icons';
import React from 'react';
import { Path } from 'react-native-svg';

const TimeOutline = createSvgIcon(
  <>
    <Path
      d='M12 3C7.03125 3 3 7.03125 3 12C3 16.9688 7.03125 21 12 21C16.9688 21 21 16.9688 21 12C21 7.03125 16.9688 3 12 3Z'
      stroke='black'
      strokeWidth='2'
      strokeMiterlimit='10'
    />
    <Path
      d='M12 6V12.75H16.5'
      stroke='black'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </>,
);

export default TimeOutline;
