export function postFormat(markdown, notion) {
 
    let markdownPosts = markdown.map((post) => ({
        id: post.id,
        icon: null,
        title: post.frontmatter.title,
        date: post.frontmatter.date,
        slug: '/' + post.fields.slug,
        tags: post.frontmatter.tags,
        description: post.frontmatter.description,
    }))

    let notionPosts = notion.map((post) => ({
        id: post.id,
        icon: post.raw.icon,
        title: post.title,
        date: post.raw.properties.date.date.start,
        slug: '/' + post.raw.properties.slug.rich_text,
        tags: post.raw.properties.tags.multi_select,
        description: post.raw.properties.description.rich_text,
    }))

    return notionPosts.concat(markdownPosts)
}