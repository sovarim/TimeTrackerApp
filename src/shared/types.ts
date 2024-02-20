import { Realm } from '@realm/react';

export type WithoutChildren<T> = Omit<T, 'children'>;
export type TimeFormat = {
  hours: number;
  seconds: number;
  minutes: number;
};

export type QueryFn<T = any> = (realm: Realm, type: T) => void;
