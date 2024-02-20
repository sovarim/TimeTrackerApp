import React from 'react';
import { configureRealmContext } from '@/shared/db/realm';
import { Task } from '@/entities/task';
import { Tag } from '@/entities/tag';
import { UserSettings } from '@/shared/db/userSettings/model';

const RealmContext = configureRealmContext({
  schema: [Task, Tag, UserSettings],
});

const withRealm = (Component: () => JSX.Element | null) => () => {
  return (
    <RealmContext.RealmProvider>
      <Component />
    </RealmContext.RealmProvider>
  );
};

export default withRealm;
