import utilStyles from "../styles/utils.module.css";
import Header from "../components/Header/header";
import { useState } from "react";
import Skill from "../components/About Me/Skill/skill";
import Footer from "../components/Footer/footer";
import layoutStyles from "../styles/layout.module.css";
import LanguageAndHobbies from "../components/About Me/Language & Hobbies/languageAndHobbies";
import Meta from "../components/SEO/seo-meta";

const siteTitle = "Erfan's Portfolio";
const siteDescription =
  "I am Erfan Habibi Panah Fard and I’m a Front-end developer. This is my Portfolio site";
const url = "https://www.erfanhabibipanah.dev";
const name = "Erfan Habibi Panah Fard";

export default function Home({ allPostsData }) {
  const [padding, setPadding] = useState(true);
  return (
    <div>
      <Meta title={siteTitle} desc={siteDescription} url={url} creator={name} />
      <Header isActive={setPadding} />
      <div
        className={`${
          padding ? layoutStyles.container : layoutStyles.containerPadding
        }`}
      >
        <header className={layoutStyles.header}>
          <>
            I am
            <h1
              style={{ textAlign: "center" }}
              className={utilStyles.heading2Xl}
            >
              {name}
            </h1>
          </>
        </header>
        <section className={utilStyles.headingMd}>
          <br />
          <span>
            I’m a Front-end developer and experienced in React.js, Next.js,
            JavaScript, Python, HTML, CSS, Wordpress, C, C++.
          </span>
          <br />
          <br />
          <span>
            I have experience in web designing (UI/UX), and I know how to work
            with Adobe Photoshop and Adobe Illustrator.
          </span>
          <br />
          <br />
          <span>
            As an undergraduate student, I like to work and improve my skills
            beside my academic studying and my self studies. Also I can learn
            anything quickly.
          </span>
          <br />
        </section>
        <br />
      </div>
      <Skill />
      <br />
      <LanguageAndHobbies />
      <br />
      <Footer />
    </div>
  );
}

// I’m a Front-End developer and experienced in React.js, Next.js, React-Redux, JavaScript, Node.js, Python, Django, HTML, CSS, Sass, MongoDB, Wordpress, TypeScript,  C, C++, C#.
