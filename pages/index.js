import utilStyles from "../styles/utils.module.css";
import Header from "../components/header";
import Head from "next/head";
import { useState } from "react";
import Skill from "../components/skill";
import Footer from "../components/footer";
import layoutStyles from "../styles/layout.module.css";
import LanguageAndHobbies from "../components/languageAndHobbies";

export const siteTitle = "Erfan's portfolio";
const name = "Erfan Habibi Panah Fard";

export default function Home({ allPostsData }) {
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
      <Header isActive={setPadding} />
      <div
        className={`${
          padding ? layoutStyles.container : layoutStyles.containerPadding
        }`}
      >
        <header className={layoutStyles.header}>
          <>
            I am
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        </header>
        <section className={utilStyles.headingMd}>
          <br />
          <span>
            I’m a Front-End developer and experienced in React.js, Next.js,
            JavaScript, Python, HTML, CSS, Wordpress, C, C++.
          </span>
          <br />
          <br />
          <span>
            I have experienced in web designing(UI/UX) and know Adobe Photoshop
            and Adobe Illustrator .
          </span>
          <br />
          <br />
          <span>
            As an undergraduate student I like working and improve my skills
            besides my academic studying and with self-study, I can learn
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
