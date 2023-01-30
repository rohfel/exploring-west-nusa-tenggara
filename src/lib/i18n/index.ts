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
      key: 'nav',
      loader: async () => (await import('./translations/en/nav.json')).default
    },
    {
      locale: 'en',
      key: 'home',
      loader: async () => (await import('./translations/en/home.json')).default
    },
    {
      locale: 'en',
      key: 'explore',
      loader: async () =>
        (await import('./translations/en/explore.json')).default
    },
    {
      locale: 'id',
      key: 'nav',
      loader: async () => (await import('./translations/id/nav.json')).default
    },
    {
      locale: 'id',
      key: 'home',
      loader: async () => (await import('./translations/id/home.json')).default
    },
    {
      locale: 'id',
      key: 'explore',
      loader: async () =>
        (await import('./translations/id/explore.json')).default
    }
  ]
};

export const defaultLocale = 'en';

export const { t, locale, locales, loading, loadTranslations, translations } =
  new i18n(config);
