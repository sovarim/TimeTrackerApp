import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en, ru } from '../translations';

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  fallbackLng: 'ru',
  resources: {
    ru: {
      translation: ru,
    },
    en: {
      translation: en,
    },
  },
});
