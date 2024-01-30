import React, { useMemo } from "react";
import { graphql } from "gatsby";

// Layout
import Layout from "../layouts/default";

// Components
import Search from "../components/search";
import Seo from "../components/seo";

// Helper
import { postFormat } from "../lib/post-format";

const BlogPage = ({ data, ...props }) => {
  const { MarkdownPosts } = data;

  const articles = useMemo(
    () => postFormat(MarkdownPosts.nodes),
    [MarkdownPosts.nodes]
  );

  return (
    <Layout>
      <Seo title="Blog" />
      <div className="mx-auto lg:max-w-3xl px-4 lg:px-0 my-10">
        <h1 className="my-5 text-balance text-4xl font-bold sm:text-5xl/[1.1]">Blog</h1>
        <p className="my-5 max-w-2xl text-lg tracking-wide leading-loose">
          Artikel, tutorial, dan tulisan lainnya ada di sini.
        </p>
        <div className="mb-6">
          <Search posts={articles} {...props} />
        </div>
      </div>
    </Layout>
  );
};

export const blogQuery = graphql`
  query BlogQuery {
    MarkdownPosts: allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: {
        fileAbsolutePath: { regex: "/content/posts/|/content/writeups/" }
      }
    ) {
      nodes {
        id
        frontmatter {
          title
          date(formatString: "DD/MM/yyyy", locale: "id-ID")
          description
        }
        fields {
          slug
          icon
        }
      }
    }
  }
`;

export default BlogPage;
