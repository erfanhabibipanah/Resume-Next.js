import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";

const name = "Erfan Habibi Panah Fard";
export const siteTitle = "Erfan's portfolio";

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={siteTitle} />
        <meta property="og:image" content="/images/profile.jpg" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header />
      <div className={styles.container}>
        <header className={styles.header}>
          {home ? (
            <>
              I am
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </>
          ) : (
            <>
              <h2 className={utilStyles.headingLg}>
                <Link href="https://www.linkedin.com/in/erfanhabibipanah/">
                  <a className={utilStyles.colorInherit}>{name}</a>
                </Link>
              </h2>
            </>
          )}
        </header>
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
