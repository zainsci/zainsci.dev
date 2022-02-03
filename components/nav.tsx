import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Link from "next/link"

const Nav = () => {
  const [active, setActive] = useState("")
  const NAV_LINKS = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
    { name: "Resume", path: "/resume" },
  ]

  const router = useRouter()

  useEffect(() => {
    setActive(router.pathname)
  }, [])

  return (
    <nav className="nav">
      <ul className="nav__list">
        {NAV_LINKS.map((link) => {
          return (
            <li key={link.name} className="nav__item">
              <Link href={link.path}>
                <a
                  className={
                    "nav__link " + (active === link.path ? "active" : "")
                  }
                >
                  {link.name}
                </a>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Nav
