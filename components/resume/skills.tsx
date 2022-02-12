interface Props {
  skills: string[]
}

const Skills = ({ skills }: Props) => {
  return (
    <div className="skills">
      <h2>Skills And Competencies</h2>
      <ul>
        {skills.map((skill, i) => (
          <li key={i}>{skill}</li>
        ))}
      </ul>
    </div>
  )
}

export default Skills
