interface Props {
  head: {
    portrait: string
    name: string
    role: string
    summary: string
  }
}

const Header = ({ head }: Props) => {
  return (
    <div className="resume__header">
      <div className="portrait">
        <img src={head.portrait} alt="zainsci" />
      </div>
      <div>
        <h1>{head.name}</h1>
        <h3>{head.role}</h3>
        <p>{head.summary}</p>
      </div>
    </div>
  )
}

export default Header
