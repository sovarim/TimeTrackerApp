import { createSvgIcon } from '@shared/lib/icons';
import React from 'react';
import { Path } from 'react-native-svg';

const Add = createSvgIcon(
  <>
    <Path
      d='M16 7V25'
      stroke='black'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M25 16H7'
      stroke='black'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </>,
);

export default Add;
