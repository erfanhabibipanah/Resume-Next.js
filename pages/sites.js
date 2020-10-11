import styles from '../components/layout.module.css'
import Link from 'next/link'
import Header from '../components/header';
import Head from 'next/head';
import Footer from '../components/footer';

const siteTitle = 'Erfan\'s portfolio'

const education = () => {
    return (
        <div>
        <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content={siteTitle}
        />
        <meta
          property="og:image"
          content="/images/profile.jpg"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
        <Header />
        <div className={styles.container}>
          <h1>sites</h1>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
            
            </div>
            <Footer />
            </div>
        );
}

export default education;