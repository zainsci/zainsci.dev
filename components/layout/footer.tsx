import { useEffect } from "react"

import Nav from "components/nav"
import SocialIcons from "components/social-icons"

const Footer = () => {
  useEffect(() => {
    const eLinks = Array.from(document.querySelectorAll("a"))

    if (eLinks.length > 0) {
      eLinks.forEach((a) => {
        if (a.host !== window.location.host) {
          a.target = "_blank"
          a.rel = "noopener noreferrer"
        }
      })
    }
  }, [])

  return (
    <footer className="footer container">
      <div className="footer__section footer__section__logo">
        <h1 className="logo">zain[sci]</h1>
      </div>
      <div className="footer__section footer__section__nav">
        <Nav />
      </div>
      <div className="footer__section footer__section__nav">
        <SocialIcons />
      </div>
    </footer>
  )
}

export default Footer
