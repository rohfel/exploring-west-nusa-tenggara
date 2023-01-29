import type { LayoutLoad } from './$types';

import { loadTranslations } from '$lib/i18n';

export const load: LayoutLoad = async ({ url }) => {
  const { pathname } = url;
  const lang = `${pathname.match(/[^/]+?(?=\/|$)/) || ''}`;
  const route = pathname.replace(new RegExp(`^/${lang}`), '');

  await loadTranslations(lang, route);
};
