import Header from "../components/header";
import Footer from "../components/footer";
import { useState } from "react";
import TimeLineSite from "../components/timeLineSite";
import sitesStyle from "../styles/sites.module.css";
import { NextSeo } from "next-seo";

const siteTitle = "Erfan's Projects";
const siteDescription =
  "I am Erfan Habibi Panah Fard and This is showcase of my projects";

const Sites = () => {
  const [padding, setPadding] = useState(true);
  return (
    <div style={{ backgroundColor: "rgb(226, 226, 226)" }}>
      <NextSeo
        title={siteTitle}
        description={siteDescription}
        canonical="https://www.erfanhabibipanah.dev/"
        openGraph={{
          url: "https://www.erfanhabibipanah.dev/",
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
