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
            I’m a Front-end developer. I'm fluent in JavaScript, React.js,
            Next.js and I’m passionate about learning TypeScript, GraphQL, and
            Node.js.
          </span>
          <br />
          <br />
          <span>
            I have done some self projects and cloned websites such as Spotify,
            Twitter, Instagram, etc., which they're all in my GitHub account and
            in my portfolio website. I have experienced in creating websites
            with WordPress which you can see the preview link of them in my
            portfolio.
          </span>
          <br />
          <br />
          <span>
            As an undergraduate student, I like to work and improve my skills
            and my self-studies besides my academic studies which now I'm
            studying Electrical Engineering at one of the best universities in
            Tehran/Iran.
          </span>
          <br />
          <br />
          <span>
            I have experience in the Machine Learning field and pass some
            courses and have been in a group that works on neuroscience. In the
            past year, we accomplished that to published two paper articles in
            BCI(Brain Computer Interface).
          </span>
          <br />
          <br />
          <span>
            I'm also a multitasker and learn things quickly and looking for a
            real life job, I'm adept in various social media platforms and
            office technology programs and committed to utilizing my skills to
            further the mission of a company.
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
