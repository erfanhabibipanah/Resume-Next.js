import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <section className={utilStyles.headingMd}>
        <br />
        <span>I’m a Full-Stack developer and experienced in React.js, Next.js, React-Redux, JavaScript, Node.js, Python, Django, HTML, CSS, Sass, MongoDB, Wordpress, TypeScript,  C, C++, C#.</span>
        <br />
        <br />
        <span>I have experienced in web designing(UI/UX) and know Adobe Photoshop and Adobe Illustrator .</span>
        <br />
        <br />
        <span>As an undergraduate student I like working and improve my skills besides my academic studying and with self-study, I can learn anything quickly.</span>
        <br />
      </section>
      <br />
    </Layout>
  );
}
