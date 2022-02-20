import React from 'react'
import { graphql, Link } from 'gatsby'

// Layout
import Layout from '../layouts/default'

// Components
import Seo from '../components/seo'

// Helper
import { Blocks } from '../lib/render'

const BlogPostMarkdownPage = ({ data, pageContext }) => {
    const post = data.markdownRemark
    const { frontmatter } = post
    const { title, tags, date } = frontmatter

    return (
        <Layout>
            <Seo title={title} />

            <article itemScope itemType='http://schema.org/Article' className='my-10'>
                <header className='break-words'>
                    <div class="w-full mx-auto text-gray-800 font-light mb-6 border-b border-gray-200 pb-6">
                        <div>
                            <h6 class="font-semibold text-4xl mb-5">{title}</h6>
                            <p class="text-gray-400 text-lg">Terbit pada tanggal {date}</p>

                            {tags.map((tag, index) => {
                                return (
                                    <Link to={'/tags/' + tag} className='font-bold pb-4 mr-2 hover:text-white text-lg' key={index}>
                                        #{tag}
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </header>
                <div className='prose dark:prose-dark max-w-full break-words text-xl text-justify'>
                    <section
                        dangerouslySetInnerHTML={{ __html: post.html }}
                        itemProp="articleBody"
                    />
                </div>
            </article>
        </Layout>
    )
}

export const blogPostQuery = graphql`
  query blogPostMarkdownQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
        html
        frontmatter {
            title
            date(formatString: "DD MMMM YYYY", locale: "id-ID")
            description
            tags
        }
    } 
  }  
`

export default BlogPostMarkdownPage