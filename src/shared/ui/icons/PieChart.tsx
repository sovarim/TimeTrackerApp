import { createSvgIcon } from '@/shared/lib/icons';
import React from 'react';
import { Path } from 'react-native-svg';

const PieChart = createSvgIcon(
  <>
    <Path
      d='M12.0023 3.78047C12.2489 3.76016 12.4981 3.75 12.75 3.75C17.7187 3.75 21.75 7.78125 21.75 12.75C21.75 17.7188 17.7187 21.75 12.75 21.75C10.8433 21.7499 8.98594 21.1446 7.44535 20.0213C5.90477 18.8979 4.76053 17.3145 4.17749 15.4992'
      stroke='black'
      strokeWidth='2'
      strokeMiterlimit='10'
      strokeLinecap='round'
    />
    <Path
      d='M12 2.25C6.61501 2.25 2.25001 6.615 2.25001 12C2.24796 13.3731 2.53697 14.7311 3.09798 15.9844L12 12V2.25Z'
      stroke='black'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </>,
);

export default PieChart;
