import { createRealmContext } from '@realm/react';
import { createUseQuery } from '@realm/react/dist/useQuery';
import { createUseObject } from '@realm/react/dist/useObject';
import { createUseRealm } from '@realm/react/dist/useRealm';
import { PrimaryKey } from 'realm';

export const SCHEMA_VERSION = 6;

const getHook = <T>(hook: T) => {
  if (typeof hook !== 'function') {
    throw new Error('Необходимо сконфигурировать Realm через configureRealmContext');
  }
  return hook;
};

type UseQuery = ReturnType<typeof createUseQuery>;
type UseObject = ReturnType<typeof createUseObject>;
type UseRealm = ReturnType<typeof createUseRealm>;

let _useQuery: UseQuery;
let _useObject: UseObject;
let _useRealm: UseRealm;

export const configureRealmContext = (realmConfig: Realm.Configuration) => {
  const realmContext = createRealmContext({ ...realmConfig, schemaVersion: SCHEMA_VERSION });

  _useQuery = realmContext.useQuery;
  _useObject = realmContext.useObject;
  _useRealm = realmContext.useRealm;

  return realmContext;
};
export const useQuery = <T>(type: string | ((new () => T) & Realm.ObjectClass)) => {
  return getHook(_useQuery)(type);
};

export const useObject = <T>(type: string | (new () => T), primaryKey: PrimaryKey) => {
  return getHook(_useObject)(type, primaryKey);
};

export const useRealm = () => {
  return getHook(_useRealm)();
};
