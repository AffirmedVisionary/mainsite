import React from "react";
import Articles from "../components/articles";
import Feature from "../components/feature";
// import Hero from "../components/hero";
import Hero1 from "../components/hero1";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";

const Home = ({ articles, categories, homepage }) => {
  return (
    <Layout categories={categories} >
      <Seo seo={homepage.seo} />
      <div className="uk-section" style={{paddingTop: '0'}}>
        <Hero1 data={homepage.hero} />
        <Feature data={homepage.feature} iconlist={homepage.featlist}/>
        <div id='for-articles'>
          <Articles articles={articles} />
          </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [articles, categories, homepage] = await Promise.all([
    fetchAPI("/articles?status=published"),
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
  ]);

  return {
    props: { articles, categories, homepage },
    revalidate: 1,
  };
}

export default Home;