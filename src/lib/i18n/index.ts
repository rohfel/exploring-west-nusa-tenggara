import i18n from 'sveltekit-i18n';
import type { Config } from 'sveltekit-i18n';

import lang from './lang.json';

const config: Config = {
  translations: {
    en: { lang },
    id: { lang }
  },
  loaders: [
    {
      locale: 'en',
      key: 'home',
      loader: async () => (await import('./translations/en/home.json')).default
    },
    {
      locale: 'id',
      key: 'home',
      loader: async () => (await import('./translations/id/home.json')).default
    }
  ]
};

export const defaultLocale = 'en';

export const { t, locale, locales, loading, loadTranslations, translations } =
  new i18n(config);
