import React, { Fragment } from 'react'
import { graphql, Link } from 'gatsby'

// Layout
import Layout from '../layouts/default'

// Lib
import { Blocks } from '../lib/render'

const BlogPostPage = ({ data, pageContext }) => {
    const { notion } = data
    const title = notion.title
    const { date, tags } = notion.properties
    const content = notion.raw.children

    return (
        <Layout>
            <article itemScope itemType='http://schema.org/Article' className='my-10'>
                <header className='mb-10 break-words'>
                    <h1 className='text-4xl mb-6'>{title}</h1>
                    <div className='text-gray-400'>
                        <p className='my-2'>
                            Terbit pada tanggal {date.value.start}{' '}
                        </p>
                        {tags.value.map((tag, index) => {
                            return (
                                <Link to={'/tags/' + tag.name} className='font-bold pb-4 mr-2 hover:text-white' key={index}>
                                    #{tag.name}
                                </Link>
                            )
                        })}
                    </div>
                </header>
                <div className='max-w-full break-words text-lg'>
                    {content.map((block, index) => {
                        return (
                            <Fragment key={index}>{Blocks(block)}</Fragment>
                        )
                    })}
                </div>
            </article>
        </Layout>
    )
}

export const blogPostQuery = graphql`
  query blogPostQuery($id: String!) {
      notion(id: {eq: $id}) {
        id
        title
        properties {
          date {
            value {
              start(formatString: "DD MMMM YYYY", locale: "id-ID")
            }
          }
          description {
            value
          }
          tags {
            value {
              name
            }
          }
        }
        raw {
          icon {
            emoji
            external {
              url
            }
            type
          }
          children {
            callout {
              icon {
                emoji
                type
              }
              text {
                annotations {
                  bold
                  code
                  color
                  italic
                  strikethrough
                  underline
                }
                text {
                  content
                }
                type
              }
            }
            image {
              remoteImage {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            paragraph {
              text {
                text {
                  content
                }
                type
                annotations {
                  bold
                  code
                  italic
                  strikethrough
                  underline
                  color
                }
              }
            }
            type
          }
        }
      }
  }  
`

export default BlogPostPage