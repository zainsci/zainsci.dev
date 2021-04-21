import Head from "next/head";

import Header from "./header";
import Footer from "./footer";
import { useEffect } from "react";

const Layout = ({ children, title }) => {
  typeof document !== "undefined"
    ? (document.documentElement.lang = "en-us")
    : null;

  useEffect(() => {
    if (typeof window !== "undefined") {
      const theme = localStorage.getItem("theme");

      if (theme) {
        document.body.className = theme;
      } else {
        window.localStorage.setItem("theme", "light");
        document.body.className = "light";
      }
    }
  }, []);

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
