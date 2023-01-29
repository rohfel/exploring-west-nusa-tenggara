import { fetchMarkdownPosts } from '$lib/utils';
import { json } from '@sveltejs/kit';

export const GET = async () => {
  const posts = await fetchMarkdownPosts();
  const sortedPosts = posts.sort(
    (a, b) => new Date(b.meta.date) - new Date(a.meta.date)
  );

  return json(sortedPosts);
};
