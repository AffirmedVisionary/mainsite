import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { fetchAPI } from '../lib/api'
import Gallery from 'react-photo-gallery'
import { Button, ButtonGroup } from 'react-bootstrap'

const GalleryP = ({ categories, images, hashtags }) => {
  const BasicRows = () => <Gallery photos={images} />

  return (
    <Layout categories={categories}>
      <Seo />
      <div className='uk-container uk-container-large'>
        <div>
          <h1>The Gallery</h1>
        </div>

        <div>
          <BasicRows />
        </div>

        <div style={{marginTop: '20px'}}>
          <h3 style={{ textAlign: 'center' }}>Hashtags</h3>
          <ButtonGroup id='hashtags'>
          <Button
                  variant='outline-dark'
                  className='hashtag'
                  onClick='filter'
                >
                  All
                </Button>

            {hashtags.map((hashtag) => {
              return (
                <Button
                  variant='outline-dark'
                  key={hashtag.id}
                  className='hashtag'
                  onClick='filter'
                >
                  {hashtag.name}
                </Button>
              )
            })}
          </ButtonGroup>
        </div>

      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [categories, images, hashtags] = await Promise.all([
    fetchAPI('/categories'),
    fetchAPI('/images'),
    fetchAPI('/hashtags'),
  ])

  return {
    props: { categories, images, hashtags },
    revalidate: 1,
  }
}

export default GalleryP
