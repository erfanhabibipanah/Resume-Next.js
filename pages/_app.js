import "../styles/index.css";
import "../styles/global.css";
import Analysis from "../components/analysis";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

function MyApp({ Component, pageProps }) {
  return (
    <Analysis>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </Analysis>
  );
}

export default MyApp;
