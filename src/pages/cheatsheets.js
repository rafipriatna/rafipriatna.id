import React from "react";
import { graphql } from "gatsby";

// Layout
import Layout from "../layouts/default";

// Components
import Seo from "../components/seo";
import CheatSheets from '../components/cheatsheets'

const CheatSheetsPage = ({ data, ...props }) => {
  const { CheatSheetsLists } = data;
  return (
    <Layout>
      <Seo title="CheatSheets" />
      <div className="mx-auto lg:max-w-3xl px-4 lg:px-0 my-10">
        <h1 className="my-5 text-balance text-4xl font-bold sm:text-5xl/[1.1]">Cheatsheets</h1>
        <p className="my-5 max-w-2xl text-lg tracking-wide leading-loose">
          Contekan teknis seputar Cyber Security. Kebanyakan berisi perintah-perintah yang sering saya gunakan.
        </p>
        <CheatSheets data={CheatSheetsLists.nodes} showSections />
      </div>
    </Layout>
  );
};

export const CheatSheetsQuery = graphql`
  query CheatSheetsQuery {
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

export default CheatSheetsPage;
