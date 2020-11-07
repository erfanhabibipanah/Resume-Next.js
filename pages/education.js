import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import { useState } from "react";
import TimeLineEducation from "../components/TimeLine/timeLineEducation";
import sitesStyle from "../styles/sites.module.css";
import Meta from "../components/SEO/seo-meta";

const siteTitle = "Erfan's Education";
const siteDescription =
  "I am Erfan Habibi Panah Fard and This is timeline of my Education";
const url = "https://www.erfanhabibipanah.dev/education";
const name = "Erfan Habibi Panah Fard";

const Education = () => {
  const [padding, setPadding] = useState(true);
  return (
    <div>
      <Meta title={siteTitle} desc={siteDescription} url={url} creator={name} />
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
