import "../styles/index.css";
import "../styles/global.css";
import Analysis from "../components/Google Analysis/analysis";

function MyApp({ Component, pageProps }) {
  return (
    <Analysis>
      <Component {...pageProps} />
    </Analysis>
  );
}

export default MyApp;
