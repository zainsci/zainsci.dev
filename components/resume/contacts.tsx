import HomeIcon from "components/icons/home"
import MailIcon from "components/icons/mail"
import MapPinIcon from "components/icons/map-pin"
import TwitterIcon from "components/icons/twitter"
import LinkedinIcon from "components/icons/linkedin"
import SmartPhoneIcon from "components/icons/smartphone"
import GithubIcon from "components/icons/github"

interface Props {
  contacts: {
    email: string
    tel: string
    github: string
    twitter: string
    linkedin: string
    website: string
    location?: string
  }
}

const Contacts = ({ contacts }: Props) => {
  return (
    <div className="contacts">
      <ul>
        <li>
          <a href={`mailto:${contacts.email}`}>
            <MailIcon />
            {contacts.email}
          </a>
        </li>
        <li>
          <a href={`tel:${contacts.tel.replace(/ /g, "")}`}>
            <SmartPhoneIcon />
            {contacts.tel}
          </a>
        </li>
        <li>
          <a href={"https://" + contacts.website} target="_blank">
            <HomeIcon />
            {contacts.website}
          </a>
        </li>
        <li>
          <a href={`https://github.com/${contacts.github}`}>
            <GithubIcon />
            github.com/{contacts.github}
          </a>
        </li>
        <li>
          <a href={"https://twitter.com/" + contacts.twitter} target="_blank">
            <TwitterIcon />
            twitter.com/{contacts.twitter}
          </a>
        </li>
        <li>
          <a
            href={"https://linkedin.com/in/" + contacts.linkedin}
            target="_blank"
          >
            <LinkedinIcon />
            linkedin.com/in/{contacts.linkedin}
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Contacts
