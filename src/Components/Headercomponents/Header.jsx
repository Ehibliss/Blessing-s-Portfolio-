import React from "react";
import "./Header.css";
function Header() {
  return (
    <>
      <header>
        <div className="logo">
          <img src="/logo.png" alt="brand logo" className="bliss-log" />
        </div>

        <nav>
          <ul className="navbar-menu">
            <li>
              <a href="#Home-page">Home</a>
            </li>
            <li>
              <a href="#About-section">About</a>
            </li>
            <li>
              <a href="#Project-section">Projects</a>
            </li>
            <li>
              <a href="#skill-section">Skils</a>
            </li>
            <li>
              <a href="#Contact-section">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
export default Header;
