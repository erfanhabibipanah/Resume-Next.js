import "../styles/index.css";
import "../styles/global.css";
import Analysis from "../components/Google Analysis/analysis";

function MyApp({ Component, pageProps }) {
  return (
    <html>
      <Analysis>
        <Component {...pageProps} />
      </Analysis>
    </html>
  );
}

export default MyApp;
