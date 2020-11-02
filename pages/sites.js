import styles from "../components/layout.module.css";
import Header from "../components/header";
import Head from "next/head";
import Footer from "../components/footer";
import { useState } from "react";
import TimeLine from '../components/timeLine';

const siteTitle = "Erfan's portfolio";

const education = () => {
  const [padding, setPadding] = useState(true);
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
      <Header isActive={setPadding}/>
      <TimeLine></TimeLine>
      <Footer />
    </div>
  );
};

export default education;
