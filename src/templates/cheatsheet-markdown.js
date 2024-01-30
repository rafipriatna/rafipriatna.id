import React from "react"
import { Link, graphql } from "gatsby"

// Layout
import Layout from "../layouts/default";

// Components
import Seo from "../components/seo";
import CheatSheetsCard from "../components/cheatsheets-card";

const CheatSheetarkdownPage = ({ data, pageContext }) => {
  const post = data.markdownRemark;
  const cheatSheetsList = data.CheatSheetsLists
  const { frontmatter } = post;
  const { title, description } = frontmatter;

  return (
    <Layout>
      <Seo title={title} />

      <article itemScope itemType="http://schema.org/Article" className="my-10">
        <header className="break-words mb-5 mx-auto lg:max-w-3xl px-4 lg:px-0">
          <div className="flex animate-in flex-col gap-4">
            <div className="max-w-3xl">
              <h1 className="text-balance text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl/[1.1] dark:text-white">
                {title}
              </h1>
              <p className="mt-6 mb-4 text-xl text-gray-500">{description}</p>
            </div>
          </div>
        </header>
        <div className="prose dark:prose-dark max-w-full break-words text-lg dark:text-white mx-auto lg:max-w-6xl px-4 lg:px-0 tracking-wide leading-loose lg:ml-32 xl:ml-64 2xl:ml-96 max-w-3xl">
          <div className="w-full md:grid md:grid-cols-6 md:gap-12">
            <section
              dangerouslySetInnerHTML={{ __html: post.html }}
              itemProp="articleBody"
              className="md:col-span-4"
            />
            <div className="col-span-2 hidden p-2 md:block">
              <CheatSheetsCard data={cheatSheetsList.nodes} />
            </div>
          </div>
        </div>
        <div className="my-20 flex justify-center">
          <Link
            to="/cheatsheets"
            className="flex h-9 items-center space-x-2 rounded-full border border-slate-200 px-4 pr-5 text-sm font-semibold transition ease-in hover:border-indigo-100 hover:bg-indigo-50 hover:text-indigo-500 dark:hover:border-indigo-800 dark:hover:bg-indigo-400 dark:hover:bg-opacity-20"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-4 w-4"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path></svg>
            <div className="leading-none">
              Back to Cheatsheets
            </div>
          </Link>
        </div >
      </article >
    </Layout >
  );
};

export const cheatSheetQuery = graphql`
  query cheatSheetMarkdownQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        description
      }
    }
    CheatSheetsLists: allMarkdownRemark(
        sort: { frontmatter: { date: DESC } }
        filter: {
          fileAbsolutePath: { regex: "/content/cheatsheets/" }
        }
      ) {
        nodes {
          id
          frontmatter {
            title
            description
            section
          }
          fields {
            slug
          }
        }
      }
  }
`;

export default CheatSheetarkdownPage;
