import { url } from '../config/next.config'
import Head from 'next/head'
import Link from 'next/link'


export default function BlogTrial({list}) {
    return (
        <div>
          <Head>
            <title>Blog Trial</title>
          </Head>
          <h1>Welcome to the strapi blog!</h1>
          <ul>
                {list.map((item) => (
                                
              <li key={item.id}>
                <Link href={`/article/${item.slug}`}>
                  <a>{item.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      );
}

export const getStaticProps = async () => {
    const data = await fetch(`${url}/articles`);
    const list = await data.json();
  
    return {
      props: {
        list,
      },
      revalidate: 1, 
    };
  };