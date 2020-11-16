import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import { useState } from "react";
import TimeLineSite from "../components/TimeLine/timeLineSite";
import sitesStyle from "../styles/sites.module.css";
import Meta from "../components/SEO/seo-meta";

const siteTitle = "Erfan's Projects";
const siteDescription =
  "I am Erfan Habibi Panah Fard and This is showcase of my projects";
const url = "https://www.erfanhabibipanah.dev/sites";
const name = "Erfan Habibi Panah Fard";

const Sites = () => {
  const [padding, setPadding] = useState(true);
  return (
    <div style={{ backgroundColor: "rgb(226, 226, 226)" }}>
      <Meta title={siteTitle} desc={siteDescription} url={url} creator={name} />
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
