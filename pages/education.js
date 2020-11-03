import Header from "../components/header";
import Head from "next/head";
import Footer from "../components/footer";
import { useState } from "react";
import TimeLineEducation from '../components/timeLineEducation';
import sitesStyle from "../styles/sites.module.css";

const siteTitle = "Erfan's portfolio";

const Education = () => {
  const [padding, setPadding] = useState(true);
  return (
    <div style={{ backgroundColor: "rgb(226, 226, 226)"}}>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={siteTitle} />
        <meta property="og:image" content="/images/profile.jpg" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header isActive={setPadding}/>
      <div className={`${padding ? "" : sitesStyle.paddingMobile}`}>
        <TimeLineEducation />
        <div style={{ paddingBottom: "150px" }} />
        <Footer />
      </div>
    </div>
  );
};

export default Education;
