import { useContext } from "react"
import { motion } from "framer-motion"

import { RootContext } from "context"
import Nav from "components/nav"
import Toggler from "components/toggler"

const Header = () => {
  const { context, setContext } = useContext(RootContext)

  if (!context.firstLoad) {
    return (
      <div className="container">
        <header className="header" id="header">
          <Nav />
          <Toggler />
        </header>
      </div>
    )
  }

  return (
    <div className="container">
      <motion.header
        initial={{
          y: -100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.75,
            delay: 0.25,
          },
        }}
        onAnimationComplete={() => setContext({ firstLoad: false })}
        className="header"
        id="header"
      >
        <Nav />
        <Toggler />
      </motion.header>
    </div>
  )
}

export default Header
