export const load = async ({ params }) => {
  const post = await import(`../${params.slug}.md`);
  const { title, desc, date } = post.metadata;
  const content = post.default;

  return {
    content,
    title,
    desc,
    date
  };
};
