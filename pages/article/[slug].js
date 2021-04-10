import Layout from '../../components/layout'
import { url } from '../../config/next.config'
import ReactMarkdown from 'react-markdown'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

export default function Article({ article }) {
  return (
    <Layout>
      <Head>
        <title>{article.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{article.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={article.date} />
        </div>
              <ReactMarkdown>{ article.content }</ReactMarkdown>
      </article>
    </Layout>
  )
}

export const getStaticProps = async (context) => {
  const data = await fetch(`${url}/articles/${context.params.id}`);
  const article = await data.json();

  return {
    props: { article },
    revalidate: 1,
  };
};
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch(`${url}/articles`);
  const articles = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = articles.map((item) => ({
    params: { slug: item.slug },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}
