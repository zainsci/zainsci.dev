const Header = () => {
  return (
    <header className="header">
      <h2 className="zainsci">zainsci</h2>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="/" className="nav__link active">
              Home
            </a>
          </li>
          <li className="nav__item">
            <a href="/blog" className="nav__link">
              Blog
            </a>
          </li>
          <li className="nav__item">
            <a href="/projects" className="nav__link">
              Projects
            </a>
          </li>
          <li className="nav__item">
            <a href="/about" className="nav__link">
              About
            </a>
          </li>
          <li className="nav__item">
            <a href="/contact" className="nav__link">
              Contact
            </a>
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
