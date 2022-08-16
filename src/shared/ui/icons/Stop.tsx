import { createSvgIcon } from '@/shared/lib/icons';
import React from 'react';
import { Path } from 'react-native-svg';

const Stop = createSvgIcon(
  <Path
    d='M16 4H8C5.79086 4 4 5.79086 4 8V16C4 18.2091 5.79086 20 8 20H16C18.2091 20 20 18.2091 20 16V8C20 5.79086 18.2091 4 16 4Z'
    fill='#BDBDBD'
  />,
);

export default Stop;
