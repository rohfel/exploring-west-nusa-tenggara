export const load = async ({ params }) => {
  const posts = await import.meta.glob('../*.md');
  const post = await posts[`../${params.post}.md`]();

  const { title, desc, date } = post.metadata;
  const content = post.default;

  return {
    content,
    title,
    desc,
    date
  };
};
