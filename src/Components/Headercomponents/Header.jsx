import { useState } from "react";
import "./Header.css";
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <header>
        <div className="header-container">
          <div className="logo">
            <img src="/logo.png" alt="brand logo" className="bliss-log" />
          </div>

          <div
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <nav className={menuOpen ? "nav active" : "nav"}>
            <ul className="navbar-menu">
              <li>
                <a href="#Home-page" onClick={() => setMenuOpen(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#About-section" onClick={() => setMenuOpen(false)}>
                  About
                </a>
              </li>
              <li>
                <a href="#Project-section" onClick={() => setMenuOpen(false)}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#skill-section" onClick={() => setMenuOpen(false)}>
                  Skills
                </a>
              </li>
              <li>
                <a href="#Contact-section" onClick={() => setMenuOpen(false)}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
export default Header;
