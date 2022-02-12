interface Props {
  education: {
    title: string
    time: string
    institute: string
    location: string
  }[]
}

const Education = ({ education }: Props) => {
  return (
    <div className="education">
      <h2>Education</h2>
      {education.map((course, i) => (
        <div key={i}>
          <h3>
            <span>{course.title}</span>
            <span>{course.time}</span>
          </h3>
          <h4>
            {course.institute}
            <br />
            {course.location}
          </h4>
        </div>
      ))}
    </div>
  )
}

export default Education
