import { useCallback, useEffect, useState } from 'react';
import { useObject, useRealm } from '../realm';
import { IUserSettings, USER_SETTINGS_ID, UserSettings } from './model';

export const useInitUserSettings = () => {
  const [initializing, setInitializing] = useState(true);
  const realm = useRealm();

  useEffect(() => {
    UserSettings.init(realm);
    setInitializing(false);
  }, [realm]);

  return { initializing };
};

export const useUserSettings = () => {
  const realm = useRealm();
  const us = useObject(UserSettings, USER_SETTINGS_ID)!;

  const update = useCallback(
    (body: Partial<Omit<IUserSettings, 'id'>>) => {
      UserSettings.update(realm, body);
    },
    [realm],
  );

  return {
    theme: us.theme,
    lang: us.lang,
    update,
  };
};
