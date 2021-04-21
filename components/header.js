import Link from "next/link";
import Toggler from "./toggler";

const Header = () => {
  let active;

  if (typeof window !== "undefined") {
    active = window.location.pathname;
  } else {
    active = "/";
  }

  return (
    <header className="header">
      <h2 className="zainsci">zainsci</h2>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link href="/">
              <a className={"nav__link" + (active === "/" ? " active" : "")}>
                Home
              </a>
            </Link>
          </li>
          <li className="nav__item">
            <a
              href="https://zainsci.github.io/blog"
              className="nav__link"
              target="_blank"
              rel="noreferrer noopener"
            >
              Blog
            </a>
          </li>
          <li className="nav__item">
            <Link href="/projects">
              <a
                className={
                  "nav__link" + (active === "/projects" ? " active" : "")
                }
              >
                Projects
              </a>
            </Link>
          </li>
          <li className="nav__item">
            <Link href="/contact">
              <a
                className={
                  "nav__link" + (active === "/contact" ? " active" : "")
                }
              >
                Contact
              </a>
            </Link>
          </li>
          <li className="nav__item">
            <Toggler />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
