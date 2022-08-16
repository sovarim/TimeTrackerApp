import { createSvgIcon } from '@/shared/lib/icons';
import React from 'react';
import { Path } from 'react-native-svg';

const ArrowBack = createSvgIcon(
  <>
    <Path
      d='M11.4375 18.75L4.6875 12L11.4375 5.25'
      stroke='black'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M5.625 12L19.3125 12'
      stroke='black'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </>,
);
export default ArrowBack;
