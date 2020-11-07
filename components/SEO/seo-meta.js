import Head from "next/head";
const Meta = (props) => (
  <Head>
    <title>{props.title}</title>
    <meta name="description" content={props.desc} />
    <meta property="og:type" content="website" />
    <meta name="og:title" property="og:title" content={props.title} />
    <meta
      name="og:description"
      property="og:description"
      content={props.desc}
    />
    <meta property="og:site_name" content={props.title} />
    <meta property="og:url" content={props.url} />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={props.title} />
    <meta name="twitter:description" content={props.desc} />
    <meta name="twitter:site" content={props.title} />
    <meta name="twitter:creator" content={props.creator} />
    <link rel="icon" type="image/png" href="/favicon.ico" />
    <link rel="apple-touch-icon" href="/favicon.ico" />
    <meta property="og:image" content="/images/profile/profile.webp" />
    <meta property="og:image:width" content="400" />
    <meta property="og:image:height" content="300" />
    <meta property="og:image:alt" content={props.creator} />
    <meta name="twitter:image" content="/images/profile/profile.webp" />
    <link rel="canonical" href={props.url} />
  </Head>
);
export default Meta;
