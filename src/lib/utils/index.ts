import { writable } from 'svelte/store';
import { locale } from '$lib/i18n';

export const fetchMarkdownPosts = async () => {
  const postFiles = import.meta.glob('/src/routes/[lang]/explore/*.md');
  const iterablePostFiles = Object.entries(postFiles);

  const posts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const postPath = `/${locale}/${path.slice(19, -3)}`;

      return {
        meta: metadata,
        path: postPath
      };
    })
  );

  return posts;
};

export const theme = writable('light');
export const isDarkTheme = writable(false);
