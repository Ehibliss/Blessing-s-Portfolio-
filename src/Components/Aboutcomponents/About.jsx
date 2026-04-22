import React from "react";
import "./About.css";
function About() {
  return (
    <>
      <section id="About-section">
        <div className="About-section-container">
          <div className="about-texts">
            <h2 className="About-heading">About Me</h2>
            <p>
              I’m a Front-end Developer and Designer, I build clean, responsive,
              and user-friendly digital experiences.
            </p>
            <p>
              With a background in Business Administration and as an
              entrepreneur, I approach design with both the user and business
              goals in mind. My focus is not just to build interfaces, but
              create solutions that are functional, intuitive, and valuable.
              From structuring layouts to refining interactions, I pay attention
              to the details that improve how users engage with products. My
              approach is simple;
              <span>Write</span> clean code,
              <span>Design</span> with purpose, and always keep the
              <span>User</span> in the center.
            </p>
            <p>
              I’m currently open to opportunities where I can contribute, learn,
              and grow while building meaningful products.
            </p>
          </div>
          <div className="About-container">
            <div className="About-content">
              <div className="about-icon">
                <img src="/code.png" alt="code icon" />
              </div>
              <h3 className="About-heading">Clean code</h3>
              <p>
                I write structured, readable code that’s easy to maintain and
                scale. Clear naming, reusable components, and consistency are my
                priorities.
              </p>
            </div>
            <div className="About-content">
              <div className="about-icon">
                <img src="/light-bulb.png" alt="perfomance icon" />
              </div>
              <h3 className="About-heading">Performance</h3>
              <p>
                I build fast and responsive interfaces by optimizing assets,
                reducing load time, and ensuring smooth user interactions across
                different devices.
              </p>
            </div>
            <div className="About-content">
              <div className="about-icon">
                <img src="/pixijs.png" alt="" />
              </div>
              <h3 className="About-heading">Pixel Perfect</h3>
              <p>
                I pay attention to every detail, ensuring designs are
                implemented exactly as intended with precision and consistency.
              </p>
            </div>
            <div className="About-content">
              <div className="about-icon">
                <img src="/users-2.png" alt="" />
              </div>
              <h3 className="About-heading">User Focused</h3>
              <p>
                Every design decision I make is centered around the user. I
                create intuitive, accessible, and enjoyable experiences.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default About;
