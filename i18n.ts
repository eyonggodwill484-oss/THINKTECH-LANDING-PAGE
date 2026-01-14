import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en/common.json';
import fr from './locales/fr/common.json';

export const defaultNS = 'common';
export const resources = {
  en: {
    common: en,
  },
  fr: {
    common: fr,
  },
} as const;

i18n.use(initReactI18next).init({
  lng: 'en',
  ns: [defaultNS],
  defaultNS,
  resources,
});

export default i18n;
