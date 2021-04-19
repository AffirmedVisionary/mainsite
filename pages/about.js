import { url } from '../config/next.config'
import Head from 'next/head'
import Layout from '../components/layout'
import { fetchAPI } from '../lib/api'
import { Tabs, Tab } from 'react-bootstrap';
import HeroNoBtn from '../components/heronobtn';
import Seo from '../components/seo';


export default function AboutMe({ about, categories }) {
  
  // const topics = abouts.topics

    return (
      <Layout categories={categories}>
        <Seo seo={ about.seo } />
          <Head>
          <title>About</title>
        </Head>
        <div className="uk-section">
          <HeroNoBtn data={about.hero}/>
        <div className="uk-container uk-container-large">

            <h1>{about.title}</h1>
            </div>
            <div>{about.description}</div>
            

          </div>
        </Layout>
      );
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [categories, about ] = await Promise.all([
    fetchAPI('/categories'),
    fetchAPI('/about'),
  ])

  return {
    props: { categories, about },
    revalidate: 1,
  }
}
