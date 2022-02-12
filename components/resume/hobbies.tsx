import AwardIcon from "components/icons/award"
import BookIcon from "components/icons/book"
import CodeIcon from "components/icons/code"
import EditIcon from "components/icons/edit"

const Hobbies = () => {
  const HOBBIES = [
    {
      name: "Reading",
      icon: <BookIcon />,
    },
    {
      name: "Coding",
      icon: <CodeIcon />,
    },
    {
      name: "Gaming",
      icon: <AwardIcon />,
    },
    {
      name: "Writing",
      icon: <EditIcon />,
    },
  ]

  return (
    <div className="hobbies">
      <h2>Interests & Hobbies</h2>
      <ul>
        {HOBBIES.map(({ name, icon }) => (
          <li>
            {icon} {name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Hobbies
