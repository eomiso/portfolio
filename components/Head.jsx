import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Uiseop is a developer who hopes to understand the human dinamics. Humans should be the center of computational evolution."
      />
      <meta
        name="keywords"
        content="uiseop eom, uiseop, eomiso, ios developer portfolio, uiseop iOS developer, eomiso developer, mern stack, uiseop portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Aesop's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://vscode-portfolio.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Aesop Uiseop Eom',
};
