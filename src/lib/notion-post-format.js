export function notionPostFormat(posts) {
    return posts.map((post) => ({
        id: post.node.id,
        icon: post.node.raw.icon,
        title: post.node.title,
        date: post.node.raw.properties.date.date.start,
        slug: '/' + post.node.raw.properties.slug.rich_text,
        tags: post.node.raw.properties.tags.multi_select,
        description: post.node.raw.properties.description.rich_text,
    }))
}