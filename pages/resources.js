import { url } from '../config/next.config'
import Head from 'next/head'
import Layout from '../components/layout'


export default function AboutMe({list}) {
    return (
        <Layout about>
          <Head>
            <title>Resources Page</title>
          </Head>
          <h1>This the resources page</h1>
          <div>{list.Body}</div>
        </Layout>
      );
}

export const getStaticProps = async () => {
    const data = await fetch(`${url}/about-me`);
    const list = await data.json();
  
    return {
      props: {
        list,
      },
      revalidate: 1, 
    };
  };