import notStyles from "../styles/NotFound.module.css";
import Header from "../components/header";
import Head from "next/head";
import Footer from "../components/footer";
import { useState } from "react";
import { NextSeo } from "next-seo";

const siteTitle = "Erfan's portfolio";
const siteDescription =
  "I am Erfan Habibi Panah Fard and I’m a Front-End developer. This is my Portfolio site";

const NotFound = () => {
  const [padding, setPadding] = useState(true);
  return (
    <div>
      <NextSeo noindex={true} />
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={siteDescription} />
        <meta property="og:image" content="/images/profile.jpg" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header isActive={setPadding} />
      <div className={notStyles.body}>
        <div style={{ padding: "100px 0 " }}>
          <section className={notStyles.errorcontainer}>
            <span>4</span>
            <span>
              <span className={notStyles.screenreadertext}>0</span>
            </span>
            <span>4</span>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
