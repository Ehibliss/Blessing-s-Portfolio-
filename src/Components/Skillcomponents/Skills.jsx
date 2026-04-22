import "./Skills.css";
function Skills() {
  return (
    <>
      <section id="skill-section">
        <div className="skill-container">
          <div className="skill-texts">
            <h2 className="Skill-title">Skills & Expertise</h2>
            <p>
              My skill set includes modern frontend technologies and design
              tools that enable me to build clean and interactive web
              applications.
            </p>
          </div>
          <div className="skills-cards">
            <div className="skill-content">
              <div className="skill-icons">
                <img src="/code.png" alt="" />
              </div>
              <h3 className="Skill-title">Front-end Frameworks</h3>
              <ul>
                <li className="skill-list">React</li>
                <li className="skill-list">Custom styling</li>
              </ul>
            </div>
            <div className="skill-content">
              <div className="skill-icons">
                <img src="/javascript-react.png" alt="" />
              </div>
              <h3 className="Skill-title">Programming Languages</h3>
              <ul>
                <li className="skill-list">JavaScript</li>
                <li className="skill-list">HTML</li>
              </ul>
            </div>
            <div className="skill-content">
              <div className="skill-icons">
                <img src="/styling.png" alt="" />
              </div>
              <h3 className="Skill-title">Styling & Layout</h3>

              <ul>
                <li className="skill-list">CSS</li>
                <li className="skill-list">Responsive Design</li>
                <li className="skill-list">Grid</li>
                <li className="skill-list">Flexbox</li>
              </ul>
            </div>
            <div className="skill-content">
              <div className="skill-icons">
                <img src="/design.png" alt="" />
              </div>
              <h3 className="Skill-title">Design Tools</h3>
              <ul>
                <li className="skill-list">Figma</li>
                <li className="skill-list">Wireframing</li>
                <li className="skill-list">Prototyping</li>{" "}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Skills;
