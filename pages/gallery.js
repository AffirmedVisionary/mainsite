import React from "react";
import Articles from "../components/articles";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";
import Gallery from 'react-photo-gallery'


const GalleryP = ({ articles, categories, images }) => {
  const BasicRows = () => <Gallery photos={images} />;

  return (
    <Layout categories={categories}>
      <Seo />
      <div className="uk-section">
        <div>
          <h1>The Gallery Spot</h1>
          <div>
          <BasicRows />
          </div>
        </div>
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
  const [articles, categories, images] = await Promise.all([
    fetchAPI("/articles?status=published"),
    fetchAPI("/categories"),
    fetchAPI("/images"),
  ]);

  return {
    props: { articles, categories, images },
    revalidate: 1,
  };
}

export default GalleryP;