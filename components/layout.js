import Head from "next/head";

import Header from "./header";
import Footer from "./footer";

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title} - zainsci</title>
      </Head>
      <Header />

      <main>{children}</main>

      <Footer />
    </>
  );
};

export default Layout;
