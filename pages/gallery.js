import React, { useState, useCallback } from "react";
import Layout from "../components/layout";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
// import { photos } from "./photos";
import Image from '../components/image'
import { fetchAPI } from "../lib/api";


const GalleryPage = ( images, hashtags, categories ) => {
  
  // const [currentImage, setCurrentImage] = useState(0);
  // const [viewerIsOpen, setViewerIsOpen] = useState(false);

  // const openLightbox = useCallback((event, { index }) => {
  //   setCurrentImage(index);
  //   setViewerIsOpen(true);
  // }, []);

  // const closeLightbox = () => {
  //   setCurrentImage(0);
  //   setViewerIsOpen(false);
  // };

  return (
    <Layout categories={categories}>
      <Gallery photos={images.name}
        // onClick={openLightbox}
      />
      {/* <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway> */}
    </Layout>
  );
}

export default GalleryPage


export async function getStaticProps() {
  // Run API calls in parallel
  const [images, hashtags, gallery, categories] = await Promise.all([
    fetchAPI("/images"),
    fetchAPI("/hashtags"),
    fetchAPI("/gallery"),
    fetchAPI("/categories"),
  ]);

  return {
    props: { images, hashtags, gallery },
    revalidate: 1,
  };
}