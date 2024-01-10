import React from "react";
import { graphql } from "gatsby";

// Layout
import Layout from "../layouts/default";

// Components
import Seo from "../components/seo";
import AuthorCard from "../components/author-card";

const BlogPostMarkdownPage = ({ data, pageContext }) => {
  const post = data.markdownRemark;
  const { frontmatter } = post;
  const { title, date, description, categories } = frontmatter;

  return (
    <Layout>
      <Seo title={title} />

      <article itemScope itemType="http://schema.org/Article" className="my-10">
        <header className="break-words">
          <div className="flex animate-in flex-col gap-4">
            <div className="max-w-3xl">
              <h1 className="text-balance text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl/[1.1] dark:text-white">
                {title}
              </h1>
              <p className="mt-6 mb-4 text-xl text-gray-500">
                {description}
              </p>
            </div>
            <AuthorCard articleDate={date} />
            <div className="flex justify-start">
              {
                categories && categories.map(category => {
                  return (
                    <span className="mr-1 rounded px-2 py-0.5 text-sm text-white bg-indigo-500 dark:bg-indigo-800 bg-opacity-70 dark:bg-opacity-50">{category}</span>
                  )
                })
              }
          </div>
          </div>
        </header>
        <div className="prose dark:prose-dark max-w-full break-words text-lg text-justify font-normal dark:text-white">
          <section
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
          />
        </div>
      </article>
    </Layout>
  );
};

export const blogPostQuery = graphql`
  query blogPostMarkdownQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY", locale: "id-ID")
        description
        tags
        categories
      }
    }
  }
`;

export default BlogPostMarkdownPage;
