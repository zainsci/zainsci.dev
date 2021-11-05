import React from "react"
import { motion } from "framer-motion"

interface Props {
  project: {
    name: string
    description: string
    github: string
    tags: string[]
  }
}

const Project: React.FC<Props> = ({ project }) => {
  return (
    <motion.div
      whileHover={{
        rotate: -2,
        y: -10,
      }}
      className="project"
    >
      <h2 className="project__name">{project.name}</h2>
      <p className="project__description">{project.description}</p>
      <div className="project__link">
        <a href={project.github}>GITHUB</a>
      </div>
      <div className="project__tags">
        {project.tags.map((t) => {
          return (
            <div className="project__tag" key={t}>
              {t}
            </div>
          )
        })}
      </div>
    </motion.div>
  )
}

export default Project
