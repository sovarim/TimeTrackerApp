import { createRealmContext } from '@realm/react';
import { Tag } from '../tag';
import { Task } from '../task';

const RealmContext = createRealmContext({
  schema: [Task, Tag],
  schemaVersion: 5,
});

export const useQuery = RealmContext.useQuery;
export const useObject = RealmContext.useObject;
export const useRealm = RealmContext.useRealm;
export const RealmProvider = RealmContext.RealmProvider;
