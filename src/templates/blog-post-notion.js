import React, { Fragment } from 'react'
import { graphql } from 'gatsby'

// Layout
import Layout from '../layouts/default'

// Components
import Seo from '../components/seo'

// Helper
import { Blocks } from '../lib/render'

const BlogPostNotionPage = ({ data, pageContext }) => {
  const { notion } = data
  const title = notion.title
  const { date } = notion.properties
  const content = notion.raw.children

  return (
    <Layout>
      <Seo title={title} />

      <article itemScope itemType='http://schema.org/Article' className='my-10'>
        <header className='break-words'>
          <div className='w-full mx-auto text-gray-800 font-light mb-6 border-b border-gray-200 dark:border-gray-600 pb-6 dark:text-white'>
            <div>
              <h6 className='font-semibold text-4xl mb-5'>{title}</h6>
              <p className='text-gray-400 text-lg'>Terbit pada tanggal {date.value.start}{' '}</p>
            </div>
          </div>
        </header>
        <div className='prose dark:prose-dark max-w-full break-words text-xl text-justify'>
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
              external {
                url
              }
              type
            }
            code {
              text {
                text {
                  content
                }
              }
            }
            paragraph {
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
                  link {
                    url
                  }
                }
                href
              }
            }
            heading_2 {
              text {
                annotations {
                  bold
                  code
                  color
                  strikethrough
                  italic
                  underline
                }
                text {
                  content
                }
              }
            }
            heading_3 {
              text {
                annotations {
                  underline
                  strikethrough
                  italic
                  color
                  code
                  bold
                }
                text {
                  content
                }
              }
            }
            numbered_list_item {
              text {
                annotations {
                  bold
                  code
                  italic
                  color
                  strikethrough
                  underline
                }
                text {
                  content
                }
              }
            }
            quote {
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
              }
            }
            type
          }
        }
      }
  }  
`

export default BlogPostNotionPage