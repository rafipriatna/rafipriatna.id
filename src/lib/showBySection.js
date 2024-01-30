export default function showBySection(data) {
    const postsBySections = {}

    data.forEach((post) => {
        const section = post.frontmatter.section
        postsBySections[section] = [...(postsBySections[section] || []), post]
    })

    return postsBySections
}