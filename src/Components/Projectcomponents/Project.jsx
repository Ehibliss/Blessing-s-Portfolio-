import React from "react";
import "./Project.css";
function Project() {
  return (
    <>
      <section id="Project-section">
        <div className="Project-container">
          <div className="project-texts">
            <h2 className="Project-title">My Projects</h2>
            <p className="Project-description">
              Here are some of my recent projects that showcase my skills and
              experience in web and mobile development.
            </p>
          </div>
          <div className="featured-project">
            <div className="Project-cards">
              <div className="project-image">
                <img src="/planet.png" alt="planet" width={629} height={480} />
              </div>
              <div className="project-content">
                <h2>Planet Collaboration Project</h2>
                <p>
                  A collaborative frontend project built with fellow students at
                  TS Academy. It showcases teamwork, GitHub workflow, and
                  structured UI development.
                </p>
                <div className="card-info">
                  <div className="tech-stack">
                    <span>React</span>
                    <span>CSS</span>
                    <span>GitHub</span>
                  </div>
                  <div className="buttons">
                    <a href="#" className="btn-primary">
                      View Live
                    </a>
                    <a href="#" className="btn-secondary">
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="Project-cards">
              <div className="project-image">
                <img src="/gridpainting1.png" alt="planet" />
              </div>
              <div className="project-content">
                <h2>Grid Painting</h2>
                <p>
                  A collaborative frontend project built with fellow students at
                  TS Academy. It showcases teamwork, GitHub workflow, and
                  structured UI development.
                </p>
                <div className="card-info">
                  <div className="tech-stack">
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>GitHub</span>
                  </div>
                  <div className="buttons">
                    <a
                      href="https://ehibliss.github.io/Grid-painting-2/"
                      className="btn-primary"
                    >
                      View Live
                    </a>
                    <a
                      href=" https://github.com/Ehibliss"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Project;
