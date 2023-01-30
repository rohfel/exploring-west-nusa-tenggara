import { locale } from '$lib/i18n';

export const load = async ({ fetch }) => {
  const response = await fetch(`/${locale.get()}/api/posts`);
  const posts = await response.json();

  return {
    posts
  };
};
