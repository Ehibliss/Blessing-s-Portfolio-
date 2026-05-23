import React from "react";
import "./Project.css";
import Hubspot from "../../assets/hubspotclone.png";
import Planet from "../../assets/planet.png";
import Calculator from "../../assets/calculator.png";
import Gridpainting from "../../assets/gridpainting1.png";
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
                <img src={Hubspot} alt="planet" />
              </div>
              <div className="project-content">
                <h2>Hubspot Clone Project</h2>
                <p>
                  A responsive clone of the HubSpot page built to improve my
                  frontend development and UI recreation skills. The project
                  focuses on recreating a real-world website layout with
                  attention to responsiveness, spacing, typography, and reusable
                  components.
                </p>
                <div className="card-info">
                  <div className="tech-stack">
                    <span>React</span>
                    <span>JavaScript</span>
                    <span>CSS</span>
                    <span>Netlify</span>
                    <span>GitHub</span>
                  </div>
                  <div className="btn">
                    <a
                      href="https://blisshubspotclone.netlify.app/"
                      className="btn-primary"
                    >
                      View Live
                    </a>
                    <a
                      href="https://github.com/Ehibliss/Hubspot-Clone.git"
                      className="btn-secondary"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="Project-cards">
              <div className="project-image">
                <img src={Planet} alt="planet" />
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
                    <span>JavaScript</span>
                    <span>GitHub</span>
                  </div>
                  <div className="btn">
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
                <img src={Calculator} alt="Calculator" />
              </div>
              <div className="project-content">
                <h2>Calculator App</h2>
                <p>
                  A functional calculator application built with React to
                  practice state management, event handling and component-based
                  architecture.
                </p>
                <div className="card-info">
                  <div className="tech-stack">
                    <span>React</span>
                    <span>JavaSript</span>
                    <span>CSS</span>
                    <span>GitHub</span>
                  </div>
                  <div className="btn">
                    <a
                      href="https://blisscalculator.netlify.app/"
                      className="btn-primary"
                    >
                      View Live
                    </a>
                    <a
                      href="https://github.com/Ehibliss/React-calculator.git"
                      className="btn-secondary"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="Project-cards">
              <div className="project-image">
                <img src={Gridpainting} alt="Grid painting" />
              </div>
              <div className="project-content">
                <h2>Grid Painting</h2>
                <p>
                  A Grid painting layout that showcase structure and creativity.
                  Created with just HTML & CSS.
                </p>
                <div className="card-info">
                  <div className="tech-stack">
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>GitHub</span>
                  </div>
                  <div className="btn">
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
