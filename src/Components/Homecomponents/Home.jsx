import "./Home.css";
export default function Home() {
  return (
    <section id="Home-page">
      <div className="Home-page-container">
        <div className="Home-page-content">
          <p>Hello, I'm</p>
          <h1 className="Name">Blessing Ehi Ocheme</h1>
          <div className="Glow"></div>
          <h3>A Front-End Developer & Designer.</h3>
          <p>
            I create beautiful, responsive, and performant user interfaces. I am
            Passionate about crafting pixel-perfect designs and seamless user
            experiences.
          </p>
          <div className="Home-page-socials">
            <div className="social-container">
              <a
                href=" https://github.com/Ehibliss"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/github.png" alt="Github" />
              </a>
            </div>
            <div className="social-container">
              <a
                href=" https://www.linkedin.com/in/ocheme-blessing-ehi-320b76321/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/linkedin.png" alt="LinkDin" />
              </a>
            </div>
            <div className="social-container">
              <a
                href="https://twitter.com/Ehibliss25"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/twitter.png" alt="twitter" />
              </a>
            </div>
          </div>
          <div className="Home-button">
            <a href="#Project-section">My works</a>
          </div>
        </div>
        <div className="Home-page-image">
          <img
            src="/bliss.jpg"
            alt="Blessing's image"
            className="Home-image "
            width={2105}
            height={2585}
          />
        </div>
      </div>
    </section>
  );
}
