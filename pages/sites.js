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
            <div className={styles.backToHome}>
            <div class="hidden md:flex items-center justify-end space-x-8 md:flex-1 lg:w-0">
            <Link href="/" >
            <span class="inline-flex rounded-md shadow-sm">
            <button type="button" class="whitespace-no-wrap inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-600 hover:bg-gray-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
                ← Back to home
            </button>
            </span>
            </Link>
        </div>
            </div>
            </div>
            <Footer />
            </div>
        );
}

export default education;