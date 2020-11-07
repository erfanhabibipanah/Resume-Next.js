import notStyles from "../styles/NotFound.module.css";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import { useState } from "react";
import Meta from "../components/SEO/seo-meta";

const siteTitle = "Erfan's portfolio";
const siteDescription =
  "I am Erfan Habibi Panah Fard and I’m a Front-end developer. This is my Portfolio site";
const url = "https://www.erfanhabibipanah.dev";
const name = "Erfan Habibi Panah Fard";

const NotFound = () => {
  const [padding, setPadding] = useState(true);
  return (
    <div>
      <meta name="robots" content="noindex" />
      <Meta title={siteTitle} desc={siteDescription} url={url} creator={name} />
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
