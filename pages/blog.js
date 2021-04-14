import React from "react";
import Articles from "../components/articles";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";

const Blog = ({ articles, categories }) => {
  return (
    <Layout categories={categories}>
      <Seo />
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>The Blog</h1>
        </div>
        <div id='for-articles'>
          <Articles articles={articles} />
          </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [articles, categories] = await Promise.all([
    fetchAPI("/articles?status=published"),
    fetchAPI("/categories"),
  ]);

  return {
    props: { articles, categories },
    revalidate: 1,
  };
}

export default Blog;