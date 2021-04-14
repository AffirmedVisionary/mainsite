import Head from 'next/head'
import Layout from '../components/layout'


export default function Contact() {
    return (
        <Layout contact>
          <Head>
            <title>About Me</title>
          </Head>
          <h1>This is the About me page</h1>
            <div>
                Contact Form Goes here
          </div>
        </Layout>
      );
}