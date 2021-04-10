import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Blog({allPostsData}) {
  return (
    <Layout blog>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          This is the future blog page for Charlene Grant
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
           <li className={utilStyles.listItem} key={id}>
           <Link href={`/posts/${id}`}>
             <a>{title}</a>
           </Link>
           <br />
           <small className={utilStyles.lightText}>
             <Date dateString={date} />
           </small>
         </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}


// Home.getInitialProps = async ctx => {
//   try {
//     // Parses the JSON returned by a network request
//     const parseJSON = resp => (resp.json ? resp.json() : resp);
//     // Checks if a network request came back fine, and throws an error if not
//     const checkStatus = resp => {
//       if (resp.status >= 200 && resp.status < 300) {
//         return resp;
//       }

//       return parseJSON(resp).then(resp => {
//         throw resp;
//       });
//     };

//     const headers = {
//       'Content-Type': 'application/json',
//     };

//     const restaurants = await fetch('http://localhost:1337/restaurants', {
//       method: 'GET',
//       headers,
//     })
//       .then(checkStatus)
//       .then(parseJSON);

//     return { restaurants };
//   } catch (error) {
//     return { error };
//   }
// };

