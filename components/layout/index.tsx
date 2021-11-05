import React, { useContext, useState } from "react"
import Head from "next/head"

import { RootContext } from "context"
import Loader from "components/loader"
import Header from "components/layout/header"
import Footer from "components/layout/footer"

interface PropTypes {
  children?: any
  title: string
}

const Layout: React.FC<PropTypes> = ({ children, title }) => {
  const { context } = useContext(RootContext)
  const [loading, setLoading] = useState(true)

  return (
    <>
      <Head>
        <title>{title} - zainsci</title>
        <meta charSet="UTF-8" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta
          name="description"
          content="zainsci - Freelance Programmer and a Web Developer"
        />
        <meta property="og:title" content="zainsci" />
        <meta
          property="og:description"
          content="zainsci - Freelance Programmer and a Web Developer"
        />
        <meta property="og:image" content="https://zainsci.github.io/me.jpg" />
        <meta property="og:url" content="https://zainsci.github.io" />
        <meta property="og:site_name" content="zainsci" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image:alt" content="zainsci's portrait" />
      </Head>

      {context.firstLoad && loading ? (
        <Loader setLoading={setLoading} />
      ) : (
        <>
          <Header />

          <main className="content container" id="content">
            {children}
          </main>

          <Footer />
        </>
      )}
    </>
  )
}

export default Layout
