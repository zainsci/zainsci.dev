import fs from "fs"
import path from "path"
import React from "react"
import { motion } from "framer-motion"

import Layout from "components/layout"
import Project from "components/project"

interface ProjectProps {
  name: string
  description: string
  github: string
  tags: []
}

const Projects = ({ projects }) => {
  return (
    <Layout title="Projects">
      <div className="projects">
        <h1>Some of the projects I have worked on.</h1>
        <div className="projects__grid">
          {projects.map((p: ProjectProps, i: number) => {
            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: i * 0.25 }}
                key={i}
              >
                <Project project={p} key={p?.name} />
              </motion.div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default Projects

export async function getStaticProps() {
  const jsonFile = path.resolve(
    process.cwd(),
    "./public/assets/data/projects.json"
  )
  const jsonStr = fs.readFileSync(jsonFile, "utf-8")
  const data = JSON.parse(jsonStr)

  return {
    props: {
      projects: data,
    },
  }
}
