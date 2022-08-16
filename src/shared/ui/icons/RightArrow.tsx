import React from 'react';
import { createSvgIcon } from '@/shared/lib/icons';
import { Path } from 'react-native-svg';

const RightArrow = createSvgIcon(
  <Path
    d='M15.4998 11.2L9.7998 5.6C9.3998 5.2 8.7998 5.2 8.3998 5.6C7.9998 6 7.9998 6.6 8.3998 7L13.2998 12L8.3998 17C7.9998 17.4 7.9998 18 8.3998 18.4C8.5998 18.6 8.7998 18.7 9.0998 18.7C9.39981 18.7 9.5998 18.6 9.7998 18.4L15.4998 12.8C15.8998 12.3 15.8998 11.7 15.4998 11.2C15.4998 11.3 15.4998 11.3 15.4998 11.2Z'
    fill='black'
  />,
);

export default RightArrow;
