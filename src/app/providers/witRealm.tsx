import React from 'react';
import { RealmProvider } from '@/entities/realm';
import { ReactNode } from 'react';

const withRealm = (component: () => ReactNode) => () => {
  return <RealmProvider>{component()}</RealmProvider>;
};

export default withRealm;
