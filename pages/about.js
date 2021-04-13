import { url } from '../config/next.config'
import Head from 'next/head'
import Layout from '../components/layout'


export default function AboutMe({list}) {
    return (
        <Layout about>
          <Head>
            <title>About Me</title>
          </Head>
          <h1>This is the About me page</h1>
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