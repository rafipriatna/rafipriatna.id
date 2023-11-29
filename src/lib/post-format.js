export function postFormat(markdown) {
 
    let markdownPosts = markdown.map((post) => ({
        id: post.id,
        icon: post.fields.icon,
        title: post.frontmatter.title,
        date: post.frontmatter.date,
        slug: '/' + post.fields.slug,
        tags: post.frontmatter.tags,
        description: post.frontmatter.description,
    }))

    return markdownPosts
}