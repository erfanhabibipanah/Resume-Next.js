import styles from '../components/layout.module.css'
import Link from 'next/link'
import Header from '../components/header';
import Head from 'next/head';

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
            <h1>education</h1>
            <div className={styles.backToHome}>
            <Link href="/">
            <a>← Back to home</a>
            </Link>
            </div>
            </div>
            </div>
        );
}

export default education;