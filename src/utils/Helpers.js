export function getSimplifiedPosts(posts, options = {}) {
    return posts.map((post) => ({
        id: post.id,
        date: post.frontmatter.date,
        slug: '/' + post.fields.slug,
        tags: post.frontmatter.tags,
        title: post.frontmatter.title,
        description: post.frontmatter.description,
    }))
}