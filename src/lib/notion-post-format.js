export function notionPostFormat(posts) {
    return posts.map((post) => ({
        id: post.id,
        icon: post.raw.icon,
        title: post.title,
        date: post.raw.properties.date.date.start,
        slug: '/' + post.raw.properties.slug.rich_text,
        tags: post.raw.properties.tags.multi_select,
        description: post.raw.properties.description.rich_text,
    }))
}