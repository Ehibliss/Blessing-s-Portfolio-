import "./Footer.css";
function Footer() {
  return (
    <>
      <footer id="Footer">
        <div className="Footer-container">
          <div className="Footer-contents">
            <div className="Footer-texts">
              <h3>Blessing Ehi Ocheme</h3>
              <p>
                Front-End Developer & Designer creating beautiful digital
                experiences.
              </p>
            </div>
            <div className="Footer-links">
              <h3>Quick Links</h3>
              <ul className="footer-a">
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
            </div>
            <div className="Footer-socials">
              <h3>Connect</h3>
              <div className="Footer-social-icons">
                <div className="social-icon">
                  <a
                    href=" https://github.com/Ehibliss"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/github.png" alt="Github" />
                  </a>
                </div>
                <div className="social-icon">
                  <a
                    href=" https://www.linkedin.com/in/ocheme-blessing-ehi-320b76321/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/linkedin.png" alt="LinkDin" />
                  </a>
                </div>

                <div className="social-icon">
                  <a
                    href="https://twitter.com/Ehibliss25"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/twitter.png" alt="Twitter" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="Footer-copyright">
            <p>
              &copy;{new Date().getFullYear()} Blessing Ehi Ocheme. All rights
              reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
