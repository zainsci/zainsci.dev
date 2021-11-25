import { AppProps } from "next/app"
import { ThemeProvider } from "next-themes"

import { ContextProvider } from "context/index"

import "styles/normalize.css"
import "styles/master.scss"
import "styles/syntax.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="dark">
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
    </ThemeProvider>
  )
}

export default MyApp
