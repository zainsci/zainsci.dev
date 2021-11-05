import { motion } from "framer-motion"

import Layout from "components/layout/index"

const Home = () => {
  return (
    <Layout title="Home">
      <div className="hero">
        <motion.div
          className="hero__left"
          animate={{
            transition: {
              delay: 0.25,
            },
          }}
        >
          <motion.h1
            initial={{
              x: -100,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.75,
                delay: 0.5,
              },
            }}
            className="logo"
          >
            I am zain[sci].
          </motion.h1>
          <motion.p
            initial={{
              x: -100,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.75,
                delay: 1,
              },
            }}
          >
            I am a front-end developer and passionate programmer. Always looking
            for ways to improve my knowledge of Web, Programming and Low-Level
            Programming Stuff. Currently learning a little about Operating
            Systems.
          </motion.p>
          <motion.p
            initial={{
              x: -100,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.75,
                delay: 1.5,
              },
            }}
          >
            <ul className="tech__list">
              <li>Python</li>
              <li>JavaScript (ES6+)</li>
              <li>Node.js</li>
              <li>TypeScript</li>
              <li>ReactJs</li>
              <li>NextJs</li>
              <li>SCSS</li>
            </ul>
          </motion.p>
        </motion.div>
        <div className="hero__right">
          <motion.div
            initial={{ opacity: 0, y: -200 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.75,
              },
            }}
            className="hero__image"
          >
            <motion.div
              whileHover={{
                rotate: 5,
              }}
              className="hero__image__wrapper"
            >
              <img src="/assets/images/me.jpg" alt="tree" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
