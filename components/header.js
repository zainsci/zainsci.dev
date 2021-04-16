import Link from "next/link";

const Header = () => {
  return (
    <header className="header">
      <h2 className="zainsci">zainsci</h2>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link href="/">
              <a className="nav__link active">Home</a>
            </Link>
          </li>
          <li className="nav__item">
            <a href="/blog" className="nav__link">
              Blog
            </a>
          </li>
          <li className="nav__item">
            <Link href="/projects">
              <a className="nav__link">Projects</a>
            </Link>
          </li>
          <li className="nav__item">
            <Link href="/about">
              <a className="nav__link">About</a>
            </Link>
          </li>
          <li className="nav__item">
            <Link href="/contact">
              <a className="nav__link">Contact</a>
            </Link>
          </li>
          <li
            className="nav__item"
            style={{
              display: "none",
            }}
          >
            <button>D</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
