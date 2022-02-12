interface Props {
  name: string
  list: string[] | Array<{ short_name: string; full_name: string }>
}

const ResumeList = ({ name, list }: Props) => {
  return (
    <div className={name.toLowerCase()}>
      <h2>{name}</h2>
      {name === "Certificates" ? (
        <ul>
          {list.map((item, i) => (
            <li key={i}>
              <strong>{item.short_name}</strong> - {item.full_name}
            </li>
          ))}
        </ul>
      ) : (
        <ul>
          {list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ResumeList
