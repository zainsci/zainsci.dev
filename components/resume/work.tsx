interface Props {
  workList: {
    title: string
    company: string
    status: {
      location: string
      time: string
    }
    points: string[]
  }[]
}

const Work = ({ workList }: Props) => {
  return (
    <div className="work">
      <h2>Work Experience</h2>
      {workList.map((role, i) => (
        <div key={i}>
          <h3>{role.title}</h3>
          <h4>{role.company}</h4>
          <div className="work__status">
            <span>{role.status.location}</span>
            <span>{role.status.time}</span>
          </div>
          <ul>
            {role.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Work
