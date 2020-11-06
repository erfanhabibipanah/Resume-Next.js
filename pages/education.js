import Header from "../components/header";
import Head from "next/head";
import Footer from "../components/footer";
import { useState } from "react";
import TimeLineEducation from "../components/timeLineEducation";
import sitesStyle from "../styles/sites.module.css";
import { NextSeo } from "next-seo";

const siteTitle = "Erfan's Education";
const siteDescription =
  "I am Erfan Habibi Panah Fard and This is timeline of my Education";

const Education = () => {
  const [padding, setPadding] = useState(true);
  return (
    <div>
      <NextSeo
        title={siteTitle}
        description={siteDescription}
        canonical="https://www.erfanhabibipanah.vercel.app/"
        openGraph={{
          url: "https://www.erfanhabibipanah.vercel.app/",
          title: { siteTitle },
          description: { siteDescription },
          images: [
            {
              url: "/favicon.ico",
              width: 800,
              height: 600,
              alt: "Erfan's picture",
            },
          ],
          site_name: { siteTitle },
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <Header isActive={setPadding} />
      <div style={{ backgroundColor: "rgb(226, 226, 226)" }}>
        <div
          className={`${padding ? "" : sitesStyle.paddingMobile}`}
          style={{ height: "100%", overflow: "hidden" }}
        >
          <TimeLineEducation />
          <div style={{ paddingBottom: "150px" }} />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Education;
