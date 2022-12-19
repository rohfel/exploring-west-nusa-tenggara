export const fetchMarkdownPosts = async () => {
    const postFiles = import.meta.glob('/src/routes/explore/*.md')
    const iterablePostFiles = Object.entries(postFiles)

    const posts = await Promise.all(iterablePostFiles.map(async ([path, resolver]) => {
        const { metadata } = await resolver()
        const postPath = path.slice(11, -3)

        return {
            meta: metadata,
            path: postPath
        }
    }))

    return posts
}