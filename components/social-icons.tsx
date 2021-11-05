import GithubIcon from "components/icons/github"
import InstagramIcon from "components/icons/instagra"
import TwitterIcon from "components/icons/twitter"

const SocialIcons = () => {
  const SITES = [
    {
      href: "https://twitter.com/zainsci",
      icon: <TwitterIcon />,
    },
    {
      href: "https://github.com/zainsci",
      icon: <GithubIcon />,
    },
    {
      href: "https://instagram.com/zainsci",
      icon: <InstagramIcon />,
    },
  ]

  return (
    <nav className="nav social">
      <ul className="nav__list">
        {SITES.map((site, i) => {
          return (
            <li className="nav__icon" key={i}>
              <a href={site.href} className="nav__link">
                {site.icon}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default SocialIcons
