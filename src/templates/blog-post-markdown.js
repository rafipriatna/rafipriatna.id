import React from 'react'
import { graphql } from 'gatsby'

// Layout
import Layout from '../layouts/default'

// Components
import Seo from '../components/seo'

const BlogPostMarkdownPage = ({ data, pageContext }) => {
    const post = data.markdownRemark
    const { frontmatter } = post
    const { title, date } = frontmatter

    return (
        <Layout>
            <Seo title={title} />

            <article itemScope itemType='http://schema.org/Article' className='my-10'>
                <header className='break-words'>
                    <div className='w-full mx-auto text-gray-800 font-light mb-6 dark:border-gray-600 pb-6 dark:text-white'>
                        <div>
                            <h6 className='font-semibold text-4xl mb-5'>{title}</h6>
                            <p className='text-gray-400 text-lg'>{date}</p>
                        </div>
                    </div>
                </header>
                <div className='prose dark:prose-dark max-w-full break-words text-xl text-justify leading-normal'>
                    <section
                        dangerouslySetInnerHTML={{ __html: post.html }}
                        itemProp='articleBody'
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