import { query } from '../realm/lib';

export type ThemeValue = 'dark' | 'light' | 'system';
export type LangValue = 'ru' | 'en';

export const USER_SETTINGS_ID = 'USER_SETTINGS';

export interface IUserSettings {
  id: string;
  theme: ThemeValue;
  lang: LangValue;
}

export class UserSettings extends Realm.Object implements IUserSettings {
  id!: string;
  theme!: ThemeValue;
  lang!: LangValue;

  public static schema: Realm.ObjectSchema = {
    name: 'UserSettings',
    primaryKey: 'id',
    properties: {
      id: 'string',
      theme: 'string',
      lang: 'string',
    },
  };

  public static init = (realm: Realm) => {
    query(realm, () => {
      const us = realm.objectForPrimaryKey(UserSettings, USER_SETTINGS_ID);
      if (!us) {
        realm.create(this, {
          id: USER_SETTINGS_ID,
          theme: 'system',
          lang: 'ru',
        });
      }
    });
  };

  public static update = (realm: Realm, body: Partial<Omit<IUserSettings, 'id'>>) => {
    const us = realm.objectForPrimaryKey(UserSettings, USER_SETTINGS_ID)!;
    query(realm, () => {
      us.theme = body.theme || us.theme;
      us.lang = body.lang || us.lang;
    });
  };
}
