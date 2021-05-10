import Link from "next/link";
import { useState } from "react";

import Toggler from "./toggler";

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  let active;

  if (typeof window !== "undefined") {
    active = window.location.pathname;
  } else {
    active = "/";
  }

  return (
    <>
      <header className="header">
        <div className="header__left">
          <div className="nav__toggler" onClick={() => setShowNav(!showNav)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </div>
          <h2 className="zainsci">zainsci</h2>
          <Toggler />
        </div>
        <div className="header__right" style={{ height: showNav ? "4rem" : 0 }}>
          <nav className="nav" id="nav">
            <ul className="nav__list">
              <li className="nav__item">
                <Link href="/">
                  <a
                    className={"nav__link" + (active === "/" ? " active" : "")}
                  >
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
        </div>
      </header>
    </>
  );
};

export default Header;
