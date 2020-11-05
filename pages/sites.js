import Header from "../components/header";
import Head from "next/head";
import Footer from "../components/footer";
import { useState } from "react";
import TimeLineSite from "../components/timeLineSite";
import sitesStyle from "../styles/sites.module.css";

const siteTitle = "Erfan's portfolio";

const Sites = () => {
  const [padding, setPadding] = useState(true);
  return (
    <div style={{ backgroundColor: "rgb(226, 226, 226)" }}>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={siteTitle} />
        <meta property="og:image" content="/images/profile.jpg" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header isActive={setPadding} />
      <div
        className={`${padding ? "" : sitesStyle.paddingMobile}`}
        style={{ height: "100%", overflow: "hidden" }}
      >
        <TimeLineSite />
        <div style={{ paddingBottom: "150px" }} />
      </div>
      <Footer />
    </div>
  );
};

export default Sites;
