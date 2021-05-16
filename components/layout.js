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
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preload" href="fonts.googleapis.com" />

        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="zainsci - Self-Taught Web Developer and Programmer"
        />
        <meta property="og:title" content="zainsci" />
        <meta
          property="og:description"
          content="zainsci - Self-Taught Web Developer and Programmer"
        />
        <meta
          property="og:image"
          content="https://zainsci.github.io/potrait.jpg"
        />
        <meta property="og:url" content="https://zainsci.github.io" />
        <meta property="og:site_name" content="zainsci" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image:alt" content="zainsci's portrait" />
      </Head>
      <Header />

      <main>{children}</main>

      <Footer />
    </>
  );
};

export default Layout;
